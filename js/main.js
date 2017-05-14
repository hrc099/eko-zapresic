/*Add active class to active navigation link*/

var path = window.location.pathname.split("/").pop();
var target = $('nav a[href="'+path+'"]');
target.addClass('active');

/*Hamburger menu active / not active*/

var $hamburger = $('.hamburger');
var $ul = $(".nav2 ul");
$hamburger.on("click", function(e) {
	$hamburger.toggleClass("is-active");
	$ul.toggleClass("activeMinNav");
});

/*Move relative div by the fixed header height*/

var headerHeight = $('header').height();
$('.other-main').css('margin-top', headerHeight);
