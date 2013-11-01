	
	var obj;
	var menuId;
	var menuName;
	var menuQty;
	var menuPrice;
	var total;
	var restId1;
	var searchId;
	
$(document).ready(function()
         {
	


		var getdata = window.location.href.slice(window.location.href.indexOf('?')+1).split('&');  
		 
		 
		 searchId = getdata[0].split('=');
		 restId1 = getdata[1].split('=');
		 
		 
		//
			
			 chk();
		function chk()
		{
				
			if(searchId[1] == 0)
				{
				
				var restName = getdata[2].split('=');
			
				$('#restName').html('');
				$('#restName').append(decodeURI(restName[1])+' / MENU');	
			
			
					$('#rest_menu_list').html('');
					actionUrl = rootPath;
						data = {ajaxRequest:true,method:'getProductList',argumentz:'{"restaurantId":"'+restId1[1]+'","pageStart":0,"pageLimit":3}'};
					intiateAjaxRequest("POST", actionUrl, data, res, errorInProcessing);
				
				}
				
				else if(searchId[1] == 1)
				{
				
				var restName = getdata[2].split('=');
			
				$('#restName').html('');
				$('#restName').append(decodeURI(restName[1])+' / MENU');
			
				$('#rest_menu_list').html('');
				actionUrl = rootPath;
				var itemNamess = getdata[3].split('=');
				var itemdesc = getdata[4].split('=');
				
				//alert(decodeURI(itemdesc[1]));
				
				data = {ajaxRequest:true,method:'searchForProducts',argumentz:'{"restaurantId":"'+restId1[1]+'","itemName":"'+itemNamess[1]+'","foodDesc":"'+itemdesc[1]+'","pageStart":0,"pageLimit":2}'};
				intiateAjaxRequest("POST", actionUrl, data, res, errorInProcessing);
				
				
				}
			
		}
		
		function res(result){
		
		$.mobile.loading( "hide" );
		 obj = (JSON.parse(result))[0].MenuData;
			
			if(obj.length>0)
					{
                           
                        for(var i=0;i<obj.length;i++)
                        {
						
											
							
							$('#rest_menu_list').append('<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-thumb ui-btn-up-c"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="productDetail.html" data-transition="slide" style="padding-top:0;float:left; " class="ui-link-inherit"><img src="'+imgURL+obj[i].MenuImage+'"  onerror=this.src="images/placeholder.png";  class="ui-li-thumb"></a>	<h3 class="ui-li-heading">'+obj[i].MenuName+'</h3>	<p class="reviewContent ui-li-desc">'+obj[i].MenuDesc+'</p> <p class="menuRateSecton ui-li-desc"><span>Rs. '+obj[i].MenuPrice +'</span><a  data-transition="slide" class="ui-link"><img src="images/cart.png" onclick="addToCart('+obj[i].MenuId+')"></a> </p> </div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>');
											
							
					
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
	
		function addToCart(menuid)
			{

   
			var db = window.openDatabase("db_mammam", "1.0", "Mammam DB", 1000000);
				
				for(var i=0;i<obj.length;i++)
                        {
						
						if(obj[i].MenuId == menuid)
							{
							
								//alert(obj[i].MenuName);
								
								menuName = obj[i].MenuName;
								menuId = menuid;
								menuQty = 1;
								menuPrice = obj[i].MenuPrice;
								
								 db.transaction(populateDB, errorCB, successCB);
							}
						
						
						}
			
			}
			function populateDB(tx) 
			{
			
			
			 tx.executeSql('CREATE TABLE IF NOT EXISTS CART (id , menuName, menuQty, menuPrice, menuTotal)');
			 tx.executeSql('INSERT INTO CART (id, menuName, menuQty, menuPrice, menuTotal) VALUES ('+menuId+', "'+menuName+'", '+menuQty+', '+menuPrice+', 1000)');
			 
			}
			
			 function errorCB(tx, err) 
				{	
				
					alert("Error processing SQL: "+err);
		
				}
	
			function successCB()
				{
					alert(menuName+" added to cart");
				}
			
			
				
			