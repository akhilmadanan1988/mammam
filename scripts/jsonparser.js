

var root = "http://192.168.1.119:81/mammam/Development/Sites/AdminSite/JSONService/getJson.php?method=getHomePage";
	
	

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
						
						//console.log($scope.rest);
						
						}
				
				
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
				
				$('#submitbtn').append('<a onclick="submit()" data-transition="slide" ><img src="images/submit_1.png" / width="80"></a>')
	
			};
	
	
	}).error(function(data, status, headers, config) {
   
	alert("error" +status);
 
	});
 
	
 }
 
 
	function submit()
		{
 
		alert("cliked");
 
		}