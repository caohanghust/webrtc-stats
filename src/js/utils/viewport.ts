export function getScale (): number {
    let scale = 1;
    const metas = document.head.getElementsByTagName('meta');
    const viewportMeta = Array.prototype.filter.call(metas, i => i.name === 'viewport')[ 0 ] as HTMLMetaElement;

    if (viewportMeta) {
        const content = viewportMeta.content;
        const initialScale = Number(content.match(/\binitial-scale=([\d.]*)\b/)[ 1 ]);
        if (initialScale && !Number.isNaN(initialScale)) {
            scale = 1 / initialScale;
        }
    }
    return scale;
}