	
	var resMenu;
	var menuId;
	var menuName;
	var menuQty;
	var menuPrice;
	var total;
	var restId1;
	var searchId;
	var imageUrl;
	var loadMore = 6;
    var menuCustItem = new Array();
     var selectMenu; 
    var menuAtt;
    var diffMenuAtt;
     var menuPrice;
    var DfAttributeValue;	
	var attLen = 0;
     var curName;
     var totalMenuPrice;
     var tot;
    var isMenuCust = "N"; 
    var menuCustIdS = "00";
    var menuCustName = "null";

		var getdata = window.location.href.slice(window.location.href.indexOf('?')+1).split('&');  
		 
		 
		 searchId = getdata[0].split('=');
		 restId1 = getdata[1].split('=');
		 
		
			//alert(restId1[1]);
			
			 getData(3);

			 
		function getData(pageLimit)
		{
				
			if(searchId[1] == 0)
				{
				
				var restName = getdata[2].split('=');
			
				$('#restName').html('');
				$('#restName').append(decodeURI(restName[1])+' / MENU');	
			
			
					$('#rest_menu_list').html('');
					actionUrl = rootPath;
					data = {ajaxRequest:true,method:'getProductList',argumentz:'{"restaurantId":"'+restId1[1]+'","pageStart":0,"pageLimit":'+pageLimit+'}'};
					intiateAjaxRequest("POST", actionUrl, data, menuResponse, menuErrorInProcessing);
				
				}
				
				else if(searchId[1] == 1)
				{
				
				var restName = getdata[2].split('=');
			
				$('#restName').html('');
				$('#restName').append(decodeURI(restName[1])+' / MENU');
			
				//$('#rest_menu_list').html('');
				actionUrl = rootPath;
				var itemNamess = getdata[3].split('=');
				var itemdesc = getdata[4].split('=');
				
				//alert(decodeURI(itemdesc[1]));
				
	data ={ajaxRequest:true,method:'searchForProducts',argumentz:'{"restaurantId":"'+restId1[1]+'","itemName":"'+itemNamess[1]+'","foodDesc":"'+itemdesc[1]+'","pageStart":0,"pageLimit":'+pageLimit+'}'};
				intiateAjaxRequest("POST", actionUrl, data, menuResponse, menuErrorInProcessing);
				
				
				}
			
		}
		
		function menuResponse(result, textStatus , xhr)
		{
	
				
			
		$.mobile.loading( "hide" );
		
//			var types = xhr.getResponseHeader("content-type")  || "";
			   
			 
			 		
		if(typeof result=="object")
			{
		
			//var menuObj = JSON.parse(result);
			menuList(result);
				
				
			}
			
			else
			{
				//alert(JSON.parse(result));
				
					menuList(JSON.parse(result));
			}
		}	
				
		function popupMenu(menuiD)
				{
					
                    selectMenu =0;
                    menuCustName = "NULL";
                    menuCustItem = new Array();
                    
					 $('#popup_submit').html('');
					
						$('#popup_submit').append('<img src="images/submit_1.png" style="text-align:center" width="80" onclick="getMenuData('+menuiD+')">');
					
					
//					var options = document.createElement('option');
                    
                    $('#menuAttributes').html('');
					

					
					for (var i =0;i<resMenu.length;i++)
					{
						
				if(resMenu[i].MenuId == menuiD)	
						{
							
							for(var j=0;j<resMenu[i].MenuDefaultAttributes.length;j++)
							{
                                diffMenuAtt = resMenu[i].MenuDefaultAttributes;
                                 $('#menuAttributes').append('<select name="select-choice-a"  data-mini="true" id ='+resMenu[i].MenuDefaultAttributes[j].MenuDfAttributeId+' ></select>');
                     
                               
                              selectMenu =$('#'+resMenu[i].MenuDefaultAttributes[j].MenuDfAttributeId);   
                               
                                 curName = resMenu[i].CurrncyNmae;
                                menuPrice = resMenu[i].MenuPrice;
                                
								for(var k=0;k<resMenu[i].MenuDefaultAttributes[j].DfAttributeValue.length;k++)
								{
								
                                    DfAttributeValue = resMenu[i].MenuDefaultAttributes[j].DfAttributeValue;
                                                        $('#'+resMenu[i].MenuDefaultAttributes[j].MenuDfAttributeId).append('<option value='+DfAttributeValue[k].MenuDfAttributeValueId+'>'+DfAttributeValue[k].MenuDfAttributeValue+'</option>');
                                    
                                    if(resMenu[i].MenuDefaultAttributes[j].DfAttributeValue[k].IsDefault == 'Y')
                                    {
                                       // alert(resMenu[i].MenuDefaultAttributes[j].DfAttributeValue[k].MenuDfAttributeValue);
                                        selectMenu[0].selectedIndex = k;
                                        selectMenu.selectmenu('refresh');
                                        
                                        totalMenuPrice = parseFloat(menuPrice) + parseFloat(resMenu[i].MenuDefaultAttributes[j].DfAttributeValue[k].MenuDfAttributePrice);
                                        
                                        menuCustName = resMenu[i].MenuDefaultAttributes[j].DfAttributeValue[k].MenuDfAttributeValue;
                                        
                                    }
                                    
                                   selectMenu.selectmenu({ overlayTheme: "d" });

									
								}
								
								
							}
                            
                     var defSelect = 0;
                            for(var j=0;j<resMenu[i].MenuAttributes.length;j++)
							{
                                
                                $('#menuAttributes').append('Select '+resMenu[i].MenuAttributes[j].MenuAttribute);
                                $('#menuAttributes').append('<select name="select-choice-a"  data-mini="true" id ='+resMenu[i].MenuAttributes[j].MenuAttributeId+' ><option value="00">select option</option></select>');
                                
//                             selectMenu =$('#'+resMenu[i].MenuAttributes[j].MenuAttributeId); 
                            
                                menuCustItem[j] =$('#'+resMenu[i].MenuAttributes[j].MenuAttributeId);
                                
                                attLen = (j + 1);
                                
                                 menuAtt = resMenu[i].MenuAttributes;
                                
                                for(var k=0;k<resMenu[i].MenuAttributes[j].AttributeValue.length;k++)
								{
                                
                                  
                                  
                                     $('#'+resMenu[i].MenuAttributes[j].MenuAttributeId).append('<option value='+resMenu[i].MenuAttributes[j].AttributeValue[k].MenuAttributeValueId+'>'+resMenu[i].MenuAttributes[j].AttributeValue[k].MenuAttributeValue+'</option>');
                      if(menuAtt[j].AttributeValue[k].IsDefault == 'Y' )
                                    {
                                      
//                                        $('#'+resMenu[i].MenuAttributes[j].MenuAttributeId).append('<option value="00">select option</option>');
                                        
                                      
                                       defSelect = k + 1; 
                                    totalMenuPrice = parseFloat(totalMenuPrice) + parseFloat(resMenu[i].MenuAttributes[j].AttributeValue[k].MenuAttributePrice);
                                       (menuCustItem[j])[0].selectedIndex = defSelect;
                                        
                                        menuCustName =menuCustName +"_"+ resMenu[i].MenuAttributes[j].AttributeValue[k].MenuAttributeValue;
                                    }
                                    
                                   // alert(defSelect);
                                    
                                     menuCustItem[j].selectmenu({ overlayTheme: "d" });

                                
                                    
                                }
                                
                            }
							
											
						}
					
					
                    }
                    tepmPrice11 = 0;
                    tepmPrice = 0;

            selectMenu.bind("change", function(event, ui) {
                        
                
                        
                
                findTotal();
                        
                        
                    });
                    
                    
                    
                    
                     $('#custMenuPrice').html('');
                    $('#custMenuPrice').append('Price: '+curName+' '+totalMenuPrice );
                  
                     tot = totalMenuPrice;
            menuCustItem[0].bind("change", function(event, ui) {
                                              
              
                          
                
                  findTotal();
                        
                        
                    });
                    
                    
            
      menuCustItem[1].bind("change", function(event, ui) {
          
                      findTotal();
                     
                        
                    });
                    
                    
				}

