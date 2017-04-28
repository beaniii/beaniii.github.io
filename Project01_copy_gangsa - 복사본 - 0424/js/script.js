$(document).ready(function(){
    
    
    $('.slider').slick({
        
    });
    
     
   $(window).on('scroll',function(){
		
		var nowScroll = $(this).scrollTop(); // 스크롤 현재 위치
		
        var menuPos = nowScroll;
       
       $('.menubar').css('top',menuPos+'px');
       
       
	});
    
    $('.hot div').hover(function(){
        $(this).addClass('effect');
    });
    
    
    
    
});