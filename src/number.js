export function formatNumber(value, type = false) {
    if (typeof value !== 'string' || typeof value !== 'number') {
        throw Error('Expected string or numeric type');
    }

    value = value.toString();

    if (type === false) return (value = value.replace(/^(0+)|[^\d]+/g, ''));

    value = value.replace(/[^\d.]/g, ''); //清除"数字"和"."以外的字符
    value = value.replace(/^\./g, ''); //验证第一个字符是数字
    value = value.replace(/\.{2,}/g, ''); //只保留第一个, 清除多余的
    value = value
        .replace('.', '$#$')
        .replace(/\./g, '')
        .replace('$#$', '.');
    value = value.replace(/^(-)*(\d+)\.(\d\d).*$/, '$1$2.$3');

    return value;
}
