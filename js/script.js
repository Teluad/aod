$('.menu__icon').click(function (event) {
	$(this).toggleClass('active');
	$('.menu__body').toggleClass('active');
	if ($(this).hasClass('active')) {
		$('body').data('scroll', $(window).scrollTop());
	}
	$('body').toggleClass('lock');
	if (!$(this).hasClass('active')) {
		$('body,html').scrollTop(parseInt($('body').data('scroll')));
	}
});

$(document).ready(function () {
	function ibg() {
		$.each($('.ibg'), function (index, val) {
			if ($(this).find('img').length > 0) {
				$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
			}
		});
	}
	ibg();
});

if ($('.slider__body').length > 0) {
	$('.slider__body').slick({
		dots: true,
		arrows: false,
		accessibility: false,
		slidesToShow: 1,
		autoplay: true,
		infinite: false,
		autoplaySpeed: 3000,
		adaptiveHeight: true,
	});
}