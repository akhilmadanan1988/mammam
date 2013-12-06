
var profileUserId;
var storedOldPass;
var userFirstName;
var address;
var zip;
var oldpass;
var newPass;
var confPass;

document.addEventListener("deviceready", onDeviceReady, false);

function submitProfile()
{
    
    
     userFirstName = document.getElementById('firstName').value;
     address = document.getElementById('address').value;
     zip = document.getElementById('zip').value;
     oldpass = document.getElementById('oldpass').value;
     newPass= document.getElementById('newPass').value;
     confPass= document.getElementById('confPass').value;
    
    if(userFirstName == "" || address == ""|| zip == "" || oldpass == "" || newPass == "" || confPass == "")
    {
        
        
        alert("Please fill all the field.");
        
        
    }
    
    else  
    {
        if(storedOldPass == oldpass )
        {
        if(newPass == confPass)
        {
            if(storedOldPass != newPass)
            {
            
            actionUrl = rootPath;
        data = {ajaxRequest:true,method:'updateCustomerMob',argumentz:'{"name":"'+userFirstName+'","address":"'+address+'","zipcode":"'+zip+'","password":"'+newPass+'","userId":'+profileUserId+'}'};
			intiateAjaxRequest("POST", actionUrl, data, profileReponse, errorOnProfile);
            }
            else
            {
                
                 alert("Your old password and new password are same"); 
            }
            
        }
        else
        {
        alert("password is not matching");    
            
        }
        }
        else
        {
        alert("Wrong password");    
            
        }
        
    }
    
    
}

function profileReponse(response)
{
    
    
     $.mobile.loading("hide");
    
//    alert(JSON.stringify(response, null, 2));
    
    var profileInRes = JSON.parse(JSON.stringify(response, null, 2));
    
    
    
    if(profileInRes.isUpdateSuccess == 1)
    {
        
         var db = window.openDatabase("dbmammam", "1.0", "mammam", 1000000);
		db.transaction(function(tx)
                       {
                                                      
                           tx.executeSql('UPDATE settings SET userName= "'+userFirstName+'",password= "'+newPass+'",address= "'+address+'",zipcode= "'+zip+'" WHERE custId= "'+profileUserId+'"');
                           
                       alert("Success fully updated" );   
                           
                       }, errorOnProfile);
         
        
    }
    
    
}


function onDeviceReady() {
    // Now safe to use the PhoneGap API
   
     var db = window.openDatabase("dbmammam", "1.0", "mammam", 1000000);
		db.transaction(getUserDetails, errorOnProfile);

}



       
function getUserDetails(tx)
{
   
    
     tx.executeSql('CREATE TABLE IF NOT EXISTS settings (custId unique, userName, email unique,phNo,password,address,zipcode,isActive)');
		tx.executeSql('SELECT * FROM settings', [], userDetailsSuccess, errorOnProfile);
    
    
}

function userDetailsSuccess(tblSettings,result)
{
    
    if(result.rows.length == 1)
			{
               
               
                 document.getElementById('firstName').value = result.rows.item(0).userName;
                 document.getElementById('address').value  = result.rows.item(0).address;
                 document.getElementById('zip').value = result.rows.item(0).zipcode;
                
                
                  profileUserId = result.rows.item(0).custId;
                  storedOldPass =  result.rows.item(0).password;
                
            }    
    
}

function errorOnProfile()
{
    
 alert("Error");   
    
    
}