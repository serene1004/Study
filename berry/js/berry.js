;(function($){
    var berry = {
        init:function(){
            var that = this;

            that.headerFn();
            that.section1Fn();
            that.section2Fn();
            that.section3Fn();
            that.footerFn();
            that.mouseWheelFn();
        },

        headerFn:function(){

        },
        section1Fn:function(){
            var $winW  = $(window).width();
            var $winH  = $(window).height();
            var leftW  = 0.651;
            var rightW = 0.349;
            var $section1 = $('#section1');

            var $leftSlideView = $('#section1 .left-box .slide-view');
            var $leftSlideWrap = $('#section1 .left-box .slide-wrap');
            var $leftSlide  = $('#section1 .left-box .slide');
            var $leftSlideW = $leftSlide.innerWidth();
            var $prevBtn = $('#section1 .prev-btn');
            var $nextBtn = $('#section1 .next-btn');
            var cnt = 0;
            
            var TouchS      = 0;
            var TouchE      = 0;
            var TouchDelta  = false;
            var TouchYstart = 0;
            var TouchYend   = 0;
            
            var $rightSlide  = $('#section1 .right-box .slide');
            var $rightSlideW = $('#section1 .right-box .slide').innerWidth();
            var btn = null;

            var $nowPage = $('#section1 .now-page');
            var $totalPage = $('#section1 .total-page');
            var $plus = $('#section1 .plus');
            var $market = $('#section1 .market');
            

            $nowPage.html(cnt+1);
            $totalPage.html($rightSlide.length);

            function resizeFn(){
                $winW = $(window).width();
                $winH  = $(window).height();

                $leftSlide.css({width:$winW*leftW});
                $leftSlideW = $leftSlide.innerWidth();
                $leftSlideWrap.css({width:$leftSlideW*5});

                $rightSlide.css({width:$winW*rightW});
                $section1.css({width:$winW,height:$winH})
            }

            $(window).resize(function(){
                resizeFn();
            });
            setTimeout(resizeFn, 100);

            function leftSlideFn(){
                $leftSlideWrap.stop().animate({left:-$leftSlideW*cnt}, 800, function(){
                    if(cnt>2){cnt=0;}
                    if(cnt<0){cnt=2;}
                    $leftSlideWrap.stop().animate({left:-$leftSlideW*cnt}, 0)
                })
            }
            function rightSlideFn(){
                if(btn === false){
                    $rightSlide.css({zIndex:1}).stop().animate({opacity:1}, 0);
                    $rightSlide.eq(cnt).css({zIndex:2});
                    $rightSlide.eq(cnt===2?0:cnt+1).css({zIndex:3}).stop().animate({opacity:1},0).animate({opacity:0}, 800);
                }
                else if(btn === true){
                    $rightSlide.css({zIndex:1});
                    $rightSlide.eq(cnt-1).css({zIndex:2});
                    $rightSlide.eq(cnt).css({zIndex:3}).stop().animate({opacity:0},0).animate({opacity:1}, 800);
                }
            }

            function prevCountFn(){
                cnt --;
                leftSlideFn();
                btn = false;
                if(cnt<0){
                    cnt=2;
                }
                rightSlideFn();
                $nowPage.html(cnt+1);
            }
            function nextCountFn(){
                cnt ++;
                leftSlideFn();
                btn = true;
                if(cnt>2){
                    cnt=0;
                }
                rightSlideFn();
                $nowPage.html(cnt+1);
            }
            $prevBtn.on({
                click:function(){
                    if(!$leftSlideWrap.is(':animated')){
                        prevCountFn();
                    }
                }
            });
            $nextBtn.on({
                click:function(){
                    if(!$leftSlideWrap.is(':animated')){
                        nextCountFn();
                    }
                }
            });


            $leftSlideView.on({
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
                    if(!$leftSlideWrap.is(':animated')){
                        nextCountFn();
                    }
                }
                if(TouchS-TouchE < -30){
                    if(!$leftSlideWrap.is(':animated')){
                        prevCountFn();
                    }
                }
            }

            $plus.on({
                click:function(){
                    $(this).toggleClass('addClick');
                    $market.toggleClass('addClick');
                }
            });

            
        },
        section2Fn:function(){
            var $winW  = $(window).width();
            var $winH  = $(window).height();
            var leftW  = 0.651;
            var rightW = 0.349;
            var $section2 = $('#section2');

            var $centerSlideView = $('#section2 .center-slide .slide-view');
            var $centerSlideWrap = $('#section2 .center-slide .slide-wrap');
            var $centerSlide = $('#section2 .center-slide .slide');
            var $centerSlideW = $centerSlide.innerWidth();
            var $prevBtn = $('#section2 .prev-btn');
            var $nextBtn = $('#section2 .next-btn');
            var cnt = 0;

            var $slideArea  = $('#section2 .slide-area');
            var $leftSlide  = $('#section2 .left-slide .slide');
            var $leftSlideW = $leftSlide.innerWidth();

            var $rightSlideWrap = $('#section2 .right-box .slide-wrap');
            var $rightSlide  = $('#section2 .right-box .slide');
            var $rightSlideW = $rightSlide.innerWidth();
            var btn = null;

            var $nowPage = $('#section2 .now-page');
            var $totalPage = $('#section2 .total-page');

            var $plus = $('#section1 .plus');
            var $market = $('#section1 .market');
            var t = 0;

            $nowPage.html(cnt+1);
            $totalPage.html($leftSlide.length);

            function resizeFn(){
                $winW = $(window).width();
                $winH  = $(window).height();
                
                $centerSlide.css({width:$winW*(leftW/2)});
                $centerSlideW = $centerSlide.innerWidth();
                $centerSlideWrap.css({width:$centerSlideW*5});

                $leftSlide.css({width:$winW*(leftW/2)});
                $leftSlideW = $leftSlide.innerWidth();
                $slideArea.css({width:$leftSlideW});

                $rightSlide.css({width:$winW*(rightW/2)});
                $rightSlideW = $rightSlide.innerWidth();
                $rightSlideWrap.css({width:$rightSlideW*8});

                $section2.css({width:$winW,height:$winH})
            }

            $(window).resize(function(){
                resizeFn();
            });
            setTimeout(resizeFn, 100);

            function centerSlideFn(){
                if(btn === false){
                    $centerSlide.stop().animate({opacity:0}, 550, function(){
                        if(cnt===2){
                            $centerSlide.eq(3).stop().animate({opacity:1});
                        }
                    });
                    $centerSlide.eq(cnt===2?0:cnt+1).stop().animate({opacity:1},0);
                    
                }
                if(btn === true){
                    $centerSlide.stop().animate({opacity:1});
                    $centerSlide.eq(cnt).stop().delay(150).animate({opacity:0}, 600);
                }
                $centerSlideWrap.stop().delay(300).animate({left:-$centerSlideW*cnt}, 600, function(){
                    if(cnt>2){cnt=0;}
                    if(cnt<0){cnt=2;}
                    $centerSlideWrap.stop().animate({left:-$centerSlideW*cnt}, 0)
                })
            }
            function rightSlideFn(){
                $rightSlideWrap.stop().animate({left:-$rightSlideW*cnt}, 600, function(){
                    if(cnt>2){cnt=0;}
                    if(cnt<0){cnt=2;}
                    $rightSlideWrap.stop().animate({left:-$rightSlideW*cnt}, 0)
                })
            }
            function leftSlideFn(){
                if(btn === false){
                    $leftSlide.css({zIndex:1}).stop().animate({opacity:1}, 0);
                    $leftSlide.eq(cnt).css({zIndex:2});
                    $leftSlide.eq(cnt===2?0:cnt+1).css({zIndex:3}).stop().animate({opacity:1},0).animate({opacity:0}, 800);
                }
                else if(btn === true){
                    $leftSlide.css({zIndex:1});
                    $leftSlide.eq(cnt-1).css({zIndex:2});
                    $leftSlide.eq(cnt).css({zIndex:3}).stop().animate({opacity:0},0).animate({opacity:1}, 800);
                }
            }
            
            function prevCountFn(){
                btn = false;
                cnt --;
                centerSlideFn();
                rightSlideFn();
                if(cnt<0){
                    cnt=2;
                }
                leftSlideFn();
                $nowPage.html(cnt+1);
            }
            function nextCountFn(){
                btn = true;
                cnt ++;
                centerSlideFn();
                rightSlideFn();
                if(cnt>2){
                    cnt=0;
                }
                leftSlideFn();
                $nowPage.html(cnt+1);
            }
            $prevBtn.on({
                click:function(){
                    if(!$centerSlideWrap.is(':animated')&&!$leftSlide.is(':animated')){
                        prevCountFn();
                    }
                }
            });
            $nextBtn.on({
                click:function(){
                    if(!$centerSlideWrap.is(':animated')&&!$leftSlide.is(':animated')){
                        nextCountFn();
                    }
                }
            });

            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section2').offset().top){
                    if(t === 0){
                        t = 1;
                        $plus.addClass('addScroll');
                        $market.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() === $('#section1').offset().top){
                    t = 0;
                    $plus.removeClass('addScroll');
                    $market.removeClass('addScroll');
                }
            });


        },
        section3Fn:function(){
            var $winW  = $(window).width();
            var $winH  = $(window).height();
            var $section3 = $('#section3');
            var $img = $('#section3 .img-box img');
            var t = 0;

            function resizeFn(){
                $winW = $(window).width();
                $winH  = $(window).height();

                $section3.css({width:$winW,height:$winH})
            }

            $(window).resize(function(){
                resizeFn();
            });
            setTimeout(resizeFn, 100);

            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section3').offset().top){
                    if(t === 0){
                        t = 1;
                        $img.addClass('addAni');
                    }
                }
                if($(window).scrollTop() === $('#section2').offset().top){
                    t = 0;
                    $img.removeClass('addAni');
                }
            });

        },
        footerFn:function(){


        },
        mouseWheelFn:function(){
            var $main = $('#main');
            var $section = $('.section');
            var wheelDelta = 0;
            var cnt = 0;

            var $goTopBtn = $('#footer .gotop-btn');

            $goTopBtn.on({
                click:function(event){
                    event.preventDefault();
                    cnt=0;
                    var url = $(this).attr('href');
                    $('html,body').stop().animate({scrollTop:$(url).offset().top}, 800);
                }
            });

            $main.on('mousewheel DOMMouseScroll',function(event){
                event.preventDefault();

                if(event.originalEvent.wheelDelta){
                    wheelDelta = event.originalEvent.wheelDelta;
                }
                else{    // 파이어폭스
                    wheelDelta = event.detail*-1
                }

                if (!$('html,body').is(':animated')){
                    if(wheelDelta < 0){
                        cnt++;
                        if(cnt>=3){
                            cnt=3;
                            $('html,body').stop().animate({scrollTop:$section.eq(cnt-1).offset().top+200}, 800, 'swing');
                        }
                        else{
                            $('html,body').stop().animate({scrollTop:$section.eq(cnt).offset().top}, 800, 'swing');
                        }
                    }
                    else{
                        cnt--;
                        if(cnt<0){cnt=0;}
                        $('html,body').stop().animate({scrollTop:$section.eq(cnt).offset().top}, 800, 'swing');
                    }
                }
            });
            

        }
        
    }
    berry.init();

})(jQuery);