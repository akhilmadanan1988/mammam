//alert(detailsMenuId);

var custId;
var custName;
var custEmail;
function menuDetailsReview()
{
    
    
    actionUrl = rootPath;
//			data = 								{ajaxRequest:true,method:'getCustomerReviewForRestaurant',argumentz:'{"restaurantId":"'+restId1[1]+'","pageStart":0,"pageLimit":3}'};
//			
//    intiateAjaxRequest("POST", actionUrl, data, menuDetailsresponse, errorMenuDetails);
    
    
    
    
}


function menuDetailsresponse()
{
    
    
    
    
    
}


function errorMenuDetails()
{
    
    
    
    
    
    
}


function getMenuDetailsUser()
{
    
    
        var db = window.openDatabase("dbmammam", "1.0", "mammam", 1000000);
	    db.transaction(menudetailsUserDb, errorMenuDet);   
    
}

function menudetailsUserDb(tblSettings)
{
    
    
   tblSettings.executeSql('SELECT * FROM settings', [], successMenuDetails, errorMenuDet); 
    
    
}

function successMenuDetails(tblSettings,result)
{
    document.getElementById('menuReiviewForm').style.display='none'; 
    
    if(result.rows.length == 0)
        {
             document.getElementById('menuReiviewForm').style.display='none';  
             
        }
        else
        {
            custId = result.rows.item(0).custId;
            custName = result.rows.item(0).userName;
            custEmail = result.rows.item(0).email;
            chckIsMenuReviewExists(custId);
             
            
        }
    
    
}

function chckIsMenuReviewExists(cuID)
{
    
//    alert(cuID);
    
            actionUrl = rootPath;
    
			data = {ajaxRequest:true,method:'chckIsMenuReviewExists',argumentz:'{"menuId":"'+detailsMenuId+'","customerId":"'+cuID+'"}'};
			
        intiateAjaxRequest("POST", actionUrl, data, menuReviewCheck, errorMenuDetails);
    
    
    
    
}

function menuReviewCheck(response)
{
    $.mobile.loading( "hide" );
    
    var reviewCheckRes = JSON.parse(JSON.stringify(response, null, 2));
    
    //alert(reviewCheckRes.isExists);
    
    if(reviewCheckRes.isExists == 0)
    {
        
       document.getElementById('menuReiviewForm').style.display='block'; 
        
        
    }
    else
    {
        
        document.getElementById('menuReiviewForm').style.display='none'; 
        
        
    }
    
    
    
    
}

function errorMenuDetails(response, status, xhr)
{
    
    $.mobile.loading( "hide" );
    
    alert("some error occured!!!");
    
    
    
    
}





function errorMenuDet()
{
        
    alert("some error occured");
    
}

function submitReview()
{
   

    var rate = $('input[type=radio]').fieldValue();
    var reviewName = document.getElementById('reviewName').value;
    var reviewText = document.getElementById('reviewText').value;
    
    if(reviewText == '' || rate == '' || reviewName == '')
    {
     alert("please enter all fields");   
    }
    
    
    else 
    {
        
     actionUrl = rootPath;
    
			data = {ajaxRequest:true,method:'addMenuReview',argumentz:'{"menuId":"'+detailsMenuId+'","customerId":"'+custId+'","restaurantId":"'+restId1[1]+'","rating":"'+rate+'","comment":"'+reviewText+'","name":"'+custName+'","email":"'+custEmail+'"}'};
			
        intiateAjaxRequest("POST", actionUrl, data, submitReviewCheck, errorMenuDetails);
   
    }
    
}

function submitReviewCheck(response)
{
    
    alert(response);
    
    
    
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