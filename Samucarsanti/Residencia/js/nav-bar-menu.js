$(window).on('scroll', function(){
    if ($(window).scrollTop()){
        $('ul').addClass('tamano');
    }
    else {
        $('ul').removeClass('tamano');
    }

    if ($(window).scrollTop()){
        $('tiago').addClass('imgc');
    }
    else {
        $('tiago').removeClass('imgc');
    }

    if ($(window).scrollTop()){
        $('header').addClass('colorop');
    }
    else {
        $('header').removeClass('colorop');
    }
})