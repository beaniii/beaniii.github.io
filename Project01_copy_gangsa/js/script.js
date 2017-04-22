$(document).ready(function(){
    $('.center .center_top .slider').slick({
         
    });
    
    $('.nav .nav_right #home').hover(function(){
        $('.center .center_top #home').addClass('appear');
    });
    $('.nav .nav_right #home').on('mouseleave',function(){
        $('.center .center_top #home').removeClass('appear');
    });
    $('.nav .nav_right #home').siblings().hover(function(){
        
    });
    
    
    
    
//    $('').on('click',function(){
//        alert('3') ;
//    });
    
});