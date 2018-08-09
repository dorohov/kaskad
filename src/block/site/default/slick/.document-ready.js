'use strict';
$(function() { 
	var dealers = $('[data-slider-slick="slick-dealers"]');	
	var CMS__TPL_PATH = '/wp-content/themes/azbn7theme';  
	//var CMS__TPL_PATH = '/logistica';  
	//var CMS__TPL_PATH = '';  
	//local
	var prevArrow = '<button type="button" class="btn-nav__link  is--prev  slick-prev"><svg class="icon-svg icon-owl-prev" role="img"><use xlink:href="'+ CMS__TPL_PATH +'/img/svg/sprite.svg#owl-prev"></use></svg></button>';
	var nextArrow = '<button type="button" class="btn-nav__link  is--next  slick-next"><svg class="icon-svg icon-owl-next" role="img"><use xlink:href="'+ CMS__TPL_PATH +'/img/svg/sprite.svg#owl-next"></use></svg></button>';	
	dealers.slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: true,
		dots: false,
		infinite: true,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		responsive: [
		    {
				breakpoint: 1600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
		    },
		    {
				breakpoint: 1400,
				settings: {
					//dots: false,
					slidesToShow: 2,
					slidesToScroll: 2,
				}
		    },
		    {
				breakpoint: 1025,
				settings: {					
					arrows: false,
					slidesToShow: 2,
					slidesToScroll: 2,
				}
		    },
		    {
				breakpoint: 768,
				settings: {
					arrows: false,
					//dots: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				}
		    }
		]
	});
}); 