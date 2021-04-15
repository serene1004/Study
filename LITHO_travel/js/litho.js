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
                        btnNum = idx;
                        galleryResizeFn();
                        $galleryBtn.removeClass('addNav');
                        $(this).addClass('addNav');
                    }
                });
            });

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