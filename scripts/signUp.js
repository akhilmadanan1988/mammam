
var userName;
var userEmail;
var userPhoneNo;
var userPass;
var userPassCon;
var userId;

function submitSignUp()
{

			userName = document.getElementById("userName").value;
			userEmail = document.getElementById('userEmail').value;
			userPhoneNo = document.getElementById('userPh').value;
			userPass = encodeURI(document.getElementById('userPass').value);
			userPassCon = document.getElementById('userPasscon').value;
			


	
	if(userName==""||userEmail==""||userPhoneNo==""||userPass==""||userPassCon=="")
		{
		alert("Please enter all the fields");
		}
	else{	
	
	var e = checkEmail();
	
	if(e == true)
	{
			//alert(document.getElementById("userName").value);
			
			
			if( userPass ==  userPassCon)
			{
				
				getData();
				
			}
			else
			{
			alert("Password are not matching");
			}
	}
	}

}

function checkEmail() {

    var email = document.getElementById('userEmail');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) 
	{
	
    alert('Please provide a valid email address');
    email.focus;
    return false;
	
	}
	
	else
	{
		
	return true;
	}
 }

function emailValidate(response)
{
	
	
	
	
}
 
 
 
	function getData(){
	
			actionUrl = rootPath;
			data = {ajaxRequest:true,method:'newCustomerSignup',argumentz:'{"firstName":"'+userName+'","password":"'+userPass+'","phone":"'+userPhoneNo+'","email":"'+userEmail+'","isActive":"Y"}'};
			intiateAjaxRequest("POST", actionUrl, data, response, errorInProcessing);
			
			}
			
	function response(result)
	{
	$.mobile.loading( "hide" );
	
	alert(result.intCustomerId);
		
		userId = result.intCustomerId;
	//var obj = (result[0].intCount);
		
		var db = window.openDatabase("dbmammam", "1.0", "mammam", 1000000);
		db.transaction(populateDB, errorCB, successCB);
	
	}
	
	
	function errorInProcessing(d)
			{
			
			$.mobile.loading( "hide" );
			alert('Some errors occured. Please try again');
			
			}

function populateDB(tx) 
	{
	
		
		 tx.executeSql('CREATE TABLE IF NOT EXISTS settings (custId unique, userName, email unique,phNo,password,isActive)');
		tx.executeSql('DELETE FROM settings');
		 tx.executeSql('INSERT INTO settings (custId, userName, email,phNo,password,isActive) VALUES("'+userId+'","'+userName+'","'+userEmail+'","'+userPhoneNo+'","'+userPass+'","Y")');
	
	}

function successCB()
	{
   
		alert("success!");
	}

function errorCB(err) 
	{
		
		
    alert("Error processing SQL: "+err);
		
	}
	