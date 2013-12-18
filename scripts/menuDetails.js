var menuDetailsCustItem = new Array();
var menuAtt;
var menuDetailsPopTotal = 0;
var diffMenuAtt;
var menuAtt;
var menuCustName;
var	menuName;
var menuId;
var menuQty;
var menuPrice;
var imageUrl;
var menuCustIdS;
var menuDetialsRestId;
var menuDetialsRestName;


$("#owl-example").owlCarousel({
 
                            navigation : false, // Show next and prev buttons
                            slideSpeed : 300,
                            paginationSpeed : 400,
                            singleItem:true,
                            jsonPath : 'one.json',
                            jsonSuccess : customDataSuccess
 
 
                    });

var getdata = window.location.href.slice(window.location.href.indexOf('?')+1).split('&');  

var detailsMenuId = (getdata[0].split('='))[1];
var detailsMenuPrice = (getdata[1].split('='))[1];
var detailsMenuCurrncy = (getdata[2].split('='))[1];

var menuDetailsObj =decodeURIComponent((getdata[4].split('='))[1]);

var menuDetailsJson =jQuery.parseJSON(eval("(" + menuDetailsObj + ")"));
menuDetialsRestId = (getdata[5].split('='))[1];
menuDetialsRestName = decodeURIComponent((getdata[6].split('='))[1]);


//alert(1);




    
//    $('#owl-example').html('<div class="item"><img src="images/burger.png" alt="Owl Image"></div><div class="item"><img src="images/burger.png" alt="Owl Image"></div>');
    


             
                    

 
     


var detailsMenuId = menuDetailsJson.MenuId;
var detailsMenuPrice = menuDetailsJson.MenuPrice;
var detailsMenuCurrncy = menuDetailsJson.CurrncyNmae;


//alert(detailsMenuCurrncy + detailsMenuPrice);

menuDetailsPopUp();



var selectMenu;
var defSelect;

//	resMenu[i].IsCustom
getMenuDetails();

function getMenuDetails()
{
    
  actionUrl = rootPath;
    
					data = {ajaxRequest:true,method:'getMenuDetails',argumentz:'{"menuId":"'+detailsMenuId+'","pageStart":0,"pageLimit":3,"customerId":"0"}'};
    
					intiateAjaxRequest("POST", actionUrl, data, menuDetailsResponse, menuDetailsErrorInProcessing);
    
    
    
}



function menuDetailsResponse(result)
{
  
    
    $.mobile.loading( "hide" );
    
       
    if(typeof result=="object")
			{
		
			//var menuObj = JSON.parse(result);
			         menuDetails(result);
				
				
			}
			
			else
			{
				//alert(JSON.parse(result));
				
					menuDetails(JSON.parse(result));
               
			}
}

function menuDetails(result)
{
    
//        alert((result)[0].MenuDetailsData);
    
    var MenuDetailsData = (result)[0].MenuDetailsData;
    
    
    if(MenuDetailsData.length > 0)
    {
        
        for(var i = 0;i<MenuDetailsData.length; i++)
        {
            
            for(var j = 0;j<MenuDetailsData[i].isImage.length; j++)
            {
                
//                alert(MenuDetailsData[i].isImage[j].MenuImgeId);
                
                 $('#menuNameDetails').html('');
             
                $('#menuNameDetails').append(MenuDetailsData[i].MenuName);
                
                $('#menuDetailsPrice').html('');
                
                $('#menuDetailsPrice').append(detailsMenuCurrncy+' '+detailsMenuPrice);
                
                
                $('#menuDetailsDesc').html('');
                
                $('#menuDetailsDesc').append(MenuDetailsData[i].MenuDesc);
                
               // menuDetialsRestId = MenuDetailsData[i].MenuDesc
                
                
            }
            
            if(MenuDetailsData[i].MenuRevies.length > 0)
            {
                
                
                
            }
           
        }
        
      
        
    }
    
    
    else
    {
     
        alert("Some error occured");
        
    }
    
    
    
                            
                        
        
  
    
    
}

function menuDetailsErrorInProcessing(response, status, xhr)
{
    
    
    alert("some error occured");
    
    
}

function menuDetailsReview()
{
    
    
    
    
    
}

