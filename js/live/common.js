/**
 * 主要用来放置直播项目中公共的方法或属性
 */
(function () {
    // 在整个项目中多处有判断当前的设备，就把它提取出来。暂时绑定到window对象上。以后再不断优化。
    window.isMobile = device.mobile();
    window.isTable = device.tablet();
    // UUID生成算法
    window.getUUID = function () {
        var len = 32;   //32长度
        var radix = 16; //16进制

        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
        var uuid=[],
            i;
        radix = radix||chars.length;
        if (len) {
            for (i = 0; i < len; i++)
                uuid[i] = chars[0 | Math.random()*radix];
        } else {
            var r;
            uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
            uuid[14] = '4';
            for (i = 0; i < 36; i++) {
                if (!uuid[i]) {
                    r = 0 | Math.random() * 16;
                    uuid[i] = chars[(i==19)?(r&0x3)|0x8:r];
                }
            }
        }
        return uuid.join('');
    }
})()
