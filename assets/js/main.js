$(document).ready(function() {

	$('.btn-enviar').click(function(e) {
		e.preventDefault();
		escribir();
	});
	

});

var escribir = function(){
	var conversa = $('#info-person').val();
	var espacio= $('#chat-dinamico');
	console.log(conversa);
	espacio.append('<p class="info">' + conversa + '</p>');
}