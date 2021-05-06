;(function($){

    var quickMenuBox = {

        init:function(){
            this.scrollEventFn();

        },
        scrollEventFn:function(){
            // 스크롤시 따라다니는 퀵메뉴 박스 애니메이션 이벤트
            // 1. 퀵메뉴 박스 상단에서 창높이의 가운데 배치 계산
            //    qucikTop = ( $(window).innerHeight() - #quickMenuBox.innerHeight() )/2;   // 위아래 여백계산
            // 2. 스크롤 이벤트[BOM] 리스너(addEventLisener) 등록

            var $window       = $(window);
            var $quickMenuBox = $('#quickMenuBox')
            var qucikTop = ( $window.innerHeight() - $quickMenuBox.innerHeight() )/2;

            // 퀵메뉴박스 애니메이션 함수
            function quickMenuBoxFn(){
                $quickMenuBox.stop().animate({top:qucikTop+$window.scrollTop()}, 1000);
            }


            $window.scroll(function(){
                // 스크롤시 윈도우 탑값 + 퀵메뉴박스 탑값이 더해져서 가운데로 오는 애니메이션 발생
                quickMenuBoxFn();
            });
            
            setTimeout(quickMenuBoxFn, 10);


        }

    }   // vanilla_quickMenuBox 끝

    quickMenuBox.init();

})(jQuery);