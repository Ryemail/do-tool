export function toLine(name, separator = "-") {
    return name.replace(/([a-z])([A-Z])/g, `$1${separator}$2`).toLowerCase();
}

export function toHump(name) {
    return name.replace(/[-_](\w)/g, function (all, letter) {
        return letter.toUpperCase();
    });
}
