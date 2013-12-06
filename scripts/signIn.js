var signInUserId;
var signInUserName;
var signInUserPassword;
var signInUserFirstName;
function signIn()
{
    
            userPas = document.getElementById("signPass").value;
			userName = document.getElementById("signinEmail").value;
            
    
    if(userName==""||userPas=="")
		{
            alert("Please fill all the fields.");
                    
        }
    
    else
    {
      checkEmail();
        
    }
    
    
}


function checkEmail() {

     signInUserName = document.getElementById('signinEmail').value;
     signInUserPassword = document.getElementById("signPass").value;
    
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(signInUserName)) 
	{
	
    alert('Please provide a valid email address');
   signInUserName.focus;
    return false;
	
	}
	
	else
	{
        
		actionUrl = rootPath;
        data = {ajaxRequest:true,method:'validateCustomerLogin',argumentz:'{"userName":"'+signInUserName+'","password":"'+signInUserPassword+'"}'};
			intiateAjaxRequest("POST", actionUrl, data, signInResp, errorInSignIn);
        
	return true;
	}
 }

function signInResp(response)
{
   
    $.mobile.loading( "hide" );
    
//    alert(JSON.stringify(response, null, 2));
    
    var signInRes = JSON.parse(JSON.stringify(response, null, 2));
    
     
//     alert(signInRes.status);
    
    if(String(signInRes.status) == "success")
    {
        
        alert(signInRes.message);
        signInUserId = signInRes.intCustomerId;
        signInUserFirstName = signInRes.strFirstName;
        
        var db = window.openDatabase("dbmammam", "1.0", "mammam", 1000000);
		db.transaction(populateDBSignIn, errorSignIn, successSignIn);
        
    }
    
    if(String(signInRes.status) == "faild")
    {
        
         alert(signInRes.message);
        
    }
    
}


function populateDBSignIn(tx)
{
    
    
     tx.executeSql('CREATE TABLE IF NOT EXISTS settings (custId unique, userName, email unique,phNo,password,address,zipcode,isActive)');
		tx.executeSql('DELETE FROM settings');
		 tx.executeSql('INSERT INTO settings (custId, userName, email,phNo,password,isActive) VALUES("'+signInUserId+'","'+signInUserFirstName+'","'+signInUserName+'","","'+signInUserPassword+'","Y")');
    
}


function errorSignIn(tx, err)
{
    
    
    alert("some error occured");
    
}

function successSignIn(tblCart,result)
{
      
    document.location.href = 'index.html';
    
}


function errorInSignIn(response, status, xhr)
{
    
    $.mobile.loading( "hide" );
    
    alert("Sorry some error occured");
  
    
}

function forgetPwd()
{
    
    var frg_pwd = document.getElementById("frgEmail").value;
    
   var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(frg_pwd)) 
	{
	
    alert('Please provide a valid email address');
        
        
    }
    
    
    else
    {
        
        actionUrl = rootPath;
        data = {ajaxRequest:true,method:'forgotPasswordCustomer',argumentz:'{"option":"checkExists","email":"'+frg_pwd+'","code":0}'};
			intiateAjaxRequest("POST", actionUrl, data, frgInResp, errorInSignIn);
        
    }
    
    
    
}


function frgInResp(response)
{
    
    $.mobile.loading( "hide" );
    
//    alert(JSON.stringify(response, null, 2));
    
    var frgPwdnRes = JSON.parse(JSON.stringify(response, null, 2));
    
    
    
    if(frgPwdnRes.status == 1)
    {
        
        alert("Please check your email");
        
        $( "#popupForPwd" ).popup( "close" )
        
    }
    else if(frgPwdnRes.status == 0)
    {
        
        alert("email not found");
    }
    
    
}

