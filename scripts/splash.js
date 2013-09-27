

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
                  
				  
		

					});
		
		