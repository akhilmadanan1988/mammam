document.addEventListener("deviceready", onDeviceReady, false);


function onDeviceReady() 
		{
        
			checkConnection();
			dbCart();
			
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

function dbCart()
		{	
	
	
	var db = window.openDatabase("dbmammam", "1.0", "mammam", 1000000);
	db.transaction(getCart, errorCB);
		
	
		}

function getCart(tblCart)
		{
			
			tblCart.executeSql('SELECT * FROM cart', [], cartSuccess, errorCart);
			
			
		}	

function cartSuccess(tblCart,result)
		{
			
		for(var i = 0;i<result.rows.length;i++)
			{	
				
			alert(result.rows.item(i).menuName+" qty: "+result.rows.item(i).menuQty);
				
			}
			
		}	
	
function errorCart(err) 
	{
		
		
    alert("Error  SQL: "+err);
		
	}