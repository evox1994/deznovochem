$(document).ready(function(){

	$(document).on('click','.radio-btn',function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
		} else {
			$(this).removeClass('error');
			$(this).addClass('active');
		}
	});

	$(document).on('click','.mobile-btn',function(){
		if ( $(this).hasClass('active') ){
			$(this).removeClass('active');
			$('.mobile-menu').removeClass('active');
			$('body').removeClass('no-scroll');
			$('li.li-drop').removeClass('active');
		} else {
			$(this).addClass('active');
			$('.mobile-menu').addClass('active');
			$('body').addClass('no-scroll');
		}
	});

	$('.fancybox-gal').fancybox({loop: true});
	$('.fancybox').fancybox({touch: false});
	$('input[type="tel"]').inputmask('+7 999 999 99 99');

	$(document).on('click','.close-btn',function(){
		$('.mobile-btn').removeClass('active');
		$('.mobile-menu').removeClass('active');
		$('body').removeClass('no-scroll');
		$('.mobile-menu .nav li.li-drop').removeClass('active');
		$('li.li-drop').removeClass('active');
	});

	$('input').on('input',function(){
		$(this).removeClass('error');
	});
	$('textarea').on('input',function(){
		$(this).removeClass('error');
	});

	$('form').on('submit',function(){
		var valid = true;

		if ( $(this).find('.policy-text .radio-btn').length ){
			if ( $(this).find('.policy-text .radio-btn').hasClass('active') ){
				$(this).find('input').each(function(){
					if(!$(this).val().length) { 
						event.preventDefault();
						valid = false;
						$(this).addClass("error"); 
					} else { 
						$(this).removeClass("error"); 
					}
				});
				$(this).find('textarea').each(function(){
					if(!$(this).val().length) { 
						event.preventDefault();
						valid = false;
						$(this).addClass("error"); 
					} else { 
						$(this).removeClass("error"); 
					}
				});
			} else {
				$(this).find('.policy-text .radio-btn').addClass('error');
				event.preventDefault();
				return false;
			}
		} else {
			$(this).find('input').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault();
					valid = false;
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				}
			});
			$(this).find('textarea').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault();
					valid = false;
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				}
			});
		}

		if ($(this).hasClass('calc-form')){
			valid = false;
		}

		if (!valid) {
			event.preventDefault();
			return false;
		}
	});

	function footerYear(){
		var date = new Date();
		var year = date.getFullYear();
		$('#footer-year').text(year);
	}
	footerYear();

	$('.action-slider').slick({
		dots: true
	});

	$('.b-catalog-cat .slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1230,
				settings: {
					slidesToShow: 3
				}
			}
		]
	});

	$('.b-clients-slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 340,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.b-select select').chosen({
		disable_search: true
	});

	$(document).on('click',function(e){
		if ( !$(e.target).closest('.header').length ){
			$('.b-drop').removeClass('active');
			$('.catalog-btn').removeClass('active');
		}
	});

	$(document).on('click','.nav-list li.li-drop span',function(){
		$(this).parent('li.li-drop').addClass('active');
	});

	$(document).on('click','.nav-list .back-btn',function(){
		$(this).parent('.drop').parent('li.li-drop').removeClass('active');
	});

	$(document).on('click','.swap-list > li',function(){
		if ( !$(this).hasClass('active') ){
			$(this).parents('.swap-list').find('li').removeClass('active');
			$(this).addClass('active');
		}
	});

	$(document).on('click','.catalog-btn',function(){
		if ( $(this).hasClass('active') ){
			$('.b-drop').removeClass('active')
		} else {
			$('.b-drop').addClass('active');
		}
		$(this).toggleClass('active');
	});

	$('.cat-list li').on('mouseenter',function(){
		var el = $(this).attr('data-cat');

		if ( !$(this).hasClass('active') ){
			$(this).parent('.cat-list').find('li').removeClass('active');
			$(this).parents('.b-drop').find('.drop-cat').removeClass('active');
			$(this).addClass('active');
			$(el).addClass('active');
		}
	});

	$(document).on('click','.hidden-text-btn',function(){
		$(this).parents('.b-catalog-text').find('.hidden-text').removeClass('hidden');
		$(this).parents('.text-overflow').remove();
		return false;
	});

	/*$('.b-selection .step').find('.b-select select').on('change',function(){
		if ( $(this).parents('.step').next('.step').length ){
			$(this).parents('.step').next('.step').addClass('active');
		}
	});*/

	$('.calc-form input').on('change',function(){
		var s = $(this).val();
		var v = $('.calc-form select').val();
		var res = +s*v;
		res = +res.toFixed(6);

		if (s){
			$('.b-consumption').find('.text').html('Количество антисептика&nbsp;(л.): <span>'+res+'</span>');
		} else {
			$('.b-consumption').find('.text').html('Заполните поля выше для рассчёта расхода');
		}
	});

	$('.calc-form select').on('change',function(){
		var s = $('.calc-form input').val();
		var v = $(this).val();
		var res = +s*v;
		res = +res.toFixed(6);

		if (s){
			$('.b-consumption').find('.text').html('Количество антисептика&nbsp;(л.): <span>'+res+'</span>');
		} else {
			$('.b-consumption').find('.text').html('Заполните поля выше для рассчёта расхода');
		}
	});

	$(document).on('click','.order-btn',function(){
		var vol = $(this).parents('li').find('.swap-list li.active').attr('data-vol');
		var price = $(this).parents('li').find('.swap-list li.active').attr('data-price');
		var name = $(this).parents('li').find('.top .name').text();
		$('#popup-cart').find('.product').find('.name').text(name);
		$('#popup-cart').find('.product').find('.vol span').text(vol);
		$('#popup-cart').find('.product').find('.price span').text(price);
		$('#popup-cart').find('.product').find('.col .text').text(1);
		$('#popup-cart').find('.sum span').text(price);
	});

	$(document).on('click','.popup .product .col .less',function(){
		var col = Number($(this).parent('.col').find('.text').text());
		var price = Number($(this).parents('.product').find('.price span').text());
		var sum = Number($(this).parents('#popup-cart').find('.sum span').text());
		if (col > 1){
			col--;
			sum = sum - price;
			$(this).parents('#popup-cart').find('.sum span').text(sum);
			$(this).parent('.col').find('.text').text(col);
		} else {
			$.fancybox.close();
		}
	});

	$(document).on('click','.popup .product .col .more',function(){
		var col = Number($(this).parent('.col').find('.text').text());
		var price = Number($(this).parents('.product').find('.price span').text());
		var sum = Number($(this).parents('#popup-cart').find('.sum span').text());
		col++;
		sum = sum + price;
		$(this).parents('#popup-cart').find('.sum span').text(sum);
		$(this).parent('.col').find('.text').text(col);
	});

	$(document).on('click','.popup .product .del',function(){
		$.fancybox.close();
	});

});