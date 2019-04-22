/**
 * 设置cookies
 *
 * Author:   gsm(qq:865316371)
 * History:
 * Date         Version Remarks
 * ============ ======= ======================================================
 * 2019/4/22      1.0     First version
 *
 * Copyright 2016, all rights reserved. Essa.cn
 * */


module.exports = function (name,value,expiredays) {
    var exdate=new Date()
    exdate.setDate(exdate.getDate()+expiredays)
    document.cookie=name+ "=" +encodeURIComponent(value)+((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}