$(window).on('load resize', function () {
	if ($(window).width() < 768) {
		$('.review-slider:not(.slick-initialized)').slick({
			dots: true,
			infinite: true,
			speed: 100,
			slidesToShow: 1,
			arrows: false
		});

		$('.secrets-slider:not(.slick-initialized)').slick({
			dots: true,
			infinite: true,
			speed: 200,
			slidesToShow: 1,
			arrows: false
		});

		$('.search-list:not(.slick-initialized)').slick({
			dots: true,
			infinite: true,
			speed: 200,
			slidesToShow: 1,
			arrows: false
		});

	} else {
		$(".secrets-slider.slick-initialized").slick("unslick");
		$(".review-slider.slick-initialized").slick("unslick");
		$(".search-list.slick-initialized").slick("unslick");
	}

	if ($(window).width() < 1340) {
		openPro();
	}
});

jQuery(document).ready(function ($) {
	faqAccordeon();
	inputFileCustom();
	listCategory();
	tooltip();
	$(".fancybox").fancybox();
	openDropdown();
	resizeBlock();
	subMenuNavigation();
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
	if ($(window).width() < 768) {
		loadMore();
	}

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

	$('ul.mini-tabs li').click(function () {
		var photoBox = $(this).find('.photo-box');

		if (photoBox.is(':visible')) {
			photoBox.slideUp();
		} else {
			$('.photo-box').slideUp();
			photoBox.slideDown();
		}
	});

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
		slidesToShow: 1,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false
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


function inputFileCustom() {
	// Список всех <input> на странице
	const inputs = document.querySelectorAll('input[type="file"]');

	// Перебираем все <input>
	inputs.forEach(input => {
		// Блок предпросмотра
		const preview = input.closest('.calculator__form').querySelector('.preview');

		// Список файлов
		const fileList = [];

		// Вешаем функцию onChange на событие change у <input>
		input.addEventListener('change', onChange);

		function onChange() {
			// По каждому файлу <input>
			[...input.files].forEach(file => {
				// Создаём читателя
				const reader = new FileReader;
				// Вешаем событие на читателя
				reader.addEventListener('loadend', () => {
					// Элемент списка .preview
					const item = document.createElement('li');
					// Картинка для предпросмотра
					const image = new Image;
					// URI картинки
					image.src = `data:${file.type};base64,${btoa(reader.result)}`;
					// Ссылка на исключение картинки из списка выгрузки
					const remove = document.createElement('div');
					// Элемент массива fileList
					const fileItem = {
						name: file.name,
						modified: file.lastModified,
						size: file.size,
						data: reader.result
					};
					// Добавляем элемент в список выгрузки
					fileList.push(fileItem);
					// Обработчик клика по ссылке исключения картинки
					remove.addEventListener('click', () => {
						// Исключаем элемент с картинкой из списка выгрузки
						fileList.splice(fileList.indexOf(fileItem), 1);
						// Удаляем элемент списка (<li>) из <ul> 
						item.classList.add('removing');
						setTimeout(() => item.remove(), 100);
					});
					item.appendChild(remove);
					item.appendChild(image);
					preview.appendChild(item);
				});
				// Запускаем чтение файла
				reader.readAsBinaryString(file);
			});
			// Сбрасываем значение <input>
			input.value = '';
			// Создаем клон <input>
			const newInput = input.cloneNode(true);
			// Заменяем <input> клоном
			input.replaceWith(newInput);
			// Теперь input будет указывать на клона
			input = newInput;
			// Повесим функцию onChange на событие change у нового <input>
			input.addEventListener('change', onChange);
		}
	});
}

function openDropdown() {
	jQuery('.open-link').on('click', function () {
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

function initSearchFormSwitcher() {
	jQuery('.btn_search').on('click', function () {
		jQuery('.search-holder').toggleClass('active');
	});
	$(document).mouseup(function (e) {
		let div = $('.search-holder');
		if (!div.is(e.target)
			&& div.has(e.target).length === 0) {
			div.removeClass('active');
		}
	});
}

function resizeBlock() {
	if (window.matchMedia("screen and (max-width: 1319px)").matches) {
		$('.btn_pay').appendTo($('.logo-area'));
	}
	else if (window.matchMedia("screen and (min-width: 1319px)").matches) {
		$('.btn_pay').appendTo($('.header .btn-box'));
	}
}

function loadMore() {
	var $items = $(".category__item");
	var count = 3;
	var visible = 3;
	var windowWidth = $(window).width();

	function updateVisibility() {
		if (windowWidth < 768) {
			$items.slice(visible).hide();
		} else {
			$items.show();
		}
	}

	updateVisibility();

	$(window).resize(function () {
		windowWidth = $(window).width();
		updateVisibility();
	});

	$(".load_more").click(function (event) {
		event.preventDefault();
		$items.slice(visible, visible + count).show();
		visible += count;

		if (visible >= $items.length) {
			$(this).hide();
		}
	});
}

$(window).resize(function () {
	resizeBlock();
	if ($(window).width() < 768) {
		loadMore();
	}


});

function subMenuNavigation() {
	let doc = jQuery(document),
		isTouchDevice = /Windows Phone/.test(navigator.userAgent) || ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;

	if (isTouchDevice === true) {
		jQuery('.nav .menu-item-has-children').each(function () {
			let navItem = jQuery(this).addClass('touch-device'),
				navItemLink = navItem.children('a'),
				dataClick = navItem.attr('data-click', 0),
				subMenu = navItem.children('.sub-menu');

			navItemLink.on('touchstart', function (e) {
				if (navItem.attr('data-click') == 0) {
					e.preventDefault();

					navItem.attr('data-click', 1).addClass('open');
					subMenu.slideDown();
				} else if (navItem.attr('data-click') == 1) {
					navItem.attr('data-click', 0).removeClass('open');
					subMenu.slideUp();
				}
			});

			function outsideClickHandler(e) {
				if (!jQuery(e.target).closest(navItem).length) {
					navItem.removeClass('open').attr('data-click', 0);
					subMenu.slideUp();
				}
			}

			doc.on('click touchstart', outsideClickHandler);
		});
	}
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

function listCategory() {
	var allLi = jQuery('.list-category .item'),
		allSub = allLi.children('.sub-content');

	jQuery('.list-category .item > .intro-box').each(function () {
		var doc = jQuery(document),
			$this = jQuery(this),
			item = $this.parent('li'),
			itemFilter = $this.next('.sub-content'),
			itemParent = item.parents('li');

		$this.on('click', function () {
			if (jQuery(window).width() < 1024) {
				if (item.hasClass('active')) {
					itemFilter.slideUp();
					item.removeClass('active');
				} else {
					allLi.not(itemParent).removeClass('active');
					allLi.not(itemParent).find('.sub-content').slideUp();
					itemFilter.slideDown();
					item.addClass('active');
				}
			} else {
				if (item.hasClass('active')) {
					itemFilter.fadeOut();
					item.removeClass('active');
				} else {
					allLi.not(itemParent).removeClass('active');
					allLi.not(itemParent).find('.sub-content').fadeOut();
					itemFilter.fadeIn();
					item.addClass('active');
				}
			}
		});
	});
}

function tooltip() {
	$('.how-list li').each(function () {
		var tooltip = $(this).find('.tooltip');
		var icon = $(this).find('.icon-info');
		var close = $(this).find('.close');

		// Открытие тултипа при клике на иконку
		icon.click(function () {
			tooltip.fadeIn();
		});

		// Закрытие тултипа при клике на крестик или вне области тултипа
		$(document).mouseup(function (e) {
			if (!tooltip.is(e.target) && tooltip.has(e.target).length === 0 && !icon.is(e.target)) {
				tooltip.fadeOut();
			}
			if (close.is(e.target)) {
				tooltip.fadeOut();
			}
		});
	});
}