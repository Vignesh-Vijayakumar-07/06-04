<%@ taglib prefix="s" uri="/struts-tags" %>

<html>

<head> 
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"> 
    <title>USER MANAGEMENT :: Error Page</title>
</head>

<body>
    <s:if test="#request.getAttribute('org.apache.struts.action.ERROR') != null">
        <s:property value="#request.getAttribute('org.apache.struts.action.ERROR').getMessage()"/>
    </s:if>
    
    <h4>Contact Administrator to Add Your Bank Id</h4>
    
    <s:url var="genericAccountLoginUrl" action="genericAccountLogin">
        <s:param name="redirectUrl">https://mfaig.global.standardchartered.com:443/odsrdm</s:param>
    </s:url>
    
    <a href="<s:property value="#genericAccountLoginUrl"/>">Go to Home page for GenericID User</a>
</body>

</html>
