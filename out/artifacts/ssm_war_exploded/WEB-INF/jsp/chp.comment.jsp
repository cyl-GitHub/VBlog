<%--&lt;%&ndash;--%>
  <%--Created by IntelliJ IDEA.--%>
  <%--User: DELL--%>
  <%--Date: 2019-07-11--%>
  <%--Time: 14:47--%>
  <%--To change this template use File | Settings | File Templates.--%>
<%--&ndash;%&gt;--%>
<%--<%@ page contentType="text/html;charset=UTF-8" language="java" %>--%>
<%--<html>--%>
<%--<head>--%>
    <%--<title>微博评论</title>--%>
    <%--<script type="text/javascript" src="${requestScope.ContextPath}/js/chp.comment.js"></script>--%>
    <%--<script src="${requestScope.ContextPath}/jquery-2.1.1/jquery.min.js"></script>--%>
    <%--<script src="${requestScope.ContextPath}/jquery-2.1.1/jquery.js"></script>--%>
    <%--<script type="text/javascript" src="${requestScope.ContextPath}/js/jquery.flexText.js"></script>--%>
    <%--<link rel="stylesheet" href="${requestScope.ContextPath}/css/style.css">--%>
    <%--<link rel="stylesheet" href="${requestScope.ContextPath}/css/comment.css">--%>
<%--</head>--%>
<%--<body>--%>
<%--<div id = "floorNum"></div>--%>
<%--<div id="test">${discusses}</div>--%>
<%--<style type="text/css">--%>
    <%--body{--%>
        <%--background-color: deepskyblue;--%>
    <%--}--%>
    <%--.commentAll{--%>
        <%--background-color: #cee1ee;--%>
        <%--border-radius: 2px;--%>
    <%--}--%>
<%--</style>--%>
<%--<div class="commentAll">--%>
    <%--<!--评论发布区域 begin-->--%>
    <%--<div class="reviewArea clearfix">--%>
        <%--&lt;%&ndash;onkeyup属性在键盘按键松开时执行方法,这里是执行限制字数的方法&ndash;%&gt;--%>
        <%--<textarea class="content comment-input" placeholder="Please enter a comment&hellip;" onkeyup="keyUP(this)"></textarea>--%>
        <%--&lt;%&ndash;超链接里面"javascript:;"阻止超链接跳转的作用&ndash;%&gt;--%>
        <%--<a href="javascript:;" class="plBtn">评论</a>--%>
    <%--</div>--%>
    <%--<!--评论发布区域 end-->--%>
    <%--<!--回复区域 begin-->--%>
    <%--<div class="comment-show">--%>
    <%--</div>--%>
    <%--<!--回复区域 end-->--%>
<%--</div>--%>



<%--&lt;%&ndash;删除内容&ndash;%&gt;--%>
<%--<script type="text/javascript">--%>
    <%--$('.commentAll').on('click','.removeBlock',function(){--%>
        <%--var oT = $(this).parents('.date-dz-right').parents('.date-dz').parents('.all-pl-con');--%>
        <%--alert(oT.val())--%>
        <%--oT.remove();--%>
        <%--var oL = $(this).parents('.date-dz-right').parents('.date-dz').parents('.comment-show-con-list').parents('.comment-show-con')--%>
        <%--oL.remove();--%>

    <%--})--%>
