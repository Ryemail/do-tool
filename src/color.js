// GB 字符串转十六进制字符串
const rgbToHex = (r, g, b) =>
    "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

// 检查字符串是否是十六进制颜色
const isHexColor = (color) =>
    /^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(color);

// 生成 rgb 颜色字符串
const randomRgbColor = () =>
    `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`;

//  生成十六进制颜色字符串
const randomColor = () =>
    `#${Math.random().toString(16).slice(2, 8).padEnd(6, "0")}`;
