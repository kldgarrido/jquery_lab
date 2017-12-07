
$('form').on('submit', function(e) {
  	e.preventDefault(); // previene la acción por defecto (enviar el formulario)
  	var username = $("#username");
  	var password = $("#password");
  	var terms = $("#terms");

  	clear()
	
	if (validate_username(username.val())==false){
		show_error(username, 'username is wrong');
		
	}
	if (validate_password(password.val())==false){
		show_error(password, 'password is wrong');
	}
	if(validate_terms(terms)==false){
		terms.parent().parent().attr('class', 'checkbox terms-checkbox has-error');
		$( "#error_message" ).append('term is wrong');
	}


});

function clear(){
	$( "#error_message" ).empty();
	$("#username").parent().attr('class', 'form-group');
	$("#password").parent().attr('class', 'form-group');
	$("#terms").parent().parent().attr('class', 'checkbox terms-checkbox');
}


function validate_username(username){
	return username.indexOf(' ') < 0 && username.length > 0;
}

function validate_password(password){
	return password.length >= 6 && password.length <=40;
}

function validate_terms(terms){
	return document.getElementById('terms').checked;
}

function show_error(field, message){
	field.parent().attr('class', 'form-group has-error');
	$( "#error_message" ).append(message);
}