<%--</script>--%>
<%--&lt;%&ndash;评论的回复生成&ndash;%&gt;--%>
<%--<script>--%>
    <%--//当评论按钮被点击时触发--%>
    <%--$('.comment-show').on('click','.hf-pl',function(){--%>
        <%--var oThis = $(this);--%>
        <%--//todo 当前时间--%>
        <%--var myDate = new Date();--%>
        <%--// //获取当前年--%>
        <%--// var year=myDate.getFullYear();--%>
        <%--// //获取当前月--%>
        <%--// var month=myDate.getMonth()+1;--%>
        <%--// //获取当前日--%>
        <%--// var date=myDate.getDate();--%>
        <%--// var h=myDate.getHours();       //获取当前小时数(0-23)--%>
        <%--// var m=myDate.getMinutes();     //获取当前分钟数(0-59)--%>
        <%--// if(m<10) m = '0' + m;--%>
        <%--// var s=myDate.getSeconds();--%>
        <%--// if(s<10) s = '0' + s;--%>
        <%--// var now=year+'-'+month+"-"+date+" "+h+':'+m+":"+s;--%>
        <%--//todo 自己的名字--%>
        <%--var myname = '阿甘';--%>
        <%--var now = new Date();--%>
        <%--//被回复的楼层数--%>
        <%--var replyFloor = $(this).parents('.hf-con').parents('.date-dz').parents('.comment-show-con-list').parents('.comment-show-con').attr('class').replace(/[^0-9]/ig,"");--%>
        <%--//回复内容--%>
        <%--var oSize;--%>
        <%--//被回复人的名字--%>
        <%--var replyAuthor;--%>
        <%--//oHfVal保存 回复@张三:内容--%>
        <%--var oHfVal = $(this).siblings('.flex-text-wrap').find('.hf-input').val();--%>
        <%--//oHfName保存被回复人的姓名加上:  张三:--%>
        <%--var oHfName = $(this).parents('.hf-con').parents('.date-dz').siblings('.pl-text').find('.comment-size-name').html();--%>
        <%--// 回复@张三:--%>
        <%--var oAllVal = '回复@'+oHfName;--%>
        <%--//把前面和后面的空格全部去掉,如果为空则或全值等于被回复人姓名--%>
        <%--if(oHfVal.replace(/^ +| +$/g,'') == '' || oHfVal == oAllVal){--%>

        <%--}else {--%>
            <%--var arr;--%>
            <%--var ohfNameArr;--%>
            <%--//回复@张三:内容--%>
            <%--if(oHfVal.indexOf("@") == -1){--%>
                <%--//回复人为空,将回复人名字至为空--%>
                <%--replyAuthor = '';--%>
                <%--//将回复内容给json格式内的hfContent赋值--%>
                <%--oSize = oHfVal;--%>
            <%--}else {--%>
                <%--//有 @ 找  : 以:为切割符,切割出数组arr[回复@张三:][内容]--%>
                <%--arr = oHfVal.split(':');--%>
                <%--//以@切割 ohfNameArr [回复@][张三:]--%>
                <%--ohfNameArr = arr[0].split('@');--%>
                <%--//[内容]--%>
                <%--oSize = arr[1];--%>
                <%--//[张三]--%>
                <%--var atName = ohfNameArr[1];--%>
            <%--}--%>
            <%--$.ajax({--%>
                <%--url: "/user/AcceptResponds",--%>
                <%--dataType: "json",--%>
                <%--type: "POST",--%>
                <%--contentType: "application/json;charset=utf-8",--%>
                <%--data:JSON.stringify({--%>
                    <%--comment:oSize,--%>
                    <%--discussTime:myDate,--%>
                    <%--floor:replyFloor,--%>
                    <%--//todo 这里接受博文的Id--%>
                    <%--microblogId:1,--%>
                    <%--getCommentPerson:{--%>
                        <%--name:atName--%>

                    <%--}--%>
                <%--}),--%>
                <%--success:function (data) {--%>

                    <%--var oHtml = '<div class="all-pl-con"><div class="pl-text hfpl-text clearfix"><a href="#" class="comment-size-name">'+myname+' : </a><span class="my-pl-con">'+oAllVal+oSize+'</span></div><div class="date-dz"> <span class="date-dz-left pull-left comment-time">'+now+'</span> <div class="date-dz-right pull-right comment-pl-block"> <a href="javascript:;" class="removeBlock">删除</a> <a href="javascript:;" class="date-dz-pl pl-hf hf-con-block pull-left">回复</a> <span class="pull-left date-dz-line">|</span> <a href="javascript:;" class="date-dz-z pull-left"><i class="date-dz-z-click-red"></i>赞 (<i class="z-num">0</i>)</a> </div> </div></div>';--%>
                    <%--// 将标签输入到页面上--%>
                    <%--$('.floor-'+replyFloor+'st').find('.comment-show-con-list').find('.hf-list-con').css('display','block').prepend(oHtml) && oThis.parents('.hf-con').siblings('.date-dz-right').find('.pl-hf').addClass('hf-con-block') && oThis.parents('.hf-con').remove();--%>
                <%--}--%>
            <%--})--%>
        <%--}--%>
    <%--});--%>
