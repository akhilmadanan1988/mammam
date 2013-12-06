


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
								
							$("#slideIndex").owlCarousel({
 
                           // Show next and prev buttons
                            items : 4,                     
                            itemsDesktop : [1199,6],
                            itemsDesktopSmall : [979,5],
                            itemsTabletSmall:[768,6],
                            itemsMobile : [479,3],
                            itemsCustom : [279,4],
                            itemsCustom : [1024,4],
                             
                                });
                                    
                                    var  htmlString = '<div class="indexItem"><a href="menuItem.html?searchId=0&restId='+$scope.rest[k].restaurantId+'&restName='+$scope.rest[k].restaurantName+'" data-transition="slide" ><img src="'+imgURL+$scope.rest[k].RestImageURL+'" onerror=this.src="images/placeholder.png"  alt="Owl Image"></a> </div>';
                                    
                                
                                    var owl = $("#slideIndex").data('owlCarousel');
                                    
                                    owl.addItem(htmlString);
                                    
                                    
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

				$('#submitbtn').append('<a  href="menuItem.html?searchId=1&restId='+restId+'&restName='+restName+'&itemName='+document.getElementById("itemName").value+'&foodDesc='+document.getElementById("itemDesc").value+'" data-transition="slide" ><img src="images/submit_1.png" / width="80"></a>')
	
			};
	
	
	}).error(function(data, status, headers, config) {
   
	alert("error" +status);
 
	});
 
	
 }
	
 
	function restNameChange()
		{
			
			
			$('#submitbtn').html('');
			$('#submitbtn').append('<a  href="menuItem.html?searchId=1&restId='+restId+'&restName='+restName+'&itemName='+document.getElementById("itemName").value+'&foodDesc='+document.getElementById("itemDesc").value+'" data-transition="slide" ><img src="images/submit_1.png" / width="80"></a>')
	

		}
 
	function submit()
		{
			//alert(restName);
			var itemName = document.getElementById("itemName").value;
			var itemDesc = document.getElementById("itemDesc").value;
				 
			//location.href = "tabArea.html?restId="+restId+"&restName="+restName;
		
 
		}
	
document.addEventListener("backbutton", onBackKeyDown, false);

function onBackKeyDown() {
    
    alert(1);
    // Handle the back button
}


function featRest(id)
{
    
    
 alert(id);   
    
}



