document.addEventListener("deviceready", onDeviceReady, false);

var checkoutTotal = 0.00;
function onDeviceReady() 
		{
        
		dbCheckout();	
			
		}
function dbCheckout()
		{
						
			var db = window.openDatabase("dbmammam", "1.0", "mammam", 1000000);
			db.transaction(getCartItems, errorCheckout);
			
		}

function getCartItems(tblCart)
		{
			
		tblCart.executeSql('SELECT * FROM cart', [], checkoutSuccess, errorCheckout);	
			
			
		}


function checkoutSuccess(tblCart,result)
		{
			$('#checkoutItems').html('');
			
			for(var i = 0;i<result.rows.length;i++)
			{	
			
					$('#checkoutItems').append('<div class="ui-grid-c" style="border-bottom:1px dashed #aaaaaa;font-size:14px;margin-top:10px;">     		<div class="ui-block-a" style="text-align:left;"> 		'+result.rows.item(i).menuName+'  		</div>    	<div class="ui-block-b" style="text-align:center;">     		Rs '+result.rows.item(i).menuPrice+'</div>    	<div class="ui-block-c" style="text-align:center;">     		'+result.rows.item(i).menuQty+'     	</div>     	<div class="ui-block-d" style="margin-bottom:10px;text-align:right; ">   Rs			'+result.rows.item(i).menuTotal+'   	</div>    	  </div>');
			
			checkoutTotal = (checkoutTotal) +  (result.rows.item(i).menuTotal);	
				
			}
		
			
			$('#checkoutItems').append('<div data-theme="f" class="ui-bar ui-grid-a" style="margin-top:10px;"> <div class="ui-block-a" style="text-align:right;width:75%">Sub-total : &nbsp;</div>	<div class="ui-block-b" style="text-align:left;width:25%">   <img src="http://static1.justeat.in/assets/images/mobile/rupee-symbol.png" height="10px"> <span id="subtotal">'+checkoutTotal+'</span>   </div> </div>');
			
			$('#checkoutItems').append('<div data-theme="f" class="ui-bar ui-grid-a"> 	<div class="ui-block-a" style="text-align:right;width:75%">Taxes : &nbsp;</div>	 <div class="ui-block-b" style="text-align:left;width:25%">    <img src="http://static1.justeat.in/assets/images/mobile/rupee-symbol.png" height="10px">   <span id="tax">0.00</span>    </div> </div>');
			
			
			$('#checkoutItems').append('<div data-theme="f" class="ui-bar ui-grid-a"> <div class="ui-block-a" style="text-align:right;width:75%">Container Charges : &nbsp;</div>	  <div class="ui-block-b" style="text-align:left;width:25%"> <img src="http://static1.justeat.in/assets/images/mobile/rupee-symbol.png" height="10px"> <span id="container_charges">0.00</span> </div> </div>');
			
			$('#checkoutItems').append('<div data-theme="f" class="ui-bar ui-grid-a"> <div class="ui-block-a" style="text-align:right;width:75%">Delivery Charges : &nbsp;</div>	 <div class="ui-block-b" style="text-align:left;width:25%">      <img src="http://static1.justeat.in/assets/images/mobile/rupee-symbol.png" height="10px"> <span id="delivery_charges">0.00</span> </div> </div>');
			
			$('#checkoutItems').append('<div data-theme="f" class="ui-bar ui-grid-a"> <div class="ui-block-a" style="text-align:right;width:75%">Total : &nbsp;</div>	  <div class="ui-block-b" style="text-align:left;width:25%">  <img src="http://static1.justeat.in/assets/images/mobile/rupee-symbol.png" height="10px">  <span id="grand_total">'+checkoutTotal+'</span>  </div> </div>');
			
			$('#checkoutItems').append('<div class="ui-grid-a" style="margin-bottom:15px; "> <div class="ui-block-a"> 	<div data-role="fieldcontain" class="ui-field-contain ui-body ui-br"><a ="cart.html" data-transition="slide" data-ajax="false" class="ui-link actionBut"><div data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="c" data-disabled="false" class="ui-submit ui-btn ui-btn-up-c ui-shadow ui-btn-corner-all" aria-disabled="false"><span class="ui-btn-inner"><span class="ui-btn-text">EDIT ORDER</span></span><input type="submit" value="EDIT ORDER" class="ui-btn-hidden" data-disabled="false"></div></a></div>       </div> <div class="ui-block-b"> 		<div data-role="fieldcontain" class="ui-field-contain ui-body ui-br"><a href="#" data-transition="slide" data-ajax="false" class="ui-link actionBut"><div data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="c" data-disabled="false" class="ui-submit ui-btn ui-shadow ui-btn-corner-all ui-btn-up-c" aria-disabled="false"><span class="ui-btn-inner"><span class="ui-btn-text">ORDER NOW</span></span><input type="submit" value="ORDER NOW" class="ui-btn-hidden" data-disabled="false"></div></a></div>        </div>	    </div>');
			
		}

function errorCheckout()
		{
			
			alert("some error occured");
			
			
		}