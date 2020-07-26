<%--
  Created by IntelliJ IDEA.
  User: DongJiaqi
  Date: 2019/7/9
  Time: 15:14
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>${userLogin.name}的微博_微博</title>
    <script src="${requestScope.ContextPath}/jquery-2.1.1/jquery.min.js"></script>
    <script src="${requestScope.ContextPath}/jquery-2.1.1/jquery.js"></script>
    <link rel="stylesheet" href="${requestScope.ContextPath}/css/userInformation.css">
</head>
<body>
<div class="content-total"><br><br>
    <div class="content-user-avatar">
        <img src="${userLogin.avatar}" alt="" style="width: 120px;height: 120px;border-radius: 60px">
    </div>
    <div class="content-user-name">${userLogin.name}</div>
    <div class="content-user-signature">${userLogin.signature}</div>
    <div class="content-user-choose">
        <br>
        <a href="/user/information"><b>我的信息</b></a>
        <br>
        <a href="/user/uploadAvatar">上传头像</a>
    </div>
    <form action="/user/updateInformation">
        <div class="content-user-information">
            <h3>修改个人信息</h3>
            <input class="user-information-input" type="text" placeholder="请输入更改后昵称" name="name" id="name"
                   value="${userLogin.name}"><br>
            <input class="user-information-input" type="password" placeholder="请输入更改后密码" name="password"
                   id="password"><br>
            <input class="user-information-input" type="text" placeholder="请输入更改后电话号码" id="telephone"
                   value="${userLogin.telephone}"
                   name="telephone"><br>
            <input class="user-information-input" type="text" placeholder="请输入更改后邮箱" id="email" name="email"
                   value="${userLogin.email}"><br>
            <input class="user-information-input" type="text" placeholder="更改描述自己" id="signature" name="signature"
                   value="${userLogin.signature}"><br>
            <input class="user-information-input" type="text" placeholder="更改地址" id="address" name="address"
                   value="${userLogin.address}"><br>
            <input class="user-information-input" type="text" placeholder="更改感情状况" name="relationship"
                   value="${userLogin.relationship}"
                   id="relationship"><br>
            <input type="hidden" id="id" name="id" value="${userLogin.id}">
            <input class="user-information-input" type="submit" value="提交">
        </div>
    </form>
    <input type="button" onclick="javascript:history.back(-1);" value="返回上一页">
    <a href="/user/first">微博主页</a>
</div>
</body>
</html>
