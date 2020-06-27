$(function(){
	$(".hamburger-menu").on('click', function(){
    	$('.toggle').toggleClass('open');
    	$('.navbar-nav').toggleClass('open');
    	$('.body').toggleClass('open');
    	
    });

AOS.init({
    	easing: "ease",
    	duration: 2000, 
    })
});

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

