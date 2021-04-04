;(function($){

    var slide3d = {
        init:function(){
            this.slide3dFn();
        },
        slide3dFn:function(){
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

            //  tZ값이 크기에따라서 변해야하는데 변하질않음.
            // console.log($slide.innerWidth());
            // console.log(tZ);
            
            var $slideContentW = $('.slide-content').innerWidth();
            var $slideContentH = $('.slide-content').innerHeight();

            function resizeFn(){
                $slideContentW = $('.slide-content').innerWidth();
                $slideContentH = $('.slide-content').innerHeight();
                $slideWrap.css({height:$slideContentH});
            }

            $(window).resize(function(){
                resizeFn();
            });
            setTimeout(resizeFn, 100);

            // translateZ = tZ = Math.round((슬라이드너비/2) / Math.tan(Math.PI/슬라이드갯수))
            carouselSlideFn();

            function carouselSlideFn(){
                $slide.stop().animate({opacity:.75})
                $slideContent.css({transform:'scale(1)'});
                $slideWrap.css({transform: 'perspective(' + tZ*2 + 'px) translateZ('+ -tZ +'px) rotateY('+ (-angle*cnt) +'deg) rotateX(-5deg)'});
                $slide.eq(cnt%n).stop().animate({opacity:1}, 1000)
                $slideContent.eq(cnt%n).css({transform:'scale(1.1)',transition:'all 1s'});
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
                    prevCountFn();
                }
            });
            $nextBtn.on({
                click:function(){
                    nextCountFn();
                }
            });


        }
    }

    slide3d.init();

})(jQuery);