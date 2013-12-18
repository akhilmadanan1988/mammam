document.addEventListener("deviceready", onDeviceReady, false);

 

var checkoutRestIds = new Array();


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
            deliveryCheck();  
			$('#checkoutItems').html('');
            
            if(result.rows.length == 0)
            {
                
             document.getElementById('shippingDetails').style.display ='none';   
                
            }
			
			for(var i = 0;i<result.rows.length;i++)
			{	
			 
					$('#checkoutItems').append('<div class="ui-grid-c" style="border-bottom:1px dashed #aaaaaa;font-size:14px;margin-top:10px;">     		<div class="ui-block-a" style="text-align:left;"> 		'+result.rows.item(i).menuName+'  		</div>    	<div class="ui-block-b" style="text-align:center;">     		Rs '+result.rows.item(i).menuPrice+'</div>    	<div class="ui-block-c" style="text-align:center;">     		'+result.rows.item(i).menuQty+'     	</div>     	<div class="ui-block-d" style="margin-bottom:10px;text-align:right; ">   Rs			'+result.rows.item(i).menuTotal+'   	</div>    	  </div>');
                
               if(checkoutRestIds.indexOf(result.rows.item(i).restId) == -1) 
                    {
			             checkoutRestIds[i] = result.rows.item(i).restId;
                   
                       // alert(result.rows.item(i).restId);
                    }
                
                
			checkoutTotal = (checkoutTotal) +  (result.rows.item(i).menuTotal);	
                
                
				
			}
		
			
			$('#checkoutItems').append('<div data-theme="f" class="ui-bar ui-grid-a" style="margin-top:10px;text-align:right;;width:100%"> <div class="ui-block-a" style="text-align:right;width:75%">Sub-total : &nbsp;</div>	<div class="ui-block-b" style="text-align:left;width:25%">   MYR <span id="subtotal">'+checkoutTotal+'</span>   </div> </div>');
			/*
			$('#checkoutItems').append('<div data-theme="f" class="ui-bar ui-grid-a"> 	<div class="ui-block-a" style="text-align:right;width:75%">Taxes : &nbsp;</div>	 <div class="ui-block-b" style="text-align:left;width:25%">    <img src="http://static1.justeat.in/assets/images/mobile/rupee-symbol.png" height="10px">   <span id="tax">0.00</span>    </div> </div>');
			
			
			$('#checkoutItems').append('<div data-theme="f" class="ui-bar ui-grid-a"> <div class="ui-block-a" style="text-align:right;width:75%">Container Charges : &nbsp;</div>	  <div class="ui-block-b" style="text-align:left;width:25%"> <img src="http://static1.justeat.in/assets/images/mobile/rupee-symbol.png" height="10px"> <span id="container_charges">0.00</span> </div> </div>');
            
            */
			
			$('#checkoutItems').append('<div data-theme="f" class="ui-bar ui-grid-a" style="text-align:right;;width:100%"> <div class="ui-block-a" style="text-align:right;width:75%">Delivery Charges : &nbsp;</div>	 <div class="ui-block-b" style="text-align:left;width:25%">      MYR <span id="delivery_charges">0.00</span> </div> </div>');
			
			$('#checkoutItems').append('<div data-theme="f" class="ui-bar ui-grid-a" style="text-align:right;;width:100%"> <div class="ui-block-a" style="text-align:right;width:75%">Total : &nbsp;</div>	  <div class="ui-block-b" style="text-align:left;width:25%">  MYR  <span id="grand_total">'+checkoutTotal+'</span>  </div> </div>');
            
            
            /*
			
			$('#checkoutItems').append('<div class="ui-grid-a" style="margin-bottom:15px; "> <div class="ui-block-a"> 	<div data-role="fieldcontain" class="ui-field-contain ui-body ui-br"><a ="cart.html" data-transition="slide" data-ajax="false" class="ui-link actionBut"><div data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="c" data-disabled="false" class="ui-submit ui-btn ui-btn-up-c ui-shadow ui-btn-corner-all" aria-disabled="false"><span class="ui-btn-inner"><span class="ui-btn-text">EDIT ORDER</span></span><input type="submit" value="EDIT ORDER" class="ui-btn-hidden" data-disabled="false"></div></a></div>       </div> <div class="ui-block-b"> 		<div data-role="fieldcontain" class="ui-field-contain ui-body ui-br"><a href="#" data-transition="slide" data-ajax="false" class="ui-link actionBut"><div data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="c" data-disabled="false" class="ui-submit ui-btn ui-shadow ui-btn-corner-all ui-btn-up-c" aria-disabled="false"><span class="ui-btn-inner"><span class="ui-btn-text">ORDER NOW</span></span><input type="submit" value="ORDER NOW" class="ui-btn-hidden" data-disabled="false"></div></a></div>        </div>	    </div>');
            
              */
           
            
			
		}

