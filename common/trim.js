/**
 * 去除字符串中的空格
 *
 * Author:   gsm(qq:865316371)
 * History:
 * Date         Version Remarks
 * ============ ======= ======================================================
 * 2018/2/10      1.0     First version
 *
 * Copyright 2016, all rights reserved. Essa.cn
 * */

module.exports ={
    /**
     * @param str 字符串
     * @returns {XML|string|void}
     */
    trim:function (str) {
        return (str+'').replace(/[ ]/g,"");
    }
}