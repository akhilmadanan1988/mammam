	
$(document).ready(function()
         {
	


		var getdata = window.location.href.slice(window.location.href.indexOf('?')+1).split('&');  
		var restId = getdata[0].split('=');
		var restName = getdata[1].split('=');
		
		//alert(restName[1]);
				
			$('#restName').append(restName[1]+' / MENU');	
			
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
	//IsValidImageUrl("https://www.google.com/logos/2012/hertz-2011-hp.gif")
	
	//sValidImageUrl("http://google.com");
			
		


				if(obj.length>0)
					{
                           
                        for(var i=0;i<obj.length;i++)
                        {
						
											
							
							$('#rest_menu_list').append('<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-thumb ui-btn-up-c"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="productDetail.html" data-transition="slide" style="padding-top:0;float:left; " class="ui-link-inherit"><img src="'+imgURL+obj[i].MenuImage+'"  onerror=this.src="images/placeholder.png";  class="ui-li-thumb"></a>	<h3 class="ui-li-heading">'+obj[i].MenuName+'</h3>	<p class="reviewContent ui-li-desc">'+obj[i].MenuDesc+'</p> <p class="menuRateSecton ui-li-desc"><span>Rs. '+obj[i].MenuPrice +'</span><a href="checkout.html" data-transition="slide" class="ui-link"><img src="images/cart.png"></a> </p> </div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>');
											
							
					
						}
					
					}
					
					else
					{
											
					alert("Sorry no Menu items to display"); 
					
					}
				
			}
			
				
			
			//<img src="http://192.168.1.119:81/mammam/Development/Sites/PublicSite/resources/img/noImage.png" onerror="this.src='http://192.168.1.119:81/mammam/Development/Sites/PublicSite/resources/img/noImage.png';">
		
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