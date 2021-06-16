(function ($) {

    var profile = {
        init: function () {
            this.section1Fn();
            this.section2Fn();
            this.section3Fn();
            this.wheelEventFn();
        },
        section1Fn: function () {
            var $winW = $(window).width();
            var $winH = $(window).height();
            var $section1 = $('#section1');
            var $modal = $('#modal');
            var $introBox = $('#section1 .intro-box');
            var $introBoxH1 = $('#section1 .intro-box > h1');
            var $introBoxP = $('#section1 .intro-box > p');
            var $introBoxSpan = $('#section1 .intro-box > span');
            var $intro = $('#section1 .intro');
            var $cube = $('#wrap .cube');
            var $cubeTopSpan = $('#wrap .cube .top > span');
            var $weather = $('#section1 .weather');
            var $timeA = $('#section1 .weather .time li > a');
            var $middayImg = $('#section1 .weather .midday > img');
            var x = 0;
            var y = 0;
            var xPercent = 0.095; // event.client에 곱해질 %변수
            var yPercent = 0.2;
            var $a = $('#section1 .link-wrap > span > a');
            var $profile = $('#section1 .profile > ul > li');
            var $profileA = $('#section1 .profile > ul > li > a');
            var $skills = $('#section1 .skills > ul > li');
            var $skillsP = $('#section1 .skills > ul > li > p');
            var $progressbar = $('#section1 .skills .progress-bar');


            function resizeFn() {
                $winW = $(window).width();
                $winH = $(window).height();

                $section1.css({
                    width: $winW,
                    height: $winH
                });
            }
            $(window).resize(function () {
                resizeFn();
            });
            setTimeout(resizeFn, 100);

            $modal.on({
                click: function () {
                    $('html').removeClass('addModal');
                    $modal.hide(0);

                    $intro.addClass('addAni');
                    $introBoxH1.hide(0);
                    $introBoxP.hide(0);
                    $introBoxSpan.hide(0);
                    setTimeout(function () {
                        $introBox.hide(0);
                    }, 1500)
                }
            });

            $section1.on({
                mousemove: function (event) {
                    x = event.clientX * xPercent;
                    y = event.clientY * yPercent;
                    $cube.css({
                        transform: 'perspective(600px) rotateX(' + (y - 90) + 'deg) rotateY(' + (x - 90) + 'deg) scale3d(1,1,1)'
                    });

                    $middayImg.eq(2).css({
                        transform: 'translateX(' + event.clientX + 'px) translateY(' + event.clientY + 'px) rotate(-60deg)'
                    })
                },
                // click:function(){
                //     $intro.addClass('addAni');
                //     $introBoxH1.hide(0);
                //     $introBoxP.hide(0);
                //     $introBoxSpan.hide(0);
                //     setTimeout(function(){
                //         $introBox.hide(0);
                //     }, 1500)
                // }
            });

            $a.each(function (idx) {
                $(this).on({
                    mouseenter: function () {
                        $a.removeClass('addAni');
                        $(this).addClass('addAni');
                        if (idx === 0) {
                            $profile.removeClass('addAni');
                            $skills.removeClass('addAni');
                            $progressbar.removeClass('addAni');
                        } else if (idx === 1) {
                            $profile.removeClass('addAni');
                            $skills.removeClass('addAni');
                            $progressbar.removeClass('addAni');
                        } else if (idx === 2) {
                            $profile.addClass('addAni');
                            $skills.addClass('addAni');
                            setTimeout(function () {
                                $progressbar.addClass('addAni');
                            }, 2000)
                        } else if (idx === 3) {
                            $profile.removeClass('addAni');
                            $skills.removeClass('addAni');
                            $progressbar.removeClass('addAni');
                        }
                    },
                    click: function () {
                        if (idx === 0) {
                            $cubeTopSpan.toggleClass('addClick');
                        }
                    }
                });
            });

            $timeA.each(function (idx) {
                $(this).on({
                    click: function () {
                        $timeA.removeClass('addClick')
                        $(this).addClass('addClick');
                        if (idx === 0) {
                            $section1.removeClass('addClick');
                            $timeA.removeClass('addColor');
                            $weather.removeClass('addClick');
                            $profile.removeClass('addColor');
                            $skillsP.removeClass('addColor');
                            $profileA.removeClass('addColor');
                            $a.removeClass('addColor');
                        } else if (idx === 1) {
                            $section1.addClass('addClick');
                            $timeA.addClass('addColor');
                            $weather.addClass('addClick');
                            $profile.addClass('addColor');
                            $skillsP.addClass('addColor');
                            $profileA.addClass('addColor');
                            $a.addClass('addColor');
                        }
                    }
                });
            });

            // timer
            var today = null;
            var hour = null;
            var minute = null;
            var second = null;
            var txt = '';

            function timerFn() {
                today = new Date();
                hour = today.getHours();
                if (hour < 10) {
                    hour = '0' + hour;
                } else {
                    hour = hour;
                }

                minute = today.getMinutes();
                if (minute < 10) {
                    minute = '0' + minute;
                } else {
                    minute = minute;
                }

                second = today.getSeconds();
                if (second < 10) {
                    second = '0' + second;
                } else {
                    second = second;
                }

                txt = hour + ' : ' + minute + ' : ' + second + '';
                $a.eq(0).html(txt);
            }
            setInterval(function () {
                timerFn();
            }, 1000);


        },
        section2Fn: function () {
            var $winW = $(window).width();
            var $winH = $(window).height();
            var $section2 = $('#section2');
            var $p = $('#section2 .title p');
            var $h2 = $('#section2 .title h2');
            var $H3 = $('#section2 .title h3');
            var $li = $('#section2 .title ul > li');
            var $btnWrap = $('#section2 .title .btn-wrap');
            var t = 0;

            function resizeFn() {
                $winW = $(window).width();
                $winH = $(window).height();

                $section2.css({
                    width: $winW,
                    height: $winH
                })
            }

            $(window).resize(function () {
                resizeFn();
            });
            setTimeout(resizeFn, 100);

            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section2').offset().top) {
                    if (t === 0) {
                        t = 1;
                        $btnWrap.addClass('addScroll');
                        $p.addClass('addScroll');
                        $h2.addClass('addScroll');
                        $H3.addClass('addScroll');
                        $li.addClass('addScroll');
                    }
                }
                if ($(window).scrollTop() === $('#section1').offset().top) {
                    t = 0;
                    $btnWrap.removeClass('addScroll');
                    $p.removeClass('addScroll');
                    $h2.removeClass('addScroll');
                    $H3.removeClass('addScroll');
                    $li.removeClass('addScroll');
                }
            });

        },
        section3Fn: function () {
            var $winW = $(window).width();
            var $winH = $(window).height();
            var $section3 = $('#section3');
            var $fireworkI = $('.firework i');
            var $firework = $('.firework i > span');
            var $ignite = $('.firework span > i');
            var t = 0;


            function resizeFn() {
                $winW = $(window).width();
                $winH = $(window).height();

                $section3.css({
                    width: $winW,
                    height: $winH
                })
            }

            $(window).resize(function () {
                resizeFn();
            });
            setTimeout(resizeFn, 100);


            $section3.on({
                click: function () {
                    if (t === 0) {
                        t = 1;
                        $ignite.addClass('addAni');
                        setTimeout(function () {
                            $fireworkI.addClass('addAni');
                        }, 4500);
                        setTimeout(function () {
                            $firework.addClass('addAni');
                        }, 5000)

                        setTimeout(function () {
                            $ignite.removeClass('addAni');
                            $fireworkI.removeClass('addAni');
                            $firework.removeClass('addAni');
                            t = 0;
                        }, 21000)
                    }
                }
            });



        },
        wheelEventFn: function () {
            var $main = $('#main');
            var $section = $('.section');
            var wheelDelta = 0;
            var cnt = 0;
            var $a = $('#section1 .link-wrap > span > a');

            var $goTopBtn = $('.gotop-btn');

            $goTopBtn.on({
                click: function (event) {
                    event.preventDefault();
                    cnt = 0;
                    var url = $(this).attr('href');
                    $('html,body').stop().animate({
                        scrollTop: $(url).offset().top
                    }, 800);
                }
            });

            $a.each(function (idx) {
                $(this).on({
                    click: function (event) {
                        event.preventDefault();
                        if (idx === 0) {
                            cnt = 0;
                        } else if (idx === 1) {
                            cnt = 2;
                        } else if (idx === 3) {
                            cnt = 1;
                        }
                        var url = $(this).attr('href');
                        $('html,body').stop().animate({
                            scrollTop: $(url).offset().top
                        }, 800);
                    }
                });
            });


            $main.on('mousewheel DOMMouseScroll', function (event) {
                event.preventDefault();

                if (event.originalEvent.wheelDelta) {
                    wheelDelta = event.originalEvent.wheelDelta;
                } else { // 파이어폭스
                    wheelDelta = event.detail * -1
                }

                if (!$('html,body').is(':animated')) {
                    if (wheelDelta < 0) {
                        cnt++;
                        if (cnt >= 2) {
                            cnt = 2;
                            $('html,body').stop().animate({
                                scrollTop: $section.eq(cnt).offset().top
                            }, 800, 'swing');
                        } else {
                            $('html,body').stop().animate({
                                scrollTop: $section.eq(cnt).offset().top
                            }, 800, 'swing');
                        }
                    } else {
                        cnt--;
                        if (cnt < 0) {
                            cnt = 0;
                        }
                        $('html,body').stop().animate({
                            scrollTop: $section.eq(cnt).offset().top
                        }, 800, 'swing');
                    }
                }
            });
        }

    }

    profile.init();

})(jQuery);