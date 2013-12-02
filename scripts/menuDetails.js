

var getdata = window.location.href.slice(window.location.href.indexOf('?')+1).split('&');  

var detailsMenuId = (getdata[0].split('='))[1];
var detailsMenuPrice = (getdata[1].split('='))[1];
var detailsMenuCurrncy = (getdata[2].split('='))[1];
//alert(detailsMenuId);
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

