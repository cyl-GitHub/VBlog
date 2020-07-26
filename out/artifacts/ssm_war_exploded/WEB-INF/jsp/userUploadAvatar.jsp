<%--
  Created by IntelliJ IDEA.
  User: DongJiaqi
  Date: 2019/7/9
  Time: 18:24
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>微微博-上传头像</title>
</head>
<body>
<fieldset>
    <legend>
        <h1>上传头像</h1>
    </legend>
    <!-- 文件上传时必须要设置表单的enctype="multipart/form-data"-->
    <form action="/user/uploadAvatarOK" method="post" enctype="multipart/form-data">
        <input type="file" name="file"/> <br>
        <input type="submit" value="上传"/>
    </form>
</fieldset>
</body>
</html>
