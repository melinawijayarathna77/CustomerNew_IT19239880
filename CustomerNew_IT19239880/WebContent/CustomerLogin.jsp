<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" href="views/bootstrap.min.css">
<title>Customer Login</title>
</head>
<body>
<h1 class="m-3">Customer Login</h1>
<form method="post" action="CustomerLoginValidation.jsp">
User Name:
<input id="cname" name="cname" type="text" class="form-control form-control-sm">
<br/>
Password:
<input id="password" name="password" type="password" class="form-control form-control-sm">
<br/>
<input type="submit" value="Login" />
</form>

 <a href="Customer.jsp"> To be a Registered Customer </a>
</body>
</html>