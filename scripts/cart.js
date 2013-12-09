document.addEventListener("deviceready", onDeviceReady, false);

var cartTotal = 0;
	
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
	
	cartTotal = 0;
	var db = window.openDatabase("dbmammam", "1.0", "mammam", 1000000);
	db.transaction(getCart, errorCB);
		
	
		}

function getCart(tblCart)
		{
            var res;
			$('#cart_list').html('');
            
			tblCart.executeSql('SELECT * FROM cart', [], function(tblCarts,result){
          
                res = result.rows.item(0).restId;
                tblCarts.executeSql('SELECT * FROM cart WHERE restId='+result.rows.item(0).restId+'', [],cartSuccess,errorCart);
                
            for(var i = 0;i<result.rows.length;i++)
			{
                if(res != result.rows.item(i).restId)
                {
                    
                tblCarts.executeSql('SELECT * FROM cart WHERE restId='+result.rows.item(i).restId+'', [],cartSuccess,errorCart);
                 res = result.rows.item(i).restId;
                }
                else
                {
                    
                    
                }
             }
              
            }, errorCart);
			
			
		}	

function cartSuccess(tblCart,result)
		{
		            
             $('#cart_list').append('<div class="ui-grid-c cartHeader topBorderSeperation" style="color:red;"> '+result.rows.item(0).restName+' </div>');
			
		for(var i = 0;i<result.rows.length;i++)
			{	   
				
			//alert(result.rows.item(i).menuName+" qty: "+result.rows.item(i).menuTotal);
               		
				$('#cart_list').append('<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-thumb ui-btn-hover-c ui-btn-up-c"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a data-transition="slide" style="padding-top:0;float:left; " class="ui-link-inherit"> <img src="'+imgURL+result.rows.item(i).imageUrl+'"  onerror=this.src="images/placeholder.png"; class="ui-li-thumb"></a> <h3 class="ui-li-heading">'+result.rows.item(i).menuName+'</h3> <div class="ui-grid-a ui-responsive "> 	<div class="ui-block-a"> <div class="ui-body ui-body-d centerAlign" style="padding-top:0 "> <span><b>Quantity</b></span> <div class="ui-grid-b ui-responsive"> <div class="ui-block-a"><div class="ui-body ui-body-d" style="text-align:right; "><img src="images/minus.png" style="margin-right:2px; " onclick="minusQty('+result.rows.item(i).id +',\''+result.rows.item(i).attrId +'\')"></div></div> <div class="ui-block-b"><div class="ui-body ui-body-d"><input type="text" value="'+result.rows.item(i).menuQty+'" class="ui-input-text ui-body-d ui-corner-all ui-shadow-inset" id="mnQty'+result.rows.item(i).id+'"></div></div> <div class="ui-block-c"><div class="ui-body ui-body-d" style="text-align:left; "><img src="images/plus.png" style="margin-left:2px; " onclick="plusQty('+result.rows.item(i).id +',\''+result.rows.item(i).attrId +'\')"></div></div> 	</div><!-- /grid-b --> </div> </div> <div class="ui-block-b"><div class="ui-body ui-body-d centerAlign" style="padding-top:0 ">  <span style="margin-left: 20px;"><b>MRP</b></span> <div class="ui-grid-b ui-responsive"> <div class="ui-block-a"><div class="ui-body ui-body-d" style="text-align:right; ">&nbsp;</div></div> <div class="ui-block-b"><div class="ui-body ui-body-d" style="width:200%;margin-top:5px;"><b>'+result.rows.item(i).menuTotal+'</b></div></div> 	<div class="ui-block-c"><div class="ui-body ui-body-d" style="text-align:left; ">&nbsp;</div></div> </div><!-- /grid-b --> 	</div></div> 	</div><!-- /grid-a --> </div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>'); 
                
              
				
				cartTotal = cartTotal + (result.rows.item(i).menuTotal);
			}
            
            $('#cart_total').html('');
			$('#cart_total').append('<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-thumb ui-btn-hover-c ui-btn-up-c"><div data-theme="f" class="ui-bar ui-grid-a"> <div class="ui-block-a" style="text-align:right;width:75%">Taxes : &nbsp;</div>	 <div class="ui-block-b" style="text-align:left;width:25%">      <img src="http://static1.justeat.in/assets/images/mobile/rupee-symbol.png" height="10px"> <span id="delivery_charges">0.00</span> </div> </div></li>');
			
			$('#cart_total').append('<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-thumb ui-btn-hover-c ui-btn-up-c"><div data-theme="f" class="ui-bar ui-grid-a"> <div class="ui-block-a" style="text-align:right;width:75%">Total : &nbsp;</div>	 <div class="ui-block-b" style="text-align:left;width:25%">      <img src="http://static1.justeat.in/assets/images/mobile/rupee-symbol.png" height="10px"> <span id="delivery_charges">'+cartTotal+'</span> </div> </div></li>');
			
            
			
		}	

function minusQty(mnId,attrId)
		{
            
            
		var	mnQty = 0;
		var	MnTotPrice = 0;
		var db = window.openDatabase("dbmammam", "1.0", "mammam", 1000000);
			db.transaction(function(tx){
			
               
					tx.executeSql('SELECT * FROM cart WHERE id="'+mnId+'" AND attrId="'+attrId+'"', [], function(arg1,qRes){
						
                        
						mnQty = qRes.rows.item(0).menuQty - 1;
						if(mnQty == 0)
						{
								tx.executeSql('DELETE FROM cart WHERE id='+mnId+'  AND attrId="'+attrId+'"');
						}
						
						else
						{
						MnTotPrice =  qRes.rows.item(0).menuPrice * mnQty;
						
						tx.executeSql('UPDATE cart SET menuQty = '+mnQty+',menuTotal = '+MnTotPrice+' WHERE id='+mnId+' AND attrId="'+attrId+'"');
				
						}			
					}, errorCart);
				
				
			
				
				dbCart();
				
			}, errorCart);
			
		}

function plusQty(mnId,attrId)
		{
			 
			var	mnQty = 0;
		var	MnTotPrice = 0;
		var db = window.openDatabase("dbmammam", "1.0", "mammam", 1000000);
			db.transaction(function(tx){
				
					tx.executeSql('SELECT * FROM cart WHERE id="'+mnId+'"  AND attrId="'+attrId+'"', [], function(arg1,qRes){
						
						mnQty = qRes.rows.item(0).menuQty + 1;
						
							if(mnQty == 0)
						{
								tx.executeSql('DELETE FROM cart WHERE id='+mnId+'  AND attrId="'+attrId+'"');
						}
						
						else
						{
						MnTotPrice =  qRes.rows.item(0).menuPrice * mnQty;
						
						tx.executeSql('UPDATE cart SET menuQty = '+mnQty+',menuTotal = '+MnTotPrice+' WHERE id='+mnId+'  AND attrId="'+attrId+'"');
				
						}		
						
						
					}, errorCart);
				
				
				
				
				dbCart();
			}, errorCB);
		}	
	
function errorCart(err) 
	{
		
		
    alert("Cart is empty");
		
	}


