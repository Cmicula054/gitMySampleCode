

$(document).ready(function(){

	$(window).scroll(function(){

		if ($(window).scrollTop() > 920) {
			$('.navbar').addClass('navbar-fixed-top');
		}
		if ($(window).scrollTop() < 921) {
			$('.navbar').removeClass('navbar-fixed-top');
		}
	});
});

$('.collapse a').click(function(){
    $(".collapse").collapse('hide');
});

$(".navbar a[href^='#']").on('click', function(e) {

	e.preventDefault();

	var hash = this.hash;

	$('html, body').animate({
		scrollTop: $(hash).offset().top
	  }, 650, function(){

	  	window.location.hash = hash;	
	  
	});
});




$(".navbar-dark ul li a[href^='#']").on('click', function(e) {

	e.preventDefault();

	var hash = this.hash;

	$('html, body').animate({
		scrollTop: $(hash).offset().top
	  }, 650, function(){

	  	window.location.hash = hash;	
	  
	});
});


$(".footer .scroll-to-top-button a[href^='#']").on('click', function(e) {

	e.preventDefault();

	var hash = this.hash;

	$('html, body').animate({
		scrollTop: $(hash).offset().top
	  }, 650, function(){

	  	window.location.hash = hash;	
	  
	});
});


$("#home-parallax .col-sm-3 p a[href^='#']").on('click', function(e) {

	e.preventDefault();

	var hash = this.hash;

	$('html, body').animate({
		scrollTop: $(hash).offset().top
	  }, 650, function(){

	  	window.location.hash = hash;	
	  
	});
});


$("#home-parallax .col-sm-9 a[href^='#']").on('click', function(e) {

	e.preventDefault();

	var hash = this.hash;

	$('html, body').animate({
		scrollTop: $(hash).offset().top
	  }, 650, function(){

	  	window.location.hash = hash;	
	  
	});
});


$("#section-parallax .col-sm-8 p a[href^='#']").on('click', function(e) {

	e.preventDefault();

	var hash = this.hash;

	$('html, body').animate({
		scrollTop: $(hash).offset().top
	  }, 650, function(){

	  	window.location.hash = hash;	
	  
	});
});


$('.js-wp-1').waypoint(function(direction) {
	$('.js-wp-1').addClass('animated fadeInDown');
}, {
	offset: '50%'
});



$('.js-wp-2').waypoint(function(direction) {
	$('.js-wp-2').addClass('animated fadeInLeft');
}, {
	offset: '50%'
});



$('.js-wp-3').waypoint(function(direction) {
	$('.js-wp-3').addClass('animated fadeInRight');
}, {
	offset: '50%'
});



$('.js-wp-4').waypoint(function(direction) {
	$('.js-wp-4').addClass('animated fadeInUp');
}, {
	offset: '50%'
});


// 2017 Timeline
$('.js-wp-5').waypoint(function(direction) {
	$('.js-wp-5').addClass('animated fadeInUp');
}, {
	offset: '50%'
});

$('.js-wp-6').waypoint(function(direction) {
	$('.js-wp-6').addClass('animated fadeInLeft');
}, {
	offset: '50%'
});





$('.js-wp-7').waypoint(function(direction) {
	$('.js-wp-7').addClass('animated fadeInUp');
}, {
	offset: '50%'
});

$('.js-wp-8').waypoint(function(direction) {
	$('.js-wp-8').addClass('animated fadeInRight');
}, {
	offset: '50%'
});




$('.js-wp-9').waypoint(function(direction) {
	$('.js-wp-9').addClass('animated fadeInDown');
}, {
	offset: '50%'
});

$('.js-wp-10').waypoint(function(direction) {
	$('.js-wp-10').addClass('animated fadeInLeft');
}, {
	offset: '50%'
});




$('.js-wp-11').waypoint(function(direction) {
	$('.js-wp-11').addClass('animated fadeInDown');
}, {
	offset: '50%'
});

$('.js-wp-12').waypoint(function(direction) {
	$('.js-wp-12').addClass('animated fadeInRight');
}, {
	offset: '50%'
});




// Section Parallax


$('.js-wp-13').waypoint(function(direction) {
	$('.js-wp-13').addClass('animated slideInUp');
}, {
	offset: '50%'
});


//  Projects

$('.js-wp-14').waypoint(function(direction) {
	$('.js-wp-14').addClass('animated fadeInDown');
}, {
	offset: '50%'
});

$('.js-wp-15').waypoint(function(direction) {
	$('.js-wp-15').addClass('animated fadeInLeft');
}, {
	offset: '50%'
});

$('.js-wp-16').waypoint(function(direction) {
	$('.js-wp-16').addClass('animated fadeInRight');
}, {
	offset: '50%'
});

$('.js-wp-17').waypoint(function(direction) {
	$('.js-wp-17').addClass('animated fadeInUp');
}, {
	offset: '50%'
});


// Testimonials


$('.js-wp-18').waypoint(function(direction) {
	$('.js-wp-18').addClass('animated bounceInDown');
}, {
	offset: '50%'
});


$('.js-wp-19').waypoint(function(direction) {
	$('.js-wp-19').addClass('animated bounceInLeft');
}, {
	offset: '50%'
});


$('.js-wp-20').waypoint(function(direction) {
	$('.js-wp-20').addClass('animated bounceInRight');
}, {
	offset: '50%'
});


$('.js-wp-21').waypoint(function(direction) {
	$('.js-wp-21').addClass('animated bounceIn');
}, {
	offset: '50%'
});

$('.js-wp-22').waypoint(function(direction) {
	$('.js-wp-22').addClass('animated bounceIn');
}, {
	offset: '50%'
});


// Contact


$('.js-wp-23').waypoint(function(direction) {
	$('.js-wp-23').addClass('animated shake');
}, {
	offset: '50%'
});
