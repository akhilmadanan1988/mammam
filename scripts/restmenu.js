	
$(document).ready(function()
         {
	


		var getdata = window.location.href.slice(window.location.href.indexOf('?')+1).split('&');  
		var restId = getdata[0].split('=');
				
				
				
			 chk();
		function chk(){
			actionUrl = rootPath;
			data = {ajaxRequest:true,method:'getProductList',argumentz:'{"restaurantId":"'+restId[1]+'","pageStart":0,"pageLimit":3}'};
			intiateAjaxRequest("POST", actionUrl, data, res, errorInProcessing);
			}
		
		function res(result){
		
		$.mobile.loading( "hide" );
		var obj = (JSON.parse(result))[0].MenuData;
			
		//alert(obj[0].RestaurantName);
		
			
				if(obj.length>0)
					{
                           
                        for(var i=0;i<obj.length;i++)
                        {
						
						if((obj[i].MenuImage).indexOf("http") != -1)
							{
		
							$('#rest_menu_list').append('<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-thumb ui-btn-up-c"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="productDetail.html" data-transition="slide" style="padding-top:0;float:left; " class="ui-link-inherit"><img src="'+obj[i].MenuImage+'" class="ui-li-thumb"></a>	<h3 class="ui-li-heading">'+obj[i].MenuName+'</h3>	<p class="reviewContent ui-li-desc">'+obj[i].MenuDesc+'</p> <p class="menuRateSecton ui-li-desc"><span>Rs. '+obj[i].MenuPrice +'</span><a href="checkout.html" data-transition="slide" class="ui-link"><img src="images/cart.png"></a> </p> </div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>');
							
							}
							
						else
							{
							
							$('#rest_menu_list').append('<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-thumb ui-btn-up-c"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="productDetail.html" data-transition="slide" style="padding-top:0;float:left; " class="ui-link-inherit"><img src="images/placeholder.png" class="ui-li-thumb"></a>	<h3 class="ui-li-heading">'+obj[i].MenuName+'</h3>	<p class="reviewContent ui-li-desc">'+obj[i].MenuDesc+'</p> <p class="menuRateSecton ui-li-desc"><span>Rs. '+obj[i].MenuPrice +'</span><a href="checkout.html" data-transition="slide" class="ui-link"><img src="images/cart.png"></a> </p> </div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>');
				
							
							}
						}
					
					}
					
					else
					{
											
					alert("Sorry no Menu items to display"); 
					
					}
				
			}
		
		function intiateAjaxRequest(method, url, data, callBackFunction, erroFunction)
			{
			$.mobile.loading( "show", {
			text: "Loding",
			textVisible: true,
			theme: "A",
			html: ""
				});
				
			$.ajax({
			url: url,
			type: method, 
			data:data,
			success:callBackFunction,
			error:erroFunction
				});
			}
		function errorInProcessing()
			{
			$.mobile.loading( "hide" );
			alert('Some errors occured. Please try again');
			}
			
			
	});