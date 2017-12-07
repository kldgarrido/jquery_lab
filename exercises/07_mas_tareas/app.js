
//$('#new-task').keypress(change1);


$( "#new-task" ).keydown(function(e) {
	if (e.which == 13) {
		var value = $("#new-task").val();
         $('.todo').append('<li>'+value+'</li>');
         $("#new-task").val('');
    }
 
});