<%--</script>--%>
<%--&lt;%&ndash;点击回复按钮时自动生成一个回复文本框&ndash;%&gt;--%>
 <%--<script>--%>
        <%--//点击回复按钮,如果未开启回复文本就开启,开启了就关闭--%>
        <%--//todo 做一个点击回复,就关闭其他所有开启的功能--%>
        <%--$('.comment-show').on('click','.pl-hf',function(){--%>
            <%--//获取被回复人的名字--%>
            <%--//这里保存了被回复人的姓名--%>
            <%--var fhName = $(this).parents('.date-dz-right').parents('.date-dz').siblings('.pl-text').find('.comment-size-name').html();--%>
            <%--//回复@--%>
            <%--var fhN = '回复@'+fhName;--%>
            <%--//var oInput = $(this).parents('.date-dz-right').parents('.date-dz').siblings('.hf-con');--%>
            <%--var fhHtml = '<div class="hf-con pull-left"> <textarea class="content comment-input hf-input" placeholder="" onkeyup="keyUP(this)"></textarea> <a href="javascript:;" class="hf-pl">评论</a></div>';--%>
            <%--//显示回复,如果是评论回复则,创建一个评论框标签,--%>
            <%--if($(this).is('.hf-con-block')){--%>
                <%--//this = plhf类的标签--%>
                <%--$(this).parents('.date-dz-right').parents('.date-dz').append(fhHtml);--%>
                <%--//移除此回复按钮的hf-con-block的class属性--%>
                <%--$(this).removeClass('hf-con-block');--%>
                <%--$('.content').flexText();--%>
                <%--$(this).parents('.date-dz-right').siblings('.hf-con').find('.pre').css('padding','6px 15px');--%>
                <%--//console.log($(this).parents('.date-dz-right').siblings('.hf-con').find('.pre'))--%>
                <%--//input框自动聚焦--%>
                <%--//向输入框内写上@加上回复人的名字--%>
                <%--$(this).parents('.date-dz-right').siblings('.hf-con').find('.hf-input').val('').focus().val(fhN);--%>
            <%--}else {--%>
                <%--$(this).addClass('hf-con-block');--%>
                <%--$(this).parents('.date-dz-right').siblings('.hf-con').remove();--%>
            <%--}--%>
        <%--});--%>
