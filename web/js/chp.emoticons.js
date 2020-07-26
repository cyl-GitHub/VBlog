//输入所要转换的字符串,将字符串转换为<image src=''>标签
function toImage(str) {
    var resultStr;
    $.emoticons({
        //图片保存的默认路径
        'path':'/image/'
    },function(api){
        resultStr = api.format(str)
    })
    return resultStr;
}
//frame 上级标签类名
//trigger 触发弹出表情选框的按钮类名
function toStr(frame,trigger) {
    $.emoticons({
        //指定上一层标签所用class名称
        'publisherCls':frame,
        //指定按钮的类名
        'triggerCls':trigger,
        'activeCls':'trigger-active',
        //图片保存的默认路径
        'path':'/image/'
    });
}