<%@ page import = "model.CusAccount" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
   
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Customer Registration</title>
<link rel="stylesheet" href="views/bootstrap.min.css">
<script src="components/jquery-3.2.1.min.js"></script>
<script src="components/Customer.js"></script>
</head>
<body>

<form id="formCustomerRegistration" name="formCustomerRegistration" method="post" action="Customer.jsp">
<h1 class="m-3">Customer Account Management</h1>
<br/>

Customer Name:
<input id="cname" name="cname" type="text" class="form-control form-control-sm">
<br/>
Email Address:
<input id="email" name="email" type="text" class="form-control form-control-sm">
<br/>
 Phone Number:
<input id="phoneNo" name="phoneNo" type="text" class="form-control form-control-sm">
<br/>
Password:
<input id="password" name="password" type="password" class="form-control form-control-sm">
<br/>
 

<input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-primary">
<input type="hidden" id="hidCIDSave" name="hidCIDSave" value="">
</form>

<div id="alertSuccess" class="alert alert-success"></div>
<div id="alertError" class="alert alert-danger"></div>
	
	<br>
	<div id="divCustomerGrid">
	<%
		CusAccount cusObj = new CusAccount();
		out.print(cusObj.readAccountDetails());
	%>
	</div>
</body>
</html>