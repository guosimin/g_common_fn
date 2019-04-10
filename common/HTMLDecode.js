/**
 * 还原转义html
 *
 * Author:   gsm(qq:865316371)
 * History:
 * Date         Version Remarks
 * ============ ======= ======================================================
 * 2019/4/10      1.0     First version
 *
 * Copyright 2016, all rights reserved. Essa.cn
 * */

/**
 * 还原转义html
 * @param html 转义的html
 * @returns {string} html代码
 */
module.exports = function (html) {
    html = "" + html;
    return a.replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .replace(/&apos;/g, "'");
}