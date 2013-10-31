
	var obj;
	
			function chk(){
			actionUrl = rootPath;
			data = {ajaxRequest:true,method:'getCustomerReviewForRestaurant',argumentz:'{"restaurantId":"20","pageStart":0,"pageLimit":3}'};
			intiateAjaxRequest("POST", actionUrl, data, res, errorInProcessing);
			}
		
		function res(result){
		$('#custReview').html('');
		$.mobile.loading( "hide" );
		 obj = (JSON.parse(result))[0].RestCustReviewData;
		 
		 if(obj.length>0)
					{
                           
                        for(var i=0;i<obj.length;i++)
                        {
						
							if(obj[i].RatingValue == 0)
							{
							$('#custReview').append('<div class="content-primary tabContentHolder reviewRows"><h3 class="ui-li-heading">'+obj[i].CustomerName+'</h3><p class="ui-li-desc">'+obj[i].CreatedDate+' <em>Rating: <img src="images/star_2.png"> <img src="images/star_2.png"> <img src="images/star_2.png"> <img src="images/star_2.png"> <img src="images/star_2.png"></em> </p> <p class="reviewContent">'+obj[i].ReviewDetails+'</p>	</div>');
							}
							
							if(obj[i].RatingValue == 1)
							{
							$('#custReview').append('<div class="content-primary tabContentHolder reviewRows"><h3 class="ui-li-heading">'+obj[i].CustomerName+'</h3><p class="ui-li-desc">'+obj[i].CreatedDate+' <em>Rating: <img src="images/star_1.png"> <img src="images/star_2.png"> <img src="images/star_2.png"> <img src="images/star_2.png"> <img src="images/star_2.png"></em> </p> <p class="reviewContent">'+obj[i].ReviewDetails+'</p>	</div>');
							}
							
							
							if(obj[i].RatingValue == 2)
							{
							$('#custReview').append('<div class="content-primary tabContentHolder reviewRows"><h3 class="ui-li-heading">'+obj[i].CustomerName+'</h3><p class="ui-li-desc">'+obj[i].CreatedDate+' <em>Rating: <img src="images/star_1.png"> <img src="images/star_1.png"> <img src="images/star_2.png"> <img src="images/star_2.png"> <img src="images/star_2.png"></em> </p> <p class="reviewContent">'+obj[i].ReviewDetails+'</p>	</div>');
							}
							
							if(obj[i].RatingValue == 3)
							{
							$('#custReview').append('<div class="content-primary tabContentHolder reviewRows"><h3 class="ui-li-heading">'+obj[i].CustomerName+'</h3><p class="ui-li-desc">'+obj[i].CreatedDate+' <em>Rating: <img src="images/star_1.png"> <img src="images/star_2.png"> <img src="images/star_1.png"> <img src="images/star_2.png"> <img src="images/star_2.png"></em> </p> <p class="reviewContent">'+obj[i].ReviewDetails+'</p>	</div>');
							}
							
							if(obj[i].RatingValue == 4)
							{
							$('#custReview').append('<div class="content-primary tabContentHolder reviewRows"><h3 class="ui-li-heading">'+obj[i].CustomerName+'</h3><p class="ui-li-desc">'+obj[i].CreatedDate+' <em>Rating: <img src="images/star_1.png"> <img src="images/star_1.png"> <img src="images/star_1.png"> <img src="images/star_1.png"> <img src="images/star_2.png"></em> </p> <p class="reviewContent">'+obj[i].ReviewDetails+'</p>	</div>');
							}
							
							if(obj[i].RatingValue == 5)
							{
							$('#custReview').append('<div class="content-primary tabContentHolder reviewRows"><h3 class="ui-li-heading">'+obj[i].CustomerName+'</h3><p class="ui-li-desc">'+obj[i].CreatedDate+' <em>Rating: <img src="images/star_1.png"> <img src="images/star_1.png"> <img src="images/star_1.png"> <img src="images/star_1.png"> <img src="images/star_1.png"></em> </p> <p class="reviewContent">'+obj[i].ReviewDetails+'</p>	</div>');
							}
							
						}
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
			
	
	
	