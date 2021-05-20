function e(t) {
    return (e =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                  return typeof e;
              }
            : function(e) {
                  return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
              })(t);
}
function t(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function r(e) {
    var t =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 'yyyy-MM-dd',
        r = new Date(e),
        n = {
            'M+': r.getMonth() + 1,
            'd+': r.getDate(),
            'h+': r.getHours(),
            'm+': r.getMinutes(),
            's+': r.getSeconds(),
            'q+': Math.floor((r.getMonth() + 3) / 3),
        };
    for (var o in (/(y+)/g.test(t) &&
        (t = t.replace(
            RegExp.$1,
            ''.concat(r.getFullYear()).substr(4 - RegExp.$1.length)
        )),
    n))
        new RegExp('('.concat(o, ')')).test(t) &&
            (t = t.replace(
                RegExp.$1,
                1 == RegExp.$1.length
                    ? ''.concat(n[o])
                    : '00'.concat(n[o]).substr(''.concat(n[o]).length)
            ));
    return t;
}
function n(e) {
    return Object.prototype.toString
        .call(e)
        .replace(/\[|\]/g, '')
        .split(' ')[1]
        .toLowerCase();
}
var o,
    c = {
        mobile: /^(0|86|17951)?(13[0-9]|15[0123456789]|17[678]|18[0-9]|14[57])[0-9]{8}$/,
        email: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
        card: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
    };
var a =
    (t(
        (o = {
            dateFormat: r,
            parseString: function(t) {
                var r = e(t);
                if ('string' !== r)
                    throw Error('Expected string type, but passed in a' + r);
                var n = t.indexOf('?');
                return n < 0
                    ? {}
                    : decodeURIComponent(t)
                          .slice(n + 1)
                          .split('&')
                          .reduce(function(e, t) {
                              var r = t.split('=');
                              return (e[r[0]] = r[1]), e;
                          }, {});
            },
            parseObject: function(t) {
                var r = e(t);
                if (t instanceof Object)
                    throw Error('Expected string type, but passed in a' + r);
                return Object.entries(search)
                    .reduce(function(e, t) {
                        return ''
                            .concat(e)
                            .concat(t[0], '=')
                            .concat(t[1], '&');
                    }, '')
                    .replace(/&$/, '');
            },
            formatNumber: function(e, t) {
                return 'number' === t
                    ? e.replace(/^(0+)|[^\d]+/g, '')
                    : (e = (e = (e = (e = (e = e.replace(
                          /[^\d.]/g,
                          ''
                      )).replace(/^\./g, '')).replace(/\.{2,}/g, ''))
                          .replace('.', '$#$')
                          .replace(/\./g, '')
                          .replace('$#$', '.')).replace(
                          /^(-)*(\d+)\.(\d\d).*$/,
                          '$1$2.$3'
                      ));
            },
        }),
        'dateFormat',
        r
    ),
    t(o, 'getType', n),
    t(o, 'checkType', function(e) {
        return function(t) {
            return n(e) === t.toLowerCase();
        };
    }),
    t(o, 'regEx', c),
    t(o, 'regMobile', function(e) {
        return c.mobile.test(e);
    }),
    t(o, 'regEmail', function(e) {
        return c.email.test(e);
    }),
    t(o, 'regCard', function(e) {
        return c.card.test(e);
    }),
    o);
export default a;
