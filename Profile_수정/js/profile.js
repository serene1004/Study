;(function($){

    var profile = {
        init:function(){
            this.section1Fn();
            this.section2Fn();
            this.section3Fn();
            this.section4Fn();
            this.section5Fn();
            this.wheelEventFn();
        },
        section1Fn:function(){
            var $winW  = $(window).width();
            var $winH  = $(window).height();
            var $section1 = $('#section1');
            var $introBox = $('#section1 .intro-box');
            var $introBoxH1 = $('#section1 .intro-box > h1');
            var $introBoxP = $('#section1 .intro-box > p');
            var $introBoxSpan = $('#section1 .intro-box > span');
            var $intro = $('#section1 .intro');
            var $cube = $('#wrap .cube');
            var $timeA = $('#section1 .weather .time li > a');
            var x = 0;
            var y = 0;
            var $a = $('#section1 .link-wrap > span > a');
            var $profile = $('#section1 .profile > ul > li');
            var $skills = $('#section1 .skills > ul > li');
            var $progressbar = $('#section1 .skills .progress-bar');
            

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
                },
                click:function(){
                    $intro.addClass('addAni');
                    $introBoxH1.hide(0);
                    $introBoxP.hide(0);
                    $introBoxSpan.hide(0);
                    setTimeout(function(){
                        $introBox.hide(0);
                    }, 1500)
                }
            });

            $a.each(function(idx){
                $(this).on({
                    mouseenter:function(){
                        $a.removeClass('addAni');
                        $(this).addClass('addAni');
                        if (idx === 0) {
                            // $section1.css({background: 'url(./img/main2.jpg) no-repeat 50% 50%', backgroundSize: 'cover'});
                            $profile.removeClass('addAni');
                            $skills.removeClass('addAni');
                            $progressbar.removeClass('addAni');
                        } else if (idx === 1) {
                            // $section1.css({background: 'url(./img/main3.jpg) no-repeat 50% 50%', backgroundSize: 'cover'});
                            $profile.removeClass('addAni');
                            $skills.removeClass('addAni');
                            $progressbar.removeClass('addAni');
                        } else if (idx === 2) {
                            // $section1.css({background: 'url(./img/main1.jpg) no-repeat 50% 50%', backgroundSize: 'cover'});
                            $profile.addClass('addAni');
                            $skills.addClass('addAni');
                            setTimeout(function(){
                                $progressbar.addClass('addAni');
                            }, 2000)
                        } else if (idx === 3) {
                            // $section1.css({background: 'url(./img/main5.jpg) no-repeat 50% 50%', backgroundSize: 'cover'});
                            $profile.removeClass('addAni');
                            $skills.removeClass('addAni');
                            $progressbar.removeClass('addAni');
                        }
                    }
                });
            });

            $timeA.on({
                click:function(){
                    $timeA.removeClass('addClick')
                    $(this).addClass('addClick');
                }
            })


            
        },
        section2Fn:function(){
            var $winW  = $(window).width();
            var $winH  = $(window).height();
            var $section2 = $('#section2');
            var $p = $('#section2 .title > p');
            var $h2 = $('#section2 .title > h2');
            var $H3 = $('#section2 .title > h3');
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
                        $H3.addClass('addScroll');
                        $li.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() === $('#section1').offset().top){
                    t = 0;
                    $btnWrap.removeClass('addScroll');
                    $p.removeClass('addScroll');
                    $h2.removeClass('addScroll');
                    $H3.removeClass('addScroll');
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
            var $H3 = $('#section3 .title > h3');
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
                        $H3.addClass('addScroll');
                        $li.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() === $('#section2').offset().top){
                    t = 0;
                    $btnWrap.removeClass('addScroll');
                    $p.removeClass('addScroll');
                    $h2.removeClass('addScroll');
                    $H3.removeClass('addScroll');
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
            var $H3 = $('#section4 .title > h3');
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
                        $H3.addClass('addScroll');
                        $li.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() === $('#section3').offset().top){
                    t = 0;
                    $btnWrap.removeClass('addScroll');
                    $p.removeClass('addScroll');
                    $h2.removeClass('addScroll');
                    $H3.removeClass('addScroll');
                    $li.removeClass('addScroll');
                }
            });

        },
        section5Fn:function(){
            var $winW  = $(window).width();
            var $winH  = $(window).height();
            var $section5 = $('#section5');
            var $p = $('#section5 .title > p');
            var $h2 = $('#section5 .title > h2');
            var $H3 = $('#section5 .title > h3');
            var $li = $('#section5 .title > ul > li');
            var $btnWrap = $('#section5 .title .btn-wrap');
            var t = 0;

            function resizeFn(){
                $winW = $(window).width();
                $winH  = $(window).height();

                $section5.css({width:$winW,height:$winH})
            }

            $(window).resize(function(){
                resizeFn();
            });
            setTimeout(resizeFn, 100);

            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section5').offset().top){
                    if(t === 0){
                        t = 1;
                        $btnWrap.addClass('addScroll');
                        $p.addClass('addScroll');
                        $h2.addClass('addScroll');
                        $H3.addClass('addScroll');
                        $li.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() === $('#section4').offset().top){
                    t = 0;
                    $btnWrap.removeClass('addScroll');
                    $p.removeClass('addScroll');
                    $h2.removeClass('addScroll');
                    $H3.removeClass('addScroll');
                    $li.removeClass('addScroll');
                }
            });

        },
        wheelEventFn:function(){
            var $main = $('#main');
            var $section = $('.section');
            var wheelDelta = 0;
            var cnt = 0;
            var $a = $('#section1 .link-wrap > span > a');

            var $goTopBtn = $('.gotop-btn');

            $goTopBtn.on({
                click:function(event){
                    event.preventDefault();
                    cnt=0;
                    var url = $(this).attr('href');
                    $('html,body').stop().animate({scrollTop:$(url).offset().top}, 800);
                }
            });

            $a.each(function(idx){
                $(this).on({
                    click:function(event){
                        event.preventDefault();
                        if (idx === 0) {
                            cnt=0;
                        } else if (idx === 1) {
                            cnt=0;
                        } else if (idx === 3) {
                            cnt=1;
                        }
                        var url = $(this).attr('href');
                        $('html,body').stop().animate({scrollTop:$(url).offset().top}, 800);
                    }
                });
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
                        if (cnt>=4) {
                            cnt=4;
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