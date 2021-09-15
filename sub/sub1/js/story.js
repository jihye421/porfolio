
    
    var acall; //setInterval 담을 변수

$(function(){
    
    //자동슬라이드 함수 호출하기
    acall = setInterval(flowImg, 20);
    
    });
    
    var fnum=0;
    function flowText (){
        console.log('흘러가는중~');
        
        fnum++;
        console.log(fnum);
        
        var ftext = $('.txtwrap2 h2').width();
        console.log(ftext);
        
        if(fnum>ftext){
            $('.txtwrap2 h2').append($('.flowbanner ul li').first()).css({
                left: 0
            });
            
            fnum=0;
        }else{
            $('.flowbanner ul').css({
                left: -fnum+'px'
            });
        }
    }
    
    
    setInterval(flowText, 30);
