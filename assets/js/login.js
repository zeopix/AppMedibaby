$(function(){

	$("a.loginsubmit.enabled").click(function(){

		var user = $(".form.login #email").val();
		var pass = $(".form.login #password").val();
		
		$.ajax({
			type:'GET',
			url: loginurl,
			headers: {
				'x-token' : '/UsernameToken Username="'+user+'", PasswordDigest="'+pass+'"'
			},
			success: function(response,status){
				if(response.status == 200){
					alert("Te has logueado con éxito!");
				}else{
					alert("Email/Contraseña incorrectos");
				}
			},error: function(){
			alert("Email/Contraseña incorrectos");
			}
		});		
	});

})