;(function($){

    var jopye = {
        init:function(){
            this.headerFn();
            this.section1Fn();
            this.section2Fn();
            this.section3Fn();
            this.section4Fn();
            this.section5Fn();
            this.section6Fn();
            this.footerFn();
        },
        headerFn:function(){

        },
        section1Fn:function(){
            var $slideView = $('#section1 .slide-view');
            var $slideWrap = $('#section1 .slide-wrap');
            var $slide     = $('#section1 .slide');
            var cnt = 0;
            var btn = null;

            var touchS     = 0;
            var touchE     = 0;
            var touchD     = false;
            var touchYstart = 0;
            var touchYend = 0;
            
            var setId     = null;
            var setId2    = null;
            var timercnt  = 0;

            var $pageBtn   = $('#section1 .page-btn');
            
            $pageBtn.eq(0).addClass('addCount');

            function mainSlideFn(){
                if(btn === false){
                    $slide.css({zIndex:1}).stop().animate({opacity:1}, 0);
                    $slide.eq(cnt).css({zIndex:2});
                    $slide.eq(cnt===3?0:cnt+1).css({zIndex:3}).stop().animate({opacity:1},0).animate({opacity:0}, 400);
                }
                else if(btn === true){
                    $slide.css({zIndex:1});
                    $slide.eq(cnt-1).css({zIndex:2});
                    $slide.eq(cnt).css({zIndex:3}).stop().animate({opacity:0},0).animate({opacity:1}, 400);
                }
                $pageBtn.removeClass('addCount');
                $pageBtn.eq(cnt).addClass('addCount');
            }
            function prevSlideCountFn(){
                btn = false;
                cnt--;
                if(cnt<0){
                    cnt=3;
                }
                mainSlideFn();
                slideTimerFn();
            }
            function nextSlideCountFn(){
                btn = true;
                cnt++;
                if(cnt>3){
                    cnt=0;
                }
                mainSlideFn();
                slideTimerFn();
            }

            $slideView.on({
                mousedown:function(e){
                    touchD = true;
                    e.preventDefault();
                    touchS = e.clientX;
                    touchYstart = e.clientY;
                },
                mouseup:function(e){
                    touchD = false;
                    e.preventDefault();
                    touchE = e.clientX;
                    touchYend = e.clientY;
                    touchSwipeFn();

                    if( touchYstart-touchYend < -50 ){
                        
                    }
                    if( touchYstart-touchYend > 50 ){
                      $('html,body').stop().animate({scrollTop: $('#section2').offset().top }, 600);
                    } 
                },
                mouseleave:function(e){
                    if(touchD === true){
                        touchE = e.clientX;
                        touchSwipeFn();
                        touchD = false;
                    }
                }
            });
            function touchSwipeFn(){
                if(touchS-touchE > 30){
                    if(!$slide.is(':animated')){
                        nextSlideCountFn();
                    }
                }
                if(touchS-touchE < -30){
                    if(!$slide.is(':animated')){
                        prevSlideCountFn();
                    }
                }
            }

            function autoPlayFn(){
                setId = setInterval(nextSlideCountFn, 5000);
            }
            autoPlayFn();

            function slideTimerFn(){
                timercnt = 0;
                clearInterval(setId);
                clearInterval(setId2);
                setId2 = setInterval(function(){
                    timercnt++;
                    if (timercnt >= 5) {
                        clearInterval(setId2);
                        nextSlideCountFn();
                        autoPlayFn();
                    }
                }, 1000);
            }



        },
        section2Fn:function(){

        },
        section3Fn:function(){

        },
        section4Fn:function(){

        },
        section5Fn:function(){

        },
        section6Fn:function(){

        },
        footerFn:function(){

        }
    }
    jopye.init();

})(jQuery);