function deliveryCheck()
    {
        
            actionUrl = rootPath;
            data = {ajaxRequest:true,method:'getAreaList',argumentz:'{"isFilter":"0","stateId":"0"}'};
            intiateAjaxRequest("POST", actionUrl, data, deliveryLIstResponse, errorCheckout);
        
        
            actionUrl = rootPath;
            data = {ajaxRequest:true,method:'getDeliveryTime',argumentz:'{}'};
            intiateAjaxRequest("POST", actionUrl, data, getDeliveryTime, errorCheckout);
        
            actionUrl = rootPath;
            data = {ajaxRequest:true,method:'getPaymentTypes',argumentz:'{}'};
            intiateAjaxRequest("POST", actionUrl, data, getPaymentTypes, errorCheckout);
        
        
            
        
   
    }

function deliveryLIstResponse(result)
{
    
    $.mobile.loading( "hide" );
    
    if(typeof result=="object")
			{
		
			//var menuObj = JSON.parse(result);
//			         menuDetails(result);
                
//                alert(result.length);
                
				for(var i = 0; i<result.length; i++)
                    {
                 
                    var res = (result[i]);
                        
//                        alert(res[0]);
                        
                    $('#deliveryLocation').append('<option value='+res[0]+'>'+res[1]+'</option>');                      
                    
                    
                    }
			}
			
			else
			{
				//alert(JSON.parse(result));
				
//					menuDetails(JSON.parse(result));
                var r = JSON.parse(result);
                 alert(r.length);
               
			}
    
    
    
}


function getDeliveryTime(response)
{
    for(var i = 0;i<response.length;i++)
    {
        
       
   $('#deliveryTime').append('<option value='+response[i].id+'>'+response[i].desc+' : '+response[i].startTime+' to '+response[i].endTime+'</option>');
    }
    
       
            actionUrl = rootPath;
            data = {ajaxRequest:true,method:'getRestaurantValidationInCart',argumentz:'{"restrntIdList":"'+checkoutRestIds+'"}'};
            intiateAjaxRequest("POST", actionUrl, data, getDeliveryDate, errorCheckout);
    
//    alert(response[0].id);
    
    
}

function getDeliveryDate(response)
{
     $.mobile.loading( "hide" );
    
        var respArray = response.RestaurantHolyDays;
        var restHolidays = new Array();
    
    
    
    for(var i =0;i<respArray.length; i++ )
        {
             
             restHolidays[i] = respArray[i].RestaurantHolyDays;
                
        }
    
   
    
 var todayDate = new Date();
    
    var day = todayDate.getDate();
    var month = todayDate.getMonth() + 1;
    var year = todayDate.getFullYear();
    var restHolidaysList = new Array();
    
    
    for(var i =0; i<15; i++)
      {
        
        var loopDate = new Date(year, month - 1, day + i);
          var strDate = loopDate.getFullYear()+'-'+ (loopDate.getMonth() + 1)+'-'+loopDate.getDate();
          
            
          
          if(restHolidays.indexOf(strDate) > (-1))
                {
              
                
            // alert(restHolidays +" " +strDate);
                    
                    
                    
              
                }
          else
             {
              
          restHolidaysList.push(strDate);  
              
             $('#deliveryDime').append('<option value='+strDate+'>'+strDate+'</option>');
              
            }
          
             
      }
    
   
    
    
}


function getPaymentTypes(response)
{
    
    
    for(var i = 0;i<response.length;i++)
    {
        
        var res = (response[i]);
        $('#paymentMethode').append('<option value='+res[0]+'>'+res[1]+'</option>');
    
    }
    
}


function errorCheckout()
		{
			 document.getElementById('shippingDetails').style.display ='none';   
			alert("some error occured");			
			
		}