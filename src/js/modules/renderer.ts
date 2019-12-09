import { Detector, Stat } from './stat';
import '../../css/main.styl';

const enum EIconType {
    Fps,
    Bitrate
}

const enum EColor {
    Fps = 'rgb(59, 184, 215)',
    Bitrate = `rgb(8, 255, 200)`
}

export const enum EShowType {
    Icon = 'icon',
    Table = 'table'
}

export class Renderer {
    public static fromPeerConnection (pc: RTCPeerConnection, interval: number) {
        const detector = new Detector();
        const renderer = new Renderer();
        renderer.listen(detector);
        detector.start(pc, interval);
        return renderer;
    }

    public static formatTime (_time: number): string {
        let time = _time;
        const h = ~~(time / 3600);
        time = time % 3600;
        const m = ~~(time / 60);
        time = time % 60;
        const s = ~~time;
        if (h) {
            return `${ h }h${ m }m${ s }s`;
        }
        if (m) {
            return `${ m }m${ s }s`;
        }
        return `${ s }s`;
    }

    public static generateDom (): HTMLDivElement {
        const dom = document.createElement('div');
        dom.classList.add('webrtc-stat-root');
        return dom;
    }

    public static generateCanvas (): HTMLCanvasElement {
        const canvas = document.createElement('canvas');
        canvas.setAttribute('width', '100');
        canvas.setAttribute('height', '100');
        canvas.classList.add('webrtc-stat-canvas');
        return canvas;
    }

    public static generateTable (): HTMLTableElement {
        const table = document.createElement('table');
        table.classList.add('webrtc-stat-table');
        return table;
    }

    public static generateTextNode (): HTMLDivElement {
        const textNode = document.createElement('div');
        textNode.classList.add('webrtc-stat-text');
        return textNode;
    }

    private root: HTMLDivElement;
    private canvas: HTMLCanvasElement;
    private textNode: HTMLDivElement;
    private table: HTMLDivElement;
    private ctx: CanvasRenderingContext2D;

    private framerates: number[];
    private bitrates: number[];
    private detector: Detector;
    private iconType: EIconType;
    private showType: EShowType;
    private autoSwitch: number;

    public constructor () {
        this.detector = undefined;
        this.root = Renderer.generateDom();
        this.canvas = Renderer.generateCanvas();
        this.table = Renderer.generateTable();
        this.textNode = Renderer.generateTextNode();
        this.ctx = this.canvas.getContext('2d');

        this.textNode.innerText = 'No Connect';
        this.showType = EShowType.Icon;
        this.iconType = EIconType.Fps;

        this.root.appendChild(this.canvas);
        this.root.appendChild(this.textNode);
        this.root.appendChild(this.table);
        document.body.appendChild(this.root);

        this.initData();
        this.bindEvent();
        this.autoSwitch = window.setInterval(() => {
            if (this.iconType === EIconType.Fps) {
                this.iconType = EIconType.Bitrate;
            } else if (this.iconType === EIconType.Bitrate) {
                this.iconType = EIconType.Fps;
            }
        }, 5000);
        this.setShowType(this.showType);
    }

    public setSize (scale: number): void {
        const { root } = this;
        root.style.transform = `scale(${ scale })`;
    }

    public listen (detector: Detector): void {
        this.detector = detector;
        detector.on('update', this.update);
    }

    public reset (): void {
        this.detector.off('update', this.update);
        this.detector = undefined;
    }

    public setShowType (showType: EShowType): void {
        this.showType = showType;
        this.root.setAttribute('show-type', showType);
    }

    private initData (): void {
        const dataLength = 51;
        this.framerates = new Array(dataLength).fill(0);
        this.bitrates = new Array(dataLength).fill(0);
    }

    private bindEvent (): void {
        const { root } = this;
        root.addEventListener('click', () => {
            if (this.showType === EShowType.Icon) {
                this.setShowType(EShowType.Table);
            }
            else if (this.showType === EShowType.Table) {
                this.setShowType(EShowType.Icon);
            }
        });
    }

