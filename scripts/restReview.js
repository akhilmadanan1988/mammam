
	var obj;
var custId;
	
			function getReview()
				{
                    
			actionUrl = rootPath;
			data = 								{ajaxRequest:true,method:'getCustomerReviewForRestaurant',argumentz:'{"restaurantId":"'+restId1[1]+'","pageStart":0,"pageLimit":3}'};
			intiateAjaxRequest("POST", actionUrl, data, restReviewResp, errorInProcessing);
				}

function restReviewResp(resp)
{
    
    $.mobile.loading( "hide" );
		
//			var types = xhr.getResponseHeader("content-type")  || "";
			   
			 
			 		
		if(typeof resp=="object")
			{
		
			//var menuObj = JSON.parse(result);
               
			response(resp);
				
				
			}
			
			else
			{
				//alert(JSON.parse(result));
				
					response(JSON.parse(resp));
			}
    
    
    userReg();
}
		
		function response(result){
			
			        
            
			
		$('#custReview').html('');
		
		 obj = (result)[0].RestCustReviewData;
		 
		 if(obj.length>0)
					{
                           
                        for(var i=0;i<obj.length;i++)
                        {
						
							if(obj[i].RatingValue == 0)
							{
							$('#custReview').append('<div class="content-primary tabContentHolder reviewRows"><h3 class="ui-li-heading">'+obj[i].CustomerName+'</h3><p class="ui-li-desc">'+obj[i].CreatedDate+' <em>Rating: <img src="images/star_2.png"> <img src="images/star_2.png"> <img src="images/star_2.png"> <img src="images/star_2.png"> <img src="images/star_2.png"></em> </p> <p class="reviewContent">'+obj[i].ReviewDetails+'</p>	</div>');
							}
							
							if(obj[i].RatingValue == 1)
							{
							$('#custReview').append('<div class="content-primary tabContentHolder reviewRows"><h3 class="ui-li-heading">'+obj[i].CustomerName+'</h3><p class="ui-li-desc">'+obj[i].CreatedDate+' <em>Rating: <img src="images/star_1.png"> <img src="images/star_2.png"> <img src="images/star_2.png"> <img src="images/star_2.png"> <img src="images/star_2.png"></em> </p> <p class="reviewContent">'+obj[i].ReviewDetails+'</p>	</div>');
							}
							
							
							if(obj[i].RatingValue == 2)
							{
							$('#custReview').append('<div class="content-primary tabContentHolder reviewRows"><h3 class="ui-li-heading">'+obj[i].CustomerName+'</h3><p class="ui-li-desc">'+obj[i].CreatedDate+' <em>Rating: <img src="images/star_1.png"> <img src="images/star_1.png"> <img src="images/star_2.png"> <img src="images/star_2.png"> <img src="images/star_2.png"></em> </p> <p class="reviewContent">'+obj[i].ReviewDetails+'</p>	</div>');
							}
							
							if(obj[i].RatingValue == 3)
							{
							$('#custReview').append('<div class="content-primary tabContentHolder reviewRows"><h3 class="ui-li-heading">'+obj[i].CustomerName+'</h3><p class="ui-li-desc">'+obj[i].CreatedDate+' <em>Rating: <img src="images/star_1.png"> <img src="images/star_2.png"> <img src="images/star_1.png"> <img src="images/star_2.png"> <img src="images/star_2.png"></em> </p> <p class="reviewContent">'+obj[i].ReviewDetails+'</p>	</div>');
							}
							
							if(obj[i].RatingValue == 4)
							{
							$('#custReview').append('<div class="content-primary tabContentHolder reviewRows"><h3 class="ui-li-heading">'+obj[i].CustomerName+'</h3><p class="ui-li-desc">'+obj[i].CreatedDate+' <em>Rating: <img src="images/star_1.png"> <img src="images/star_1.png"> <img src="images/star_1.png"> <img src="images/star_1.png"> <img src="images/star_2.png"></em> </p> <p class="reviewContent">'+obj[i].ReviewDetails+'</p>	</div>');
							}
							
							if(obj[i].RatingValue == 5)
							{
							$('#custReview').append('<div class="content-primary tabContentHolder reviewRows"><h3 class="ui-li-heading">'+obj[i].CustomerName+'</h3><p class="ui-li-desc">'+obj[i].CreatedDate+' <em>Rating: <img src="images/star_1.png"> <img src="images/star_1.png"> <img src="images/star_1.png"> <img src="images/star_1.png"> <img src="images/star_1.png"></em> </p> <p class="reviewContent">'+obj[i].ReviewDetails+'</p>	</div>');
							}
							
						}
					}
            
		}
		
		