function menuDetailsPopUp()
{
    
                    if(menuDetailsJson.IsCustom	== 1)
					           {
                              isMenuCust = "Y";
                                   
                                   $('#menuDetailsDet').append('<a  href="#popupMenuDetails" data-inline="true" data-rel="popup" data-position-to="window" style="text-decoration:none;" class="ui-link"><img src="images/spoonfork.png" style="height:30px;"></a>');
                               
//                                  $('#meDeQtyChose').html('');
                               }
                            
                            else
                                {
                                    
                                isMenuCust = "N";
                                 $('#menuDetailsDet').append('<img src="images/cart-02.png" style="height:30px;" onclick="menuDetailsAddTocart()">');
                                
                                
                                }
                            
    
                menuDetailsPopTotal = detailsMenuPrice;
    
    for(var j=0;j<menuDetailsJson.MenuDefaultAttributes.length;j++)
							{
                                
                           diffMenuAtt = menuDetailsJson.MenuDefaultAttributes;  
                                
                                 $('#menuDetailsAttributes').append('<select name="select-choice-a"  data-mini="true" id =Menudetails'+menuDetailsJson.MenuDefaultAttributes[j].MenuDfAttributeId+' ></select>');
                     
                                 selectMenu =$('#Menudetails'+menuDetailsJson.MenuDefaultAttributes[j].MenuDfAttributeId); 
                                
                                for(var k=0;k<menuDetailsJson.MenuDefaultAttributes[j].DfAttributeValue.length;k++)
								{
                                    
                                     DfAttributeValue = menuDetailsJson.MenuDefaultAttributes[j].DfAttributeValue;
                                    
                                    $('#Menudetails'+menuDetailsJson.MenuDefaultAttributes[j].MenuDfAttributeId).append('<option value='+DfAttributeValue[k].MenuDfAttributeValueId+'>'+DfAttributeValue[k].MenuDfAttributeValue+'</option>');
                                    
                                    if(menuDetailsJson.MenuDefaultAttributes[j].DfAttributeValue[k].IsDefault == 'Y')
                                    {

                                        selectMenu[0].selectedIndex = k;
                                        
                                        menuDetailsPopTotal = parseFloat(detailsMenuPrice) + parseFloat(menuDetailsJson.MenuDefaultAttributes[j].DfAttributeValue[k].MenuDfAttributePrice);
                                        
                                        
//                                        selectMenu.selectmenu('refresh');
//                                        
////                                        totalMenuPrice = parseFloat(menuPrice) + parseFloat(menuDetailsJson.MenuDefaultAttributes[j].DfAttributeValue[k].MenuDfAttributePrice);
//                                        
////                                        menuCustName = menuDetailsJson.MenuDefaultAttributes[j].DfAttributeValue[k].MenuDfAttributeValue;
//                                        
                                    }
                                    
                                }
                             
                              selectMenu.selectmenu({ overlayTheme: "d" });
								
                                
                            }
                                
                    
    
    
    
    
    for(var j=0;j<menuDetailsJson.MenuAttributes.length;j++)
							{
                                
                            menuAtt = menuDetailsJson.MenuAttributes;    
                                
                                 $('#menuDetailsAttributes').append('Select '+menuDetailsJson.MenuAttributes[j].MenuAttribute);
                                
                                 $('#menuDetailsAttributes').append('<select name="select-choice-a"  data-mini="true" id =Menudetails'+menuDetailsJson.MenuAttributes[j].MenuAttributeId+' ><option value="00">select option</option></select>');
                                
//                                alert(menuDetailsJson.MenuAttributes[j].MenuAttributeId);
                                
                                menuDetailsCustItem[j] = $('#Menudetails'+menuDetailsJson.MenuAttributes[j].MenuAttributeId);
                               
                                menuAtt = menuDetailsJson.MenuAttributes;
                                
                                
                           
                                
                                for(var k=0;k<menuDetailsJson.MenuAttributes[j].AttributeValue.length;k++)
								{
                                    
                                    
                                      $('#Menudetails'+menuDetailsJson.MenuAttributes[j].MenuAttributeId).append('<option value='+menuDetailsJson.MenuAttributes[j].AttributeValue[k].MenuAttributeValueId+'>'+menuDetailsJson.MenuAttributes[j].AttributeValue[k].MenuAttributeValue+'</option>');
//                                    
                                    if(menuAtt[j].AttributeValue[k].IsDefault == 'Y')
                                    {
                                        
                                      
                                  
                                        defSelect = k + 1;       
                                        
                                        menuDetailsPopTotal = parseFloat(menuDetailsPopTotal) + parseFloat(menuDetailsJson.MenuAttributes[j].AttributeValue[k].MenuAttributePrice);
                                      
                                        
//                                    totalMenuPrice = parseFloat(totalMenuPrice) + parseFloat(menuDetailsJson.MenuAttributes[j].AttributeValue[k].MenuAttributePrice);
                                      
                                       (menuDetailsCustItem[j])[0].selectedIndex = defSelect;
                                        
                                        
                                    }
                                    
                                    
                                    
                                }
                                
                                 menuDetailsCustItem[j].selectmenu({ overlayTheme: "d" });
                                
                            }
    
     $('#menuDetailscustMenuPrice').html('');
    $('#menuDetailscustMenuPrice').append(detailsMenuCurrncy + ': '+ menuDetailsPopTotal);
    
    
}



  selectMenu.bind("change", function(event, ui) {
                        
                
                        
                
               menuDetailsfindTotal();
                        
                        
                    });


 menuDetailsCustItem[0].bind("change", function(event, ui) {
                                              
              
                          
                
                  menuDetailsfindTotal();
                        
                        
                    });
                    
                    
            
      menuDetailsCustItem[1].bind("change", function(event, ui) {
          
                      menuDetailsfindTotal();
                     
                        
                    });