    private update = (stat: Stat) => {
        const { showType, iconType } = this;
        this.framerates.push(stat.framerate.current);
        this.framerates.shift();
        this.bitrates.push(stat.bitrate.current);
        this.bitrates.shift();

        if (showType === EShowType.Icon) {
            if (iconType === EIconType.Fps) {
                this.renderFPS(stat);
            } else if (iconType === EIconType.Bitrate) {
                this.renderSpeed(stat);
            }
        } else if (showType === EShowType.Table) {
            this.renderTable(stat);
        }
    };

    private renderTable (stat: Stat): void {
        const { table } = this;
        const time = Renderer.formatTime((stat.timestamp - stat.timestampStart) / 1000);
        const tableContent = `
            <tbody>
                <tr><th colspan="4" class="title">Core Stats</th></tr>
                <tr><th>Time</th><th>Received</th><th>PacketsLost</th><th>Latency</th></tr>
                <tr>
                    <td>${ time }</td>
                    <td>${ Stat.formatBytes(stat.bytes.received) }</td>
                    <td>${ stat.packetsLost }</td>
                    <td>${ ~~(stat.currentRoundTripTime * 1000) }</td>
                </tr>
                <tr><th colspan="4" class="title">Frame Stats</th></tr>
                <tr><th>Received</th><th>Decoded</th><th>Dropped</th><th>Size</th></tr>
                <tr>
                    <td>${ stat.frame.received }</td>
                    <td>${ stat.frame.decoded }</td>
                    <td>${ stat.frame.dropped }</td>
                    <td>${ stat.frame.width + 'x' + stat.frame.height }</td> 
                </tr> 
                <tr><th colspan="4" class="title">Bitrate Stats (kbps)</th></tr>
                <tr><th>current</th><th>average</th><th>low</th><th>high</th></tr>
                <tr>
                    <td>${ stat.bitrate.current }</td>
                    <td>${ stat.bitrate.average }</td>
                    <td>${ stat.bitrate.low }</td>
                    <td>${ stat.bitrate.high }</td>
                </tr>
                <tr><th colspan="4" class="title">Candidate Info</th></tr>
                <tr><th>ip</th><th>port</th><th>protocol</th><th>type</th></tr>
                <tr>
                    <td>${ stat.candidate.ip }</td>
                    <td>${ stat.candidate.port }</td>
                    <td>${ stat.candidate.protocol }</td>
                    <td>${ stat.candidate.type }</td>
                </tr>
            </tbody>
        `;
        table.innerHTML = tableContent;
    }

    private renderSpeed (stat: Stat): void {
        const { bitrates } = this;
        const { current } = stat.bitrate;
        const text = `${ Stat.formatBytes(current / 8 * 1000).toUpperCase() }/s`;
        this.drawAreaChar(bitrates, EColor.Bitrate);
        this.renderText(text, EColor.Bitrate);
    }

    private renderFPS (stat: Stat): void {
        const { framerates } = this;
        const { current, high, low } = stat.framerate;
        const text = `${ ~~current }FPS(${ low }-${ high })`;
        this.drawAreaChar(framerates, EColor.Fps);
        this.renderText(text, EColor.Fps);
    }

    private renderText (text: string, color: string): void {
        this.textNode.innerText = text;
        this.textNode.style.color = color;
    }

    private drawAreaChar (data: number[], color: string, max?: number, min?: number): void {
        const { ctx, canvas } = this;
        const { width, height } = canvas;
        const edge = {
            max: max ? max : Math.max(...data),
            min: min ? min : Math.min(...data),
        };
        const calHeight = num => ~~(height - (num - edge.min) / (edge.max - edge.min) * height * .8);
        const wStep = width / (data.length - 1);

        ctx.clearRect(0, 0, width, height);

        ctx.beginPath();
        ctx.moveTo(0, height);
        for (let i = 0, len = data.length; i < len; i++) {
            const x = i * wStep;
            const y = calHeight(data[ i ]);
            ctx.lineTo(x, y);
        }
        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
    }
}