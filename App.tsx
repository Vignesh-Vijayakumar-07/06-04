<%@ taglib uri="/struts-tags" prefix="s" %>
<s:if test="%{#request['org.apache.struts.action.ERROR'] != null}">
    <s:set var="aes" value="%{#request['org.apache.struts.action.ERROR']}" />
    <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
            <s:if test="%{#aes['errors'] != null}">
                <td valign="top" class="ERROR">&nbsp;&nbsp; <s:actionerror /></td>
            </s:if>
            <s:if test="%{#aes['info'] != null}">
                <td valign="top" class="INFO">&nbsp; &nbsp; <s:actionmessage /></td>
            </s:if>
        </tr>
    </table>
</s:if>
