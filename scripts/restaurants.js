	
				var getdata = window.location.href.slice(window.location.href.indexOf('?')+1).split('&');  
				
				var zoneId = getdata[0].split('=');
				var areaId = getdata[1].split('=');
				var restRating;
		

			getData();
  
   function getData()
	{
		actionUrl = rootPath;
		data =	{ajaxRequest:true,method:'getRestaurantList',argumentz:'{"zoneId":"'+zoneId[1]+'","areaId":"'+areaId[1]+'","pageStart":0,"pageLimit":3}'};
		intiateAjaxRequest("POST", actionUrl, data, response, errorInProcessing);
	}
	
		
	function errorInProcessing()
	{
			$.mobile.loading( "hide" );
			alert('Some errors occured. Please try again');
			
	}
	
	function response(result)
	{
	
		
			$.mobile.loading( "hide" );
					
			var obj = (result)[0].RestaurantData;
			
					
				if(obj.length>0)
					{
                          
					
						for(var i=0;i<obj.length;i++)
						{
													
						//alert((obj[i].RestaurantLogo));
						
						
                           $('#list_view').append('<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-thumb ui-btn-up-c"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="menuItem.html?searchId=0&restId='+obj[i].RestaurantId+'&restName='+obj[i].RestaurantName+'" data-transition="slide" class="ui-link-inherit"><img src="'+imgURL+obj[i].RestaurantLogo+'"  onerror=this.src="images/placeholder.png"; class="ui-li-thumb"><h3 class="ui-li-heading">'+obj[i].RestaurantName+'</h3><p class="ui-li-desc">Delivery Fee:<span>Free</span>  <em id="ratingStar'+obj[i].RestaurantId+'">Rating:  </em></p>	</a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>');
                           
						   if(obj[i].RattingValue == 0)
						   {
						     $('#ratingStar'+obj[i].RestaurantId).append('<img src="images/star_2.png"> <img src="images/star_2.png"><img src="images/star_2.png"><img src="images/star_2.png"><img src="images/star_2.png">');
							}
						   if(obj[i].RattingValue == 1)
						   {
						    $('#ratingStar'+obj[i].RestaurantId).append('<img src="images/star_1.png"> <img src="images/star_2.png"><img src="images/star_2.png"><img src="images/star_2.png"><img src="images/star_2.png">');
							}
							 if(obj[i].RattingValue == 2)
						   {
						    $('#ratingStar'+obj[i].RestaurantId).append('<img src="images/star_1.png"> <img src="images/star_1.png"><img src="images/star_2.png"><img src="images/star_2.png"><img src="images/star_2.png">');
							}
							
							 if(obj[i].RattingValue == 3)
						   {
						    $('#ratingStar'+obj[i].RestaurantId).append('<img src="images/star_1.png"> <img src="images/star_1.png"><img src="images/star_1.png"><img src="images/star_2.png"><img src="images/star_2.png">');
							}
							
							 if(obj[i].RattingValue == 4)
						   {
						     $('#ratingStar'+obj[i].RestaurantId).append('<img src="images/star_1.png"> <img src="images/star_1.png"><img src="images/star_1.png"><img src="images/star_1.png"><img src="images/star_2.png">');
							}
							
							 if(obj[i].RattingValue == 5)
						   {
						     $('#ratingStar'+obj[i].RestaurantId).append('<img src="images/star_1.png"> <img src="images/star_1.png"><img src="images/star_1.png"><img src="images/star_1.png"><img src="images/star_1.png">');
							}
                           // i = i + 2;
							
						
						
						}	
						
                    }

					else
					{
					
						
					alert("Sorry no restaurants to display"); 
					
					}
						
						
	}
	
	
	
		