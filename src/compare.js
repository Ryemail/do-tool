import { checkType } from './type';

function getLength(data) {
    return Object.keys(data).length;
}

function isNull(data) {
    const isType = checkType(data);
    return isType('null') && isType('undefined');
}

function compareFunc(first, last, flag) {
    for (let key in first) {
        if (!flag) break;

        if (!last.hasOwnProperty(key)) {
            flag = false;
            break;
        }

        if (checkType(first[key])('array')) {
            if (!checkType(last[key])('array')) {
                flag = false;
                break;
            }
            const oA = first[key],
                oB = last[key];

            if (oA.length !== oB.length) {
                flag = false;
                break;
            }
            for (const k in oA) {
                if (!flag) break;

                flag = compareFunc(oA[k], oB[k], flag);
            }
        } else if (checkType(first[key])('object')) {
            flag = compareFunc(first[key], last[key], flag);
        } else if (isNull(first[key]) || isNull(last[key])) {
            if (last[key] !== first[key]) {
                flag = false;
                break;
            }
        } else {
            if (last[key].toString() !== first[key].toString()) {
                flag = false;
                break;
            }
        }
    }

    return flag;
}

export function compare(first, last) {
    if (!checkType(first)('object') || !checkType(last)('object')) return false;

    if (getLength(first) !== getLength(last)) return false;

    return compareFunc(first, last, true);
}
