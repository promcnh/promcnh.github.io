$('.header-image').addClass('animated fadeInDown');
$('.anim_main').addClass('animated fadeInUp');
$(function () {
		var header = $('.nav-bar');
		var logo = $('.logo');
		var logoText = $('#logo-text');
		var navLinks = $('.nav-link');
		var toggleMenu = $('.label-toggle');
		$(window).scroll(function () {
				var scroll = $(window).scrollTop();
				if (scroll >= 200) {
						header.removeClass('fade-transparent').addClass('fade-background');
						navLinks.removeClass('text-top').addClass('text-fade-in');
						logo.removeClass('logo-top').addClass('logo-fade-in');
						logoText.removeClass('logo-text-top').addClass('logo-text-fade-in');
						toggleMenu.removeClass('hamburger-top').addClass('hamburger-scroll');
				} else {
						header.removeClass('fade-background').addClass('fade-transparent');
						navLinks.removeClass('text-fade-in').addClass('text-top');
						logo.removeClass('logo-fade-in').addClass('logo-top');
						logoText.removeClass('logo-text-fade-in').addClass('logo-text-top');
						toggleMenu.removeClass('hamburger-scroll').addClass('hamburger-top');
				}
		});
});