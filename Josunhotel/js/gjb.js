// GJB = GrandJosunBusan
;(function($){

    var gjb = {
        init:function(){
            var taht = this;

            taht.headerFn();
            taht.section1Fn();
            taht.section2Fn();
            taht.section3Fn();
            taht.section4Fn();
            taht.section5Fn();
            taht.section6Fn();
            taht.section7Fn();
            taht.indicatorFn();
            taht.footerFn();
        },

        headerFn:function(){
            var $nav = $('#header #nav');
            var $logo = $('#header #logo h1 a');
            var $gnbWrap = $('#header #nav .gnb-wrap');
            var $gnbBtn = $('#header #nav .gnb-wrap .gnb-btn');
            var $lnbWrap = $('#header #nav .gnb-wrap .lnb-wrap');

            var $main = $('#main');

            var $langKR = $('#header .lang-KR');
            var $langEN = $('#header .lang-EN');

            var $sideBtn = $('#header .side-btn-box .side-btn')
            var $sideBtnText = $('#header .side-btn-box .side-btn .side-btn-text');


            // gnb에 마우스오버시 lnb보이게
            // lnb영역으로 마우스들어가도 영역이 닫히지않도록
            // gnb버튼에서 다른 gnb버튼으로 마우스 이동시 기존 lnb는 닫고 새로운 lnb가 보이게
            // gnb에 마우스오버시 nav 배경 흰색+lnb슬라이드다운
            // 배경이 흰색이면 글자색은 검정으로, 배경이 투명이면 글자색은 흰색으로

            $nav.on({
                mouseleave:function(){
                    $nav.removeClass('mouseon');
                    $lnbWrap.stop().slideUp(0);
                    $logo.css({color:'#fff'});
                    $main.css({filter:'brightness(100%)'})
                }
            });
            $gnbWrap.on({
                mouseenter:function(){
                    $nav.addClass('mouseon');
                    $logo.css({color:'#000'});
                    $main.css({filter:'brightness(30%)'})
                }
            });
            
            $gnbBtn.on({
                mouseenter:function(){
                    $nav.addClass('mouseon');
                    $lnbWrap.stop().slideUp(100);
                    $(this).next().stop().slideDown(300);
                }
            });
            $gnbWrap.on({
                mouseleave:function(){
                    $lnbWrap.stop().slideUp(100);
                }
            });

            $langKR.on({
                click:function(){
                    $langEN.toggle();
                }
            });

            $sideBtn.on({
                mouseenter:function(){
                    $sideBtnText.stop().slideDown(200);
                },
                mouseleave:function(){
                    $sideBtnText.stop().slideUp(200);
                }
            });

        },

        section1Fn:function(){
            var $window = $(window);
            var $winW = $(window).width;
            var $winH = $(window).height;
            var $mainBgSlide = $('#section1 .mainBg-slide');
            var $mainBgSlideWrap = $('#section1 .mainBg-slide-wrap');
            var $mainBgSlideView = $('#section1 .mainBg-slide-view');
            var $prevBtn = $('#section1 .prev-btn');
            var $nextBtn = $('#section1 .next-btn');
            var $startBtn = $('#section1 .start-btn');
            var $stopBtn = $('#section1 .stop-btn');
            var $mainBgBtnWrap = $('#section1 .mainBg-Btn-wrap');
            var slideCnt = 0;
            var setId = null;
            var setId2 = null;
            var timercnt = 0;
            

            function resizeFn(){
                $winW = $(window).width();
                $winH = $(window).height();
                $mainBgSlide.css({width:$winW,height:$winH});
            }
            resizeFn();

            $window.resize(function(){
                resizeFn();
            });

            // Background slide event
            function bgSlideFn(){
                $mainBgSlideWrap.stop().animate({left:-$winW*slideCnt}, 500, 'easeOutCubic',function(){
                    if ( slideCnt > 2 ) { slideCnt = 0; }
                    if ( slideCnt < 0 ) { slideCnt = 2; }
                    $mainBgSlideWrap.stop().animate({left:-$winW*slideCnt}, 0)
                })
            }

            function bgPrevCountFn(){
                slideCnt--;
                bgSlideFn();
            }
            function bgNextCountFn(){
                slideCnt++;
                bgSlideFn();
            }

            $prevBtn.on({
                click:function(){
                    bgSlideTimerFn();
                    if (!$mainBgSlideWrap.is(':animated')) {
                        bgPrevCountFn();
                    }
                }
            });
            $nextBtn.on({
                click:function(){
                    bgSlideTimerFn();
                    if (!$mainBgSlideWrap.is(':animated')) {
                        bgNextCountFn();
                    }
                }
            });

            $mainBgSlideView.swipe({
                swipeLeft:function(){
                    bgSlideTimerFn();
                    if (!$mainBgSlideWrap.is(':animated')) {
                        bgNextCountFn();
                    }
                },
                swipeRight:function(){
                    bgSlideTimerFn();
                    if (!$mainBgSlideWrap.is(':animated')) {
                        bgPrevCountFn();
                    }
                }
            });

            function bgSlideAutoPlayFn(){
                setId = setInterval(bgNextCountFn, 4000);
            }
            bgSlideAutoPlayFn();

            function bgSlideTimerFn(){
                timercnt = 0;
                clearInterval(setId);
                clearInterval(setId2);
                setId2 = setInterval(function(){
                    timercnt++;
                    if (timercnt >= 4) {
                        clearInterval(setId2);
                        bgNextCountFn();
                        bgSlideAutoPlayFn();
                    }
                }, 1000);
            }
            // stop 버튼클릭시 stopBtn에 클래스 부여 display:none;
            // stop 버튼클릭시 startBtn에 클래스 부여 display:inline-block;
            // start 버튼클릭시 startBtn에 클래스 제거 display:none;
            // start 버튼클릭시 stopBtn에 클래스 제거 display:inline-block;
            $stopBtn.on({
                click:function(){
                    $stopBtn.addClass('mouseon');
                    $startBtn.addClass('mouseon');
                }
            });
            $startBtn.on({
                click:function(){
                    $startBtn.removeClass('mouseon');
                    $stopBtn.removeClass('mouseon');
                }
            });
            

        },

        section2Fn:function(){
            var $section2SlideView = $('#section2 .slide-view');
            var $section2SlideWrap = $('#section2 .slide-wrap');
            var $section2Slide = $('#section2 .slide');
            var $s2SlideCnt = 0;

            var $roomWhiteBtn = $('#section2 .room-whitebtn');
            var $roomBlackBtn = $('#section2 .room-blackbtn');

            function section2SlideFn(){
                $section2SlideWrap.stop().animate({left:-1050*$s2SlideCnt}, 300, 'easeOutCubic', function(){
                    if ( $s2SlideCnt > 4 ) { $s2SlideCnt = 0; }
                    if ( $s2SlideCnt < 0 ) { $s2SlideCnt = 4; }
                    $section2SlideWrap.stop().animate({left:-1050*$s2SlideCnt}, 0)
                })
            }

            function section2PrevCountFn(){
                $s2SlideCnt--;
                section2SlideFn();
            }

            function section2NextCountFn(){
                $s2SlideCnt++;
                section2SlideFn();
            }

            $section2SlideView.swipe({
                swipeLeft:function(){
                    if (!$section2SlideWrap.is(':animated')) {
                        section2NextCountFn();
                    }
                },
                swipeRight:function(){
                    if (!$section2SlideWrap.is(':animated')) {
                        section2PrevCountFn();
                    }
                }
            });            

            function section2SlideAutoPlayFn(){
                setInterval(section2NextCountFn, 4000)
            }
            section2SlideAutoPlayFn();

            $roomWhiteBtn.on({
                mouseenter:function(){
                    $roomBlackBtn.addClass('mouseon');
                }
            });
            $roomBlackBtn.on({
                mouseleave:function(){
                    $roomBlackBtn.removeClass('mouseon');
                }
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

        section7Fn:function(){

        },

        indicatorFn:function(){

        },

        footerFn:function(){

        }
    }

    gjb.init();

})(jQuery);