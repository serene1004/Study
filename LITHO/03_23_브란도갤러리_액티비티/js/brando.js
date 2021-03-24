// GJB = GrandJosunBusan
;(function($){

    var brando = {
        init:function(){
            var taht = this;
            
            taht.galleryFn();
        },
        galleryFn:function(){
            // 반응형 액티비티갤러리

            var $window = $(window);
            var $galleryBtn = $('#gallery .gallery-btn');
            var $galleryUl = $('#gallery .gallery-wrap > ul'); // 너비 = 창너비+11px, 높이 = 이미지높이*줄수
            var $galleryLi = $('#gallery .gallery-wrap .col');
            var $galleryContent = $('#gallery .gallery-wrap .gallery-content');

            var $winW = $(window).innerWidth();
            var n = $('#gallery .gallery-wrap .col').length;    // 이미지 총 갯수 8개
            var cols = 4;  // 창너비가 1200초과이면 4칸 - 반응형에서 창너비에 따라 변경됨
            var rows = n/cols;  // 줄수 = 이미지 갯수 / 칸수
            var imgW = $winW/4;    // 이미지 너비
            var imgH = imgW*0.775; // 이미지 높이 = 이미지너비*높이비율
                $galleryUl.css({width:$winW, height:imgH*rows}); // 박스높이 = 이미지높이*줄수
                $galleryLi.css({width:imgW, height:imgH});


            function resizeFn(){
                $winW = $(window).innerWidth()+11;
                if( $winW > 1200 ){
                    cols = 4;
                }
                else if( $winW > 980 ){
                    cols = 3;
                }
                else if( $winW > 760 ){
                    cols = 2;
                }
                else{
                    cols = 1;
                }
                
                imgW = $winW/cols;
                imgH = imgW*0.775;
                
                $galleryLi.css({ width:imgW,height:imgH });

                // n = 8-0;    // 총 갯수 = 보이는 이미지 - 감춰진 이미지
                rows = Math.ceil(n/cols);
                $galleryUl.css({ width:$winW, height:imgH*rows });
                
                allFn();
                familyFn();
                holidaysFn();
                honeymoonFn();
                safariFn();
            }

            setTimeout(resizeFn, 100);

            $window.resize(function(){
                resizeFn();
            })

            setTimeout(allFn, 100);

            // 1-1. ALL 함수
            function allFn(){
                $galleryContent.removeClass('addZoom');
                if(cols === 4){
                    $galleryLi.eq(0).stop().animate({ left:imgW*0, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(1).stop().animate({ left:imgW*1, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(2).stop().animate({ left:imgW*2, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(3).stop().animate({ left:imgW*3, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(4).stop().animate({ left:imgW*0, top:imgH*1 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(5).stop().animate({ left:imgW*1, top:imgH*1 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(6).stop().animate({ left:imgW*2, top:imgH*1 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(7).stop().animate({ left:imgW*3, top:imgH*1 }, 500, 'easeInOutQuad');
                }
                else if(cols === 3){
                    $galleryLi.eq(0).stop().animate({ left:imgW*0, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(1).stop().animate({ left:imgW*1, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(2).stop().animate({ left:imgW*2, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(3).stop().animate({ left:imgW*0, top:imgH*1 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(4).stop().animate({ left:imgW*1, top:imgH*1 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(5).stop().animate({ left:imgW*2, top:imgH*1 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(6).stop().animate({ left:imgW*0, top:imgH*2 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(7).stop().animate({ left:imgW*1, top:imgH*2 }, 500, 'easeInOutQuad');
                }
                else if(cols === 2){
                    $galleryLi.eq(0).stop().animate({ left:imgW*0, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(1).stop().animate({ left:imgW*1, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(2).stop().animate({ left:imgW*0, top:imgH*1 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(3).stop().animate({ left:imgW*1, top:imgH*1 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(4).stop().animate({ left:imgW*0, top:imgH*2 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(5).stop().animate({ left:imgW*1, top:imgH*2 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(6).stop().animate({ left:imgW*0, top:imgH*3 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(7).stop().animate({ left:imgW*1, top:imgH*3 }, 500, 'easeInOutQuad');
                }
                else{
                    $galleryLi.eq(0).stop().animate({ left:imgW*0, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(1).stop().animate({ left:imgW*0, top:imgH*1 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(2).stop().animate({ left:imgW*0, top:imgH*2 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(3).stop().animate({ left:imgW*0, top:imgH*3 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(4).stop().animate({ left:imgW*0, top:imgH*4 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(5).stop().animate({ left:imgW*0, top:imgH*5 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(6).stop().animate({ left:imgW*0, top:imgH*6 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(7).stop().animate({ left:imgW*0, top:imgH*7 }, 500, 'easeInOutQuad');
                }
                
                $galleryContent.eq(0).addClass('addZoom');
                $galleryContent.eq(1).addClass('addZoom');
                $galleryContent.eq(2).addClass('addZoom');
                $galleryContent.eq(3).addClass('addZoom');
                $galleryContent.eq(4).addClass('addZoom');
                $galleryContent.eq(5).addClass('addZoom');
                $galleryContent.eq(6).addClass('addZoom');
                $galleryContent.eq(7).addClass('addZoom');
            }

            // 1-2. FAMILY 023467 함수
            function familyFn(){
                $galleryContent.removeClass('addZoom');
                if(cols === 4){
                    $galleryLi.eq(0).stop().animate({ left:imgW*0, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(2).stop().animate({ left:imgW*1, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(3).stop().animate({ left:imgW*2, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(4).stop().animate({ left:imgW*3, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(6).stop().animate({ left:imgW*0, top:imgH*1 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(7).stop().animate({ left:imgW*1, top:imgH*1 }, 500, 'easeInOutQuad');
                }
                else if(cols === 3){
                    $galleryLi.eq(0).stop().animate({ left:imgW*0, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(2).stop().animate({ left:imgW*1, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(3).stop().animate({ left:imgW*2, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(4).stop().animate({ left:imgW*0, top:imgH*1 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(6).stop().animate({ left:imgW*1, top:imgH*1 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(7).stop().animate({ left:imgW*2, top:imgH*1 }, 500, 'easeInOutQuad');
                }
                else if(cols === 2){
                    $galleryLi.eq(0).stop().animate({ left:imgW*0, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(2).stop().animate({ left:imgW*1, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(3).stop().animate({ left:imgW*0, top:imgH*1 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(4).stop().animate({ left:imgW*1, top:imgH*1 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(6).stop().animate({ left:imgW*0, top:imgH*2 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(7).stop().animate({ left:imgW*1, top:imgH*2 }, 500, 'easeInOutQuad');
                }
                else{
                    $galleryLi.eq(0).stop().animate({ left:imgW*0, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(2).stop().animate({ left:imgW*0, top:imgH*1 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(3).stop().animate({ left:imgW*0, top:imgH*2 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(4).stop().animate({ left:imgW*0, top:imgH*3 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(6).stop().animate({ left:imgW*0, top:imgH*4 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(7).stop().animate({ left:imgW*0, top:imgH*5 }, 500, 'easeInOutQuad');
                }
                
                $galleryContent.eq(0).addClass('addZoom');
                $galleryContent.eq(2).addClass('addZoom');
                $galleryContent.eq(3).addClass('addZoom');
                $galleryContent.eq(4).addClass('addZoom');
                $galleryContent.eq(6).addClass('addZoom');
                $galleryContent.eq(7).addClass('addZoom');
            }

            // 1-3. HOLIDAYS 0256 함수
            function holidaysFn(){
                $galleryContent.removeClass('addZoom');
                if(cols === 4){
                    $galleryLi.eq(0).stop().animate({ left:imgW*0, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(2).stop().animate({ left:imgW*1, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(5).stop().animate({ left:imgW*2, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(6).stop().animate({ left:imgW*3, top:imgH*0 }, 500, 'easeInOutQuad');
                }
                else if(cols === 3){
                    $galleryLi.eq(0).stop().animate({ left:imgW*0, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(2).stop().animate({ left:imgW*1, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(5).stop().animate({ left:imgW*2, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(6).stop().animate({ left:imgW*0, top:imgH*1 }, 500, 'easeInOutQuad');
                }
                else if(cols === 2){
                    $galleryLi.eq(0).stop().animate({ left:imgW*0, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(2).stop().animate({ left:imgW*1, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(5).stop().animate({ left:imgW*0, top:imgH*1 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(6).stop().animate({ left:imgW*1, top:imgH*1 }, 500, 'easeInOutQuad');
                }
                else{
                    $galleryLi.eq(0).stop().animate({ left:imgW*0, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(2).stop().animate({ left:imgW*0, top:imgH*1 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(5).stop().animate({ left:imgW*0, top:imgH*2 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(6).stop().animate({ left:imgW*0, top:imgH*3 }, 500, 'easeInOutQuad');
                }
                
                $galleryContent.eq(0).addClass('addZoom');
                $galleryContent.eq(2).addClass('addZoom');
                $galleryContent.eq(5).addClass('addZoom');
                $galleryContent.eq(6).addClass('addZoom');
            }

            // 1-4. HONEYMOON 1467 함수
            function honeymoonFn(){
                $galleryContent.removeClass('addZoom');
                if(cols === 4){
                    $galleryLi.eq(1).stop().animate({ left:imgW*0, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(4).stop().animate({ left:imgW*1, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(6).stop().animate({ left:imgW*2, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(7).stop().animate({ left:imgW*3, top:imgH*0 }, 500, 'easeInOutQuad');
                }
                else if(cols === 3){
                    $galleryLi.eq(1).stop().animate({ left:imgW*0, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(4).stop().animate({ left:imgW*1, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(6).stop().animate({ left:imgW*2, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(7).stop().animate({ left:imgW*0, top:imgH*1 }, 500, 'easeInOutQuad');
                }
                else if(cols === 2){
                    $galleryLi.eq(1).stop().animate({ left:imgW*0, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(4).stop().animate({ left:imgW*1, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(6).stop().animate({ left:imgW*0, top:imgH*1 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(7).stop().animate({ left:imgW*1, top:imgH*1 }, 500, 'easeInOutQuad');
                }
                else{
                    $galleryLi.eq(1).stop().animate({ left:imgW*0, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(4).stop().animate({ left:imgW*0, top:imgH*1 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(6).stop().animate({ left:imgW*0, top:imgH*2 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(7).stop().animate({ left:imgW*0, top:imgH*3 }, 500, 'easeInOutQuad');
                }
                
                $galleryContent.eq(1).addClass('addZoom');
                $galleryContent.eq(4).addClass('addZoom');
                $galleryContent.eq(6).addClass('addZoom');
                $galleryContent.eq(7).addClass('addZoom');
            }

            // 1-5. SAFARI 013567 함수
            function safariFn(){
                $galleryContent.removeClass('addZoom');
                if(cols === 4){
                    $galleryLi.eq(0).stop().animate({ left:imgW*0, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(1).stop().animate({ left:imgW*1, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(3).stop().animate({ left:imgW*2, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(5).stop().animate({ left:imgW*3, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(6).stop().animate({ left:imgW*0, top:imgH*1 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(7).stop().animate({ left:imgW*1, top:imgH*1 }, 500, 'easeInOutQuad');
                }
                else if(cols === 3){
                    $galleryLi.eq(0).stop().animate({ left:imgW*0, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(1).stop().animate({ left:imgW*1, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(3).stop().animate({ left:imgW*2, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(5).stop().animate({ left:imgW*0, top:imgH*1 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(6).stop().animate({ left:imgW*1, top:imgH*1 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(7).stop().animate({ left:imgW*2, top:imgH*1 }, 500, 'easeInOutQuad');
                }
                else if(cols === 2){
                    $galleryLi.eq(0).stop().animate({ left:imgW*0, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(1).stop().animate({ left:imgW*1, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(3).stop().animate({ left:imgW*0, top:imgH*1 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(5).stop().animate({ left:imgW*1, top:imgH*1 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(6).stop().animate({ left:imgW*0, top:imgH*2 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(7).stop().animate({ left:imgW*1, top:imgH*2 }, 500, 'easeInOutQuad');
                }
                else{
                    $galleryLi.eq(0).stop().animate({ left:imgW*0, top:imgH*0 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(1).stop().animate({ left:imgW*0, top:imgH*1 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(3).stop().animate({ left:imgW*0, top:imgH*2 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(5).stop().animate({ left:imgW*0, top:imgH*3 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(6).stop().animate({ left:imgW*0, top:imgH*4 }, 500, 'easeInOutQuad');
                    $galleryLi.eq(7).stop().animate({ left:imgW*0, top:imgH*5 }, 500, 'easeInOutQuad');
                }
                
                $galleryContent.eq(0).addClass('addZoom');
                $galleryContent.eq(1).addClass('addZoom');
                $galleryContent.eq(3).addClass('addZoom');
                $galleryContent.eq(5).addClass('addZoom');
                $galleryContent.eq(6).addClass('addZoom');
                $galleryContent.eq(7).addClass('addZoom');
            }

            // 2. 갤러리버튼 클릭이벤트
            $galleryBtn.eq(0).on({
                click:function(){
                    $galleryBtn.removeClass('addNav');
                    $(this).addClass('addNav');
                    n = 8;
                    resizeFn();
                    allFn();
                }
            });
            $galleryBtn.eq(1).on({
                click:function(){
                    $galleryBtn.removeClass('addNav');
                    $(this).addClass('addNav');
                    n = 6;
                    resizeFn();
                    familyFn();
                }
            });
            $galleryBtn.eq(2).on({
                click:function(){
                    $galleryBtn.removeClass('addNav');
                    $(this).addClass('addNav');
                    n = 4;
                    resizeFn();
                    holidaysFn();
                }
            });
            $galleryBtn.eq(3).on({
                click:function(){
                    $galleryBtn.removeClass('addNav');
                    $(this).addClass('addNav');
                    n = 4;
                    resizeFn();
                    honeymoonFn();
                }
            });
            $galleryBtn.eq(4).on({
                click:function(){
                    $galleryBtn.removeClass('addNav');
                    $(this).addClass('addNav');
                    n = 6;
                    resizeFn();
                    safariFn();
                }
            });

        }
    }

    brando.init();

})(jQuery);