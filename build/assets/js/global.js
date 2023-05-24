$(window).on('load resize', function () {
	if ($(window).width() < 768) {
		$('.review-slider:not(.slick-initialized)').slick({
			dots: true,
			infinite: true,
			speed: 100,
			slidesToShow: 1,
			arrows: false
		});

		$('.js-secrets-slider:not(.slick-initialized)').slick({
			dots: true,
			infinite: true,
			speed: 200,
			slidesToShow: 1,
			arrows: false
		});

		// $('.search-list:not(.slick-initialized)').slick({
		// 	dots: true,
		// 	infinite: true,
		// 	speed: 200,
		// 	slidesToShow: 1,
		// 	arrows: false
		// });

	} else {
		$(".js-secrets-slider.slick-initialized").slick("unslick");
		$(".review-slider.slick-initialized").slick("unslick");
		// $(".search-list.slick-initialized").slick("unslick");
	}

	if ($(window).width() < 1340) {
		openPro();
	}
});

jQuery(document).ready(function ($) {
	faqAccordeon();
	$(".fancybox").fancybox();
	openDropdown();
	addClass();

	$(window).on('beforeunload', function () {
		if ($(window).scrollTop() === 0) {
			$('.main-header').removeClass('sticky');
		}
	});
	$(".js-select2").select2({
		closeOnSelect: false,
		placeholder: "Комплектація",
		// allowHtml: true,
		allowClear: true,
		tags: true // создает новые опции на лету
	});
	$(".select_single").select2({
		theme: 'single'
	});
	modalOpen();

	$('.form-box .text-input').on('input', function () {
		if ($(this).val().trim() !== '') {
			$(this).addClass('filled');
		} else {
			$(this).removeClass('filled');
		}
	});

	$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
		var contentTop = $(this).closest('div.tabs').find('div.tabs__content').eq($(this).index()).offset().top;
		$('html, body').animate({
			scrollTop: contentTop
		}, 500);
	});

	$('.detail-links').on('click', 'li:not(.active)', function () {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});


	$('.btn_pro').hover(function () {
		$('.choose-menu').removeClass('active');
	});

	function miniTabs() {
		var windowWidth = $(window).width();
		var isMobile = windowWidth <= 768;
	  
		function togglePhotoBox() {
		  windowWidth = $(window).width();
		  isMobile = windowWidth <= 768;
	  
		  if (isMobile) {
			$('ul.mini-tabs li').off('click').on('click', function () {
			  var photoBox = $(this).find('.photo-box');
	  
			  if (photoBox.is(':visible')) {
				photoBox.slideUp();
			  } else {
				$('.photo-box').slideUp();
				photoBox.slideDown();
			  }
			});
	  
			// Открываем первый photoBox по умолчанию
			$('ul.mini-tabs li:first-child .photo-box').slideDown();
		  } else {
			$('ul.mini-tabs li').off('click');
			$('.photo-box').slideUp();
		  }
		}
	  
		// Инициализация при загрузке страницы
		togglePhotoBox();
	  
		// Обработчик события resize для изменения размеров окна браузера
		$(window).resize(function () {
		  var newWindowWidth = $(window).width();
		  var newIsMobile = newWindowWidth <= 768;
	  
		  if (isMobile !== newIsMobile) {
			togglePhotoBox();
		  }
		});
	  }
	  

	miniTabs();
	
	function addClass() {
		var mainHeader = $('.main-header');
		var headerOffset = mainHeader.offset().top;

		$(window).on('load scroll', function () {
			var scrollTop = $(window).scrollTop();

			if (scrollTop >= headerOffset) {
				mainHeader.addClass('sticky');
			} else {
				mainHeader.removeClass('sticky');
			}
		});
	}



	function modalOpen() {
		let overlay = $('#overlay'); // пoдлoжкa, дoлжнa быть oднa нa стрaнице
		let open_modal = $('.open_modal'); // все ссылки, кoтoрые будут oткрывaть oкнa
		let close = $('.modal_close, #overlay'); // все, чтo зaкрывaет мoдaльнoе oкнo, т.е. крестик и oверлэй-пoдлoжкa
		let modal = $('.modal_div'); // все скрытые мoдaльные oкнa

		open_modal.click(function (event) { // лoвим клик пo ссылке с клaссoм open_modal
			event.preventDefault(); // вырубaем стaндaртнoе пoведение
			let div = $(this).attr('href'); // вoзьмем стрoку с селектoрoм у кликнутoй ссылки
			overlay.fadeIn(400, //пoкaзывaем oверлэй
				function () { // пoсле oкoнчaния пoкaзывaния oверлэя
					$(div) // берем стрoку с селектoрoм и делaем из нее jquery oбъект
						.css('display', 'block')
						.animate({ opacity: 1, top: '50%' }, 200); // плaвнo пoкaзывaем
				});
		});

		close.click(function () { // лoвим клик пo крестику или oверлэю
			modal // все мoдaльные oкнa
				.animate({ opacity: 0, top: '45%' }, 200, // плaвнo прячем
					function () { // пoсле этoгo
						$(this).css('display', 'none');
						overlay.fadeOut(400); // прячем пoдлoжку
					}
				);
		});
	}

	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('.scrolltop:hidden').stop(true, true).fadeIn();
		} else {
			$('.scrolltop').stop(true, true).fadeOut();
		}
	});

	$(function () {
		$(".muve-top").click(function () {
			var top = $(".thetop").offset().top;
			$('html, body').animate({
				scrollTop: top
			}, 3000, 'easeOutExpo');
			return false
		})
	})

	var nav = $('.language-title');
	var selection = $('.language-list');
	var select = selection.find('li');

	nav.click(function (event) {
		if (nav.hasClass('active')) {
			nav.removeClass('active');
			selection.stop().slideUp(200);
		} else {
			nav.addClass('active');
			selection.stop().slideDown(200);
		}
		event.preventDefault();
	});

	select.click(function (event) {
		select.removeClass('active');
		$(this).addClass('active');
		var $lang = $(this).text();
		nav.text($lang);
		nav.trigger('click');
	});

	let navOpener = document.querySelector('.js-nav-opener');
	let header = document.querySelector('.header');

	navOpener.addEventListener('click', () => {
		header.classList.toggle('active');
	})

	$('.review-box').masonry({
		itemSelector: '.review-box .item'
	});

	$('.happy-slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 3,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					slidesToShow: 1
				},
			}
		]
	});

	$('.gameplay-slider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 3,
		centerMode: true,
		centerPadding: '0',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: false,
					dots: true
				},
			}
		]
	});

	$('.feedback-slider').slick({
		slidesToShow: 3,
		dots: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					arrows: false,
					centerMode: true,
					centerPadding: '60px',
				},
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					arrows: false,
					adaptiveHeight: true,
					centerPadding: '30px',
				}
			}
		]
	});

	$('.photo-area__slider').slick({
		slidesToShow: 3,
		dots: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});

	AOS.init({
		duration: 1000,
	});

	document.addEventListener('aos:in', ({ detail }) => {
		console.log('animated in', detail);
	});

	document.addEventListener('aos:out', ({ detail }) => {
		console.log('animated out', detail);
	});
});


