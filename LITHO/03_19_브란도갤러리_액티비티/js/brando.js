// GJB = GrandJosunBusan
;(function($){

    var brando = {
        init:function(){
            var taht = this;
            
            taht.galleryFn();
        },
        galleryFn:function(){
            var $winW = $(window).innerWidth();
            var $btn = $('#gallery .gallery-btn');
            var $ul = $('#gallery .gallery-wrap ul');
            var $li = $('#gallery .gallery-wrap li');
            var n = $('#gallery .gallery-wrap li').length;
            var $content = $('#gallery .gallery-wrap .gallery-content');

            var cols = 4;   // 너비에따라 갯수가 바뀜
            var rows = n/cols;
            var imgW = $winW/4;
            var imgH = imgW*0.775;
                $ul.css({width: $winW,height:imgH*rows});
                $li.css({width: imgW,height:imgH});

            setTimeout(allFn, 100);

            function allFn(){
                $content.removeClass('addZoom');
                $ul.stop().animate({width: $winW,height:imgH*rows}, 500, 'swing');
                $li.stop().animate({width: imgW,height:imgH}, 500, 'swing');

                $li.eq(0).stop().animate({left: imgW*0,top:imgH*0},500, 'swing');
                $li.eq(1).stop().animate({left: imgW*1,top:imgH*0},500, 'swing');
                $li.eq(2).stop().animate({left: imgW*2,top:imgH*0},500, 'swing');
                $li.eq(3).stop().animate({left: imgW*3,top:imgH*0},500, 'swing');
                $li.eq(4).stop().animate({left: imgW*0,top:imgH*1},500, 'swing');
                $li.eq(5).stop().animate({left: imgW*1,top:imgH*1},500, 'swing');
                $li.eq(6).stop().animate({left: imgW*2,top:imgH*1},500, 'swing');
                $li.eq(7).stop().animate({left: imgW*3,top:imgH*1},500, 'swing');

                $content.eq(0).addClass('addZoom');
                $content.eq(1).addClass('addZoom');
                $content.eq(2).addClass('addZoom');
                $content.eq(3).addClass('addZoom');
                $content.eq(4).addClass('addZoom');
                $content.eq(5).addClass('addZoom');
                $content.eq(6).addClass('addZoom');
                $content.eq(7).addClass('addZoom');
            }
            function familyFn(){    // 023467
                $content.removeClass('addZoom');
                $ul.stop().animate({width: $winW,height:imgH*rows}, 500, 'swing');
                $li.stop().animate({width: imgW,height:imgH}, 500, 'swing');

                $li.eq(0).stop().animate({left: imgW*0,top:imgH*0},500, 'swing');
                $li.eq(2).stop().animate({left: imgW*1,top:imgH*0},500, 'swing');
                $li.eq(3).stop().animate({left: imgW*2,top:imgH*0},500, 'swing');
                $li.eq(4).stop().animate({left: imgW*3,top:imgH*0},500, 'swing');
                $li.eq(6).stop().animate({left: imgW*0,top:imgH*1},500, 'swing');
                $li.eq(7).stop().animate({left: imgW*1,top:imgH*1},500, 'swing');
                

                $content.eq(0).addClass('addZoom');
                $content.eq(2).addClass('addZoom');
                $content.eq(3).addClass('addZoom');
                $content.eq(4).addClass('addZoom');
                $content.eq(6).addClass('addZoom');
                $content.eq(7).addClass('addZoom');
            }
            function holidaysFn(){  // 0256
                $content.removeClass('addZoom');
                $ul.stop().animate({width: $winW,height:imgH*rows}, 500, 'swing');
                $li.stop().animate({width: imgW,height:imgH}, 500, 'swing');

                $li.eq(0).stop().animate({left: imgW*0,top:imgH*0},500, 'swing');
                $li.eq(2).stop().animate({left: imgW*1,top:imgH*0},500, 'swing');
                $li.eq(5).stop().animate({left: imgW*2,top:imgH*0},500, 'swing');
                $li.eq(6).stop().animate({left: imgW*3,top:imgH*0},500, 'swing');
                
                $content.eq(0).addClass('addZoom');
                $content.eq(2).addClass('addZoom');
                $content.eq(5).addClass('addZoom');
                $content.eq(6).addClass('addZoom');
            }
            function honeymoonFn(){ // 1467
                $content.removeClass('addZoom');
                $ul.stop().animate({width: $winW,height:imgH*rows}, 500, 'swing');
                $li.stop().animate({width: imgW,height:imgH}, 500, 'swing');

                $li.eq(1).stop().animate({left: imgW*0,top:imgH*0},500, 'swing');
                $li.eq(4).stop().animate({left: imgW*1,top:imgH*0},500, 'swing');
                $li.eq(6).stop().animate({left: imgW*2,top:imgH*0},500, 'swing');
                $li.eq(7).stop().animate({left: imgW*3,top:imgH*0},500, 'swing');
                

                $content.eq(1).addClass('addZoom');
                $content.eq(4).addClass('addZoom');
                $content.eq(6).addClass('addZoom');
                $content.eq(7).addClass('addZoom');
            }
            function safariFn(){    // 013567
                $content.removeClass('addZoom');
                $ul.stop().animate({width: $winW,height:imgH*rows}, 500, 'swing');
                $li.stop().animate({width: imgW,height:imgH}, 500, 'swing');

                $li.eq(0).stop().animate({left: imgW*0,top:imgH*0},500, 'swing');
                $li.eq(1).stop().animate({left: imgW*1,top:imgH*0},500, 'swing');
                $li.eq(3).stop().animate({left: imgW*2,top:imgH*0},500, 'swing');
                $li.eq(5).stop().animate({left: imgW*3,top:imgH*0},500, 'swing');
                $li.eq(6).stop().animate({left: imgW*0,top:imgH*1},500, 'swing');
                $li.eq(7).stop().animate({left: imgW*1,top:imgH*1},500, 'swing');

                $content.eq(0).addClass('addZoom');
                $content.eq(1).addClass('addZoom');
                $content.eq(3).addClass('addZoom');
                $content.eq(5).addClass('addZoom');
                $content.eq(6).addClass('addZoom');
                $content.eq(7).addClass('addZoom');
            }

            $btn.eq(0).on({
                click:function(){
                    $btn.removeClass('addNav');
                    $(this).addClass('addNav');
                    allFn();
                }
            });
            $btn.eq(1).on({
                click:function(){
                    $btn.removeClass('addNav');
                    $(this).addClass('addNav');
                    familyFn();
                }
            });
            $btn.eq(2).on({
                click:function(){
                    $btn.removeClass('addNav');
                    $(this).addClass('addNav');
                    holidaysFn();
                }
            });
            $btn.eq(3).on({
                click:function(){
                    $btn.removeClass('addNav');
                    $(this).addClass('addNav');
                    honeymoonFn();
                }
            });
            $btn.eq(4).on({
                click:function(){
                    $btn.removeClass('addNav');
                    $(this).addClass('addNav');
                    safariFn();
                }
            });


        }
    }

    brando.init();

})(jQuery);