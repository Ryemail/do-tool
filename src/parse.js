export function parseString(url) {
    const type = typeof url;

    if (type !== 'string') {
        throw Error('Expected string type, but passed in a' + type);
    }

    const startIndex = url.indexOf('?');

    if (startIndex < 0) return {};

    const data = decodeURIComponent(url)
        .slice(startIndex + 1)
        .split('&');

    return data.reduce((prev, curr) => {
        const value = curr.split('=');
        prev[value[0]] = value[1];
        return prev;
    }, {});
}

export function parseObject(object) {
    const type = typeof object;

    if (object instanceof Object) {
        throw Error('Expected string type, but passed in a' + type);
    }

    return Object.entries(search)
        .reduce((t, v) => `${t}${v[0]}=${v[1]}&`, '')
        .replace(/&$/, '');
}
