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
            that.section11Fn();
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
            var $prevBtn   = $('#section1 .prev-btn');
            var $nextBtn   = $('#section1 .next-btn'); 
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
                    $slide.eq(prev[i]).stop().animate({left:(100*(-i))+'%'}, 0).animate({left:(100*(-i+1))+'%'}, 400, 'easeInOutCubic');
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
                    $slide.eq(next[i]).stop().animate({left:(100*i)+'%'}, 0).animate({left:(100*(i-1))+'%'}, 400, 'easeInOutCubic');
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

            $prevBtn.on({
                click:function(){
                    if(!$slide.is(':animated')){
                        prevSlideCountFn();
                    }
                }
            });
            $nextBtn.on({
                click:function(){
                    if(!$slide.is(':animated')){
                        nextSlideCountFn();
                    }
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
                        nextSlideCountFn();
                    }
                }
                if(touchS-touchE < -30){
                    if(!$slide.is(':animated')){
                        prevSlideCountFn();
                    }
                }
            }

        },
        section2Fn:function(){

        },
        section3Fn:function(){
            var $content = $('#section3 .content');
            var $contentW = $('#section3 .content').innerWidth();
            var x = 0;
            var y = 0;


            $content.on({
                mousemove:function(event){
                    // 마우스가 위치한곳의 z축값이 높아짐?
                    // 대상을 사진으로하면 사진전체가 올라와지니까 사진이아닌 다른것?으로 지정해야ㅕ할듯..
                    // 사진의 중심점을 기준으로 z축값의 변화가있는것같아보임
                    // console.log('X값',event.clientX);
                    // console.log('Y값',event.clientY);
                    x = event.clientX*0.2;
                    y = event.clientY*0.2;
                    $content.css({transform:'perspective('+ 2000 +'px) translateZ('+ -y +'px) translateZ('+ -x +'px)'});
                    // x = event.clientX/($contentW/4);
                    // y = event.clientY/($contentW/4);
                    // $content.css({transform:'skewX('+ -x +'deg) skewY('+ y +'deg)'});
                }
            });


        },
        section4Fn:function(){
            var $winW = $(window).width();
            var $winH = $(window).height();
            var $galleryBtn = $('#section4 .gallery-btn');
            var $galleryImg = $('#section4 .gallery-img');
            var $content = $('#section4 .content');
            var $contentW = $('#section4 .content').innerWidth();
            var $ul = $('#section4 .content .gallery-wrap'); // 갤러리 ul
            var $li = $('#section4 .content .gallery-wrap > li'); // 갤러리 li
            var liW = $contentW/cols;
            var liH = liW*1;
            var n = $li.length;
            var cols = 4;
            var rows = Math.ceil(n/cols);
            // var imgW = $contentW/cols;   // li에서 패딩값을빼야나옴
            // var imgH = imgW*1;
            var btnNum = 0;


            function galleryResizeFn(){
                $contentW = $('#section4 .content').innerWidth();
                
                if($winW > 1200){
                    cols = 4;
                }
                else if($winW > 980){
                    cols = 3;
                }
                else if($winW > 680){
                    cols = 2;
                }

                liW = $contentW/cols;
                liH = liW*1;
                $li.css({width:liW, height:liH});

                if(btnNum === 0){
                    n=8;
                    rows = Math.ceil(n/cols);
                    // $content.css({width:$contentW, height:liH*rows});
                    $ul.css({width:$contentW, height:liH});
                    $li.css({width:liW, height:liH});

                    if(cols === 4){
                        $li.eq(0).stop().show(300).animate({left:liW*0 ,top:liH*0}, 600);
                        $li.eq(1).stop().show(300).animate({left:liW*1 ,top:liH*0}, 600);
                        $li.eq(2).stop().show(300).animate({left:liW*2 ,top:liH*0}, 600);
                        $li.eq(3).stop().show(300).animate({left:liW*3 ,top:liH*0}, 600);
                        $li.eq(4).stop().show(300).animate({left:liW*0 ,top:liH*1}, 600);
                        $li.eq(5).stop().show(300).animate({left:liW*1 ,top:liH*1}, 600);
                        $li.eq(6).stop().show(300).animate({left:liW*2 ,top:liH*1}, 600);
                        $li.eq(7).stop().show(300).animate({left:liW*3 ,top:liH*1}, 600);
                    }

                }
                else if(btnNum === 1){
                    n=3;
                    rows = Math.ceil(n/cols);
                    $ul.css({width:$contentW, height:liH});
                    $li.css({width:liW, height:liH});
                    
                    
                    $li.eq(1).stop().hide(300);
                    $li.eq(2).stop().hide(300);
                    $li.eq(3).stop().hide(300);
                    $li.eq(4).stop().hide(300);
                    $li.eq(5).stop().hide(300);
                    if(cols === 4){
                        $li.eq(7).stop().show(300).animate({left:liW*0 ,top:liH*0}, 600);
                        $li.eq(6).stop().show(300).animate({left:liW*1 ,top:liH*0}, 600);
                        $li.eq(0).stop().show(300).animate({left:liW*2 ,top:liH*0}, 600);
                    }
                }
                else if(btnNum === 2){
                    n=3;
                    rows = Math.ceil(n/cols);
                    $ul.css({width:$contentW, height:liH});
                    $li.css({width:liW, height:liH});

                    $li.eq(0).stop().hide(300);
                    $li.eq(2).stop().hide(300);
                    $li.eq(4).stop().hide(300);
                    $li.eq(6).stop().hide(300);
                    $li.eq(7).stop().hide(300);
                    if(cols === 4){
                        $li.eq(1).stop().show(300).animate({left:liW*0 ,top:liH*0}, 600);
                        $li.eq(3).stop().show(300).animate({left:liW*1 ,top:liH*0}, 600);
                        $li.eq(5).stop().show(300).animate({left:liW*2 ,top:liH*0}, 600);
                    }
                }
                else if(btnNum === 3){
                    n=2;
                    rows = Math.ceil(n/cols);
                    $ul.css({width:$contentW, height:liH});
                    $li.css({width:liW, height:liH});

                    $li.eq(0).stop().hide(300);
                    $li.eq(1).stop().hide(300);
                    $li.eq(3).stop().hide(300);
                    $li.eq(5).stop().hide(300);
                    $li.eq(6).stop().hide(300);
                    $li.eq(7).stop().hide(300);
                    if(cols === 4){
                        $li.eq(2).stop().show(300).animate({left:liW*0 ,top:liH*0}, 600);
                        $li.eq(4).stop().show(300).animate({left:liW*1 ,top:liH*0}, 600);
                    }
                }



            }

            $(window).resize(function(){
                galleryResizeFn();
            });
            setTimeout(galleryResizeFn, 100);

            $galleryBtn.each(function(idx){
                $(this).on({
                    click:function(){
                        if(!$li.is(':animated')){
                            btnNum = idx;
                            galleryResizeFn();
                            $galleryBtn.removeClass('addNav');
                            $(this).addClass('addNav');
                        }
                    }
                });
            });

        },
        section5Fn:function(){
            var $prevBtn = $('#section5 .prev-btn');
            var $nextBtn = $('#section5 .next-btn');
            var $stopBtn = $('#section5 .stop-btn');
            var $playBtn = $('#section5 .play-btn');
            var $stopPlay = $('#section5 .stop-play');
            var $ul = $('#section5 ul');
            var $li = $('#section5 li');
            var cnt = 0;
            var n = $('#section5 li').length;
            var slideW = $('#section5').innerWidth();
            var angle = 360/n;
            var tZ = Math.round((slideW/2) / Math.tan(Math.PI/n));

            var setId = null;
            var setId2 = null;
            var timercnt = 0;

            var touchS     = 0;
            var touchE     = 0;
            var touchD     = false;


            function slide3dFn(){
                $ul.css({transform: 'perspective('+ (tZ*3) +'px) translateZ('+ -tZ +'px) rotateY('+ (-angle*cnt) +'deg)'});
            }
            function prevCountFn(){
                cnt--;
                slide3dFn();
            }
            function nextCountFn(){
                cnt++;
                slide3dFn();
            }

            $prevBtn.on({
                click:function(){
                    prevCountFn();
                    timerFn();
                    $playBtn.removeClass('addBtn');
                    $stopBtn.removeClass('addBtn');
                }
            });
            $nextBtn.on({
                click:function(){
                    nextCountFn();
                    timerFn();
                    $playBtn.removeClass('addBtn');
                    $stopBtn.removeClass('addBtn');
                }
            });

            // $stopPlay.on({
            //     click:function(){
            //         $stopBtn.toggleClass('addBtn');
            //         $playBtn.toggleClass('addBtn');
            //     }
            // });

            $stopBtn.on({
                click:function(){
                    $stopBtn.addClass('addBtn');
                    $playBtn.addClass('addBtn');
                    clearInterval(setId);
                    clearInterval(setId2);
                }
            });
            $playBtn.on({
                click:function(){
                    $playBtn.removeClass('addBtn');
                    $stopBtn.removeClass('addBtn');
                    timerFn();
                }
            });

            function autoPlayFn(){
                setId = setInterval(nextCountFn, 5000);
            }
            autoPlayFn();

            function timerFn(){
                timercnt = 0;
                clearInterval(setId);
                clearInterval(setId2);
                setId2 = setInterval(function(){
                    timercnt++;
                    if (timercnt >= 5) {
                        clearInterval(setId2);
                        nextCountFn();
                        autoPlayFn();
                    }
                }, 1000);
            }

            $ul.on({
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
                    nextCountFn();
                    timerFn();
                    $playBtn.removeClass('addBtn');
                    $stopBtn.removeClass('addBtn');
                }
                if(touchS-touchE < -30){
                    prevCountFn();
                    timerFn();
                    $playBtn.removeClass('addBtn');
                    $stopBtn.removeClass('addBtn');
                }
            }            


        },
        section6Fn:function(){

        },
        section7Fn:function(){
            var $slideContainerW = $('#section7 .slide-container').innerWidth();
            var $slideView       = $('#section7 .slide-view');
            var $slideWrap       = $('#section7 .slide-wrap');
            var $slide           = $('#section7 .slide');
            var $slideW          = $slideContainerW/4;
            var $prevBtn         = $('#section7 .prev-btn');
            var $nextBtn         = $('#section7 .next-btn');
            var imgH             = $('#section7 img').height;
            var $captionGap      = $('#section7 .caption-gap');
            var cnt              = 0;
            var touchS           = 0;
            var touchE           = 0;
            var touchD           = false;


            function resizeFn(){
                $slideContainerW = $('#section7 .slide-container').innerWidth();
                $slideW = $slideContainerW/4;
                $slideView.css({width:$slideW*4})
                $slideWrap.css({width:$slideW*15,marginLeft: -$slideW*5});
                $slide.css({width:$slideW});

                $captionGap.css({height:imgH});
            }

            $(window).resize(function(){
                resizeFn();
            });
            setTimeout(resizeFn, 100);



            function slideFn(){
                $slideWrap.stop().animate({left:-$slideW*cnt}, 400, function(){
                    if(cnt>4){cnt=0;}
                    if(cnt<0){cnt=4;}
                    $slideWrap.stop().animate({left:-$slideW*cnt},0)
                })
            }
            function prevCountFn(){
                cnt--;
                slideFn();
            }
            function nextCountFn(){
                cnt++;
                slideFn();
            }
            $prevBtn.on({
                click:function(){
                    if(!$slideWrap.is(':animated')){
                        prevCountFn();
                    }
                }
            });
            $nextBtn.on({
                click:function(){
                    if(!$slideWrap.is(':animated')){
                        nextCountFn();
                    }
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
                    if(!$slideWrap.is(':animated')){
                        nextCountFn();
                    }
                }
                if(touchS-touchE < -30){
                    if(!$slideWrap.is(':animated')){
                        prevCountFn();
                    }
                }
            }            


        },
        section8Fn:function(){

        },
        section9Fn:function(){

        },
        section10Fn:function(){

        },
        section11Fn:function(){

        },
        footerFn:function(){

        },
    }

    litho.init();

})(jQuery);