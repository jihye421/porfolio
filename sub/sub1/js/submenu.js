//index.js


$(function(){
    
    //메뉴구현
    
    /*$('nav .gnb').mouseover(function(){
        $('.sub , .wrap').stop().slideDown(600);
    }).mouseout(function(){
        $('.sub , .wrap').stop().slideUp(600);
    });*/
    
    //메뉴구현2
    $('.gnb>li').mouseenter(function(){
        
        //$('.cover').show();
        $('.cover').stop().animate({
            height: '60px'
        }, 600);
        
        //이미 내려온 서브메뉴 초기화
        $('.sub').hide();
        
        $(this).children('.sub').stop().slideDown();
    });
    
    $('nav').mouseleave(function(){
        //$('.sub').hide();
        //$('.cover').slideUp(600);
        
        $('.sub').stop().slideUp(600);
        
        $('.cover').stop().animate({
            height: 0
        }, 600);
    });
    
});
