$(document).ready(function(){
    var altura = $('.menu').offset().top ;
    
    $(window).on('scroll',function(){
        if ($(window).scrollTop()> altura ){
            $('.menu').removeClass('menu-static');
            $('.menu').addClass('menu-fixed');
        }else{
            $('.menu').removeClass('menu-fixed');
            $('.menu').addClass('menu-static');
        }
    })
});