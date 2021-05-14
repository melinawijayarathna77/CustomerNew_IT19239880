<%@ page import = "model.Cart" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Cart</title>
<link rel="stylesheet" href="views/bootstrap.min.css">
<script src="components/jquery-3.2.1.min.js"></script>
<script src="components/Cart.js"></script>
</head>
<body>

<form id="formCart" name="formCart" method="post" action="Cart.jsp">
<h1 class="m-3">Cart Management</h1>
<br/>

Project ID:
<input id="pid" name="pid" type="text" class="form-control form-control-sm">
<br/>
Project Type:
<input id="type" name="type" type="text" class="form-control form-control-sm">
<br/>
 Project Name:
<input id="pname" name="pname" type="text" class="form-control form-control-sm">
<br/>
Price:
<input id="price" name="price" type="text" class="form-control form-control-sm">
<br/>
 

<input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-primary">
<input type="hidden" id="hidTIDSave" name="hidTIDSave" value="">
</form>

<div id="alertSuccess" class="alert alert-success"></div>
<div id="alertError" class="alert alert-danger"></div>
	
	<br>
	<div id="divCartGrid">
	<%
		Cart cartObj = new Cart();
		out.print(cartObj.readCartDetails());
	%>
	</div>

</body>
</html>