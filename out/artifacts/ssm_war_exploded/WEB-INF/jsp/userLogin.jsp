<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>微微博登陆页面</title>
    <script src="${requestScope.ContextPath}/jquery-2.1.1/jquery.min.js"></script>
    <script src="${requestScope.ContextPath}/jquery-2.1.1/jquery.js"></script>
    <link rel="stylesheet" href="${requestScope.ContextPath}/css/userLogin.css">

</head>
<body>
<div class="login-total">
            <div class="login-title"><b>🌟他（她）们在使用微微博~</b></div>
    <div class="login-body-left">
        <table>
            <tr style="background-color: cornflowerblue">
            </tr>
          <tr>
              <td><img src="/img/star/XY.jpg"></td>
              <td><img src="/img/star/LHR.jpg" alt=""></td>
              <td><img src="/img/star/SXJJ.jpg"></td>
                <td><img src="/img/star/CK.jpg"></td>
              <td><img src="/img/star/DMM.jpg"></td>
          </tr>
            <tr>
                <td><img src="/img/star/DLRB.jpg"></td>
              <td><img src="/img/star/HG.jpg"></td>
                <td><img src="/img/star/XM.jpg"></td>
                <td><img src="/img/star/LBB.jpg"></td>
                <td><img src="/img/star/LYT.jpg"></td>
            </tr>
            <tr>
                <td><img src="/img/star/DYL.jpg"></td>
                <td><img src="/img/star/TY.jpg"></td>
                <td><img src="/img/star/TYX.jpg"></td>
                <td><img src="/img/star/ZRJ.jpg"></td>
                <td><img src="/img/star/YQ.jpg"></td>
            </tr>
        </table>
    </div>
    <div class="login-body-right">
        <div class="login-right-top"><div class="login-logo"></div></div>
        <form action="/user/userLogin" method="post">
            <div class="login-right-title">🌞欢迎您使用微微博</div>
            <input class="login-input" type="text" id="name" placeholder="输入用户名/邮箱/手机号" name="name"><br>
            <input class="login-input" type="password" placeholder="密码" id="password" name="password"><br>
            <input class="login-password-input" type="checkbox">
            <span>记住密码</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <a href="/user/register">注册微博</a> </span>

            <input class="login-buttom" type="submit" value="提交"><br>
            <input class="login-buttom" type="reset" value="重置">
        </form>
    </div>
</div>


</body>
</html>
