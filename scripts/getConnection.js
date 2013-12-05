document.addEventListener("deviceready", onDeviceReady, false);

var userName;



function onDeviceReady() 
		{
        
			checkConnection();
			dbCreation();
			
			
			
		}

function checkConnection() 
		{
            var networkState = navigator.connection.type;

            var states = {};
            states[Connection.UNKNOWN]  = 'Unknown connection';
            states[Connection.ETHERNET] = 'Ethernet connection';
            states[Connection.WIFI]     = 'WiFi connection';
            states[Connection.CELL_2G]  = 'Cell 2G connection';
            states[Connection.CELL_3G]  = 'Cell 3G connection';
            states[Connection.CELL_4G]  = 'Cell 4G connection';
            states[Connection.CELL]     = 'Cell generic connection';
            states[Connection.NONE]     = 'No network connection';

          
			
			if(states[networkState] == 'No network connection')
			{
			  alert('Could not connect to internet');	
			}
        }

function dbCreation()
	{
	
	var db = window.openDatabase("dbmammam", "1.0", "mammam", 1000000);
	db.transaction(populateDB, errorCB, successCB);
	}

function populateDB(tx) 
	{
	
		 tx.executeSql('CREATE TABLE IF NOT EXISTS settings (custId unique, userName, email,phNo,password,isActive)');
	
	}

function successCB()
	{
   
		//alert("success!");
		var db = window.openDatabase("dbmammam", "1.0", "mammam", 1000000);
		db.transaction(getUser,errorCB);
	}

function errorCB(err) 
	{
		
		
    alert("Error  SQL: "+err);
		
	}


	function getUser(tblSettings)
		{
			
			//alert(tblSettings);
			tblSettings.executeSql('SELECT * FROM settings', [], querySuccess, errorCB);
			
		}
	function querySuccess(tblSettings,result)
		{
			
			if(result.rows.length == 1)
			{
		//alert(result.rows.item(0).userName);
				
				  $('.panelNav').html('');
				
					$('.panelNav').append('<ul> <li class="panelnavMain "><a href="profile.html" class="ui-link">'+result.rows.item(0).userName +'</a></li>      		  	    <li><img src="images/bullet.png"><a href="recentPage.html" data-transition="slide" class="ui-link"> My Orders</a></li> <li><img src="images/bullet.png"><a href="profile.html" data-transition="slide" class="ui-link">My Profile</a></li> <li class="panelnavMain "><a href="services.html" class="ui-link">MENU</a></li>   <li href="aboutus-services_customerguide.html"><img src="images/bullet.png"><a class="ui-link">HOME</a></li> <li class=""><img src="images/bullet.png"><a href="aboutus-services-general_guide.html" class="ui-link">HOW IT WORKS</a></li> <li><img src="images/bullet.png"><a href="aboutus-services-important_notice.html" class="ui-link">ABOUT US</a></li>  <li><img src="images/bullet.png"><a href="aboutus-services_customerguide.html" class="ui-link">CONTACT US</a></li> <li class=""><img src="images/bullet.png"><a href="aboutus-services-general_guide.html" class="ui-link">GALLERY</a></li>    <li><img src="images/bullet.png"><a href="aboutus-services-important_notice.html" class="ui-link">TOP DEALS</a></li> </ul>');
				
			}
			
		}	