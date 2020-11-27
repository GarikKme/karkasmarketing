// lightGallery(document.getElementById('lightgallery'));
$(document).ready(function ($) {
	//menu
	$('.close').on('click', () => {
		$('.close').toggleClass('open');
		$('.menu').slideToggle(1000);
	});

	$('.gamburger').on('click', () => {
		$('.menu').slideToggle(1000);
		$('.close').toggleClass('open');
	});

	//lightgallery
	lightGallery(document.getElementById('lightgallery'));
	lightGallery(document.getElementById('lightgallery2'));
	lightGallery(document.getElementById('lightgallery3'));
	lightGallery(document.getElementById('lightgallery4'));


	// Menu Scroll to section

	$('a[href^="#"').click(function () {
		let target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 1500);

		return false;
	});

	//masked input
	$("#tel").mask("+7(999) 999-9999");
	$("#tel2").mask("+7(999) 999-9999");
	$("#tel3").mask("+7(999) 999-9999");

	// form validation

	$(document).ready(function () {
		$('[data-submit]').on('click', function (e) {
			e.preventDefault();
			$(this).parent('form').submit();
		})
		$.validator.addMethod(
			"regex",
			function (value, element, regexp) {
				var re = new RegExp(regexp);
				return this.optional(element) || re.test(value);
			},
			"Please check your input."
		);



		// Функция валидации и вывода сообщений
		function valEl(el) {

			el.validate({
				rules: {
					tel: {
						required: true,
						regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
					},
					name: {
						required: true
					},
					email: {
						required: true,
						email: true
					},
					checkbox: {
						required: true
					}
				},
				messages: {
					tel: {
						required: 'Введите телефон',
						regex: 'Телефон может содержать символы + - ()'
					},
					name: {
						required: 'Введите имя',
					},
					email: {
						required: 'Введите E-mail',
						email: 'Неверный формат E-mail'
					},
					checkbox: {
						required: 'Этот пункт обязателен для заполнения'
					}
				},

				// Начинаем проверку id="" формы
				submitHandler: function (form) {
					$('#loader').fadeIn();
					let $form = $(form);
					let $formId = $(form).attr('id');
					switch ($formId) {
						// Если у формы id="goToNewPage" - делаем:
						case 'goToNewPage':
							$.ajax({
									type: 'POST',
									url: $form.attr('action'),
									data: $form.serialize(),
								})
								.always(function (response) {
									//ссылка на страницу "спасибо" - редирект
									location.href = '';
								});
							break;
							// Если у формы id="popupResult" - делаем:
						case 'popupResult':
							$.ajax({
									type: 'POST',
									url: $form.attr('action'),
									data: $form.serialize(),
								})
								.always(function (response) {
									setTimeout(function () {
										$('#loader').fadeOut();
									}, 800);
									setTimeout(function () {
										$('#overlay').fadeIn();
										$form.trigger('reset');
										//строки для остлеживания целей в Я.Метрике и Google Analytics
									}, 1100);
									$('#overlay').on('click', function (e) {
										$(this).fadeOut();
									});
								});
							break;
					}
					return false;
				}
			})
		}

		// Запускаем механизм валидации форм, если у них есть класс .js-form
		$('.js-form').each(function () {
			valEl($(this));
		});

	});

	// animation

	$(window).scroll(function () {
		$('.skills__item, .skills__text, .reasons-wrap, .reasons__title, .works__title, .works__item, .works-offers, .works__subtitle, .works__subtitle2, .garanties__title, .garanties__box, .cases__title, .cases__box, .contacts__title, .footer').each(function () {
			let imagePos = $(this).offset().top;

			let topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 950) {
				$(this).addClass("animate__fadeInUp");
			}
		});
	});
	$(window).scroll(function () {
		$('.contacts-word1, .contacts-word2').each(function () {
			let imagePos = $(this).offset().top;

			let topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 950) {
				$(this).addClass("animate__fadeInLeft");
			}
		});
	});
	$(window).scroll(function () {
		$('.form, .contacts__text1, .contacts__text2').each(function () {
			let imagePos = $(this).offset().top;

			let topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 950) {
				$(this).addClass("animate__fadeInRight");
			}
		});
	});
	$(window).scroll(function () {
		$('.fdInR').each(function () {
			let imagePos = $(this).offset().top;

			let topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 950) {
				$(this).addClass("animate__fadeInRight");
			}
		});
	});
});