<%--</script>--%>
<%--&lt;%&ndash;发布评论&ndash;%&gt;--%>
<%--<script>--%>
    <%--$('.commentAll').on('click','.plBtn',function(){--%>
        <%--//myDate year month date h m 获取时间相关的值--%>
        <%--var myDate = new Date();--%>
        <%--// var year=myDate.getFullYear();--%>
        <%--// var month=myDate.getMonth()+1;--%>
        <%--// var date=myDate.getDate();--%>
        <%--// var h=myDate.getHours();       //获取当前小时数(0-23)--%>
        <%--// var m=myDate.getMinutes();     //获取当前分钟数(0-59)--%>
        <%--// if(m<10) m = '0' + m;--%>
        <%--// var s=myDate.getSeconds();--%>
        <%--// if(s<10) s = '0' + s;--%>
        <%--// var now=year+'-'+month+"-"+date+" "+h+':'+m+":"+s;--%>
        <%--var now=new Date();--%>
        <%--//todo 传一个User回去--%>
        <%--var user=${userLogin.id};--%>
        <%--var oSize = $(this).siblings('.flex-text-wrap').find('.comment-input').val();--%>
        <%--var floor = $('#floorNum').html();--%>

        <%--$.ajax({--%>
            <%--url: "/user/AcceptComments",--%>
            <%--dataType: "json",--%>
            <%--type: "POST",--%>
            <%--contentType: "application/json;charset=utf-8",--%>
            <%--//向后端传输的数据--%>
            <%--data: JSON.stringify({--%>
                <%--comment:oSize,--%>
                <%--discussTime:myDate,--%>
                <%--floor:floor,--%>
                <%--//todo 这里接受博文的Id--%>
                <%--microblogId:${microbogid}--%>
            <%--}),--%>
            <%--success:function (data) {--%>
                <%--//oSize 保存输入的内容,this是指整个最上级那个plBtn标签,flex-text-wrap类标签是jar包制动生成的一个div,功能是可以根据文本框自动扩展;--%>
                <%--oHtml = '<div class="comment-show-con clearfix floor-'+floor+'st"><div class="comment-show-con-img pull-left">' +--%>
                    <%--//todo 这里是用户头像的保存路径,这里暂时写死,之后通过字符串拼接路径实现更换头像--%>
                    <%--'<img src="/images/header-img-comment_03.png" alt=""></div> <div class="comment-show-con-list pull-left clearfix"><div class="pl-text clearfix"> <a href="#" class="comment-size-name">'+user+' : </a> <span class="my-pl-con">&nbsp;'+ oSize +'</span> </div> <div class="date-dz"> <span class="date-dz-left pull-left comment-time">'+now+'</span> <div class="date-dz-right pull-right comment-pl-block"><a href="javascript:;" class="removeBlock">删除</a> <a href="javascript:;" class="date-dz-pl pl-hf hf-con-block pull-left">回复</a> <span class="pull-left date-dz-line">|</span> <a href="javascript:;" class="date-dz-z pull-left"><i class="date-dz-z-click-red"></i>赞 (<i class="z-num">'+0+'</i>)</a> </div> </div><div class="hf-list-con"></div></div> </div>';--%>
                <%--//加载出页面--%>
                <%--$('.comment-show').prepend(oHtml);--%>
                <%--//计算楼层数--%>
                <%--var re = new RegExp("\d");--%>
                <%--var common1DCount = $('#floorNum').html().match(/\d+/);--%>
                <%--var other1DCount = 1;--%>
                <%--var oneDegree = common1DCount*1+other1DCount*1;--%>
                <%--$('#floorNum').html(oneDegree);--%>
                <%--//清空输入栏--%>
                <%--$('.flex-text-wrap').find('.comment-input').prop('value','').siblings('pre').find('span').text('');--%>

            <%--}--%>
            <%--}--%>
        <%--);--%>
    <%--});--%>
<%--</script>--%>
<%--&lt;%&ndash;限制文本字数&ndash;%&gt;--%>
<%--<script>--%>
    <%--function keyUP(t){--%>
        <%--var len = $(t).val().length;--%>
        <%--if(len > 139){--%>
            <%--$(t).val($(t).val().substring(0,140));--%>
        <%--}--%>
    <%--};--%>
    <%--$(function () {--%>
        <%--$('.content').flexText();--%>
    <%--});--%>
    <%--createComment(${microbogid});--%>
