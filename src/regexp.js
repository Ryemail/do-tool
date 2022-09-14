export const regEx = {
    mobile: /^(0|86|17951)?(13[0-9]|15[0123456789]|17[678]|18[0-9]|14[57])[0-9]{8}$/, // 匹配手机号
    email: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/, // 匹配email
    card: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, // 匹配身份证号
    domain: /^(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/, // 匹配字符串的域名
    qq: /^[1-9][0-9]{4,10}$/,
    weixin: /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/,
    nickname: /^[a-zA-Z0-9_-]{4,16}$/, //用户名正则，4到16位（字母，数字，下划线，减号）
    money: /^[0-9]+(.[0-9]{2})?$/, // 校验两位小数
    password: /^.*(?=.{6,})(?=.*d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/, //密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
    car: /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/,
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
