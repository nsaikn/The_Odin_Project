
// Is it Possible to add properties to the class newBox element from the getgo ?

$(document).ready(function(){

	// Draws initial 20 x 20 boxes on screen 


	Draw();

	function Draw(){
		var length;
		var boxes = $('#number').val();
		boxes *= boxes;
		for (var i=0; i <boxes; i++){
			// this var $newBox needs to be in the for loop because if it is outside of it then it will only create one such element and add that to the document. By including it in the for loop, a new object is created each time and they are all independent of eachother.
			length = (500/Math.sqrt(boxes)-2)/2;
			var $newBox = $("<div></div>", {'class':'gridBox'} ); //JQuery object with a javascript object of a class assignment 
			$('#grid').append($newBox); //newBox is already a JQuery DOM object, this links it to the document DOM.
			console.log(i, boxes, length);
		}
		$('#grid').find('div').css('padding', length.toString()+'px'); 
		listen();
	}

	// function to reset the boxes
	function Reset(){
		$('#grid').find('div').removeClass('drawn');
	}
	function listen(){
		$('.gridBox').on('mouseenter', function(){ 
			$(this).addClass('drawn');
		});
	}
	// waits for click/hover and key events 
	// could have also done it as:
	// $('div').on('click', 'button', Reset);
	// the on delegation only works kind of like find()
	$('#clear').on('click', Reset); 

	$('#new').on('click', function (){
		if ($('#number').val() != 0){
			// $('.gridBox').remove();  Cant use this because remove deletes all events as well 
			$('#grid').find('div').detach(); 
		  Draw();
		}
	});
	$('.gridBox').on('mouseenter', function(){ 
		$(this).addClass('drawn');
	});
	//not sure how to make it on click focus only , maybe need to put the event listener below in a on click event listener 

});

