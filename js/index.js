//index.js

/*
$(document).ready(function () {


    /////////////////////////////
        함수명 : sideSlide
        기능 : 슬라이드 이동 애니메이션
    /////////////////////////////

    var sideSlide = function () {
        //매개변수 c - 호출구분자(0-인터발호출, 1-오른쪽 버튼 호출)
        $('.slider').animate({
            left: '-100%'
        }, 600, function () {
            //1) 맨 앞 요소를 맨 뒤로 이동
            //2) 변경된 요소의 순서에 따라 위치값 변경

            $(this).append($('li:first'))
                .css({
                    left: 0
                });
        }); //animate

        if (c === 1) clearautoCallSide();
        
        $('#sliderBtn .line').css({
            left: '568.66px'
        })
    };

    var intcall_side; //인터발 변수
    var autoCallSide = function () {
        intcall_side = setInterval(function () {
            sideSlide(0);
        }, 2000);
    };

    //자동 슬라이드 최초호출!
    autoCallSide();
    

}); *///jQuery

/*$(document).ready(function(){
    $('.tvBtn left_arw').click(function(){
        $('playbox').css({
            left:'100%'
        })
    });
    
    $('.tvBtn right_arw').click(function(){
        $('playbox').css({
            left:'-100%'
        })
    });
});*/


/*공지사항 오토슬라이드*/

$(function(){
    
    //버튼 초기 색상 설정
    $('#btn0').css('color','red');
    
    
    var pno = 0;
    
    function move(){
        pno++;
        
        if(pno === 4){
            $('#gallery').css({
                top: 0
            });
            pno = 1; //2번째 이미지
        }
        
        $('#gallery').animate({
            top : -600 * pno
        });
        
        //버튼 색상 초기화
        $('#btngrp li').css('color','white');
        
        //해당 페이지 버튼만 다시 빨강
        //$('#btn' + pno).css('color','red');
        $('#btngrp li').eq(pno).css('color','red');
        
        if(pno === 3) {
            //$('#btn0').css('color','red');
            //$('#btngrp li').eq(0).css('color','red');
            $('#btngrp li').first().css('color','red');
        }
        
        
    } //move()
    
    
    var cosmetic = setInterval(function(){
        move();
    }, 2000);
    
    //마우스 올리면 멈춤, 마우스 떠나면 다시 시작
    $('#gallery').mouseenter(function(){
        clearInterval(cosmetic);
    }).mouseleave(function(){
        cosmetic = setInterval(function(){
            move();
        }, 2000);
    });
    
    
    
    
}); //jQuery

