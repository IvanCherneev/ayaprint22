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