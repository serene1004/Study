;(function($){

    var brando = {
        init:function(){
            var taht = this;
            
            taht.galleryFn();
        },
        galleryFn:function(){
            var $galleryBtn = $('#gallery .gallery-btn');
            var $ul         = $('#gallery .gallery-wrap > ul');
            var $li         = $('#gallery .gallery-wrap li');
            var $content    = $('#gallery .gallery-wrap .gallery-content');
            var n           = $('#gallery .gallery-wrap > li').length;

            var winW        = $(window).innerWidth()+11;
            var cols        = 4;       // 화면 너비에 따른 cols변화
            var imgW        = winW/cols;
            var imgHRate    = 0.775;   // 실수(소수점이 포함된 수치)
            var imgH        = imgW * imgHRate;
            var rows        = Math.ceil(n/cols);   // 소수점 자리올림
            var btnNum      = 0;       // 초기값 첫번째 버튼 ALL, 클릭시 클릭한 버튼번호부여

            var hide        = [];
            var show        = [];
            var k           = -1;


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
                imgW = winW / cols;     //이미지너비
                imgH = imgW * imgHRate; //이미지 높이
                
                // 갤러리 이미지(li)에 적용
                $li.css({width:imgW, height:imgH});


                // 버튼 번호가 0번이면 8개, 1,4번이면 6개, 2,3번이면 4개
                if( btnNum === 0 ){
                    hide = [];
                    show = [0,1,2,3,4,5,6,7];   // 8개

                    n = show.length;    // 보이는 총 갯수 n의 수를 결정
                    rows = Math.ceil(n/cols);
                    $ul.css({width:winW, height:imgH*rows});
                    $li.css({width:imgW, height:imgH});
                    $content.removeClass('addZoom');

                    k = -1;
                    for(var i=0; i<rows; i++){
                        for(var j=0; j<cols; j++){
                            k++;
                            if(k>=n){    // k가 8이상이면 제어문 종료(break)
                                break;
                            }
                            $li.eq(show[k]).stop().show().animate({ left:imgW*j, top:imgH*i }, 500);
                        }
                    }

                    for(var i=0; i<n; i++){
                        $content.eq(show[i]).addClass('addZoom');
                    }
                }

                else if( btnNum === 1 ){
                    hide = [1,5];
                    show = [0,2,3,4,6,7];

                    n = show.length;
                    rows = Math.ceil(n/cols);
                    $ul.css({width:winW, height:imgH*rows});
                    $li.css({width:imgW, height:imgH});
                    $content.removeClass('addZoom');
                    
                    for(var i=0; i<hide.length; i++){
                        $li.eq(hide[i]).stop().hide();
                    }
                    
                    k = -1;
                    for(var i=0; i<rows; i++){
                        for(var j=0; j<cols; j++){
                            k++;
                            if(k>=n){
                                break;
                            }
                            $li.eq(show[k]).stop().show().animate({ left:imgW*j, top:imgH*i }, 500);
                        }
                    }
                  
                    for(var i=0; i<n; i++){
                        $content.eq(show[i]).addClass('addZoom');
                    }
                }

                else if( btnNum === 2 ){
                    hide = [1,3,4,7];
                    show = [0,2,5,6];

                    n = show.length;
                    rows = Math.ceil(n/cols);
                    $ul.css({width:winW, height:imgH*rows});
                    $li.css({width:imgW, height:imgH});
                    $content.removeClass('addZoom');

                    for(var i=0; i<hide.length; i++){
                        $li.eq(hide[i]).stop().hide();
                    }

                    k = -1;
                    for(var i=0; i<rows; i++){
                        for(var j=0; j<cols; j++){
                            k++;
                            if(k>=n){
                                break;
                            }
                            $li.eq(show[k]).stop().show().animate({ left:imgW*j, top:imgH*i }, 500);
                        }
                    }

                    for(var i=0; i<n; i++){
                        $content.eq(show[i]).addClass('addZoom');
                    }
                }
                else if( btnNum === 3 ){
                    hide = [0,2,3,5];
                    show = [1,4,6,7];

                    n = show.length;
                    rows = Math.ceil(n/cols);
                    $ul.css({width:winW, height:imgH*rows});
                    $li.css({width:imgW, height:imgH});
                    $content.removeClass('addZoom');

                    for(var i=0; i<hide.length; i++){
                        $li.eq(hide[i]).stop().hide();
                    }

                    k = -1;
                    for(var i=0; i<rows; i++){
                        for(var j=0; j<cols; j++){
                            k++;
                            if(k>=n){
                                break;
                            }
                            $li.eq(show[k]).stop().show().animate({ left:imgW*j, top:imgH*i }, 500);
                        }
                    }

                    for(var i=0; i<n; i++){
                        $content.eq(show[i]).addClass('addZoom');
                    }
                }
                else if( btnNum === 4 ){
                    hide = [2,4];
                    show = [0,1,3,5,6,7];

                    n = show.length;
                    rows = Math.ceil(n/cols);
                    $ul.css({width:winW, height:imgH*rows});
                    $li.css({width:imgW, height:imgH});
                    $content.removeClass('addZoom');

                    for(var i=0; i<hide.length; i++){
                        $li.eq(hide[i]).stop().hide();
                    }

                    k = -1;
                    for(var i=0; i<rows; i++){
                        for(var j=0; j<cols; j++){
                            k++;
                            if(k>=n){
                                break;
                            }
                            $li.eq(show[k]).stop().show().animate({ left:imgW*j, top:imgH*i }, 500);
                        }
                    }
                    
                    for(var i=0; i<n; i++){
                        $content.eq(show[i]).addClass('addZoom');
                    }
                }
            };

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