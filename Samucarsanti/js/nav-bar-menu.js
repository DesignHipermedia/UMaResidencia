$(window).on('scroll', function(){
    if ($(window).scrollTop()){
        $('header').addClass('black');
        $('buttondisplay').addClass('btnupdisplay');
    }
    else {
        $('header').removeClass('black');
        $('buttondisplay').removeClass('btnupdisplay');
    }
})