/**
 * 复制方法
 *
 * Author:   gsm(qq:865316371)
 * History:
 * Date         Version Remarks
 * ============ ======= ======================================================
 * 2018/1/11      1.0     First version
 *
 * Copyright 2016, all rights reserved. Essa.cn
 * */




module.exports = function(data,successFn,errorFn) {
    if (window.clipboardData) {
        window.clipboardData.setData("Text", data);
    }else{
        var el = $("<div>");
        el.css({
            "position":"absolute",
            "left":'-99999px',
            "top":'-99999px'
        });
        el.text(data);
        $("body").append(el);

        //创建一个范围
        var range = document.createRange();
        range.selectNodeContents(el.get(0));
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        var success;
        try {
            success = document.execCommand("copy", false, null);
            if(typeof successFn == 'function'){
                errorFn();
            }else{
                alert('复制成功');
            }
        }
        catch (e) {
            if(typeof errorFn == 'function'){
                errorFn();
            }else{
                alert('复制失败');
            }
        }
        if (success) {
            // remove temp element.
            el.remove();
        }
    }
};