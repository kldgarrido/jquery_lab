
var correct;
var score = 0;

// inizializa e{l juego.
game();

// Enlaza el link de los circulos
$('.option').on('click', guess)

function game(){
	correct = Math.floor(Math.random() * 2);

	$('.option').each(function(index){
		var color = generateColor()
		$(this).css('background-color', color);

		if (index == correct){
			$('.question').text(color);
		}
	})		;
}

function guess(){
	var index = $('.option').index(this);
	if (index == correct){
		alert("Muy bien!")
		score++;
		
	}
	else{
		alert("I'm sorry")
		score=0;
	}
	$('.score span').text(score);
	game();
}

function random(){
	return Math.floor(Math.random() * 255);
}

function generateColor(){
	return 'rgb('+ random() +', '+ random() + ', '+ random() + ' )';
}