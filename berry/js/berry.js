;(function($){
    var berry = {
        init:function(){
            var that = this;

            that.headerFn();
            that.section1Fn();
            that.section2Fn();
            that.section3Fn();
            that.footerFn();

        },

        headerFn:function(){

        },
        section1Fn:function(){
            var leftSlideView = $('#section1 .left-box .slide-view');
            var leftSlideWrap = $('#section1 .left-box .slide-wrap');
            var leftSlide = $('#section1 .left-box .slide');
            var leftSlideW = $('#section1 .left-box .slide').innerWidth();
            var cnt = 0;
            
            var TouchS      = 0;
            var TouchE      = 0;
            var TouchDelta  = false;
            var TouchYstart = 0;
            var TouchYend   = 0;
            
            var rightSlideWrap = $('#section1 .right-box .slide-wrap');
            var rightSlide = $('#section1 .right-box .slide');
            var rightSlideW = $('#section1 .right-box .slide').innerWidth();
            

            function leftSlideFn(){
                leftSlideWrap.stop().animate({left:-leftSlideW*cnt}, 600, function(){
                    if(cnt>2){cnt=0;}
                    if(cnt<0){cnt=2;}
                    leftSlideWrap.stop().animate({left:-leftSlideW*cnt}, 0)
                })
            }
            function rightSlideFn(){
                rightSlideWrap.stop().animate({left:-rightSlideW*cnt}, 600, function(){
                    if(cnt>2){cnt=0;}
                    if(cnt<0){cnt=2;}
                    rightSlideWrap.stop().animate({left:-rightSlideW*cnt}, 0)
                })
            }

            function PrevCountFn(){
                cnt --;
                leftSlideFn();
                rightSlideFn();
            }
            function NextCountFn(){
                cnt ++;
                leftSlideFn();
                rightSlideFn();
            }

            leftSlideView.on({
                mousedown:function(e){
                    TouchDelta = true;
                    e.preventDefault();
                    TouchS = e.clientX;
                },
                mouseup:function(e){
                    TouchDelta = false;
                    e.preventDefault();
                    TouchE = e.clientX;
                    TouchSwipeFn();
                },
                mouseleave:function(e){
                    if(TouchDelta === true){
                        TouchDelta = false;
                        e.preventDefault();
                        TouchE = e.clientX;
                        TouchSwipeFn();
                    }
                },

                touchstart:function(e){
                    TouchDelta = true;
                    e.preventDefault();
                    TouchS = e.originalEvent.changedTouches[0].clientX;
                    TouchYstart = e.originalEvent.changedTouches[0].clientY;
                },
                touchend:function(e){
                    TouchDelta = false;
                    e.preventDefault();
                    TouchE = e.originalEvent.changedTouches[0].clientX;
                    TouchYend = e.originalEvent.changedTouches[0].clientY;

                    TouchSwipeFn();
                    if(TouchYstart-TouchYend < -50){
                        
                    }
                    if(TouchYstart-TouchYend > 50){
                      $('html,body').stop().animate({scrollTop: $('#section2').offset().top }, 600);
                    }  
                }
            });
            function TouchSwipeFn(){
                if(TouchS-TouchE > 30){
                    if(!leftSlideWrap.is(':animated')){
                        NextCountFn();
                    }
                }
                if(TouchS-TouchE < -30){
                    if(!leftSlideWrap.is(':animated')){
                        PrevCountFn();
                    }
                }
            }
            
        },
        section2Fn:function(){

        },
        section3Fn:function(){

        },
        footerFn:function(){

        }
        
    }
    berry.init();

})(jQuery);