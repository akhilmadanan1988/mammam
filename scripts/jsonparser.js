
function intiateAjaxRequest(method, url, data, callBackFunction, erroFunction)
			{
			
			
			$.mobile.loading( "show", {
			text: "Loding",
			textVisible: true,
			theme: "a",
			html: ""
				});
			
					
			
			$.ajax({
				
			url: url,
			type: method, 
			data: data,
			dataType: 'json',
			success: callBackFunction,
			error: erroFunction
				
				});
			
			
			}