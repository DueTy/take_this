
/**
 * 函数防抖
 * @param {*} 执行函数
 * @param {*} 等待时间
 * @param {*} 立即执行标识
 */

export function debounce(fn, delay) {
    let timer = null,
        last = 0;
    return function() {
        let context = this,
            args = arguments,
            now = +new Date();
        // 判断上次触发的时间和本次触发的时间差是否小于时间间隔的阈值    
        if (now - last < delay) {
            // 如果时间间隔小于我们设定的时间间隔阈值，则为本次触发操作设立一个新的定时器
            clearTimeout(timer);
            timer = null;
            timer = setTimeout(function() {
                last = now;
                fn.apply(context, args);
            }, delay);
        } else {
            last = now;
            fn.apply(context, args);
        }
    };
}