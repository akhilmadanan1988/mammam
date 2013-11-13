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
				
			//alert(result.rows.item(i).menuName+" qty: "+result.rows.item(i).menuTotal);
			
				$('#cart_list').append('<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-thumb ui-btn-up-c"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="productDetail.html" data-transition="slide" style="padding-top:0;float:left; " class="ui-link-inherit"> 			<img src="images/chicken.png" class="ui-li-thumb"></a> 		<h3 class="ui-li-heading">'+result.rows.item(i).menuName+'</h3> 			<div class="ui-grid-a ui-responsive "> 			<div class="ui-block-a"> 			<div class="ui-body ui-body-d centerAlign" style="padding-top:0 "> 				<span><b>Quantity</b></span> 					<div class="ui-grid-b ui-responsive"> 						<div class="ui-block-a"><div class="ui-body ui-body-d" style="text-align:right; "><img src="images/minus.png" style="margin-right:2px; "></div></div> 						<div class="ui-block-b"><div class="ui-body ui-body-d"><div class="ui-input-text ui-shadow-inset ui-corner-all ui-btn-shadow ui-body-d"><input type="text" value="'+result.rows.item(i).menuQty+'" class="ui-input-text ui-body-d"></div></div></div> 						<div class="ui-block-c"><div class="ui-body ui-body-d" style="text-align:left; "><img src="images/plus.png" style="margin-left:2px; "></div></div>  					</div><!-- /grid-b --> 							 					</div> 				</div> 				<div class="ui-block-b"><div class="ui-body ui-body-d centerAlign" style="padding-top:0 "> 				<span style="margin-left: 20px;"><b>MRP</b></span>  			<div class="ui-grid-b ui-responsive"> 						<div class="ui-block-a"><div class="ui-body ui-body-d" style="text-align:right; ">&nbsp;</div></div> 					<div class="ui-block-b"><div class="ui-body ui-body-d" style="width:200%;margin-top:5px;"><b>'+result.rows.item(i).menuTotal+'</b></div></div>  						<div class="ui-block-c"><div class="ui-body ui-body-d" style="text-align:left; ">&nbsp;</div></div> 			</div><!-- /grid-b -->  									</div></div>			</div><!-- /grid-a --> 				</div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>'); 
			}
			
		}	
	
function errorCart(err) 
	{
		
		
    alert("Error  SQL: "+err);
		
	}