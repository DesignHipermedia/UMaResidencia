/*-----------------------------------------------------------------------------------*/
/*	MODAL
/*-----------------------------------------------------------------------------------*/

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

/*-----------------------------------------------------------------------------------*/
/*	LIGHTBOX
/*-----------------------------------------------------------------------------------*/

// Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

/*-----------------------------------------------------------------------------------*/
/*	MENU
/*-----------------------------------------------------------------------------------*/ 

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


/*-----------------------------------------------------------------------------------*/
/*	POSTS GRID
/*-----------------------------------------------------------------------------------*/ 
$(window).load(function(){
    var $container = $('.blog-grid');

    var gutter = 30;
    var min_width = 345;
    $container.imagesLoaded( function(){
        $container.masonry({
            itemSelector : '.post',
            gutterWidth: gutter,
            isAnimated: true,
              columnWidth: function( containerWidth ) {
                var box_width = (((containerWidth - gutter)/2) | 0) ;

                if (box_width < min_width) {
                    box_width = (((containerWidth - gutter)/2) | 0);
                }

                if (box_width < min_width) {
                    box_width = containerWidth;
                }

                $('.post').width(box_width);

                return box_width;
              }
        });
        $container.css( 'visibility', 'visible' ).parent().removeClass( 'loading' );
    });
});

/*-----------------------------------------------------------------------------------*/
/*	VIDEO
/*-----------------------------------------------------------------------------------*/

jQuery(document).ready(function($) {
    		$('.video').fitVids();
    	});	

    
/*-----------------------------------------------------------------------------------*/
/*	BUTTON HOVER
/*-----------------------------------------------------------------------------------*/

jQuery(document).ready(function($)  {
$("a.button, .forms fieldset .btn-submit, #commentform input#submit").css("opacity","1.0");
$("a.button, .forms fieldset .btn-submit, #commentform input#submit").hover(function () {
$(this).stop().animate({ opacity: 0.85 }, "fast");  },
function () {
$(this).stop().animate({ opacity: 1.0 }, "fast");  
}); 
});

/*-----------------------------------------------------------------------------------*/
/*	IMAGE HOVER
/*-----------------------------------------------------------------------------------*/		
		
jQuery(document).ready(function($) {	
$('.quick-flickr-item').addClass("frame");
$('.frame a').prepend('<span class="more"></span>');
});

jQuery(document).ready(function($) {
        $('.frame').mouseenter(function(e) {

            $(this).children('a').children('span').fadeIn(300);
        }).mouseleave(function(e) {

            $(this).children('a').children('span').fadeOut(200);
        });
    });	


/*-----------------------------------------------------------------------------------*/
/*	TWITTER
/*-----------------------------------------------------------------------------------*/

getTwitters('twitter', {
        id: 'elemisdesign', 
        count: 2, 
        enableLinks: true, 
        ignoreReplies: false,
        template: '<span class="twitterPrefix"><span class="twitterStatus">%text%</span><br /><em class="twitterTime"><a href="http://twitter.com/%user_screen_name%/statuses/%id%">%time%</a></em>',
        newwindow: true
});

/*-----------------------------------------------------------------------------------*/
/*	FLICKR
/*-----------------------------------------------------------------------------------*/
	
$(document).ready(function($){
	$('.flickr-feed').dcFlickr({
		limit: 9, 
        q: { 
            id: '51789731@N07',
			lang: 'en-us',
			format: 'json',
			jsoncallback: '?'
        },
		onLoad: function(){
			$('.frame a').prepend('<span class="more"></span>');
			$('.frame').mouseenter(function(e) {

            $(this).children('a').children('span').fadeIn(300);
        }).mouseleave(function(e) {

            $(this).children('a').children('span').fadeOut(200);
        });
		}
	});
});	

/*-----------------------------------------------------------------------------------*/
/*	AUDIO PLAYER
/*-----------------------------------------------------------------------------------*/

$(window).load(function(){
		$('.blog-grid audio').mediaelementplayer({
			audioWidth: '100%',
			features: ['playpause','progress','tracks'],
			videoVolume: 'horizontal'
		});
	});
	
jQuery(document).ready(function($) {
		$('.single audio').mediaelementplayer({
			audioWidth: '100%',
			features: ['playpause','progress','tracks'],
			videoVolume: 'horizontal'
		});
	});

/*-----------------------------------------------------------------------------------*/
/*	MENU
/*-----------------------------------------------------------------------------------*/
ddsmoothmenu.init({
	mainmenuid: "menu",
	orientation: 'h',
	classname: 'menu',
	contentsource: "markup"
})