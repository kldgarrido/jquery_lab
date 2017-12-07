
$('.todo').on('click', 'li',change1);

$('.done').on('click', 'li',change2);


function change1(){
	var value = $(this).text()
	$('.done').append('<li>'+value+'</li>');
	$(this).remove();
}

function change2(){
	var value = $(this).text()
	$('.todo').append('<li>'+value+'</li>');
	$(this).remove();
}

