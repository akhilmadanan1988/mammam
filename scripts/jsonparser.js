

	var root = rootPath+"?method=getHomePage";
	var restId;
	var restName;

function homePage($http,$scope)
{
	
		$scope.city = [];
		$scope.rest =  [];
		$scope.zonedata = [];
		$scope.zone_name;
		$scope.city_name = [];
		$scope.name = [];
		
//to show loading icon		
	
		
	//to parse data from the server using angular.js
	//delete $http.defaults.headers.common['X-Requested-With'];
	
	$http({method: 'GET', url: root}).
	success(function(data, status, headers, config) {
   
	$scope.zonedata  = data[0].zoneData;
	
	
	for(var i=0;i<data[0].zoneData.length;i++)
	{	
	//$scope.city[i] = data[0].zoneData[i].Citys[i].city;
		
		
		for(var j=0;j<data[0].zoneData[i].Citys.length;j++)
				{			
				
					for(var k=0;k<data[0].zoneData[i].Citys[j].restaurants.length;k++)
						{
						
						$scope.rest = data[0].zoneData[i].Citys[j].restaurants;  						
						
						
						
						if(($scope.rest[k].IsFeatured)=="Y")
								{
								
								console.log($scope.rest[k].IsFeatured);
								
							//$('#carousel').append('<div class="elastislide-wrapper elastislide-horizontal"><div class="elastislide-carousel"><ul id="carousel" class="elastislide-list" style="display: block; max-height: 107px; transition: all 500ms ease-in-out; -webkit-transition: all 500ms ease-in-out;"><li style="width: 33.27882256745707%; max-width: 151px; max-height: 107px;"><a href="#" class="ui-link"><img src="images/OUR PARTNERS_logo_1.png" alt="image01"></a></li><li style="width: 33.27882256745707%; max-width: 151px; max-height: 107px;"><a href="#" class="ui-link"><img src="images/OUR PARTNERS_logo_2.png" alt="image02"></a></li><li style="width: 33.27882256745707%; max-width: 151px; max-height: 107px;"><a href="#" class="ui-link"><img src="images/OUR PARTNERS_logo_3.png" alt="image03"></a></li><li style="width: 33.27882256745707%; max-width: 151px; max-height: 107px;"><a href="#" class="ui-link"><img src="images/OUR PARTNERS_logo_4.png" alt="image04"></a></li><li style="width: 33.27882256745707%; max-width: 151px; max-height: 107px;"><a href="#" class="ui-link"><img src="images/OUR PARTNERS_logo_1.png" alt="image01"></a></li><li style="width: 33.27882256745707%; max-width: 151px; max-height: 107px;"><a href="#" class="ui-link"><img src="images/OUR PARTNERS_logo_2.png" alt="image02"></a></li><li style="width: 33.27882256745707%; max-width: 151px; max-height: 107px;"><a href="#" class="ui-link"><img src="images/OUR PARTNERS_logo_3.png" alt="image03"></a></li><li style="width: 33.27882256745707%; max-width: 151px; max-height: 107px;"><a href="#" class="ui-link"><img src="images/OUR PARTNERS_logo_4.png" alt="image04"></a></li><li style="width: 33.27882256745707%; max-width: 151px; max-height: 107px;"><a href="#" <a="" class="ui-link"><img src="images/OUR PARTNERS_logo_1.png" alt="image01"></a>&gt;<img src="images/OUR PARTNERS_logo_3.png" alt="image03"></li><li style="width: 33.27882256745707%; max-width: 151px; max-height: 107px;"><a href="#" <a="" class="ui-link"><img src="images/OUR PARTNERS_logo_1.png" alt="image01"></a>&gt;<img src="images/OUR PARTNERS_logo_3.png" alt="image03"></li><li style="width: 33.27882256745707%; max-width: 151px; max-height: 107px;"><a href="#" <a="" class="ui-link"><img src="images/OUR PARTNERS_logo_1.png" alt="image01"></a>&gt;<img src="images/OUR PARTNERS_logo_3.png" alt="image03"></li><li style="width: 33.27882256745707%; max-width: 151px; max-height: 107px;"><a href="#" <a="" class="ui-link"><img src="images/OUR PARTNERS_logo_1.png" alt="image01"></a>&gt;<img src="images/OUR PARTNERS_logo_3.png" alt="image03"></li><li style="width: 33.27882256745707%; max-width: 151px; max-height: 107px;"><a href="#" <a="" class="ui-link"><img src="images/OUR PARTNERS_logo_1.png" alt="image01"></a>&gt;<img src="images/OUR PARTNERS_logo_3.png" alt="image03"></li></ul></div><nav><span class="elastislide-prev" style="display: none;">Previous</span><span class="elastislide-next">Next</span></nav></div>');
								}
						
						}			
				
				}
		
	}
	
		//alert();
		
		$scope.addData = data[1].AdvertisementData
		
		for(var i=0;i<data[1].AdvertisementData.length;i++)
			{
			
			if(data[1].AdvertisementData[i].bannerType == "HORZ_01")
			{
				$('#bannerAd').append('<img src="'+data[1].AdvertisementData[i].AdvImageUrl+'" />');
				//alert(data[1].AdvertisementData[i].AdvImageUrl);
			
			}
		
			}
			
			
	$scope.onchangeZone = function()
			{
	
				var citySelect = $('#city');
				citySelect[0].selectedIndex = 0;
				citySelect.selectmenu('refresh', true);
				 $('#submitbtn').html('');
				//alert($scope.zone_name.Citys);
	
			};
		
	$scope.onchangeCity = function()
			{
	
				
				
				//alert($scope.city_name.city);
				 $('#submitbtn').html('');
				
				$('#submitbtn').append('<a href="restaurants.html?zoneId='+$scope.zone_name.Zone+'&areaId='+$scope.city_name.city+'" data-transition="slide" ><img src="images/submit_1.png" / width="80"></a>')
	
			};
			
			
			$scope.onchangeRest = function()
			{
	
			
				
				//alert($scope.rest_name.restaurantId);
				 $('#submitbtn').html('');
				 
				 restId = $scope.rest_name.restaurantId;
				 restName = $scope.rest_name.restaurantName; 

				$('#submitbtn').append('<a onclick="submit()" data-transition="slide" ><img src="images/submit_1.png" / width="80"></a>')
	
			};
	
	
	}).error(function(data, status, headers, config) {
   
	alert("error" +status);
 
	});
 
	
 }
 
 
	function submit()
		{
			//alert(restName);
			var itemName = document.getElementById("itemName").value;
			var itemDesc = document.getElementById("itemDesc").value;
				 
			location.href = "tabArea.html?restId="+restId+"&restName="+restName;
		
 
		}