

var root = "http://mammam.biztro.in/AdminSite/JSONService/getJson.php?method=getHomePage";



function getData($http,$scope)
{
		$scope.name = [];
		$http({method: 'GET', url: root}).
	success(function(data, status, headers, config) {
   
	$scope.zonedata  = data[0].zoneData;
	
	$scope.city = $scope.zonedata[0].Citys;
	
	
	
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
	alert("error" +status);
  });
 
 
 }