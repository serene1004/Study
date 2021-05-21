;(function($){

    var komsco = {
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
            var $playBtn   = $('#section1 .play-btn');
            var $stopBtn   = $('#section1 .stop-btn');
            var cnt = 0;
            var btn = null;
            var z = null;

            var touchS     = 0;
            var touchE     = 0;
            var touchD     = false;
            
            var setId    = null;
            var setId2   = null;
            var timercnt = 0;
            var $pageBtn = $('#section1 .page-btn');
            var $goNext  = $('#section1 .go-next');
            
            $pageBtn.eq(0).addClass('addCount');

            function mainSlideFn(){
                if(btn === false){
                    if(z === null){
                        z=cnt===3?0:cnt+1;
                    }
                    $slide.css({zIndex:1}).stop().animate({opacity:1}, 0);
                    $slide.eq(cnt).css({zIndex:2});
                    // $slide.eq(cnt===3?0:cnt+1).css({zIndex:3}).stop().animate({opacity:1},0).animate({opacity:0}, 400);
                    $slide.eq(z).css({zIndex:3}).stop().animate({opacity:1},0).animate({opacity:0}, 400);
                }
                else if(btn === true){
                    if(z === null){ // 페이지버튼을 클릭한적이 없는경우
                        z=cnt-1;
                    }
                    $slide.css({zIndex:1});
                    $slide.eq(z).css({zIndex:2});
                    // $slide.eq(cnt-1).css({zIndex:2});
                    $slide.eq(cnt).css({zIndex:3}).stop().animate({opacity:0},0).animate({opacity:1}, 400);
                }
                $pageBtn.removeClass('addCount');
                $pageBtn.eq(cnt).addClass('addCount');
                z=null;
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

            $playBtn.on({
                click:function(){
                    $(this).removeClass('addBtn');
                    $stopBtn.removeClass('addBtn');
                    slideTimerFn();
                }
            });
            $stopBtn.on({
                click:function(){
                    $(this).addClass('addBtn');
                    $playBtn.addClass('addBtn');
                    clearInterval(setId);
                    clearInterval(setId2);
                }
            });

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
                if(touchS-touchE > 30){
                    if(!$slide.is(':animated')){
                        $stopBtn.removeClass('addBtn');
                        $playBtn.removeClass('addBtn');
                        nextSlideCountFn();
                    }
                }
                if(touchS-touchE < -30){
                    if(!$slide.is(':animated')){
                        $stopBtn.removeClass('addBtn');
                        $playBtn.removeClass('addBtn');
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

            $goNext.on({
                click:function(event){
                    event.preventDefault();
                    var url = $(this).attr('href');
                    $('html,body').stop().animate({scrollTop:$(url).offset().top}, 800);
                }
            });

            $pageBtn.each(function(idx){
                $(this).on({
                    click:function(event){
                        event.preventDefault();
                        $stopBtn.removeClass('addBtn');
                        $playBtn.removeClass('addBtn');
                        z=cnt;
                        if(cnt > idx){
                            btn = false;
                            cnt=idx;
                            mainSlideFn();
                            slideTimerFn();
                        }
                        if(cnt < idx){
                            btn = true;
                            cnt=idx;
                            mainSlideFn();
                            slideTimerFn();
                        }
                    }
                })
            })

            


        },
        section2Fn:function(){
            var $pageBtn = $('#section2 .page-btn');
            var $row2_2 = $('#section2 .row2-2');

            $pageBtn.each(function(idx){
                $(this).on({
                    click:function(event){
                        event.preventDefault();
                        $pageBtn.removeClass('addBtn');
                        $(this).addClass('addBtn');
                        if(idx === 0){
                            $row2_2.removeClass('addBtn');
                        }
                        else if(idx === 1){
                            $row2_2.addClass('addBtn');
                        }
                    }
                })
            });




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
    komsco.init();

})(jQuery);