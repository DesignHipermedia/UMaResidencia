$(document).ready(main);

var contador = 1;

function main() {
    $('.logomenuresponsive').click(function () {
        // $('nav').toggle(); 

        if (contador == 1) {

            $('.fondomenuresponsive').animate({
                zIndex: '2'
            });

            $('.fondomenuresponsive').animate({
                opacity: '0.8'
            });

            $('.containermenuresponsive').animate({
                left: '0%'
                //transform: translateX(-2)
            });

            contador = 0;
        } else {
            contador = 1;

            $('.fondomenuresponsive').animate({
                opacity: '0'
            });

            $('.fondomenuresponsive').animate({
                zIndex: '-20'
            });

            $('.containermenuresponsive').animate({
                left: '-900%'
                //transform: translateX(-110)
            });
            
            ;
        }

    });
        

};