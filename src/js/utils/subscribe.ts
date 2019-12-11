import { Dictionary } from './type';

type EventNames = string | string[]
export type SubscribeCallback = (...args) => (boolean | void)
type SubscribeEvent = [ SubscribeCallback, object?, boolean?]

export default class Subscribe {
    private events: Dictionary<SubscribeEvent[]>;

    public constructor () {
        this.events = {};
    }

    public hasListener (name: string): boolean {
        const { events } = this;
        return (
            !!events &&
            !!events[ name ] &&
            events[ name ].length > 0
        );
    }

    public on (names: string | string[], callback: SubscribeCallback, context?: object, once = false): () => Subscribe {
        const { events } = this;
        for (let name of [].concat(names)) {
            if (!events[ name ]) {
                events[ name ] = [];
            }
            events[ name ].push([ callback, context, once ]);
        }
        return () => this.off(names, callback);
    }

    public off (names?: EventNames, callback?: SubscribeCallback): Subscribe {
        if (!names && !callback) {
            this.events = {};
            return;
        }
        const { events } = this;
        for (let name of [].concat(names)) {
            if (events[ name ] === undefined) continue;
            if (callback === undefined) {
                events[ name ].length = 0;
                continue;
            }
            events[ name ] = events[ name ].filter(one => one[ 0 ] !== callback);
        }
        return this;
    }

    public emit (name: string, ...data): boolean {
        let canceled = false;
        const event = this.events[ name ] || [];
        for (let one of event) {
            try {
                const [ callback, context = this, once = false ] = one;
                const result = callback.apply(context, data);
                if (once) this.off(name, callback);
                if (result === false) canceled = true;
            } catch (e) {
                console.log(e);
            }
        }
        return canceled;
    }
}