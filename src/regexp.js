export const regEx = {
    mobile: /^(0|86|17951)?(13[0-9]|15[0123456789]|17[678]|18[0-9]|14[57])[0-9]{8}$/,
    email: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
    card: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
};

export function regMobile(value) {
    return regEx.mobile.test(value);
}

export function regEmail(value) {
    return regEx.email.test(value);
}

export function regCard(value) {
    return regEx.card.test(value);
}
