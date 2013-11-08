
function intiateAjaxRequest(method, url, data, callBackFunction, erroFunction)
			{
			
			alert(1);
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
			dataType: 'json',
			success:callBackFunction,
			error:erroFunction
				});
			
			
			}