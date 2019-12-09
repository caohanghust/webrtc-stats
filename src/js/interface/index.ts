export interface IStatFrame {
    decoded: number,
    dropped: number,
    received: number,
    decodedStart: number,
    height: number,
    width: number
}
export interface IStatBytes {
    received: number,
    receivedStart: number
}
export interface IStatBitrate {
    current: number,
    average: number,
    low: number,
    high: number
}
export interface IStatFramerate {
    current: number,
    average: number,
    low: number,
    high: number
}
export interface ICandidate {
    ip: string,
    port: number,
    protocol: string,
    type: string,
}