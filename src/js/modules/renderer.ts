// import { Detector } from './stat'

import { Detector, Stat } from './stat';

const enum ERenderType {
    Fps,
    Bitrate
}

const enum EColor {
    Fps = 'rgb(59, 184, 215)',
    Bitrate = `rgb(8, 255, 200)`
}

export class Renderer {
    public static generateDom (): HTMLDivElement {
        const dom = document.createElement('div');
        dom.style.cssText = `
            position: fixed;
            width: 100px;
            height: 100px;
            top: 50px;
            right: 50px;
            background: rgba(0, 0, 0, .7);
        `;
        return dom;
    }

    public static generateCanvas (): HTMLCanvasElement {
        const canvas = document.createElement('canvas');
        canvas.setAttribute('width', '100');
        canvas.setAttribute('height', '100');
        canvas.style.cssText = `
            position: absolute;
            width: 100%;
            height: 70px;
            bottom: 0;
            left: 0;
        `;
        return canvas;
    }

    public static generateTextNode (): HTMLDivElement {
        const textNode = document.createElement('div');
        textNode.style.cssText = `
            position: absolute;
            width: 100%;
            height: 30px;
            line-height: 30px;
            font-size: 12px;
            top: 0;
            left: 0;
            background: rgba(4, 18, 169, .5);
            color: rgba(59, 184, 215);
        `;
        return textNode;
    }

    private root: HTMLDivElement;
    private canvas: HTMLCanvasElement;
    private textNode: HTMLDivElement;
    private ctx: CanvasRenderingContext2D;

    private framerates: number[];
    private bitrates: number[];
    private detector: Detector;
    private renderType: ERenderType;
    private autoSwitch: number;

    public constructor () {
        this.detector = undefined;
        this.root = Renderer.generateDom();
        this.canvas = Renderer.generateCanvas();
        this.textNode = Renderer.generateTextNode();
        this.ctx = this.canvas.getContext('2d');

        this.textNode.innerText = 'No Connect';
        this.renderType = ERenderType.Fps;

        this.root.appendChild(this.canvas);
        this.root.appendChild(this.textNode);
        document.body.appendChild(this.root);

        this.initData();
        this.autoSwitch = window.setInterval(() => {
            if (this.renderType === ERenderType.Fps) {
                this.renderType = ERenderType.Bitrate;
            } else if (this.renderType === ERenderType.Bitrate) {
                this.renderType = ERenderType.Fps;
            }
        }, 5000);
    }

    public listen (detector: Detector): void {
        this.detector = detector;
        detector.on('update', this.update);
    }

    public reset () {
        this.detector.off('update', this.update);
        this.detector = undefined;
    }

    private initData () {
        const dataLength = 51;
        this.framerates = new Array(dataLength).fill(0);
        this.bitrates = new Array(dataLength).fill(0);
    }

    private update = (stat: Stat) => {
        this.framerates.push(stat.framerate.current);
        this.framerates.shift();
        this.bitrates.push(stat.bitrate.current);
        this.bitrates.shift();
        switch (this.renderType) {
            case ERenderType.Bitrate: {
                this.renderSpeed(stat);
                break;
            }
            case ERenderType.Fps: {
                this.renderFPS(stat);
            }
        }
    };


    private renderSpeed (stat: Stat): void {
        const { bitrates } = this;
        const { current } = stat.bitrate;
        const text = `${ Stat.formatBytes(current).toUpperCase() }/s`;
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