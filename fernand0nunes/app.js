//navbar motion
const navSlide =() => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks= document.querySelectorAll('.nav-links li')
    
    burger.addEventListener('click', () =>{
        //toggle Nav
        nav.classList.toggle('nav-active');  

        //Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
            link.style.animation = ''; 
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 0.3}s`;
            }
        });
        //burger animation
        burger.classList.toggle('toogle');
    });
};
navSlide();
//scroll image
$(window).scroll(function () {
    var scroll_position = $(window).scrollTop();
    $('section').css({
        'background-position-x': - scroll_position + 'px',
    })
});
$(window).scroll(function () {
    var scroll_position = $(window).scrollTop();
    $('.section2').css({
        'background-position-x': - scroll_position + 'px',
    })
});
$(window).scroll(function () {
    var scroll_position = $(window).scrollTop();
    $('.section3').css({
        'background-position-x': - scroll_position + 'px',
    })
});
$(window).scroll(function () {
    var scroll_position = $(window).scrollTop();
    $('.section4').css({
        'background-position-x': - scroll_position + 'px',
    })
});
$(window).scroll(function () {
    var scroll_position = $(window).scrollTop();
    $('.section5').css({
        'background-position-x': - scroll_position + 'px',
    })
});
//background navbar
$(window).on('scroll', function(){
    if ($(window).scrollTop()){
         $('nav').addClass('black');
    }
    else 
    {
        $('nav').removeClass('black');
    }
});
//smoth scroll
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 2000);
          return false;
        }
      }
    });
  });

////botão para subir
$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() >40){
            $('#topBtn').fadeIn();
        } else{
            $('#topBtn').fadeOut();
        }
    });

    $("#topBtn").click(function(){
        $('html ,body').animate({scrollTop : 0},2000);
    });
});