function findTotal()
    {
    
        //tot = menuPrice;
        
        
         for(var len = 0;len<diffMenuAtt.length;len++)
                            {
            
                        for(var k=0;k<diffMenuAtt[len].DfAttributeValue.length;k++)
								{
                                   
                                    if(diffMenuAtt[len].DfAttributeValue[k].MenuDfAttributeValueId == selectMenu.val())
                                    {                                    
//                                     alert(selectMenu.val());
                                        
                                        tot = parseFloat(tot) + parseFloat(diffMenuAtt[len].DfAttributeValue[k].MenuDfAttributePrice);
                                        
                                       
                                          $('#custMenuPrice').html('');
                                        $('#custMenuPrice').append('Price: '+curName+' '+tot );
                                        
                                        menuCustName = diffMenuAtt[len].DfAttributeValue[k].MenuDfAttributeValue;
                                    }
                                    
                                }
                                
                            }
    
        for(var len = 0;len<menuAtt.length;len++)
                            {
            
                        for(var k=0;k<menuAtt[len].AttributeValue.length;k++)
								{
                                  
                                    if(menuAtt[len].AttributeValue[k].MenuAttributeValueId == menuCustItem[1].val())
                                    {
                                        
//                                        alert(menuCustItem[1].val());
                                        menuCustName = menuCustName +"_" +menuAtt[len].AttributeValue[k].MenuAttributeValue;
                                        
                                        tot = parseFloat(tot) + parseFloat(menuAtt[len].AttributeValue[k].MenuAttributePrice)
                                          
                                       $('#custMenuPrice').html('');
                                        $('#custMenuPrice').append('Price: '+curName+' '+tot );
                                        
                                    }
                                }
                                
                            }
        for(var len = 0;len<menuAtt.length;len++)
                            {
            
                        for(var k=0;k<menuAtt[len].AttributeValue.length;k++)
								{
                                  
                                    if(menuAtt[len].AttributeValue[k].MenuAttributeValueId == menuCustItem[0].val())
                                    {
//                                        alert(menuCustItem[0].val());
                                        menuCustName = menuCustName +"_" +menuAtt[len].AttributeValue[k].MenuAttributeValue;
                                       tot = parseFloat(tot) +  parseFloat(menuAtt[len].AttributeValue[k].MenuAttributePrice);
                                          
                                        $('#custMenuPrice').html('');
                                        $('#custMenuPrice').append('Price: '+curName+' '+tot );
                                        
                                    }
                                    
                                }
                                
                            }
        
       
        
                                            
        
    
    }
    
    function getMenuData(menuID)
        {
        
            isMenuCust = "Y";
        
      for(var i=0;i<resMenu.length;i++)
                        {
						
                            
						if(resMenu[i].MenuId == menuID)
							{
							
                                menuName = resMenu[i].MenuName;
								menuId = menuID;
								menuQty = 1;
								menuPrice = resMenu[i].MenuPrice;
								imageUrl = resMenu[i].MenuImage
                                
                              try
                              {
//                                alert(menuName + selectMenu.val() + menuCustItem[0].val() +  menuCustItem[0].val());
                                  
                                  menuCustIdS = selectMenu.val()+"_"+menuCustItem[0].val()+"_"+menuCustItem[1].val();
                                   
                              }
                            catch(err)
                            {
                               // alert(menuName + selectMenu.val());
                                 menuCustIdS = selectMenu.val();
                            }
                                
                            }
                            
                            
                        }
            
            
                                 var db = window.openDatabase("dbmammam", "1.0", "mammam", 1000000);
								 db.transaction(cartTbl, errorCart);
            
            
        
        
        }


	function menuList(result)
				{
					
					
				resMenu = (result)[0].MenuData;
				//alert((resMenu)[0].MenuName);
			
			if(resMenu.length>0)
					{
                       	$('#rest_menu_list').html('' );   
                       
					for(var i=0;i<resMenu.length;i++)
                        {
                            
//                             alert(JSON.stringify(resMenu[i]));
                            
                            var menuUrlData = encodeURIComponent(JSON.stringify(resMenu[i]));
						
					if(	resMenu[i].IsCustom	== 1)
					{
						
															
							$('#rest_menu_list').append('<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-thumb ui-btn-up-c"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="menuDetailS.html?menuId='+resMenu[i].MenuId+'&menuPrice='+resMenu[i].MenuPrice+'&CurrncyNmae='+resMenu[i].CurrncyNmae+'&CurrncyNmae='+resMenu[i].CurrncyNmae+'&MenuJson=\''+menuUrlData+'\'" data-transition="slide" style="padding-top:0;float:left; " class="ui-link-inherit"><img src="'+imgURL+resMenu[i].MenuImage+'"  onerror=this.src="images/placeholder.png";  class="ui-li-thumb"></a>	<h3 class="ui-li-heading">'+resMenu[i].MenuName+'</h3>	<p class="reviewContent ui-li-desc">'+resMenu[i].MenuDesc+'</p> <p class="menuRateSecton ui-li-desc"  style="height:30px;"><span>'+resMenu[i].CurrncyNmae+' '+resMenu[i].MenuPrice +'</span>  <a  href="#positionWindow" data-inline="true" data-rel="popup" data-position-to="window" style="text-decoration:none;" class="ui-link"><img src="images/spoonfork.png" onclick="popupMenu('+resMenu[i].MenuId+')"  href="#positionWindow"  style="height:30px;></a> </div> </p> </div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></li>');
					
					}
					
					//&CurrncyNmae='+resMenu[i].CurrncyNmae+'&MenuJson='+resMenu[i]+'
					else
					{
						
						
						$('#rest_menu_list').append('<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-thumb ui-btn-up-c"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="menuDetailS.html?menuId='+resMenu[i].MenuId+'&menuPrice='+resMenu[i].MenuPrice+'&CurrncyNmae='+resMenu[i].CurrncyNmae+'&CurrncyNmae='+resMenu[i].CurrncyNmae+'&MenuJson=\''+menuUrlData+'\'" data-transition="slide" style="padding-top:0;float:left; " class="ui-link-inherit"><img src="'+imgURL+resMenu[i].MenuImage+'"  onerror=this.src="images/placeholder.png";  class="ui-li-thumb"></a>	<h3 class="ui-li-heading">'+resMenu[i].MenuName+'</h3>	<p class="reviewContent ui-li-desc">'+resMenu[i].MenuDesc+'</p> <p class="menuRateSecton ui-li-desc"  style="height:30px;"><span>'+resMenu[i].CurrncyNmae+' '+resMenu[i].MenuPrice +'</span><a  data-transition="slide" class="ui-link"><img src="images/carts.png" onclick="addToCart('+resMenu[i].MenuId+')" style="height:30px;"></a> </p> </div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>');
							
						
					}
								
							
					
						}
						
						//$('#rest_menu_list').append('');						
						
						
						$('#rest_menu_list').append('<a data-role="button" onclick="getData('+loadMore+')" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="c" class="ui-btn ui-shadow ui-btn-corner-all ui-btn-up-c"><span class="ui-btn-inner"><span class="ui-btn-text">             Load More         </span></span></a>');
						
					loadMore = loadMore + 3;
					
                    }
					
					else
					{
											
					alert("Sorry no Menu items to display"); 
					
					}
					
					
					
					
					
				}
	

		
		function menuErrorInProcessing(response, status, xhr)
			{
				
			$.mobile.loading( "hide" );
			alert( response + "  " + status+' Some errors occured. Please try again');
			}
			
	
			
	
		function addToCart(menuid)
			{
                isMenuCust = "N";
                menuCustIdS ="null";
  
				for(var i=0;i<resMenu.length;i++)
                        {
						
						if(resMenu[i].MenuId == menuid)
							{
							
								
								menuName = resMenu[i].MenuName;
								menuId = menuid;
								menuQty = 1;
								menuPrice = resMenu[i].MenuPrice;
								imageUrl = resMenu[i].MenuImage
								
									
							}
						
						
						}
								
								 var db = window.openDatabase("dbmammam", "1.0", "mammam", 1000000);
								 db.transaction(cartTbl, errorCart);
			
			}

		function cartTbl(tx) 
			{
			
				
			 
				
			 tx.executeSql('CREATE TABLE IF NOT EXISTS cart (id integer, menuName text, isCust text, attrId text, attrNames text, menuQty integer, menuPrice double, menuTotal double,imageUrl text)');
				
				
				tx.executeSql('SELECT * FROM cart WHERE id="'+menuId+'"  AND attrId="'+menuCustIdS+'"', [], successCart, errorCart);
				
			
			 
			
			}
			
		function errorCart(tx, err) 
			{	
				
			alert("Error processing SQL: "+err);
		
			}
	
		function successCart(tblCart,result)
			{
				//alert(result.rows.length+ " "+ menuId);
				
				
				for(var i = 0;i<result.rows.length;i++)
				{
                    
				if(isMenuCust == "Y")
                    {
                        
                        var menuPopUpQty = document.getElementById('menuPopUpQty').value;
                        
                        if((menuId == result.rows.item(i).id) && (menuCustIdS == result.rows.item(i).attrId))
							{
								
						var qty = (parseInt(result.rows.item(i).menuQty) + parseInt(menuPopUpQty));	
						var menuCartTotal = 	((result.rows.item(i).menuPrice) * qty);	
								tblCart.executeSql('UPDATE cart SET menuQty="'+qty+'",menuTotal="'+menuCartTotal+'" WHERE id="'+menuId+'"  AND attrId="'+menuCustIdS+'"');
                                
                                
						alert("updated11 "+menuName+result.rows.item(i).attrId);
								
							}
					
						else{
								
                               
						alert(menuName+" added to cart1 "+menuName+result.rows.item(i).attrId);
                                
						 tblCart.executeSql('INSERT INTO cart (id, menuName,isCust, attrId, attrNames, menuQty, menuPrice, menuTotal,imageUrl) VALUES ("'+menuId+'", "'+menuName+'", "'+isMenuCust+'", "'+menuCustIdS+'", "'+menuCustName+'","'+menuPopUpQty+'", "'+tot+'", "'+tot+'","'+imageUrl+'")');
						
								
							}
                    
                 }
                    else
                    {
                        
                        if(menuId == result.rows.item(i).id)
							{
								
						var qty = (parseInt(result.rows.item(i).menuQty) + 1);	
						var menuCartTotal = 	(parseFloat(result.rows.item(i).menuPrice) * parseInt(qty));
                                
								tblCart.executeSql('UPDATE cart SET menuQty="'+qty+'",menuTotal="'+menuCartTotal+'" WHERE id="'+menuId+'"  AND attrId="'+menuCustIdS+'"');
                                
						alert("updated "+menuName);
								
							}
					
						else
							{
								
						
						 tblCart.executeSql('INSERT INTO cart (id, menuName, menuQty, menuPrice, menuTotal,imageUrl) VALUES ("'+menuId+'", "'+menuName+'", "'+menuQty+'", "'+menuPrice+'", "'+menuPrice+'","'+imageUrl+'")');
						alert(menuName+" added to cart");
								
							}
                
                  
                    }
					
				}	
                
               
                 if(result.rows.length == 0)
					{
                    
                    if(isMenuCust == "Y")
                    {   
                        var menuPopUpQty = document.getElementById('menuPopUpQty').value;
                        
					 tblCart.executeSql('INSERT INTO cart (id, menuName,isCust, attrId, attrNames, menuQty, menuPrice, menuTotal,imageUrl) VALUES ("'+menuId+'", "'+menuName+'", "'+isMenuCust+'", "'+menuCustIdS+'", "'+menuCustName+'","'+menuPopUpQty+'", "'+tot+'", "'+tot+'","'+imageUrl+'")');
                        
						alert(menuName+" added to cart" + menuCustName);
                        
					}
                    
                else
                    {
                        
                    tblCart.executeSql('INSERT INTO cart (id, menuName,isCust, attrId, attrNames, menuQty, menuPrice, menuTotal,imageUrl) VALUES ("'+menuId+'", "'+menuName+'", "'+isMenuCust+'", "'+menuCustIdS+'", "'+menuCustName+'","'+menuQty+'", "'+menuPrice+'", "'+menuPrice+'","'+imageUrl+'")');
                        
						alert(menuName+" added to cart" + menuCustName);
                    
                    }
                        
                    }
                
                
				
				
//				if(result.rows.length == 0)
//					{
//					 tblCart.executeSql('INSERT INTO cart (id, menuName, menuQty, menuPrice, menuTotal,imageUrl) VALUES ("'+menuId+'", "'+menuName+'", "'+menuQty+'", "'+menuPrice+'", "'+menuPrice+'","'+imageUrl+'")');
//						alert(menuName+" 11added to cart");
//					}
				
				
				
				
				
			}
			
function menuPopUpMinus()
    {
        
       if(document.getElementById('menuPopUpQty').value>1)
       {
           
        document.getElementById('menuPopUpQty').value = parseInt(document.getElementById('menuPopUpQty').value) - parseInt(1);
           
       }
        
    }

function menuPopUpPlus()
    {
     
    document.getElementById('menuPopUpQty').value = parseInt(document.getElementById('menuPopUpQty').value) + parseInt(1);
        
    }
    
    
			
                  
