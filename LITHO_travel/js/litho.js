;(function($){
    var litho = {
        init:function(){
            var that = this;

            that.headerFn();
            that.section1Fn();
            that.section2Fn();
            that.section3Fn();
            that.section4Fn();
            that.section5Fn();
            that.section6Fn();
            that.section7Fn();
            that.section8Fn();
            that.section9Fn();
            that.section10Fn();
            that.footerFn();
        },
        headerFn:function(){
            var $nav     = $('#header #nav');
            var $mainBtn = $('#header .main-btn');
            var $sub     = $('#header .sub');
            var $subBtn    = $('#header .sub-btn');
            var $subSub     = $('#header .sub-sub');
            var $subSubBtn    = $('#header .sub-sub-btn');
            var $subSubSub     = $('#header .sub-sub-sub');

            
            $mainBtn.on({
                mouseenter:function(){
                    $sub.hide();
                    $(this).next().show();
                }
            });
            $subBtn.on({
                mouseenter:function(){
                    $subSub.hide();
                    $(this).next().show();
                }
            });
            $subSubBtn.on({
                mouseenter:function(){
                    $subSubSub.hide();
                    $(this).next().show();
                }
            })

            $nav.on({
                mouseleave:function(){
                    $sub.hide();
                    $subSub.hide();
                }
            });
            
        },
        section1Fn:function(){
            var $winW      = $(window).width();
            var $winH      = $(window).height();
            var $section1  = $('#section1');
            var $slideView = $('#section1 .slide-view');
            var $slideWrap = $('#section1 .slide-wrap');
            var $slide     = $('#section1 .slide');
            var slideW     = $('#section1 .slide').innerWidth();
            var n          = $('#section1 .slide').length;  // n=3
            var cnt        = 0;
            var touchS     = 0;
            var touchE     = 0;
            var touchD     = false;
            var next       = [];
            var prev       = [];

            function resizeFn(){
                $winW = $(window).width();
                $winH = $(window).height();
                $slide.css({width:$winW,height:$winH});
                $section1.css({width:$winW,height:$winH});
            }

            $(window).resize(function(){
                resizeFn();
            });
            setTimeout(resizeFn, 100);

            function mainPrevSlideFn(){
                var j = n;
                for(var i=0; i<n; i++){
                    j--;
                    prev[i] = j;
                }

                var temp = prev.pop();
                           prev.unshift(temp);

                for(var i=n-1; i>cnt; i--){
                    var temp = prev.shift();
                               prev.push(temp);
                }

                for(var i=0; i<n; i++){
                    $slide.eq(prev[i]).stop().animate({left:(100*(-i))+'%'}, 0).animate({left:(100*(-i+1))+'%'}, 600, 'easeInOutCubic');
                }
            }
            function mainNextSlideFn(){
                for(var i=0; i<n; i++){
                    next[i] = i;
                    // console.log('넥스트 설정',next);
                }
                var temp = next.pop();
                           next.unshift(temp);
                        //    console.log('임시부여이후',next);

                for(var i=0; i<cnt; i++){
                    var temp = next.shift();
                               next.push(temp);
                            //    console.log('푸쉬이후',next);
                 }

                for(var i=0; i<n; i++){
                    $slide.eq(next[i]).stop().animate({left:(100*i)+'%'}, 0).animate({left:(100*(i-1))+'%'}, 600, 'easeInOutCubic');
                }
            }

            function prevSlideCountFn(){
                cnt--;
                if(cnt<0){cnt=2;}
                mainPrevSlideFn();
            }
            function nextSlideCountFn(){
                cnt++;
                if(cnt>2){cnt=0;}
                mainNextSlideFn();
            }

            $slideView.on({
                mousedown:function(e){
                    touchD = true;
                    e.preventDefault();
                    touchS = e.clientX;
                },
                mouseup:function(e){
                    touchD = false;
                    e.preventDefault();
                    touchE = e.clientX;
                    touchSwipeFn();
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
                if(touchS-touchE > 0){
                    if(!$slide.is(':animated')){
                        nextSlideCountFn();
                    }
                }
                if(touchS-touchE < 0){
                    if(!$slide.is(':animated')){
                        prevSlideCountFn();
                    }
                }
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
        section7Fn:function(){

        },
        section8Fn:function(){

        },
        section9Fn:function(){

        },
        section10Fn:function(){

        },
        footerFn:function(){

        },
    }

    litho.init();

})(jQuery);