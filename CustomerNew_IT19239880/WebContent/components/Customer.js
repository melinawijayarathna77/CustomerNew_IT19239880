 $(document).ready(function()
{
if ($("#alertSuccess").text().trim() == "")
{
$("#alertSuccess").hide();
}
$("#alertError").hide();
});

// SAVE ============================================
$(document).on("click", "#btnSave", function(event)
{
// Clear alerts---------------------
$("#alertSuccess").text("");
$("#alertSuccess").hide();
$("#alertError").text("");
$("#alertError").hide();

// Form validation-------------------
var status = validateCustomerAccountForm();

// If not valid-------------------
if (status != true)
{
$("#alertError").text(status);
$("#alertError").show();
return;
}

// If valid------------------------
var type = ($("#hidCIDSave").val() == "") ? "POST" : "PUT";
$.ajax(
{
url : "CustomerAPI",
type : type,
data : $("#formCustomerRegistration").serialize(),
dataType : "text",
complete : function(response, status)
{
onCustomerSaveComplete(response.responseText, status);
}
});
});


function onCustomerSaveComplete(response, status)
{
	if (status == "success")
	{
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success")
		{
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();
			$("#divCustomerGrid").html(resultSet.data);
		} 
		else if (resultSet.status.trim() == "error")
		{
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} 
	else if (status == "error")
	{
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
	} 
	else
	{
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}
	$("#hidCIDSave").val("");
	$("#formCustomerRegistration")[0].reset();
	}
	
	//form fill  ============================================

$(document).on("click", ".btnUpdate", function(event)
{
$("#hidCIDSave").val($(this).closest("tr").find('#hidCIDUpdate').val());
$("#cname").val($(this).closest("tr").find('td:eq(0)').text());
$("#email").val($(this).closest("tr").find('td:eq(1)').text());
$("#phoneNo").val($(this).closest("tr").find('td:eq(2)').text());
$("#password").val($(this).closest("tr").find('td:eq(3)').text());

});

//CLIENT-MODEL  ============================================

function validateCustomerAccountForm()
{
	
	// Name
	if ($("#cname").val().trim() == "")
	{
		return "Insert Customer Name.";
	}
	
	
	// Email
	if ($("#email").val().trim() == "")
	{
		return "Insert Email.";
	}
	
	// PhoneNo
	if ($("#phoneNo").val().trim() == "")
	{
		return "Insert Phone Number.";
	}
	
	// Password
	if ($("#password").val().trim() == "")
	{
		return "Insert Password.";
	}
	
return true;
}

//DELETE
$(document).on("click", ".btnRemove", function(event)
{
	$.ajax(
	{
		url : "CustomerAPI",
		type : "DELETE",
		data : "cid=" + $(this).data("cid"),
		dataType : "text",
		complete : function(response, status)
		{
			onCustomerDeleteComplete(response.responseText, status);
		}
	});
});


function onCustomerDeleteComplete(response, status)
{
	if (status == "success")
	{
		var resultSet = JSON.parse(response);
			if (resultSet.status.trim() == "success")
			{
				$("#alertSuccess").text("Successfully deleted.");
				$("#alertSuccess").show();
				$("#divCustomerGrid").html(resultSet.data);
			} else if (resultSet.status.trim() == "error")
				
			{
				$("#alertError").text(resultSet.data);
				$("#alertError").show();
			}
	
	} else if (status == "error")
	{
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
	} else
	{
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
}