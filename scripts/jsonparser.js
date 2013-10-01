

var root = "http://mammam.biztro.in/AdminSite/JSONService/getJson.php?method=getHomePage";
	


function getData($http,$scope)
{
	
		$scope.name = [];
		$http({method: 'GET', url: root}).
	success(function(data, status, headers, config) {
   
	$scope.zonedata  = data[0].zoneData;
	
	$scope.city = [];
	$scope.rest =  [];
	
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
	

	
	$scope.onchange = function()
			{
	
				var citySelect = $('#city');
				citySelect[0].selectedIndex = 0;
				citySelect.selectmenu('refresh', true);
				
	
			};
	
	
	}).error(function(data, status, headers, config) {
   
	alert("error" +status);
 
	});
 
 
 }