<%--</script>--%>
<%--&lt;%&ndash;点赞&ndash;%&gt;--%>
<%--<script type="text/javascript">--%>
    <%--$('.comment-show').on('click','.date-dz-z',function(){--%>
        <%--var zNum = $(this).find('.z-num').html();--%>
        <%--if($(this).is('.date-dz-z-click')){--%>
            <%--zNum--;--%>
            <%--$(this).removeClass('date-dz-z-click red');--%>
            <%--$(this).find('.z-num').html(zNum);--%>
            <%--$(this).find('.date-dz-z-click-red').removeClass('red');--%>
        <%--}else {--%>
            <%--zNum++;--%>
            <%--$(this).addClass('date-dz-z-click');--%>
            <%--$(this).find('.z-num').html(zNum);--%>
            <%--$(this).find('.date-dz-z-click-red').addClass('red');--%>
        <%--}--%>
    <%--})--%>
    <%--// $('.comment-show').on('click','.date-dz-z',function(){--%>
    <%--//     var clickLike = $(this)--%>
    <%--//     var zNum = $(this).find('.z-num').html();--%>
    <%--//     var likeFloor = $(this).parents('.date-dz-right').parents('.date-dz').parents('.comment-show-con-list').parents('.comment-show-con').attr('class').replace(/[^0-9]/ig,"");--%>
    <%--//     alert(likeFloor);--%>
    <%--//     $.ajax({url: "/user/Say",--%>
    <%--//         dataType: "json",--%>
    <%--//         type: "post",--%>
    <%--//         contentType: "application/json;charset=utf-8",--%>
    <%--//         //向后台传输的数据--%>
    <%--//         data: JSON.stringify({--%>
    <%--//             //todo 待完善--%>
    <%--//             uid:1,--%>
    <%--//             message:11,--%>
    <%--//             floor:likeFloor--%>
    <%--//         }),--%>
    <%--//         success:function (data) {--%>
    <%--//             if(//todo 通过用户id,在库内查询该用户是否已点过赞--%>
    <%--//                 true){--%>
    <%--//                 zNum--;--%>
    <%--//                 $(clickLike).removeClass('date-dz-z-click red');--%>
    <%--//                 $(clickLike).find('.z-num').html(zNum);--%>
    <%--//                 $(clickLike).find('.date-dz-z-click-red').removeClass('red');--%>
    <%--//                 //todo 点赞操作,zNum保存目前总赞数,--%>
    <%--//             }else {--%>
    <%--//                 zNum++;--%>
    <%--//                 $(clickLike).addClass('date-dz-z-click');--%>
    <%--//                 $(clickLike).find('.z-num').html(zNum);--%>
    <%--//                 $(clickLike).find('.date-dz-z-click-red').addClass('red');--%>
    <%--//             }--%>
    <%--//         }--%>
    <%--//--%>
    <%--//     });--%>
    <%--//--%>
    <%--// })--%>
<%--</script>--%>
<%--</body>--%>
<%--</html>--%>
<%--
  Created by IntelliJ IDEA.
  User: DELL
  Date: 2019-07-11
  Time: 14:47
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>微博评论</title>
    <script type="text/javascript" src="${requestScope.ContextPath}/js/chp.comment.js"></script>
    <script src="${requestScope.ContextPath}/jquery-2.1.1/jquery.min.js"></script>
    <script src="${requestScope.ContextPath}/jquery-2.1.1/jquery.js"></script>
    <script type="text/javascript" src="${requestScope.ContextPath}/js/jquery.flexText.js"></script>
    <link rel="stylesheet" href="${requestScope.ContextPath}/css/style.css">
    <link rel="stylesheet" href="${requestScope.ContextPath}/css/comment.css">
</head>
<body>
<div id = "floorNum"></div>
<div id="test">${discusses}</div>
<style type="text/css">
    body{
        background-color: deepskyblue;
    }
    .commentAll{
        background-color: #cee1ee;
        border-radius: 2px;
    }
</style>
<div class="commentAll">
    <!--评论发布区域 begin-->
    <div class="reviewArea clearfix">
        <%--onkeyup属性在键盘按键松开时执行方法,这里是执行限制字数的方法--%>
        <textarea class="content comment-input" placeholder="Please enter a comment&hellip;" onkeyup="keyUP(this)"></textarea>
        <%--超链接里面"javascript:;"阻止超链接跳转的作用--%>
        <a href="javascript:;" class="plBtn">评论</a>
    </div>
    <!--评论发布区域 end-->
    <!--回复区域 begin-->
    <div class="comment-show">
    </div>
    <!--回复区域 end-->
</div>



