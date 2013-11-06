
var userName;
var userEmail;
var userPhoneNo;
var userPass;
var userPassCon;

function submitSignUp()
{

			userName = document.getElementById("userName").value;
			userEmail = document.getElementById('userEmail').value;
			userPhoneNo = document.getElementById('userPh').value;
			userPass = document.getElementById('userPass').value;
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
				
				chk();
				
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
 
 
 
	function chk(){
	
			actionUrl = rootPath;
			data = {ajaxRequest:true,method:'newCustomerSignup',argumentz:'{"firstName":"Aswathy","password":"password","phone":"45678","email":"aswathy@mammam.com","isActive":"Y"}'};
			intiateAjaxRequest("POST", actionUrl, data, res, errorInProcessing);
			
			}
			
	function res(result)
	{
	$.mobile.loading( "hide" );
	alert(result);
	}
	
	function intiateAjaxRequest(method, url, data, callBackFunction, erroFunction)
			{
			
			$.mobile.loading( "show", {
			text: "Loding",
			textVisible: true,
			theme: "A",
			html: ""
				});
				
			$.ajax({
			url: url,
			type: method, 
			data:data,
			success:callBackFunction,
			error:erroFunction
				});
			
			}
	function errorInProcessing()
			{
			$.mobile.loading( "hide" );
			alert('Some errors occured. Please try again');
			}
	