function menuDetailsfindTotal()
    {
    
        //tot = menuPrice;
        
       menuDetailsPopTotal =  detailsMenuPrice;
        
         for(var len = 0;len<diffMenuAtt.length;len++)
                            {   
            
                        for(var k=0;k<diffMenuAtt[len].DfAttributeValue.length;k++)
								{
                                   
                                    if(diffMenuAtt[len].DfAttributeValue[k].MenuDfAttributeValueId == selectMenu.val())
                                    {                                    
//                                     alert(selectMenu.val());
                                        
                                        menuDetailsPopTotal = parseFloat(menuDetailsPopTotal) + parseFloat(diffMenuAtt[len].DfAttributeValue[k].MenuDfAttributePrice);
                                        
                                       
                                          $('#menuDetailscustMenuPrice').html('');
                                        $('#menuDetailscustMenuPrice').append('Price: '+detailsMenuCurrncy+' '+menuDetailsPopTotal );
                                        
                                        menuCustName = diffMenuAtt[len].DfAttributeValue[k].MenuDfAttributeValue;
                                    }
                                    
                                }
                                
                            }
    
        for(var len = 0;len<menuAtt.length;len++)
                            {
            
                        for(var k=0;k<menuAtt[len].AttributeValue.length;k++)
								{
                                  
                                    if(menuAtt[len].AttributeValue[k].MenuAttributeValueId == menuDetailsCustItem[1].val())
                                    {
                                        
//                                        alert(menuCustItem[1].val());
                                        menuCustName = menuCustName +"_" +menuAtt[len].AttributeValue[k].MenuAttributeValue;
                                        
                                        menuDetailsPopTotal = parseFloat(menuDetailsPopTotal) + parseFloat(menuAtt[len].AttributeValue[k].MenuAttributePrice)
                                          
                                       $('#menuDetailscustMenuPrice').html('');
                                        $('#menuDetailscustMenuPrice').append('Price: '+detailsMenuCurrncy+' '+menuDetailsPopTotal );
                                        
                                    }
                                }
                                
                            }
        for(var len = 0;len<menuAtt.length;len++)
                            {
            
                        for(var k=0;k<menuAtt[len].AttributeValue.length;k++)
								{
                                  
                                    if(menuAtt[len].AttributeValue[k].MenuAttributeValueId == menuDetailsCustItem[0].val())
                                    {
//                                        alert(menuCustItem[0].val());
                                        menuCustName = menuCustName +"_" +menuAtt[len].AttributeValue[k].MenuAttributeValue;
                                       menuDetailsPopTotal = parseFloat(menuDetailsPopTotal) +  parseFloat(menuAtt[len].AttributeValue[k].MenuAttributePrice);
                                          
                                        $('#menuDetailscustMenuPrice').html('');
                                        $('#menuDetailscustMenuPrice').append('Price: '+detailsMenuCurrncy+' '+menuDetailsPopTotal );
                                        
                                    }
                                    
                                }
                                
                            }
        
       
        
                                            
        
    
    }


function menuDetailsMinus(j)
{
    if(j == 2)
    {
   var i = document.getElementById("menuDetailsPopUpQty").value;
    
   
    
    if(i>1)
    {
       i =parseInt(i) - 1; 
        
    }
    
    document.getElementById('menuDetailsPopUpQty').value = i;
    }
    
        
    if(j == 1)
    {
   var i = document.getElementById("meDeQtyChose").value;
    
   
    
    if(i>1)
    {
       i =parseInt(i) - 1; 
        
    }
    
    document.getElementById('meDeQtyChose').value = i;
        
        
    }
}


function menuDetailsPLus(j)
{
    if(j == 2)
    {
     var i = document.getElementById('menuDetailsPopUpQty').value;
    

       i =parseInt(i) + 1; 
        
   
    
    document.getElementById('menuDetailsPopUpQty').value = i;
    }
    
    
    if(j == 1)
    {
     var i = document.getElementById('meDeQtyChose').value;
    

       i =parseInt(i) + 1; 
        
   
    
    document.getElementById('meDeQtyChose').value = i;
    }
    
}


