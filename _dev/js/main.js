// Просмотр видео-контента
$('.video__block-inner').click(function() {
	$(this).html('<iframe width="560" height="315" src="https://www.youtube.com/embed/nmc9Ph-vm5M?rel=0&autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
});

// Плавный переход по якорным ссылкам
$(document).ready(function(){
    $(".slide-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

// Функция скрытия ответа при клике
$.fn.selectAnswer = function() {

	this.on('click', function(e) {

		$(this).parents('.answer').addClass('answer_hidden');
		e.preventDefault();

	});

};

$('.answer__collapse').selectAnswer();

// Функция показа ответа при клике
$.fn.selectAnswer = function() {

	this.on('click', function(e) {

		if ($('.answer').hasClass('answer_hidden') === true) {
			$('.answer').addClass('answer_hidden');
		}
		$(this).parents('.answer').removeClass('answer_hidden');
		e.preventDefault();

	});

};

$('.answer__title').selectAnswer();