;(function($){

    var brando = {
        init:function(){
            var taht = this;
            
            taht.galleryFn();
        },
        galleryFn:function(){
            var $galleryBtn = $('#gallery .gallery-btn');
            var $ul = $('#gallery .gallery-wrap > ul');
            var $li = $('#gallery .gallery-wrap li');
            var $content = $('#gallery .gallery-wrap .gallery-content');
            var n = $('#gallery .gallery-wrap > li').length;

            var winW = $(window).innerWidth()+11;
            var cols = 4;   // 화면 너비에 따른 cols변화
            var imgW = winW/cols;
            var imgH = imgW * 0.775;
            var rows = Math.ceil(n/cols);   // 소수점 자리올림
            var btnNum = 0; // 초기값 첫번째 버튼 ALL, 클릭시 클릭한 버튼번호부여


            // 1. 반응형 갤러리함수
            function resizeGalleryFn(){
                
                winW = $(window).innerWidth()+11;
                if( winW > 1200 ){
                    cols = 4;
                }
                else if( winW > 980 ){
                    cols = 3;
                }
                else if( winW > 680 ){
                    cols = 2;
                }
                else{
                    cols = 1;
                }
                imgW = winW / cols;
                imgH = imgW * 0.775;
                
                // 갤러리 이미지(li)에 적용
                $li.css({width:imgW, height:imgH});


                // 버튼 번호가 0번이면 8개, 1,4번이면 6개, 2,3번이면 4개
                if( btnNum === 0 ){
                    n = 8;
                    rows = Math.ceil(n/cols);
                    $ul.css({width:winW, height:imgH*rows});
                    $li.css({width:imgW, height:imgH});
                    $content.removeClass('addZoom');

                    if( cols === 4 ){
                        $li.eq(0).stop().show().animate({ left:imgW*0, top:imgH*0 }, 500);
                        $li.eq(1).stop().show().animate({ left:imgW*1, top:imgH*0 }, 500);
                        $li.eq(2).stop().show().animate({ left:imgW*2, top:imgH*0 }, 500);
                        $li.eq(3).stop().show().animate({ left:imgW*3, top:imgH*0 }, 500);
                        $li.eq(4).stop().show().animate({ left:imgW*0, top:imgH*1 }, 500);
                        $li.eq(5).stop().show().animate({ left:imgW*1, top:imgH*1 }, 500);
                        $li.eq(6).stop().show().animate({ left:imgW*2, top:imgH*1 }, 500);
                        $li.eq(7).stop().show().animate({ left:imgW*3, top:imgH*1 }, 500);
                    }
                    else if( cols === 3 ){
                        $li.eq(0).stop().show().animate({ left:imgW*0, top:imgH*0 }, 500);
                        $li.eq(1).stop().show().animate({ left:imgW*1, top:imgH*0 }, 500);
                        $li.eq(2).stop().show().animate({ left:imgW*2, top:imgH*0 }, 500);
                        $li.eq(3).stop().show().animate({ left:imgW*0, top:imgH*1 }, 500);
                        $li.eq(4).stop().show().animate({ left:imgW*1, top:imgH*1 }, 500);
                        $li.eq(5).stop().show().animate({ left:imgW*2, top:imgH*1 }, 500);
                        $li.eq(6).stop().show().animate({ left:imgW*0, top:imgH*2 }, 500);
                        $li.eq(7).stop().show().animate({ left:imgW*1, top:imgH*2 }, 500);
                    }
                    else if( cols === 2 ){
                        $li.eq(0).stop().show().animate({ left:imgW*0, top:imgH*0 }, 500);
                        $li.eq(1).stop().show().animate({ left:imgW*1, top:imgH*0 }, 500);
                        $li.eq(2).stop().show().animate({ left:imgW*0, top:imgH*1 }, 500);
                        $li.eq(3).stop().show().animate({ left:imgW*1, top:imgH*1 }, 500);
                        $li.eq(4).stop().show().animate({ left:imgW*0, top:imgH*2 }, 500);
                        $li.eq(5).stop().show().animate({ left:imgW*1, top:imgH*2 }, 500);
                        $li.eq(6).stop().show().animate({ left:imgW*0, top:imgH*3 }, 500);
                        $li.eq(7).stop().show().animate({ left:imgW*1, top:imgH*3 }, 500);
                    }
                    else{
                        $li.eq(0).stop().show().animate({ left:imgW*0, top:imgH*0 }, 500);
                        $li.eq(1).stop().show().animate({ left:imgW*0, top:imgH*1 }, 500);
                        $li.eq(2).stop().show().animate({ left:imgW*0, top:imgH*2 }, 500);
                        $li.eq(3).stop().show().animate({ left:imgW*0, top:imgH*3 }, 500);
                        $li.eq(4).stop().show().animate({ left:imgW*0, top:imgH*4 }, 500);
                        $li.eq(5).stop().show().animate({ left:imgW*0, top:imgH*5 }, 500);
                        $li.eq(6).stop().show().animate({ left:imgW*0, top:imgH*6 }, 500);
                        $li.eq(7).stop().show().animate({ left:imgW*0, top:imgH*7 }, 500);
                    }

                    $content.eq(0).addClass('addZoom');
                    $content.eq(1).addClass('addZoom');
                    $content.eq(2).addClass('addZoom');
                    $content.eq(3).addClass('addZoom');
                    $content.eq(4).addClass('addZoom');
                    $content.eq(5).addClass('addZoom');
                    $content.eq(6).addClass('addZoom');
                    $content.eq(7).addClass('addZoom');

                }
                else if( btnNum === 1 ){
                    n = 6;
                    rows = Math.ceil(n/cols);
                    $ul.css({width:winW, height:imgH*rows});
                    $li.css({width:imgW, height:imgH});
                    $content.removeClass('addZoom');
                    $li.eq(1).stop().hide();
                    $li.eq(5).stop().hide();

                    if( cols === 4 ){
                        $li.eq(0).stop().show().animate({ left:imgW*0, top:imgH*0 }, 500);
                        $li.eq(2).stop().show().animate({ left:imgW*1, top:imgH*0 }, 500);
                        $li.eq(3).stop().show().animate({ left:imgW*2, top:imgH*0 }, 500);
                        $li.eq(4).stop().show().animate({ left:imgW*3, top:imgH*0 }, 500);
                        $li.eq(6).stop().show().animate({ left:imgW*0, top:imgH*1 }, 500);
                        $li.eq(7).stop().show().animate({ left:imgW*1, top:imgH*1 }, 500);
                    }
                    else if( cols === 3 ){
                        $li.eq(0).stop().show().animate({ left:imgW*0, top:imgH*0 }, 500);
                        $li.eq(2).stop().show().animate({ left:imgW*1, top:imgH*0 }, 500);
                        $li.eq(3).stop().show().animate({ left:imgW*2, top:imgH*0 }, 500);
                        $li.eq(4).stop().show().animate({ left:imgW*0, top:imgH*1 }, 500);
                        $li.eq(6).stop().show().animate({ left:imgW*1, top:imgH*1 }, 500);
                        $li.eq(7).stop().show().animate({ left:imgW*2, top:imgH*1 }, 500);
                    }
                    else if( cols === 2 ){
                        $li.eq(0).stop().show().animate({ left:imgW*0, top:imgH*0 }, 500);
                        $li.eq(2).stop().show().animate({ left:imgW*1, top:imgH*0 }, 500);
                        $li.eq(3).stop().show().animate({ left:imgW*0, top:imgH*1 }, 500);
                        $li.eq(4).stop().show().animate({ left:imgW*1, top:imgH*1 }, 500);
                        $li.eq(6).stop().show().animate({ left:imgW*0, top:imgH*2 }, 500);
                        $li.eq(7).stop().show().animate({ left:imgW*1, top:imgH*2 }, 500);
                    }
                    else{
                        $li.eq(0).stop().show().animate({ left:imgW*0, top:imgH*0 }, 500);
                        $li.eq(2).stop().show().animate({ left:imgW*0, top:imgH*1 }, 500);
                        $li.eq(3).stop().show().animate({ left:imgW*0, top:imgH*2 }, 500);
                        $li.eq(4).stop().show().animate({ left:imgW*0, top:imgH*3 }, 500);
                        $li.eq(6).stop().show().animate({ left:imgW*0, top:imgH*4 }, 500);
                        $li.eq(7).stop().show().animate({ left:imgW*0, top:imgH*5 }, 500);
                    }

                    $content.eq(0).addClass('addZoom');
                    $content.eq(2).addClass('addZoom');
                    $content.eq(3).addClass('addZoom');
                    $content.eq(4).addClass('addZoom');
                    $content.eq(6).addClass('addZoom');
                    $content.eq(7).addClass('addZoom');
                }
                else if( btnNum === 2 ){
                    n = 4;
                    rows = Math.ceil(n/cols);
                    $ul.css({width:winW, height:imgH*rows});
                    $li.css({width:imgW, height:imgH});
                    $content.removeClass('addZoom');
                    $li.eq(1).stop().hide();
                    $li.eq(3).stop().hide();
                    $li.eq(4).stop().hide();
                    $li.eq(7).stop().hide();

                    if( cols === 4 ){
                        $li.eq(0).stop().show().animate({ left:imgW*0, top:imgH*0 }, 500);
                        $li.eq(2).stop().show().animate({ left:imgW*1, top:imgH*0 }, 500);
                        $li.eq(5).stop().show().animate({ left:imgW*2, top:imgH*0 }, 500);
                        $li.eq(6).stop().show().animate({ left:imgW*3, top:imgH*0 }, 500);
                    }
                    else if( cols === 3 ){
                        $li.eq(0).stop().show().animate({ left:imgW*0, top:imgH*0 }, 500);
                        $li.eq(2).stop().show().animate({ left:imgW*1, top:imgH*0 }, 500);
                        $li.eq(5).stop().show().animate({ left:imgW*2, top:imgH*0 }, 500);
                        $li.eq(6).stop().show().animate({ left:imgW*0, top:imgH*1 }, 500);
                    }
                    else if( cols === 2 ){
                        $li.eq(0).stop().show().animate({ left:imgW*0, top:imgH*0 }, 500);
                        $li.eq(2).stop().show().animate({ left:imgW*1, top:imgH*0 }, 500);
                        $li.eq(5).stop().show().animate({ left:imgW*0, top:imgH*1 }, 500);
                        $li.eq(6).stop().show().animate({ left:imgW*1, top:imgH*1 }, 500);
                    }
                    else{
                        $li.eq(0).stop().show().animate({ left:imgW*0, top:imgH*0 }, 500);
                        $li.eq(2).stop().show().animate({ left:imgW*0, top:imgH*1 }, 500);
                        $li.eq(5).stop().show().animate({ left:imgW*0, top:imgH*2 }, 500);
                        $li.eq(6).stop().show().animate({ left:imgW*0, top:imgH*3 }, 500);
                    }

                    $content.eq(0).addClass('addZoom');
                    $content.eq(2).addClass('addZoom');
                    $content.eq(5).addClass('addZoom');
                    $content.eq(6).addClass('addZoom');
                }
                else if( btnNum === 3 ){
                    n = 4;
                    rows = Math.ceil(n/cols);
                    $ul.css({width:winW, height:imgH*rows});
                    $li.css({width:imgW, height:imgH});
                    $content.removeClass('addZoom');
                    $li.eq(0).stop().hide();
                    $li.eq(2).stop().hide();
                    $li.eq(3).stop().hide();
                    $li.eq(5).stop().hide();

                    if( cols === 4 ){
                        $li.eq(1).stop().show().animate({ left:imgW*0, top:imgH*0 }, 500);
                        $li.eq(4).stop().show().animate({ left:imgW*1, top:imgH*0 }, 500);
                        $li.eq(6).stop().show().animate({ left:imgW*2, top:imgH*0 }, 500);
                        $li.eq(7).stop().show().animate({ left:imgW*3, top:imgH*0 }, 500);
                    }
                    else if( cols === 3 ){
                        $li.eq(1).stop().show().animate({ left:imgW*0, top:imgH*0 }, 500);
                        $li.eq(4).stop().show().animate({ left:imgW*1, top:imgH*0 }, 500);
                        $li.eq(6).stop().show().animate({ left:imgW*2, top:imgH*0 }, 500);
                        $li.eq(7).stop().show().animate({ left:imgW*0, top:imgH*1 }, 500);
                    }
                    else if( cols === 2 ){
                        $li.eq(1).stop().show().animate({ left:imgW*0, top:imgH*0 }, 500);
                        $li.eq(4).stop().show().animate({ left:imgW*1, top:imgH*0 }, 500);
                        $li.eq(6).stop().show().animate({ left:imgW*0, top:imgH*1 }, 500);
                        $li.eq(7).stop().show().animate({ left:imgW*1, top:imgH*1 }, 500);
                    }
                    else{
                        $li.eq(1).stop().show().animate({ left:imgW*0, top:imgH*0 }, 500);
                        $li.eq(4).stop().show().animate({ left:imgW*0, top:imgH*1 }, 500);
                        $li.eq(6).stop().show().animate({ left:imgW*0, top:imgH*2 }, 500);
                        $li.eq(7).stop().show().animate({ left:imgW*0, top:imgH*3 }, 500);
                    }

                    $content.eq(1).addClass('addZoom');
                    $content.eq(4).addClass('addZoom');
                    $content.eq(6).addClass('addZoom');
                    $content.eq(7).addClass('addZoom');
                }
                else if( btnNum === 4 ){
                    n = 6;
                    rows = Math.ceil(n/cols);
                    $ul.css({width:winW, height:imgH*rows});
                    $li.css({width:imgW, height:imgH});
                    $content.removeClass('addZoom');
                    $li.eq(2).stop().hide();
                    $li.eq(4).stop().hide();

                    if( cols === 4 ){
                        $li.eq(0).stop().show().animate({ left:imgW*0, top:imgH*0 }, 500);
                        $li.eq(1).stop().show().animate({ left:imgW*1, top:imgH*0 }, 500);
                        $li.eq(3).stop().show().animate({ left:imgW*2, top:imgH*0 }, 500);
                        $li.eq(5).stop().show().animate({ left:imgW*3, top:imgH*0 }, 500);
                        $li.eq(6).stop().show().animate({ left:imgW*0, top:imgH*1 }, 500);
                        $li.eq(7).stop().show().animate({ left:imgW*1, top:imgH*1 }, 500);
                    }
                    else if( cols === 3 ){
                        $li.eq(0).stop().show().animate({ left:imgW*0, top:imgH*0 }, 500);
                        $li.eq(1).stop().show().animate({ left:imgW*1, top:imgH*0 }, 500);
                        $li.eq(3).stop().show().animate({ left:imgW*2, top:imgH*0 }, 500);
                        $li.eq(5).stop().show().animate({ left:imgW*0, top:imgH*1 }, 500);
                        $li.eq(6).stop().show().animate({ left:imgW*1, top:imgH*1 }, 500);
                        $li.eq(7).stop().show().animate({ left:imgW*2, top:imgH*1 }, 500);
                    }
                    else if( cols === 2 ){
                        $li.eq(0).stop().show().animate({ left:imgW*0, top:imgH*0 }, 500);
                        $li.eq(1).stop().show().animate({ left:imgW*1, top:imgH*0 }, 500);
                        $li.eq(3).stop().show().animate({ left:imgW*0, top:imgH*1 }, 500);
                        $li.eq(5).stop().show().animate({ left:imgW*1, top:imgH*1 }, 500);
                        $li.eq(6).stop().show().animate({ left:imgW*0, top:imgH*2 }, 500);
                        $li.eq(7).stop().show().animate({ left:imgW*1, top:imgH*2 }, 500);
                    }
                    else{
                        $li.eq(0).stop().show().animate({ left:imgW*0, top:imgH*0 }, 500);
                        $li.eq(1).stop().show().animate({ left:imgW*0, top:imgH*1 }, 500);
                        $li.eq(3).stop().show().animate({ left:imgW*0, top:imgH*2 }, 500);
                        $li.eq(5).stop().show().animate({ left:imgW*0, top:imgH*3 }, 500);
                        $li.eq(6).stop().show().animate({ left:imgW*0, top:imgH*4 }, 500);
                        $li.eq(7).stop().show().animate({ left:imgW*0, top:imgH*5 }, 500);
                    }

                    $content.eq(0).addClass('addZoom');
                    $content.eq(1).addClass('addZoom');
                    $content.eq(3).addClass('addZoom');
                    $content.eq(5).addClass('addZoom');
                    $content.eq(6).addClass('addZoom');
                    $content.eq(7).addClass('addZoom');
                }
            }



            // 2. 윈도우 반응형 메서드 실시간 반응형적용
            $(window).resize(function(){
                resizeGalleryFn();
            });
            resizeGalleryFn();


            // 3. 갤러리 버튼 클릭이벤트
            $galleryBtn.each(function(idx){
                $(this).on({
                    click:function(){
                        btnNum = idx;
                        resizeGalleryFn();
                        $galleryBtn.removeClass('addNav');
                        $(this).addClass('addNav');
                    }
                })
            });

        }
    }

    brando.init();

})(jQuery);