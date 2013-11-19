	
				var getdata = window.location.href.slice(window.location.href.indexOf('?')+1).split('&');  
				
				var zoneId = getdata[0].split('=');
				var areaId = getdata[1].split('=');
				var restRating;
				var restObj;
				var restList;
				var restUrl;
			getData();
  
   function getData()
	{
		restUrl = rootPath;
		data =	{ajaxRequest:true,method:'getRestaurantList',argumentz:'{"zoneId":"'+zoneId[1]+'","areaId":"'+areaId[1]+'","pageStart":0,"pageLimit":3}'};
		intiateAjaxRequest("POST", restUrl, data, restResponse, restErrorInProcessing);
	}
	
		
	function restErrorInProcessing(response, status, xhr)
	{
			$.mobile.loading( "hide" );
			alert(status+'Some errors occured. Please try again');
			
	}
	
	function restResponse(result, textStatus , xhr)
	{
	
		
			$.mobile.loading( "hide" );
		
		
		if(typeof result=="object")
			{
		
			//var menuObj = JSON.parse(result);
			restList(result);
				
				
			}
			
			else
			{
				//alert(JSON.parse(result));
				
					restList(JSON.parse(result));
			}
				
		
			
						
		}


	function restList(result)
		{
			
			var restList = (result)[0].RestaurantData;
			
				//alert(restList[0].RestaurantId)	
				if(restList.length>0)
					{
                          
					
						for(var i=0;i<restList.length;i++)
						{
													
						//alert((obj[i].RestaurantLogo));
						
						
                           $('#list_view').append('<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-thumb ui-btn-up-c"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="menuItem.html?searchId=0&restId='+restList[i].RestaurantId+'&restName='+restList[i].RestaurantName+'" data-transition="slide" class="ui-link-inherit"><img src="'+imgURL+restList[i].RestaurantLogo+'"  onerror=this.src="images/placeholder.png"; class="ui-li-thumb"><h3 class="ui-li-heading">'+restList[i].RestaurantName+'</h3><p class="ui-li-desc">Delivery Fee:<span>Free</span>  <em id="ratingStar'+restList[i].RestaurantId+'">Rating:  </em></p>	</a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>');
                           
						   if(restList[i].RattingValue == 0)
						   {
						     $('#ratingStar'+restList[i].RestaurantId).append('<img src="images/star_2.png"> <img src="images/star_2.png"><img src="images/star_2.png"><img src="images/star_2.png"><img src="images/star_2.png">');
							}
						   if(restList[i].RattingValue == 1)
						   {
						    $('#ratingStar'+restList[i].RestaurantId).append('<img src="images/star_1.png"> <img src="images/star_2.png"><img src="images/star_2.png"><img src="images/star_2.png"><img src="images/star_2.png">');
							}
							 if(restList[i].RattingValue == 2)
						   {
						    $('#ratingStar'+restList[i].RestaurantId).append('<img src="images/star_1.png"> <img src="images/star_1.png"><img src="images/star_2.png"><img src="images/star_2.png"><img src="images/star_2.png">');
							}
							
							 if(restList[i].RattingValue == 3)
						   {
						    $('#ratingStar'+restList[i].RestaurantId).append('<img src="images/star_1.png"> <img src="images/star_1.png"><img src="images/star_1.png"><img src="images/star_2.png"><img src="images/star_2.png">');
							}
							
							 if(restList[i].RattingValue == 4)
						   {
						     $('#ratingStar'+restList[i].RestaurantId).append('<img src="images/star_1.png"> <img src="images/star_1.png"><img src="images/star_1.png"><img src="images/star_1.png"><img src="images/star_2.png">');
							}
							
							 if(restList[i].RattingValue == 5)
						   {
						     $('#ratingStar'+restList[i].RestaurantId).append('<img src="images/star_1.png"> <img src="images/star_1.png"><img src="images/star_1.png"><img src="images/star_1.png"><img src="images/star_1.png">');
							}
                           // i = i + 2;
							
						
						
						}	
						
                    }

					else
					{
											
					alert("Sorry no restaurants to display"); 
					
					}
						
			
		}
	
	
	
	
		