function openDropdown() {
	jQuery('.open-link').on('click', function (e) {
		e.preventDefault();
		jQuery('.choose-menu').toggleClass('active');
	});
	$(document).mouseup(function (e) {
		let div = $('.choose-menu');
		if (!div.is(e.target)
			&& div.has(e.target).length === 0) {
			div.removeClass('active');
		}
	});
}

function openPro() {
	jQuery('.btn_pro').on('click', function () {
		jQuery('.btn-box').toggleClass('active');
	});
	$(document).mouseup(function (e) {
		let div = $('.btn-box');
		if (!div.is(e.target)
			&& div.has(e.target).length === 0) {
			div.removeClass('active');
		}
	});
}

function faqAccordeon() {
	var allLi = jQuery('.faq-list li'),
		allSub = allLi.children('.filter');

	jQuery('.faq-list li > span').each(function () {
		var doc = jQuery(document),
			$this = jQuery(this),
			item = $this.parent('li'),
			itemFilter = $this.next('.text-faq'),
			itemParent = item.parents('li');


		$this.on('click', function () {
			if (item.hasClass('active')) {
				itemFilter.slideUp();
				item.removeClass('active');
			}
			else {
				allLi.not(itemParent).removeClass('active');
				allLi.not(itemParent).find('.text-faq').slideUp();
				itemFilter.slideDown();
				item.addClass('active');
			}
		});
	});
}