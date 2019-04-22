/**
 * 获取cookies
 *
 * Author:   gsm(qq:865316371)
 * History:
 * Date         Version Remarks
 * ============ ======= ======================================================
 * 2019/4/22      1.0     First version
 *
 * Copyright 2016, all rights reserved. Essa.cn
 * */

/**
 * 获取cookies
 * @param name 名称
 * @returns {string}
 */
module.exports = function (name) {
    if (document.cookie.length>0){
        var start=document.cookie.indexOf(name + "=")
        if (start!=-1){
            start=start + name.length+1
            var end=document.cookie.indexOf(";",start)
            if (end==-1){
                end=document.cookie.length
            }
            return encodeURIComponent(document.cookie.substring(start,end))
        }
    }
    return ""
}