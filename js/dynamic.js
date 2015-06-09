$(document).ready(function() {
	if ( $('.team .carousel').length > 0 ) {
		$('.team .carousel').jcarousel({
			scroll: 1,
			animation: 500,
			wrap: 'circular'
		});
		$('.team .carousel').bind('swipeleft', function() {
			$('.team .carousel .jcarousel-next').trigger('click');
		});
		$('.team .carousel').bind('swiperight', function() {
			$('.team .carousel .jcarousel-prev').trigger('click');
		});
	}
	if ( $('.friends > div').length > 0 ) {
		$('.friends > div').slides({
			generatePagination: true,
			generateNextPrev: true,
			container: 'container',
			effect: 'slide',
			slideSpeed: 500,
			autoHeight: true,
			play: 0,
			pause: 2500
		});
		$('.friends > div').bind('swipeleft', function() {
			$('.friends > div .next').trigger('click');
		});
		$('.friends > div').bind('swiperight', function() {
			$('.friends > div .prev').trigger('click');
		});
	}
	$('input, textarea').each(function () {
		$(this).data('holder',$(this).attr('placeholder'));
		$(this).focusin(function(){
			$(this).attr('placeholder','');
		});
		$(this).focusout(function(){
			$(this).attr('placeholder',$(this).data('holder'));
		});
	});
});
$(window).load(function() {
	if ( $('.result > div > div').length > 0 ) {
		$('.result > div > div').slides({
			generatePagination: true,
			generateNextPrev: true,
			container: 'container',
			effect: 'slide',
			slideSpeed: 500,
			autoHeight: true,
			play: 0,
			pause: 2500
		});
	}
	if ( $('.result > div > div').length > 0 ) {
		$('.result > div > div').bind('swipeleft', function() {
			$('.result > div > div .next').trigger('click');
		});
		$('.result > div > div').bind('swiperight', function() {
			$('.result > div > div .prev').trigger('click');
		});
	}
});