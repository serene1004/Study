;(function($){

    var mouseWheel = {
        init:function(){
            this.mouseWheelFn();
        },
        mouseWheelFn:function(){
            var $section = $('.section');
            var wheelDelta = 0;

            $section.each(function(idx){
                $(this).on('mousewheel DOMMouseScroll',function(event){
                    event.preventDefault();

                    if(event.originalEvent.wheelDelta){   // 크롬 사파리 익스 등
                        wheelDelta = event.originalEvent.wheelDelta;
                    }
                    else{   // 파이어폭스
                        wheelDelta = event.detail*-1
                    }

                    if (!$('html,body').is(':animated')){
                        if(wheelDelta < 0){
                            if(idx < 11){
                                $('html,body').stop().animate({scrollTop:$(this).next().offset().top}, 800, 'swing');
                            }
                        }
                        else{
                            if(idx > 0){
                                $('html,body').stop().animate({scrollTop:$(this).prev().offset().top}, 800, 'swing');
                            }
                        }
                    }
                });
            });



            if (!$('html,body').is(':animated')){}



        }
    }

    mouseWheel.init();

})(jQuery);

// 마우스휠이벤트
// mouseWheelFn:function(){
//     // 12개의 섹션을 마우스 휠이벤트를 이용하여
//     // 휠을 아래로 내리면 다음섹션으로 이동
//     // 위로 올리면 이전섹션으로 이동
//     var $section = $('.section');
//     var wheelDelta = 0;

//     // 배열객체 each()
//     $section.each(function(idx){
//         $(this).on('mousewheel',function(event){
//             event.preventDefault(); // 이걸 안넣으면 스크롤이 버벅거리면서 움직임.

//             // originalEvent -> wheelDelta: -120 휠 아래로 내릴때
//             // originalEvent -> wheelDelta:  120 휠 위로 올릴때
//             // event.originalEvent.wheelDelta
//             // console.log(event.originalEvent.wheelDelta);
//             wheelDelta = event.originalEvent.wheelDelta;
//             console.log(wheelDelta);
//             if (!$('html,body').is(':animated')){   // 애니메이션중에는 동작이되지않도록
//                 if(wheelDelta < 0){ // 음수(-120)이면 아래로
//                     if(idx < 11){
//                         $('html,body').stop().animate({scrollTop:$(this).next().offset().top}, 800, 'swing');
//                     }
//                 }
//                 else{   // 양수(120)이면 위로
//                     if(idx > 0){
//                         $('html,body').stop().animate({scrollTop:$(this).prev().offset().top}, 800, 'swing');
//                     }
//                 }
//             }
//         });
//     });