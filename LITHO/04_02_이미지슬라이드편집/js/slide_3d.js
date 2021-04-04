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
            var slideW = $('.slide').innerWidth();
            var angle = 360/n;
            var tZ = Math.round((slideW/2) / Math.tan(Math.PI/n));

            console.log(tZ);


            // translateZ 자동계산하기
            // tZ = Math.round((슬라이드너비/2) / Math.tan(Math.PI/슬라이드갯수))



            Slide3DFn();    // 로딩시 한번 실행

            function Slide3DFn(){
                $slide.stop().animate({opacity:.8});
                $slideContent.css({transform:'scale(1)'});


                $slideWrap.css({transform: 'perspective('+ (tZ*2) +'px) translateZ('+ -tZ +'px) rotateY('+ (-angle*cnt) +'deg)'});
                // $slideWrap.css({ transform: `perspective(2240px) translateZ(-1120px) rotateY(${-30*cnt}deg)` }); // ES6
                $slide.eq(cnt%n).stop().animate({opacity:1}, 1000);
                $slideContent.eq(cnt%n).css({transform:'scale(1.2)',transition:'all 1s'});
                // $(this).find('.slide-content').css({transform:'scale(1.2)',transition:'all 1s'});    // <<< 해당클래스를 찾아서 주는것도 가능
            }

            function prevCountFn(){
                cnt --;
                Slide3DFn();
            }
            function nextCountFn(){
                cnt ++;
                Slide3DFn();
            }

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