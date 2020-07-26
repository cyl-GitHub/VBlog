<%--
  Created by IntelliJ IDEA.
  User: DongJiaqi
  Date: 2019/7/7
  Time: 21:08
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>微微博用户注册页面</title>
    <script src="${requestScope.ContextPath}/jquery-2.1.1/jquery.min.js"></script>
    <script src="${requestScope.ContextPath}/jquery-2.1.1/jquery.js"></script>
    <link rel="stylesheet" href="${requestScope.ContextPath}/css/userRegister.css">
</head>
<body>
<form action="/user/userRegister" method="post">
    <div class="register-total">
        <div class="register-title"><b>欢迎注册您的微微博</b></div>
        <div class="register-logo"></div>
        <input class="register-input" type="text" placeholder="请输入您的昵称" name="name" id="name"><br>
        <input class="register-input" type="password" placeholder="请输入您的密码" name="password" id="password"><br>
        <div class="register-sex"><label>性 别 :&nbsp;&nbsp;
            <input type="radio" name="sex" value="男" checked="checked"/>男&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="radio" name="sex" value="女"/>女 <br></label></div>
        <input class="register-input" type="text" placeholder="请输入您的电话号码" id="telephone" name="telephone"><br>
        <input class="register-input" type="text" placeholder="请输入您的邮箱" id="email" name="email"><br>
        <input class="register-input" type="text" placeholder="用一句话描述自己" id="signature" name="signature"><br>
        <input class="register-input" type="text" placeholder="地址" id="address" name="address"><br>
        <input class="register-input" type="text" placeholder="感情状况" name="relationship" id="relationship"><br>
        <input class="register-input" type="submit" value="提交">
        <br>
        <input class="register-input" type="text" style="border: 0px" value="${result}">
    </div>
</form>
</body>
</html>
