function LoginGetHeaders(user,token,pass){
	return '/UsernameToken Username="'+user+'", Token="'+token+'", PasswordDigest="'+pass+'"';
}

function LoginAction(user,pass,token){
	$.ajax({
			type:'GET',
			url: loginurl,
			headers: {
				'x-token' : LoginGetHeaders(user,token,pass)
			},
			success: function(response,status){
				if(response.status == 200){
					alert("Te has logueado con éxito!");
					//proceed to username&store token
					
					
				}else{
				
					alert("Email/Contraseña incorrectos");
				}
			},error: function(){
			alert("Email/Contraseña incorrectos");
			}
	});	
}

$(function(){

	$("a.loginsubmit").click(function(){

		var user = $(".form.login #email").val();
		var pass = $(".form.login #password").val();
		var token = "null";
		
		//LoginAction(user,pass,token);	
	});

})