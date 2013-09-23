

	var devices;
	document.addEventListener("deviceready", onDeviceReady, false);

    // device APIs are available
    //
    function onDeviceReady()
	{
		
        checkConnection();
		
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
			
			window.alert("No network connection.Connect to network and relaunch Mammam");
			
			 navigator.app.exitApp();
			 
			}
			else
			{
				deviceinfo();		
			}
			
			
        }
		
		function deviceinfo()
		{
				var dev = device.platform;	
					alert(dev); 
		
		}
		
	$(document).ready(function(){
                  
				  
			 getData();
			

					});
		
		function getData()
		{
		
		
		
		$.getJSON("http://192.168.1.119:81/mammam/Development/Sites/AdminSite/JSONService/getJson.php?method=getHomePage",function(result){
			
			  var obj = result[0].zoneData;
			
				   for(var i=0;i<obj.length;i++)
                        {
							//alert(obj[i].ZoneName);  
							$('#zone_name').append('<option value="">'+obj[i].ZoneName+'</option>');
							
						}
						
						
			 }).error(function(){
                                    
                                   alert("Something wromg happend!!!!"); 
								   navigator.app.exitApp();
                               
							   });
		
		}