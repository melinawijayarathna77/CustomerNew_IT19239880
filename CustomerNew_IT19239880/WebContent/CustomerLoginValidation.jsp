<%@ page import ="java.sql.*" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="views/bootstrap.min.css">
</head>
<body>
<% 
String cname = request.getParameter("cname");    
    String password = request.getParameter("password");
    Class.forName("com.mysql.jdbc.Driver");
    Connection con = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/customer", "root", "");
    Statement st = con.createStatement();
    ResultSet rs;
    rs = st.executeQuery("select * from account where cname='" + cname + "' and password='" + password + "'");
    if (rs.next()) {
        session.setAttribute("cname", cname);
        out.println("Welcome Customer!");
       
    } else {
        out.println("Invalid Customer");
    }
%>
</body>
</html>