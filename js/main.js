$(document).ready(function(){
 


    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })
    

    $('.video-text a').magnificPopup({
       type: 'iframe',
       iframe: {
           markup: '<div class="mfp-iframe-scaler">' +
               '<div class="mfp-close"></div>' +
               '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
               '</div>',
           patterns: {
               youtube: {
                   index: 'youtube.com/',
                   id: 'v=',
                   src: 'http://www.youtube.com/embed/%id%?autoplay=1'
               }
           },
           srcAction: 'iframe_src'
       }
   });


});




