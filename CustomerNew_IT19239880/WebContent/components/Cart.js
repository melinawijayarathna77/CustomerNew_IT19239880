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
var status = validateCartForm();

// If not valid-------------------
if (status != true)
{
$("#alertError").text(status);
$("#alertError").show();
return;
}

// If valid------------------------
var type = ($("#hidTIDSave").val() == "") ? "POST" : "PUT";
$.ajax(
{
url : "CartAPI",
type : type,
data : $("#formCart").serialize(),
dataType : "text",
complete : function(response, status)
{
onCartSaveComplete(response.responseText, status);
}
});
});


function onCartSaveComplete(response, status)
{
	if (status == "success")
	{
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success")
		{
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();
			$("#divCartGrid").html(resultSet.data);
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
	$("#hidTIDSave").val("");
	$("#formCart")[0].reset();
	}
	
	//form fill  ============================================

$(document).on("click", ".btnUpdate", function(event)
{
$("#hidTIDSave").val($(this).closest("tr").find('#hidTIDUpdate').val());
$("#pid").val($(this).closest("tr").find('td:eq(0)').text());
$("#type").val($(this).closest("tr").find('td:eq(1)').text());
$("#pname").val($(this).closest("tr").find('td:eq(2)').text());
$("#price").val($(this).closest("tr").find('td:eq(3)').text());

});

//CLIENT-MODEL  ============================================

function validateCartForm()
{
	
	// ProjectID
	if ($("#pid").val().trim() == "")
	{
		return "Insert Project ID.";
	}
	
	
	// ProjectType
	if ($("#type").val().trim() == "")
	{
		return "Insert Project Type.";
	}
	
	// ProjectName
	if ($("#pname").val().trim() == "")
	{
		return "Insert Project Name.";
	}
	
	// Price
	if ($("#price").val().trim() == "")
	{
		return "Insert Project Price.";
	}
	
	
	
return true;
}

//DELETE
$(document).on("click", ".btnRemove", function(event)
{
	$.ajax(
	{
		url : "CartAPI",
		type : "DELETE",
		data : "cartid=" + $(this).data("cartid"),
		dataType : "text",
		complete : function(response, status)
		{
			onCartDeleteComplete(response.responseText, status);
		}
	});
});


function onCartDeleteComplete(response, status)
{
	if (status == "success")
	{
		var resultSet = JSON.parse(response);
			if (resultSet.status.trim() == "success")
			{
				$("#alertSuccess").text("Successfully deleted.");
				$("#alertSuccess").show();
				$("#divCartGrid").html(resultSet.data);
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