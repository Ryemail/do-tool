export function toLine(name, separator = "-") {
    return name.replace(/([a-z])([A-Z])/g, `$1${separator}$2`).toLowerCase();
}

export function toHump(name) {
    const camelCaseRegex = /[-_\s]+(.)?/g;

    return name.replace(camelCaseRegex, function (all, letter) {
        return letter.toUpperCase();
    });
}

//  提取链接某个参数
const getQueryByName = (name) => {
    const queryNameRegex = new RegExp(`[?&]${name}=([^&]*)(?:&|$)`);
    const queryNameMatch = window.location.search.match(queryNameRegex);
    // 一般都会通过decodeURIComponent解码处理
    return queryNameMatch ? decodeURIComponent(queryNameMatch[1]) : "";
};
