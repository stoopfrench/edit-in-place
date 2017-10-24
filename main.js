
$('document').ready(function() {

	$('#nameText').click(function(){

		$('#nameText').toggleClass('hidden')
		$('#nameInput').toggleClass('hidden')
		$('#nameInput').trigger("focus")
	
	})


	$('#nameInput').blur(function(){

		var textFromInput = $('#nameInput').val();

		$('#nameText').toggleClass('hidden')
		$('#nameInput').toggleClass('hidden')

		$('p#nameText').empty()
		$('p#nameText').append(textFromInput)

	})
	
	$('#aboutText').click(function(){

		$('#aboutText').toggleClass('hidden')
		$('#aboutTextArea').toggleClass('hidden')
		$('#aboutTextArea').trigger("focus")
	})

	$('#aboutTextArea').blur(function(){

		var textFromTextArea = $('#aboutTextArea').val();

		$('#aboutText').toggleClass('hidden')
		$('#aboutTextArea').toggleClass('hidden')

		$('#aboutText').empty()
		$('#aboutText').append(textFromTextArea)
	})

})













	// $('#nameText').click(function() {

	// 	$('#nameText').replaceWith('<input>')
	// 	$('input').attr('id', 'nameInput')
	// 	$('#nameInput').trigger('focus')

	// 	})




	// $('#aboutText').click(function() {

	// 	$('#aboutText').replaceWith('<textarea></textarea>')
	// 	$('textarea').attr('id', 'aboutTextArea')
	// 	$('#aboutTextArea').trigger('focus')

	// 	})
		