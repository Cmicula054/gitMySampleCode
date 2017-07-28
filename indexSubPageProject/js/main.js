// NAVBAR SMOOTH SCROLL

$(".navbar ul li a[href^='#']").on('click', function(e) {

	e.preventDefault();

	var hash = this.hash;

	$('html, body').animate({
		scrollTop: $(hash).offset().top
	  }, 250, function(){

	  	window.location.hash = hash;	
	  
	});
});

$(".navbar a[href^='#']").on('click', function(e) {

	e.preventDefault();

	var hash = this.hash;

	$('html, body').animate({
		scrollTop: $(hash).offset().top
	  }, 250, function(){

	  	window.location.hash = hash;	
	  
	});
});

$("#header .col-md-12 a[href^='#']").on('click', function(e) {

	e.preventDefault();

	var hash = this.hash;

	$('html, body').animate({
		scrollTop: $(hash).offset().top
	  }, 250, function(){

	  	window.location.hash = hash;	
	  
	});
});


// NAVBAR COLLAPSE
$('.collapse a').click(function(){
    $(".collapse").collapse('hide');
});


