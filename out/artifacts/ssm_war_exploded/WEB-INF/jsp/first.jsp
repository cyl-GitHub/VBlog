<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%--
  Created by IntelliJ IDEA.
  User: cyl27
  Date: 2019/7/2
  Time: 13:21
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>首页</title>
    <script src="${requestScope.ContextPath}/jquery-2.1.1/jquery.min.js"></script>
    <script src="${requestScope.ContextPath}/jquery-2.1.1/jquery.js"></script>
    <script src="${pageContext.request.contextPath}/js/jquery.flexText(1).js"></script>
    <script src="${pageContext.request.contextPath}/js/chp.emoticons.js"></script>
    <script src="${pageContext.request.contextPath}/js/jquery.emoticons.js"></script>
    <script src="${requestScope.ContextPath}/js/first.js"></script>


    <script type="text/javascript" src="${requestScope.ContextPath}/ckplayer/ckplayer.js" charset="UTF-8"></script>

    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/first.css">
    <link rel="stylesheet" href="${requestScope.ContextPath}/css/frame.css">
    <link rel="stylesheet" href="${requestScope.ContextPath}/css/home_A.css">
    <link rel="stylesheet" href="${requestScope.ContextPath}/css/skin.css">
    <link rel="stylesheet" href="${requestScope.ContextPath}/css/comb_WB_feed.css">
    <link href="${pageContext.request.contextPath}/css/comment.css">
    <link href="${pageContext.request.contextPath}/css/common.css">
    <link href="${pageContext.request.contextPath}/css/style.css">
    <link href="${pageContext.request.contextPath}/css/style(1).css">
    <link href="${pageContext.request.contextPath}/css/mytest.css">
    <link href="${pageContext.request.contextPath}/css/cssreset-min.css">
    <link href="${pageContext.request.contextPath}/css/chp.emotions.style.css">

    <style>
        #box1 {
            position: relative;
        }

        .view {
            position: fixed;
            left: 40%;
            bottom: 40%;
        }

        /********************************************************************/
        .emoticons {
            width: 525px;
            margin-bottom: 20px;
        }

        .emoticons .publisher {
            padding-bottom: 10px;
            margin-bottom: 10px;
            border-bottom: 1px dotted #dbdbdb;
        }

        .emoticons .publisher textarea {
            width: 500px;
            height: 140px;
            padding: 5px 10px;
            border: 1px solid #dbdbdb;
            resize: none;
        }

        .emoticons .publisher .trigger {
            font-size: 24px;
            font-weight: bold;
            color: #666;
        }

        .emoticons .publisher .trigger-active {
            color: #eb7350;
        }

        .emoticons .result {
            padding: 10px 15px;
            border: 1px dotted #dbdbdb;
            margin-top: 10px;
            height: 150px;
            line-height: 24px;
        }

        .emoticons .result img {
            vertical-align: middle;
        }

        .widget-layer {
            position: relative;
            width: 410px;
            margin-top: 8px;
            background: #fff;
            border: 1px solid #dbdbdb;
            border-radius: 2px;
        }

        .widget-layer:before {
            position: absolute;
            top: -16px;
            left: 2px;
            display: block;
            content: '';
            width: 0;
            height: 0;
            border: 8px solid transparent;
            border-bottom-color: #dbdbdb;
        }

        .widget-layer:after {
            position: absolute;
            top: -15px;
            left: 2px;
            display: block;
            content: '';
            width: 0;
            height: 0;
            border: 8px solid transparent;
            border-bottom-color: #f0f0f0;
        }

        .widget-layer .widget-tool {
            height: 28px;
            background: #f0f0f0;
        }

        .widget-layer .widget-close {
            float: right;
            width: 28px;
            height: 28px;
            line-height: 28px;
            text-align: center;
            font-family: Arial;
        }

        .widget-layer ul {
            width: 372px;
            margin: 0 auto;
            padding: 15px 5px 20px;

        }

        .widget-layer li {
            position: relative;
            z-index: 8;
            float: left;
            width: 22px;
            height: 22px;
            padding: 4px;
            margin-left: -1px;
            margin-top: -1px;
            border: 1px solid #e8e8e8;
            cursor: pointer;
        }

        .widget-layer li:hover {
            z-index: 9;
            border-color: #eb7350;
        }

        /***********************************************************/
        /**{*/
        /*margin: 0;*/
        /*padding:0;*/
        /*}*/
        body {
            background-image: url("/img/backgroud/YHNRBJ.jpg");
            background-repeat:repeat;

        }

        .tool-bar {
            float: left;
            margin: 0 18px 0 0;
            text-decoration: none;
            color: #333333;
            height: 28px;
            line-height: 29px;
        }

        .c-publisher {
            background-color: #fff;
            margin: 0 0 10px 0;
            border-radius: 2px;
            padding: 15px 10px 10px;
            height: 150px;
        }

        .c-publisher-content {
            height: 68px;
            resize: none;
            width: 100%;
        }

        .kinds {
            height: 40px;
        }

        .c-publisher-publish {
            background-color: #ffc09f;
            border: 1px solid #fbbd9e;
            line-height: 29px;
            width: 60px;
            padding: 0 10px 0 10px;
            text-align: center;
            border-radius: 2px;
        }

        .tool-bar * {
            display: inline-block;
            vertical-align: middle
        }

        .c-publisher-video, .c-publisher-picture, .c-publisher-imagetype {
            padding-right: 5px;
        }
    </style>
