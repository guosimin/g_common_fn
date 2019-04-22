/**
 * 删除cookies
 *
 * Author:   gsm(qq:2479186745)
 * History:
 * Date         Version Remarks
 * ============ ======= ======================================================
 * 2019/4/22      1.0     First version
 *
 * Copyright 2016, all rights reserved. Essa.cn
 * */


module.exports = function (name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=self.getCookie(name);
    if(cval!=null){
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
    }
}