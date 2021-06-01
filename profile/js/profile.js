;(function($){

    var profile = {
        init:function(){
            this.section1Fn();
            this.section2Fn();
            this.section3Fn();
            this.section4Fn();
            this.wheelEventFn();
        },
        section1Fn:function(){
            var $winW  = $(window).width();
            var $winH  = $(window).height();
            var $section1 = $('#section1');
            var $cube = $('#wrap .cube');
            var x = 0;
            var y = 0;
            var $a = $('#section1 .link-wrap > span > a');
            var $span = $('#section1 .link-wrap > span');
            var $arrow = $('#section1 .link-wrap > span > i');
            var $profile = $('#section1 .profile > ul > li');
            

            function resizeFn(){
                $winW = $(window).width();
                $winH  = $(window).height();

                $section1.css({width:$winW,height:$winH});
            }
            $(window).resize(function(){
                resizeFn();
            });
            setTimeout(resizeFn, 100);

            $section1.on({
                mousemove:function(event){

                    x = event.clientX*0.095;
                    y = event.clientY*0.2;

                    $cube.css({transform:'perspective(600px) rotateX('+ (y-90) +'deg) rotateY('+ (x-90) +'deg) scale3d(1,1,1)'});
                }
            });

            $a.each(function(idx){
                $(this).on({
                    mouseenter:function(){
                        if (idx === 0) {
                            $section1.css({background: 'url(./img/main2.jpg) no-repeat 50% 50%', backgroundSize: 'cover'});
                            $profile.removeClass('addAni');
                        } else if (idx === 1) {
                            $section1.css({background: 'url(./img/main3.jpg) no-repeat 50% 50%', backgroundSize: 'cover'});
                            $profile.removeClass('addAni');
                        } else if (idx === 2) {
                            $section1.css({background: 'url(./img/main1.jpg) no-repeat 50% 50%', backgroundSize: 'cover'});
                            $profile.addClass('addAni');
                        } else if (idx === 3) {
                            $section1.css({background: 'url(./img/main4.jpg) no-repeat 50% 50%', backgroundSize: 'cover'});
                            $profile.removeClass('addAni');
                        }
                    }
                });
            });

            $span.on({
                mouseenter:function(){
                    $arrow.css({display:'none'});
                    $(this).children(0).css({display:'block'});
                    $(this).children(2).css({display:'block'});
                }
            });


            
        },
        section2Fn:function(){
            var $winW  = $(window).width();
            var $winH  = $(window).height();
            var $section2 = $('#section2');
            var $p = $('#section2 .title > p');
            var $h2 = $('#section2 .title > h2');
            var $ulH3 = $('#section2 .title > ul > h3');
            var $li = $('#section2 .title > ul > li');
            var $btnWrap = $('#section2 .title .btn-wrap');
            var t = 0;

            function resizeFn(){
                $winW = $(window).width();
                $winH  = $(window).height();

                $section2.css({width:$winW,height:$winH})
            }

            $(window).resize(function(){
                resizeFn();
            });
            setTimeout(resizeFn, 100);

            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section2').offset().top){
                    if(t === 0){
                        t = 1;
                        $btnWrap.addClass('addScroll');
                        $p.addClass('addScroll');
                        $h2.addClass('addScroll');
                        $ulH3.addClass('addScroll');
                        $li.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() === $('#section1').offset().top){
                    t = 0;
                    $btnWrap.removeClass('addScroll');
                    $p.removeClass('addScroll');
                    $h2.removeClass('addScroll');
                    $ulH3.removeClass('addScroll');
                    $li.removeClass('addScroll');
                }
            });

        },
        section3Fn:function(){
            var $winW  = $(window).width();
            var $winH  = $(window).height();
            var $section3 = $('#section3');
            var $p = $('#section3 .title > p');
            var $h2 = $('#section3 .title > h2');
            var $ulH3 = $('#section3 .title > ul > h3');
            var $li = $('#section3 .title > ul > li');
            var $btnWrap = $('#section3 .title .btn-wrap');
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
                        $btnWrap.addClass('addScroll');
                        $p.addClass('addScroll');
                        $h2.addClass('addScroll');
                        $ulH3.addClass('addScroll');
                        $li.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() === $('#section2').offset().top){
                    t = 0;
                    $btnWrap.removeClass('addScroll');
                    $p.removeClass('addScroll');
                    $h2.removeClass('addScroll');
                    $ulH3.removeClass('addScroll');
                    $li.removeClass('addScroll');
                }
            });

        },
        section4Fn:function(){
            var $winW  = $(window).width();
            var $winH  = $(window).height();
            var $section4 = $('#section4');
            var $p = $('#section4 .title > p');
            var $h2 = $('#section4 .title > h2');
            var $ulH3 = $('#section4 .title > ul > h3');
            var $li = $('#section4 .title > ul > li');
            var $btnWrap = $('#section4 .title .btn-wrap');
            var t = 0;

            function resizeFn(){
                $winW = $(window).width();
                $winH  = $(window).height();

                $section4.css({width:$winW,height:$winH})
            }

            $(window).resize(function(){
                resizeFn();
            });
            setTimeout(resizeFn, 100);

            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section4').offset().top){
                    if(t === 0){
                        t = 1;
                        $btnWrap.addClass('addScroll');
                        $p.addClass('addScroll');
                        $h2.addClass('addScroll');
                        $ulH3.addClass('addScroll');
                        $li.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() === $('#section3').offset().top){
                    t = 0;
                    $btnWrap.removeClass('addScroll');
                    $p.removeClass('addScroll');
                    $h2.removeClass('addScroll');
                    $ulH3.removeClass('addScroll');
                    $li.removeClass('addScroll');
                }
            });

        },
        wheelEventFn:function(){
            var $main = $('#main');
            var $section = $('.section');
            var wheelDelta = 0;
            var cnt = 0;

            var $goTopBtn = $('.gotop-btn');

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

                if (event.originalEvent.wheelDelta) {
                    wheelDelta = event.originalEvent.wheelDelta;
                } else {            // 파이어폭스
                    wheelDelta = event.detail*-1
                }

                if (!$('html,body').is(':animated')) {
                    if(wheelDelta < 0) {
                        cnt++;
                        if (cnt>=3) {
                            cnt=3;
                            $('html,body').stop().animate({scrollTop:$section.eq(cnt).offset().top}, 800, 'swing');
                        } else {
                            $('html,body').stop().animate({scrollTop:$section.eq(cnt).offset().top}, 800, 'swing');
                        }
                    } else {
                        cnt--;
                        if (cnt<0) {cnt=0;}
                        $('html,body').stop().animate({scrollTop:$section.eq(cnt).offset().top}, 800, 'swing');
                    }
                }
            });
        }
        
    }

    profile.init();

})(jQuery);