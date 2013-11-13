	
	var obj;
	var menuId;
	var menuName;
	var menuQty;
	var menuPrice;
	var total;
	var restId1;
	var searchId;
	var imageUrl;
	



		var getdata = window.location.href.slice(window.location.href.indexOf('?')+1).split('&');  
		 
		 
		 searchId = getdata[0].split('=');
		 restId1 = getdata[1].split('=');
		 
		
			//alert(restId1[1]);
			
			 getData();

			 
		function getData()
		{
				
			if(searchId[1] == 0)
				{
				
				var restName = getdata[2].split('=');
			
				$('#restName').html('');
				$('#restName').append(decodeURI(restName[1])+' / MENU');	
			
			
					$('#rest_menu_list').html('');
					actionUrl = rootPath;
					data = {ajaxRequest:true,method:'getProductList',argumentz:'{"restaurantId":"'+restId1[1]+'","pageStart":0,"pageLimit":3}'};
					intiateAjaxRequest("POST", actionUrl, data, response, errorInProcessing);
				
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
				
	data ={ajaxRequest:true,method:'searchForProducts',argumentz:'{"restaurantId":"'+restId1[1]+'","itemName":"'+itemNamess[1]+'","foodDesc":"'+itemdesc[1]+'","pageStart":0,"pageLimit":2}'};
				intiateAjaxRequest("POST", actionUrl, data, response, errorInProcessing);
				
				
				}
			
		}
		
		function response(result)
		{
	
		$.mobile.loading( "hide" );
		 obj = (result)[0].MenuData;
			
			
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
		
		
		function errorInProcessing()
			{
			$.mobile.loading( "hide" );
			alert('Some errors occured. Please try again');
			}
			
	
			
	
		function addToCart(menuid)
			{

  
			
				
				for(var i=0;i<obj.length;i++)
                        {
						
						if(obj[i].MenuId == menuid)
							{
							
							
								
								menuName = obj[i].MenuName;
								menuId = menuid;
								menuQty = 1;
								menuPrice = obj[i].MenuPrice;
								imageUrl = obj[i].MenuImage
								
									
							}
						
						
						}
								
								 var db = window.openDatabase("dbmammam", "1.0", "mammam", 1000000);
								 db.transaction(cartTbl, errorCart);
			
			}

		function cartTbl(tx) 
			{
			
				
			 
				
			 tx.executeSql('CREATE TABLE IF NOT EXISTS cart (id integer primary key, menuName text, menuQty integer, menuPrice double, menuTotal double,imageUrl integer)');
				
				
				tx.executeSql('SELECT * FROM cart WHERE id="'+menuId+'"', [], successCart, errorCart);
				
			
			 
			
			}
			
		function errorCart(tx, err) 
			{	
				
			alert("Error processing SQL: "+err);
		
			}
	
		function successCart(tblCart,result)
			{
				alert(result.rows.length+ " "+ menuId);
				
				
				for(var i = 0;i<result.rows.length;i++)
				{
				
					if(menuId == result.rows.item(i).id)
							{
								
						var qty = ((result.rows.item(i).menuQty) + 1);	
						var tot = 	((result.rows.item(i).menuPrice) * qty);	
								tblCart.executeSql('UPDATE cart SET menuQty="'+qty+'",menuTotal="'+tot+'" WHERE id="'+menuId+'"');
						alert("updated "+menuName);
								
							}
					
						else
							{
								
						
						 tblCart.executeSql('INSERT INTO cart (id, menuName, menuQty, menuPrice, menuTotal,imageUrl) VALUES ("'+menuId+'", "'+menuName+'", "'+menuQty+'", "'+menuPrice+'", "1000","'+imageUrl+'")');
						alert(menuName+" added to cart");
								
							}
					
				}	
					
				
				
				if(result.rows.length == 0)
					{
					 tblCart.executeSql('INSERT INTO cart (id, menuName, menuQty, menuPrice, menuTotal,imageUrl) VALUES ("'+menuId+'", "'+menuName+'", "'+menuQty+'", "'+menuPrice+'", "1000","'+imageUrl+'")');
						alert(menuName+" 11added to cart");
					}
				
				
				
				
				
			}
			
			
				
			