
export default function ({src, width, quality}) {
    return `${src}?w=${width}&q=${quality}`;
}