</head>
<body>
<div class="vblog-left">
    <ul>
        <li><a href="/user/first">微博主页</a></li>
        <li><a href="/user/information">个人信息</a></li>
        <li><a href="/user/myMic">我的微博</a></li>
        <li><a href="/user/hot">热点微博</a></li>
        <li><a href="/user/userLogin">退出微博</a></li>

    </ul>
</div>
<div class="allCenter">
    <div class="emotion c-publisher">
        <p><em>有什么新鲜事要告诉大家吗?</em></p>
        <p><textarea class="content c-publisher-content" id="content"></textarea></p>
        <div class="kinds">
            <p><a href="#" class="c-publisher-imagetype tool-bar">
                <image src="/myimages/biaoqing.png" class="c-publisher-imagetype"/>
                表情</a></p>
            <p><a href="javascript:;" class="c-publisher-picture tool-bar">
                <form id="uploadPicture" enctype="multipart/form-data">
                    <label for="pictureurl">
                        <image src="/myimages/tupian.png" class="c-publisher-picture"/>
                    </label><input type="file" name="file" id="pictureurl">
                </form>
            </a></p>
            <p><a href="javascript:;" class="c-publisher-video tool-bar">
                <form id="uploadVideo" enctype="multipart/form-data">
                    <label for="videourl">
                        <image src="/myimages/shipin.png" class="c-publisher-video"/>
                    </label><input type="file" name="file" id="videourl">
                </form>
            </a></p>
            <br><br><br>
            <%--<p><a href="javascript:;" class="tool-bar">标签:</a></p>--%>
            <%--<p><a href="javascript:;" class="c-publisher-video tool-bar"><select name="label" id="label"--%>
                                                                                 <%--class="tool-bar">--%>
                <%--<c:forEach items="${list}" var="res">--%>
                    <%--<option>${res.name}</option>--%>
                <%--</c:forEach></select></a></p>--%>
            <p><a href="javascript:;" id="insertButton" class="c-publisher-publish tool-bar ">发布</a></p>
        </div>
    </div>
    <div id="div1">


    </div>

    <form action="/microblog/selectByUserAjax" method="post">
        <input type="hidden" name="totalPage" id="totalPage">
        <input type="hidden" name="pageNumber" id="pageNumber">
        <button type="button" id="flush">刷新</button>
    </form>

</div>


<div id="box1">
    <div class="view" style="display: none;background-color: #afa">
        <label for="reason">请输入转发理由 ： </label><textarea id="reason" cols="30" rows="10"></textarea> <br>
        <%--<p><a href="#" class="emButton tool-bar"><image src="/myimages/biaoqing.png" class="c-publisher-imagetype"/>表情</a></p >--%>
        <%--<a href="#">上传图片****</a> <br>--%>
        <button id="transmitButton">转发</button>
        <button id="close">x</button>
    </div>
</div>

<div class="vblog-right">
    <div class="vblog-avator">
        <img src="${user.avatar}" alt="" style="width: 150px;height: 150px;border-radius: 75px">
    </div>
    <h3><a href="/user/information" style="font-size: 16px" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${user.name}</a></h3>
</div>

</body>
</html>
