;(function($){

    var travel = {
        init:function(){
            this.blogFn();
            this.slide3dFn();
        },
        blogFn:function(){
            var $blog = $('#blog');
            var $winW = $(window).width();
            var $winH = $(window).height();

            var $li = $('#blog .content-wrap > ul > li');
            var $imgW = $('#blog .img-wrap img').innerWidth();
            var $imgH = $('#blog .img-wrap img').innerHeight();
            var $h4 = $('.text-content h4');
            var $p = $('.text-content p');
            var h4FontSize = $imgW * 0.042105263;
            var pFontSize  = $imgW * 0.063157895;

            function resizeFn(){
                $winW = $(window).width();
                $winH = $(window).height();
                $imgW = $('#blog .img-wrap img').innerWidth();
                $imgH = $('#blog .img-wrap img').innerHeight();
                h4FontSize = $imgW * 0.042105263
                pFontSize  = $imgW * 0.063157895
                
                $li.css({height:$imgH});
                $h4.css({fontSize:h4FontSize});
                $p.css({fontSize:pFontSize});
                
                $blog.css({width:$winW, height:$winH});
            };

            $(window).resize(function(){
                resizeFn();
            });
            setTimeout(resizeFn, 100);
        },
        
        slide3dFn:function(){
            var $slide3d = $('#slide3d');
            var $winW = $(window).width();
            var $winH = $(window).height();

            var $slideWrap = $('.slide-wrap');
            var $slide = $('.slide');
            var $slideContent = $('.slide-content');
            var $prevBtn = $('.prev-btn');
            var $nextBtn = $('.next-btn');
            var cnt = 0;
            var n = $('.slide').length;
            var angle = 360/n;
            var $slideW = $('.slide').innerWidth();
            var tZ = Math.round(($slideW/2) / Math.tan(Math.PI/n));
            
            var $slideContentW = $('.slide-content').innerWidth();
            var $slideContentH = $('.slide-content').innerHeight();

            function resizeFn(){
                $winW = $(window).width();
                $winH = $(window).height();
                $slideContentW = $('.slide-content').innerWidth();
                $slideContentH = $('.slide-content').innerHeight();
                $slideWrap.css({height:$slideContentH});

                $slide3d.css({width:$winW, height:$winH});
            }

            $(window).resize(function(){
                resizeFn();
            });
            setTimeout(resizeFn, 100);

            carouselSlideFn();

            function carouselSlideFn(){
                $slide.stop().animate({opacity:.75})
                $slideContent.css({transform:'scale(1)'});
                $slideWrap.css({transform: 'perspective(' + tZ*2 + 'px) translateZ('+ -tZ +'px) rotateY('+ (-angle*cnt) +'deg) rotateX(-5deg)'});
                $slide.eq(cnt%n).stop().animate({opacity:1}, 400)
                $slideContent.eq(cnt%n).css({transform:'scale(1.15)',transition:'all .4s'});
            };

            function prevCountFn(){
                cnt--;
                carouselSlideFn();
            };
            function nextCountFn(){
                cnt++;
                carouselSlideFn();
            };

            $prevBtn.on({
                click:function(){
                    if(!$slide.is(':animated')){
                        prevCountFn();
                    }
                }
            });
            $nextBtn.on({
                click:function(){
                    if(!$slide.is(':animated')){
                        nextCountFn();
                    }
                }
            });

            $slideWrap.swipe({
                swipeLeft:function(){
                    if(!$slide.is(':animated')){
                        nextCountFn();
                    }
                },
                swipeRight:function(){
                    if(!$slide.is(':animated')){
                        prevCountFn();
                    }
                }
            })

            // var wheel = 0;
            // $slideWrap.on('mousewheel DOMMouseScroll', function(event){
            //     event.preventDefault();

            //     if(event.originalEvent.wheelDelta){
            //         wheel = event.originalEvent.wheelDelta;
            //     }
            //     else{
            //         wheel = event.detail*-1;
            //     }

            //     if(wheel < 0){
            //         if(!$slide.is(':animated')){
            //             nextCountFn();
            //         }
            //     }
            //     else{
            //         if(!$slide.is(':animated')){
            //             prevCountFn();
            //         }
            //     }
            // });
        }
    }

    travel.init();

})(jQuery);