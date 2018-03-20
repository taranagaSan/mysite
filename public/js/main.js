$(document).ready(function(){
    //При нажатии на ссылку с классом poplight и href атрибута тега <a> с #
    $('a.poplight[href*=\\#]').click(function() {
        var popID = $(this).attr('rel'); //получаем имя окна, важно не забывать при добавлении новых менять имя в атрибуте rel ссылки
        var popURL = $(this).attr('href'); //получаем размер из href атрибута ссылки

        //запрос и переменные из href url
        var query= popURL.split('?');
        var dim= query[1].split('&');
        var popWidth = dim[0].split('=')[1]; //первое значение строки запроса

        //Добавляем к окну кнопку закрытия
        $('#' + popID).fadeIn().css({ 'width': Number( popWidth ) });

        //Определяем маржу(запас) для выравнивания по центру (по вертикали и горизонтали) - мы добавляем 80 к высоте / ширине с учетом отступов + ширина рамки определённые в css
        var popMargTop = ($('#' + popID).height() + 80) / 2;
        var popMargLeft = ($('#' + popID).width() + 80) / 2;

        //Устанавливаем величину отступа
        $('#' + popID).css({
            'margin-top' : -popMargTop,
            'margin-left' : -popMargLeft
        });
        //Добавляем полупрозрачный фон затемнения
        $('body').append('<div id="fade"></div>'); //div контейнер будет прописан перед тегом </body>.
        $('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn(); //полупрозрачность слоя, фильтр для тупого IE

        return false;
    });
    //Закрываем окно и фон затемнения
    $(document).on('click', 'a.close, #fade', function() { //закрытие по клику вне окна, т.е. по фону...
        $('#fade , .popup_block').fadeOut(function() {
            $('#fade, a.close').remove();  //плавно исчезают
        });
        return false;
    });

    //Вставка видое
    $('.promo_button').click(function () {
        $('.popup_block_video').fadeIn();
        $('body').append('<div id ="fade"></div>');
        return false;
    });

    $(document).on('click', '#fade',function () {
        $('#fade, .popup_block_video').fadeOut(function () {
            $('#fade').remove();
        });
        return false;
    })
});


//изменение header при прокрутке
$(document).ready(function () {
    $(document).scroll(function(){
        let top = $(this).scrollTop();
        console.log(top);
        if(top >= 100) {
            $('header').removeClass('header').addClass('headerScroll');
        } else if (top <= 200) {

            $('header').removeClass('headerScroll').addClass('header');

        }
    });

    // Увеличение картинок при клике

    $('a.enter').click(function () {
        $('.popup_block_enter').fadeIn(500);
        $('body').append('<div id ="fade"></div>').css('display','block');
        return false;
    });
    $(document).on('click', '#fade',function () {
        $('#fade, .popup_block_enter').fadeOut(function () {
            $('#fade').remove();
        });
        return false;
    })

});