function menuDetailsAddTocart()
{
    
    
    
                
                menuCustIdS ="null";
  
								
								menuName = menuDetailsJson.MenuName;
								menuId = menuDetailsJson.MenuId;
								menuQty = 1;
								menuPrice = menuDetailsJson.MenuPrice;
								imageUrl = menuDetailsJson.MenuImage
								
                        if(isMenuCust == 'Y')  
                        {
				            try
                              {
//                                alert(menuName + selectMenu.val() + menuCustItem[0].val() +  menuCustItem[0].val());
                                  
                                  menuCustIdS = selectMenu.val()+"_"+menuDetailsCustItem[0].val()+"_"+menuDetailsCustItem[1].val();
                                   
                              }
                            catch(err)
                            {
                               // alert(menuName + selectMenu.val());
                                 menuCustIdS = selectMenu.val();
                            }
                        }     
							
						
					
								 var db = window.openDatabase("dbmammam", "1.0", "mammam", 1000000);
								 db.transaction(menuDetailscartTbl, errorCart);
        
    
    
}


function menuDetailscartTbl(tx)
{
    
    
    tx.executeSql('CREATE TABLE IF NOT EXISTS cart (id integer, menuName text, isCust text, attrId text, attrNames text, menuQty integer, menuPrice double, menuTotal double,imageUrl text,restName text,restId integer)');
				
				
				tx.executeSql('SELECT * FROM cart WHERE id="'+menuId+'"  AND attrId="'+menuCustIdS+'"', [], successMenuDetailsCart, errorCart);
    
    
    
}

function successMenuDetailsCart(tblCart,result)
{
    

  
    
    
    if(result.rows.length == 0)
    {
         
        
         
                     if(isMenuCust == 'Y') 
                     {
                       var menuPopUpQty = document.getElementById('menuDetailsPopUpQty').value; 
                     }
        
                    else
                    {
                        var menuPopUpQty = document.getElementById('meDeQtyChose').value; 
                    }
                        var tot = parseInt(menuDetailsPopTotal) * parseInt(menuPopUpQty);
                        
                        tblCart.executeSql('INSERT INTO cart (id, menuName,isCust, attrId, attrNames, menuQty, menuPrice, menuTotal,imageUrl,restName,restId) VALUES ("'+menuId+'", "'+menuName+'", "'+isMenuCust+'", "'+menuCustIdS+'", "'+menuCustName+'","'+menuPopUpQty+'", "'+menuDetailsPopTotal+'", "'+tot+'","'+imageUrl+'","'+menuDetialsRestName+'","'+menuDetialsRestId+'")');
                        
                        alert(menuName+ " is added to cart" +menuDetialsRestName +menuDetialsRestId  );
                         $( "#popupMenuDetails" ).popup( "close" )
                    
        
                   
        
    }
    
    else
    {
        
        for(var i = 0;i<result.rows.length;i++)
				{
                    
                 
                    
                      if(isMenuCust == 'Y') 
                        {
                       var menuPopUpQty = document.getElementById('menuDetailsPopUpQty').value; 
                        }
        
                    else
                        {
                        var menuPopUpQty = document.getElementById('meDeQtyChose').value; 
                        }
                    
                    
                        if((menuId == result.rows.item(i).id) && (menuCustIdS == result.rows.item(i).attrId))
							{
								
						var qty = (parseInt(result.rows.item(i).menuQty) + parseInt(menuPopUpQty));	
						var menuCartTotal = 	((result.rows.item(i).menuPrice) * qty);	
								tblCart.executeSql('UPDATE cart SET menuQty="'+qty+'",menuTotal="'+menuCartTotal+'" WHERE id="'+menuId+'"  AND attrId="'+menuCustIdS+'"');
                                
                                
						alert("updated "+menuName+menuDetialsRestName +menuDetialsRestId );
                                
                                 $( "#popupMenuDetails" ).popup( "close" )
                    
                            }
                    
                        else{
								
                               
						alert(menuName+" added to cart" +menuDetialsRestName +menuDetialsRestId );
                            
                            var menuCartTotal = 	(menuDetailsPopTotal * menuPopUpQty);
                            
						 tblCart.executeSql('INSERT INTO cart (id, menuName,isCust, attrId, attrNames, menuQty, menuPrice, menuTotal,imageUrl,restName,restId) VALUES ("'+menuId+'", "'+menuName+'", "'+isMenuCust+'", "'+menuCustIdS+'", "'+menuCustName+'","'+menuPopUpQty+'", "'+menuDetailsPopTotal+'", "'+menuCartTotal+'","'+imageUrl+'","'+menuDetialsRestName+'","'+menuDetialsRestId+'")');
                            
						 $( "#popupMenuDetails" ).popup( "close" )
								
							}
                }
                            
        
    }
    
    
    
    
    
    
}

function errorCart(tx, err) 
			{	
				
			alert("Error processing SQL: "+err);
		
			}


function customDataSuccess(data){
    
        
    $('#owl-example').html('<div class="item"><img src="images/burger.png" alt="Owl Image"></div><div class="item"><img src="images/burger.png" alt="Owl Image"></div>');
     
  }