<%--删除内容--%>
<script type="text/javascript">
    //todo 改动三
    $('.commentAll').on('click','.removeBlock',function(){
        var oT = $(this).parents('.date-dz-right').parents('.date-dz').parents('.all-pl-con');
        var oL = $(this).parents('.date-dz-right').parents('.date-dz').parents('.comment-show-con-list').parents('.comment-show-con');
        var isif = oT.html()

        if (isif != undefined&& isif != ""){
            var deleteName = oT.find('.pl-text').find('.comment-size-name').html().replace(/[&\|\\\*^%$#@:\-]/g,"")
            var deleteTime = oT.find('.date-dz').find('.date-dz-left').html();
            $.ajax({
                url: "/user/deleteCommentByUser",
                dataType: "json",
                type: "post",
                contentType: "application/json;charset=utf-8",
                //向后台传输的数据
                data: JSON.stringify({
                    <%-- todo 第五处改动 user:${userLogin},--%>
                    user:"${userLogin.name}",
                    <%--评论人的名字--%>
                    name:deleteName,
                    //评论的时间
                    time:deleteTime
                }),
                success: function (data) {
                    oT.remove();
                }
            })

        }else {
            var deleteName = oL.find('.comment-show-con-list').find('.pl-text').find('.comment-size-name').html().replace(/[\s&\|\\\*^%$#@:\-]/g,"")
            var deleteTime = oL.find('.comment-show-con-list').find('.date-dz').find('.date-dz-left').html();

            $.ajax({
                url: "/user/deleteAllCommentByUser",
                dataType: "json",
                type: "post",
                contentType: "application/json;charset=utf-8",
                //向后台传输的数据
                data: JSON.stringify({
                    <%-- todo 第五处改动 user:${userLogin},--%>
                    user:'${userLogin.name}',
                    <%--评论人的名字--%>
                    name:deleteName,
                    //评论的时间
                    time:deleteTime
                }),
                success: function (data) { '从'
                    oL.remove();
                }
            })

        }

    })
</script>
<%--评论的回复生成--%>
<script>
    //当评论按钮被点击时触发
    $('.comment-show').on('click','.hf-pl',function(){
        var oThis = $(this);
        //todo 当前时间
        var myDate = new Date();
        // //获取当前年
        // var year=myDate.getFullYear();
        // //获取当前月
        // var month=myDate.getMonth()+1;
        // //获取当前日
        // var date=myDate.getDate();
        // var h=myDate.getHours();       //获取当前小时数(0-23)
        // var m=myDate.getMinutes();     //获取当前分钟数(0-59)
        // if(m<10) m = '0' + m;
        // var s=myDate.getSeconds();
        // if(s<10) s = '0' + s;
        // var now=year+'-'+month+"-"+date+" "+h+':'+m+":"+s;
        //todo 自己的名字
        var myname = "${userLogin.name}";
        var now = new Date();
        //被回复的楼层数
        var replyFloor = $(this).parents('.hf-con').parents('.date-dz').parents('.comment-show-con-list').parents('.comment-show-con').attr('class').replace(/[^0-9]/ig,"");
        //回复内容
        var oSize;
        //被回复人的名字
        var replyAuthor;
        //oHfVal保存 回复@张三:内容
        var oHfVal = $(this).siblings('.flex-text-wrap').find('.hf-input').val();
        //oHfName保存被回复人的姓名加上:  张三:
        var oHfName = $(this).parents('.hf-con').parents('.date-dz').siblings('.pl-text').find('.comment-size-name').html();
        // 回复@张三:
        var oAllVal = '回复@'+oHfName;
        //把前面和后面的空格全部去掉,如果为空则或全值等于被回复人姓名
        if(oHfVal.replace(/^ +| +$/g,'') == '' || oHfVal == oAllVal){

        }else {
            var arr;
            var ohfNameArr;
            //回复@张三:内容
            if(oHfVal.indexOf("@") == -1){
                //回复人为空,将回复人名字至为空
                replyAuthor = '';
                //将回复内容给json格式内的hfContent赋值
                oSize = oHfVal;
            }else {
                //有 @ 找  : 以:为切割符,切割出数组arr[回复@张三:][内容]
                arr = oHfVal.split(':');
                //以@切割 ohfNameArr [回复@][张三:]
                ohfNameArr = arr[0].split('@');
                //[内容]
                oSize = arr[1];
                //[张三]
                var atName = ohfNameArr[1];
            }
            $.ajax({
                url: "/user/AcceptResponds",
                dataType: "json",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                data:JSON.stringify({
                    comment:oSize,
                    discussTime:myDate,
                    floor:replyFloor,
                    //todo 这里接受博文的Id
                    microblogId:${microbogid},
                    commentPerson:{
                        name:myname,
                        id:${userLogin.id}
                    },
                    getCommentPerson:{
                        name:atName

                    }
                }),
                success:function (data) {

                    var oHtml = '<div class="all-pl-con"><div class="pl-text hfpl-text clearfix"><a href="#" class="comment-size-name">'+myname+' : </a><span class="my-pl-con">'+oAllVal+oSize+'</span></div><div class="date-dz"> <span class="date-dz-left pull-left comment-time">'+now+'</span> <div class="date-dz-right pull-right comment-pl-block"> <a href="javascript:;" class="removeBlock">删除</a> <a href="javascript:;" class="date-dz-pl pl-hf hf-con-block pull-left">回复</a> <span class="pull-left date-dz-line">|</span> <a href="javascript:;" class="date-dz-z pull-left"><i class="date-dz-z-click-red"></i>赞 (<i class="z-num">0</i>)</a> </div> </div></div>';
                    // 将标签输入到页面上
                    $('.floor-'+replyFloor+'st').find('.comment-show-con-list').find('.hf-list-con').css('display','block').prepend(oHtml) && oThis.parents('.hf-con').siblings('.date-dz-right').find('.pl-hf').addClass('hf-con-block') && oThis.parents('.hf-con').remove();
                }
            })
        }
    });
</script>
<%--点击回复按钮时自动生成一个回复文本框--%>
<script>
    //点击回复按钮,如果未开启回复文本就开启,开启了就关闭
    //todo 做一个点击回复,就关闭其他所有开启的功能
    $('.comment-show').on('click','.pl-hf',function(){
        //获取被回复人的名字
        //这里保存了被回复人的姓名
        var fhName = $(this).parents('.date-dz-right').parents('.date-dz').siblings('.pl-text').find('.comment-size-name').html();
        //回复@
        var fhN = '回复@'+fhName;
        //var oInput = $(this).parents('.date-dz-right').parents('.date-dz').siblings('.hf-con');
        var fhHtml = '<div class="hf-con pull-left"> <textarea class="content comment-input hf-input" placeholder="" onkeyup="keyUP(this)"></textarea> <a href="javascript:;" class="hf-pl">评论</a></div>';
        //显示回复,如果是评论回复则,创建一个评论框标签,
        if($(this).is('.hf-con-block')){
            //this = plhf类的标签
            $(this).parents('.date-dz-right').parents('.date-dz').append(fhHtml);
            //移除此回复按钮的hf-con-block的class属性
            $(this).removeClass('hf-con-block');
            $('.content').flexText();
            $(this).parents('.date-dz-right').siblings('.hf-con').find('.pre').css('padding','6px 15px');
            //console.log($(this).parents('.date-dz-right').siblings('.hf-con').find('.pre'))
            //input框自动聚焦
            //向输入框内写上@加上回复人的名字
            $(this).parents('.date-dz-right').siblings('.hf-con').find('.hf-input').val('').focus().val(fhN);
        }else {
            $(this).addClass('hf-con-block');
            $(this).parents('.date-dz-right').siblings('.hf-con').remove();
        }
    });
</script>
<%--发布评论--%>
<script>
    $('.commentAll').on('click','.plBtn',function(){
        //myDate year month date h m 获取时间相关的值
        var myDate = new Date();
        // var year=myDate.getFullYear();
        // var month=myDate.getMonth()+1;
        // var date=myDate.getDate();
        // var h=myDate.getHours();       //获取当前小时数(0-23)
        // var m=myDate.getMinutes();     //获取当前分钟数(0-59)
        // if(m<10) m = '0' + m;
        // var s=myDate.getSeconds();
        // if(s<10) s = '0' + s;
        // var now=year+'-'+month+"-"+date+" "+h+':'+m+":"+s;
        var now=new Date();
        //todo 传一个User回去
        var user=${userLogin.id};
        var name1  ="${userLogin.name}";
        var oSize = $(this).siblings('.flex-text-wrap').find('.comment-input').val();
        var floor = $('#floorNum').html();

        $.ajax({
                url: "/user/AcceptComments",
                dataType: "json",
                type: "POST",
                contentType: "application/json;charset=utf-8",
                //向后端传输的数据
                data: JSON.stringify({
                    comment:oSize,
                    commentPerson:{
                        id:${userLogin.id}
                    },
                    discussTime:myDate,
                    floor:floor,
                    //todo 这里接受博文的Id
                    microblogId:${microbogid}
                }),
                success:function (data) {
                    //oSize 保存输入的内容,this是指整个最上级那个plBtn标签,flex-text-wrap类标签是jar包制动生成的一个div,功能是可以根据文本框自动扩展;
                    oHtml = '<div class="comment-show-con clearfix floor-'+floor+'st"><div class="comment-show-con-img pull-left">' +
                        //todo 这里是用户头像的保存路径,这里暂时写死,之后通过字符串拼接路径实现更换头像
                        '<img src="/images/header-img-comment_03.png" alt=""></div> <div class="comment-show-con-list pull-left clearfix"><div class="pl-text clearfix"> <a href="#" class="comment-size-name">'+name1+' : </a> <span class="my-pl-con">&nbsp;'+ oSize +'</span> </div> <div class="date-dz"> <span class="date-dz-left pull-left comment-time">'+now+'</span> <div class="date-dz-right pull-right comment-pl-block"><a href="javascript:;" class="removeBlock">删除</a> <a href="javascript:;" class="date-dz-pl pl-hf hf-con-block pull-left">回复</a> <span class="pull-left date-dz-line">|</span> <a href="javascript:;" class="date-dz-z pull-left"><i class="date-dz-z-click-red"></i>赞 (<i class="z-num">'+0+'</i>)</a> </div> </div><div class="hf-list-con"></div></div> </div>';
                    //加载出页面
                    $('.comment-show').prepend(oHtml);
                    //计算楼层数
                    var re = new RegExp("\d");
                    var common1DCount = $('#floorNum').html().match(/\d+/);
                    var other1DCount = 1;
                    var oneDegree = common1DCount*1+other1DCount*1;
                    $('#floorNum').html(oneDegree);
                    //清空输入栏
                    $('.flex-text-wrap').find('.comment-input').prop('value','').siblings('pre').find('span').text('');

                }
            }
        );
    });
</script>
<%--限制文本字数--%>
<script>
    function keyUP(t){
        var len = $(t).val().length;
        if(len > 139){
            $(t).val($(t).val().substring(0,140));
        }
    };
    $(function () {
        $('.content').flexText();
    });
    createComment(${microbogid});
</script>
<%--点赞--%>
<script type="text/javascript">
    $('.comment-show').on('click','.date-dz-z',function(){
        var zNum = $(this).find('.z-num').html();
        if($(this).is('.date-dz-z-click')){
            zNum--;
            $(this).removeClass('date-dz-z-click red');
            $(this).find('.z-num').html(zNum);
            $(this).find('.date-dz-z-click-red').removeClass('red');
        }else {
            zNum++;
            $(this).addClass('date-dz-z-click');
            $(this).find('.z-num').html(zNum);
            $(this).find('.date-dz-z-click-red').addClass('red');
        }
    })
    // $('.comment-show').on('click','.date-dz-z',function(){
    //     var clickLike = $(this)
    //     var zNum = $(this).find('.z-num').html();
    //     var likeFloor = $(this).parents('.date-dz-right').parents('.date-dz').parents('.comment-show-con-list').parents('.comment-show-con').attr('class').replace(/[^0-9]/ig,"");
    //     alert(likeFloor);
    //     $.ajax({url: "/user/Say",
    //         dataType: "json",
    //         type: "post",
    //         contentType: "application/json;charset=utf-8",
    //         //向后台传输的数据
    //         data: JSON.stringify({
    //             //todo 待完善
    //             uid:1,
    //             message:11,
    //             floor:likeFloor
    //         }),
    //         success:function (data) {
    //             if(//todo 通过用户id,在库内查询该用户是否已点过赞
    //                 true){
    //                 zNum--;
    //                 $(clickLike).removeClass('date-dz-z-click red');
    //                 $(clickLike).find('.z-num').html(zNum);
    //                 $(clickLike).find('.date-dz-z-click-red').removeClass('red');
    //                 //todo 点赞操作,zNum保存目前总赞数,
    //             }else {
    //                 zNum++;
    //                 $(clickLike).addClass('date-dz-z-click');
    //                 $(clickLike).find('.z-num').html(zNum);
    //                 $(clickLike).find('.date-dz-z-click-red').addClass('red');
    //             }
    //         }
    //
    //     });
    //
    // })
</script>
</body>
</html>