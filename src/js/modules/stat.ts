import { ICandidate, IStatBitrate, IStatBytes, IStatFrame, IStatFramerate } from '../interface';
import Subscribe from '@utils/subscribe';

export class Detector extends Subscribe {
    private stat: Stat;
    private checkIntervalId: number;

    public constructor () {
        super();
        this.stat = new Stat();
    }

    public start (pc: RTCPeerConnection, interval: number) {
        const { stat } = this;
        this.stop();
        if (!interval) return;
        this.checkIntervalId = window.setInterval(() => {
            if (!pc) return;
            pc.getStats(null).then(rawStats => {
                stat.update(rawStats);
                this.emit('update', stat);
            });
        }, interval);
    }

    public stop () {
        if (this.checkIntervalId) {
            clearInterval(this.checkIntervalId);
        }
    }
}

export class Stat {
    public static formatBytes (bytes: number) {
        let size = bytes;
        let receivedBytesMeasurement = 'B';
        const dataMeasurements = [ 'kB', 'MB', 'GB' ];
        for (let index = 0, len = dataMeasurements.length; index < len; index++) {
            if (size < 1000) break;
            size = size / 1000;
            receivedBytesMeasurement = dataMeasurements[ index ];
        }
        return `${ size.toFixed(1) }${ receivedBytesMeasurement }`;
    }

    public timestamp: number;
    public timestampStart: number;
    public packetsLost: number;
    public currentRoundTripTime: number;
    public frame: IStatFrame;
    public bytes: IStatBytes;
    public bitrate: IStatBitrate;
    public framerate: IStatFramerate;
    public candidate: ICandidate;

    public constructor () {
        this.timestamp = 0;
        this.timestampStart = 0;
        this.packetsLost = 0;

        this.frame = { decoded: 0, dropped: 0, received: 0, decodedStart: 0, height: 0, width: 0 };
        this.bytes = { received: 0, receivedStart: 0 };

        this.bitrate = { current: 0, average: 0, low: Infinity, high: -Infinity };
        this.framerate = { current: 0, average: 0, low: Infinity, high: -Infinity };
    }

    public update (rawStats) {
        rawStats.forEach(rawStat => {
            const {
                type, isRemote, mediaType, id, timestamp, bytesReceived,
                framesDropped, framesReceived, frameWidth, frameHeight, framesDecoded,
                packetsLost, currentRoundTripTime,
            } = rawStat;
            if (type === 'inbound-rtp' && !isRemote && (mediaType === 'video' || id.toLowerCase().includes('video'))) {
                this.calBitrate(rawStat);
                this.calFrameRate(rawStat);
                this.timestamp = timestamp;
                this.timestampStart = this.timestampStart || timestamp;
                this.packetsLost = packetsLost;
                this.bytes = { received: bytesReceived, receivedStart: this.bytes.receivedStart || bytesReceived };
            }
            if (type === 'candidate-pair' && rawStat.hasOwnProperty('currentRoundTripTime')) {
                this.currentRoundTripTime = currentRoundTripTime;
            }
            if (type === 'track') {
                this.frame = {
                    dropped: framesDropped,
                    received: framesReceived,
                    decoded: framesDecoded,
                    width: frameWidth,
                    height: frameHeight,
                    decodedStart: this.frame.decodedStart || framesDecoded,
                };
            }
            if (type === 'remote-candidate') {
                this.candidate = {
                    ip: rawStat.ip,
                    port: rawStat.port,
                    protocol: rawStat.protocol,
                    type: rawStat.candidateType
                };
            }
        });
    }

    private calFrameRate (rawStat) {
        const { decoded, decodedStart } = this.frame;
        if (decoded && decodedStart) {
            const current = ~~((rawStat.framesDecoded - decoded) / ((rawStat.timestamp - this.timestamp) / 1000));
            const low = Math.min(this.framerate.low, current);
            const high = Math.max(this.framerate.high, current);
            const average = ~~((rawStat.framesDecoded - decodedStart) / ((rawStat.timestamp - this.timestampStart) / 1000));
            this.framerate = { current, low, high, average };
        }
    }

    private calBitrate (rawStat) {
        const { timestamp } = this;
        const { received, receivedStart } = this.bytes;
        if (received && receivedStart && timestamp) {
            const current = ~~(8 * (rawStat.bytesReceived - received) / (rawStat.timestamp - timestamp));
            const low = Math.min(current, this.bitrate.low);
            const high = Math.max(current, this.bitrate.high);
            const average = ~~(8 * (rawStat.bytesReceived - receivedStart) / (rawStat.timestamp - this.timestampStart));
            Object.assign(this.bitrate, { current, low, high, average });
        }
    }

}