//		function intiateAjaxRequest(method, url, data, callBackFunction, erroFunction)
//			{
//			$.mobile.loading( "show", {
//			text: "Loding",
//			textVisible: true,
//			theme: "a",
//			html: ""
//				});
//				
//			$.ajax({
//			url: url,
//			type: method, 
//			data:data,
//			success:callBackFunction,
//			error:erroFunction
//				});
//			}
			
			
			function errorInProcessing()
			{
			$.mobile.loading( "hide" );
			alert('Some errors occured. Please try again');
			}

function userReg()
    {
    
   
        
        var db = window.openDatabase("dbmammam", "1.0", "mammam", 1000000);
	   db.transaction(restUserDb, errorRestReview);
    
    
    }

function restUserDb(tblSettings)
    {   
    
     
        tblSettings.executeSql('SELECT * FROM settings', [], successRestLIst, errorRestReview);
        
        
    
    }

function successRestLIst(tblSettings,result)
    {
        
        if(result.rows.length == 0)
        {
             
             document.getElementById('restReviewForm').style.display='none';  
            
          
             
        }
        else
        {
             document.getElementById('restReviewForm').style.display='block'; 
            
            custId = result.rows.item(0).custId
            
            actionUrl = rootPath;
    
			data = {ajaxRequest:true,method:'chckIsRestaurantReviewExists',argumentz:'{"customerId":'+custId+',"restaurantId":'+restId1[1]+'}'};
			
            intiateAjaxRequest("POST", actionUrl, data, restReviewCheck, errorrestReview);
            
                                    
        }
      
        
    }

function restReviewCheck(res)
    {
        
    $.mobile.loading( "hide" );
  
     var reviewCheckRes = JSON.parse(JSON.stringify(res, null, 2));
    
   
    
    if(reviewCheckRes.status == 0)
    {
        
       document.getElementById('restReviewForm').style.display='block'; 
        
        
    }
   
    else
    {
        
        document.getElementById('restReviewForm').style.display='none'; 
        
        
    }
    
    }

function errorrestReview()
{
    
    $.mobile.loading( "hide" ); 
    
    alert("some error occured");   
    
}

function errorRestReview(error)
    {    
    
    alert("some error occured");
     
    }
			
	

function submitRestReview()
{

    var rate = $('input[type=radio]').fieldValue();        
    var reviewName = document.getElementById('restreviewName').value;
    var reviewText = document.getElementById('restreviewText').value;
    
    if(reviewText == '' || rate == '' || reviewName == '')
    {
        
     alert("please enter all fields"); 
        
    }
    
   else 
    {
        
     actionUrl = rootPath;
    
			data = {ajaxRequest:true,method:'addRestaurantReview',argumentz:'{"restaurantId":'+restId1[1]+',"name":"'+reviewName+'","comment":"'+reviewText+'","rating":'+rate+',"loginId":'+custId+',"isApproved":"N"}'};
			
        intiateAjaxRequest("POST", actionUrl, data, submitReviewCheck, errorMenuDetails);
   
    }
    
     
}

	
	


$.fn.fieldValue = function(successful) {
    for (var val=[], i=0, max=this.length; i < max; i++) {
        var el = this[i];
        var v = $.fieldValue(el, successful);
        if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) {
            continue;
        }
        if (v.constructor == Array)
            $.merge(val, v);
        else
            val.push(v);
    }
    return val;
};
$.fieldValue = function(el, successful) {
    var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
    if (successful === undefined) {
        successful = true;
    }

    if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
        (t == 'checkbox' || t == 'radio') && !el.checked ||
        (t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
        tag == 'select' && el.selectedIndex == -1)) {
            return null;
    }

    if (tag == 'select') {
        var index = el.selectedIndex;
        if (index < 0) {
            return null;
        }
        var a = [], ops = el.options;
        var one = (t == 'select-one');
        var max = (one ? index+1 : ops.length);
        for(var i=(one ? index : 0); i < max; i++) {
            var op = ops[i];
            if (op.selected) {
                var v = op.value;
                if (!v) { // extra pain for IE...
                    v = (op.attributes && op.attributes['value'] && !(op.attributes['value'].specified)) ? op.text : op.value;
                }
                if (one) {
                    return v;
                }
                a.push(v);
            }
        }
        return a;
    }
    return $(el).val();
};