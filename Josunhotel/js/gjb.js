// GJB = GrandJosunBusan
;(function($){

    var gjb = {
        init:function(){
            var taht = this;
            
            taht.scrollEventFn();
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
            taht.offersFn();
            taht.wheelEventFn();
        },

        scrollEventFn:function(){
            var $win = $(window);
            var scrollOld = 0;
            var scrollNew = 0;
            var result = null;
            var $header = $('#header')
            var $nav = $('#header #nav');
            var $logo = $('#header #logo .logo-wrap');
            var $mobileBtn = $('#header .mobile-btn');
            var $bar = $('#header .bar');

            var t = 0;
            var $footer = $('#footer');
            var $section7 = $('#section7');


            $header.addClass('addShow');    //  새로고침시 최상단의 헤더바가 다시나타나도록

            function scrollEventFn(){
                scrollNew = $win.scrollTop();
                var scroll = function(){
                    if( scrollOld - scrollNew > 0 ){ result = 'Up'; }
                    else{ result = 'Down'; }
                    // result = scrollOld-scrollNew > 0 ? 'Up' : 'Down';
                }
                scroll();
                // console.log(result);
                
                if( scrollNew <= 0 ){   // 스크롤탑 0일때
                    $header.removeClass('addHide');
                    $nav.removeClass('mouseon');
                    $logo.removeClass('addBlack');
                    // $bar.addClass('addWhite');
                    $bar.removeClass('addBlack');
                    // $nav.removeClass('addLine');
                }
                else{
                    if(result === 'Up'){    // 스크롤 올릴때
                        $header.removeClass('');
                        $header.addClass('');
                        $nav.addClass('mouseon');
                        $logo.addClass('addBlack');
                        $footer.removeClass('addView');
                        t = 0;
                    }
                    if( result === 'Down' ){    // 스크롤 내릴때
                        $header.addClass('addHide');
                        $header.removeClass('addShow');
                        $nav.addClass('mouseon');
                        $logo.addClass('addBlack');
                        $bar.addClass('addBlack');
                        // $nav.addClass('addLine');
                    }
                }
                scrollOld = scrollNew;
            }

            
            // console.log( '스크롤탑이 섹션7오프셋탑이랑 크거나같다',$(window).scrollTop() >= $('#section7').offset().top );
            // console.log( '스크롤탑',$(window).scrollTop() );
            // console.log( '섹션7 오프셋탑',$('#section7').offset().top );
            // console.log( '푸터 오프셋탑',$('#footer').offset().top );

            // console.log($('#section7').offset().top);

            // $win.scroll(function(){
            //     if ( $(window).scrollTop() >= $('#section7').offset().top+1 ) {
            //         $footer.addClass('addView');
            //     }
            // })


            $win.scroll(function(){
                if ( $(window).scrollTop() >= $('#section7').offset().top+1 ) {
                    if ( t === 0 ) {
                        t = 1;
                        $footer.addClass('addView');
                    }
                }
                if ( $(window).scrollTop() <= $('#section7').offset().top ) {
                    if ( t === 0 ) {
                        t = 0;
                        $footer.removeClass('addView');
                    }
                }
            })
            

            $win.scroll(function(){
                scrollEventFn();
            });


        },
        headerFn:function(){
            var $nav = $('#header #nav');
            var $logo = $('#header #logo .logo-wrap');
            var $gnbWrap = $('#header #nav .gnb-wrap');
            var $gnbBtn = $('#header #nav .gnb-wrap .gnb-btn');
            var $lnbWrap = $('#header #nav .gnb-wrap .lnb-wrap');

            var $main = $('#main');

            var $langKR = $('#header .lang-KR');
            var $langEN = $('#header .lang-EN');

            var $mobileBtn = $('#header .mobile-btn');
            var $bar = $('#header .bar');

            var $sideBtnBox = $('#header .side-btn-box');
            var $sideBtn = $('#header .side-btn-box .side-btn')
            var $sideWrap = $('#header .side-btn-box .side-btn .side-wrap');


            // gnb에 마우스오버시 lnb보이게
            // lnb영역으로 마우스들어가도 영역이 닫히지않도록
            // gnb버튼에서 다른 gnb버튼으로 마우스 이동시 기존 lnb는 닫고 새로운 lnb가 보이게
            // gnb에 마우스오버시 nav 배경 흰색+lnb슬라이드다운
            // 배경이 흰색이면 글자색은 검정으로, 배경이 투명이면 글자색은 흰색으로
            // 네비에 마우스 오버시 로고 검정, 네비가 닫힐시 흰색으로
            // addLine를 넣어서 메인버튼하단부에 선을 그어서 영역나눔을 하는것에 대한 고민중.
            

            $nav.on({
                mouseleave:function(){
                    $nav.removeClass('mouseon');
                    $lnbWrap.stop().slideUp(0);
                    $logo.removeClass('addBlack');
                    $main.css({filter:'brightness(100%)'})
                    // $nav.removeClass('addLine');
                }
            });
            $gnbWrap.on({
                mouseenter:function(){
                    $nav.addClass('mouseon');
                    $logo.addClass('addBlack');
                    $main.css({filter:'brightness(30%)'})
                }
            });
            
            $gnbBtn.on({
                mouseenter:function(){
                    $nav.addClass('mouseon');
                    $lnbWrap.stop().slideUp(100);
                    $(this).next().stop().slideDown(300);
                    $sideBtnBox.hide();
                }
            });
            $gnbWrap.on({
                mouseleave:function(){
                    $logo.removeClass('addBlack');
                    $lnbWrap.stop().slideUp(100);
                    $sideBtnBox.show();
                }
            });

            $langKR.on({
                click:function(){
                    $langEN.toggle();
                }
            });

            $sideBtn.on({
                mouseenter:function(){
                    $sideWrap.stop().slideDown(200);
                },
                mouseleave:function(){
                    $sideWrap.stop().slideUp(200);
                }
            });

            $mobileBtn.on({
                click:function(){
                    $bar.toggleClass('addMobile');
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
            setTimeout(resizeFn, 10);

            $window.resize(function(){
                setTimeout(resizeFn, 10);
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
                        $startBtn.removeClass('addClick');
                        $stopBtn.removeClass('addClick');
                    }
                }
            });
            $nextBtn.on({
                click:function(){
                    bgSlideTimerFn();
                    if (!$mainBgSlideWrap.is(':animated')) {
                        bgNextCountFn();
                        $startBtn.removeClass('addClick');
                        $stopBtn.removeClass('addClick');
                    }
                }
            });

            $mainBgSlideView.swipe({
                swipeLeft:function(){
                    bgSlideTimerFn();
                    if (!$mainBgSlideWrap.is(':animated')) {
                        bgNextCountFn();
                        $startBtn.removeClass('addClick');
                        $stopBtn.removeClass('addClick');
                    }
                },
                swipeRight:function(){
                    bgSlideTimerFn();
                    if (!$mainBgSlideWrap.is(':animated')) {
                        bgPrevCountFn();
                        $startBtn.removeClass('addClick');
                        $stopBtn.removeClass('addClick');
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
                    $stopBtn.addClass('addClick');
                    $startBtn.addClass('addClick');
                    clearInterval(setId);
                    clearInterval(setId2);
                }
            });
            $startBtn.on({
                click:function(){
                    $startBtn.removeClass('addClick');
                    $stopBtn.removeClass('addClick');
                    bgSlideTimerFn();
                }
            });
            

        },

        section2Fn:function(){
            var $section2SlideView = $('#section2 .slide-view');
            var $section2SlideWrap = $('#section2 .slide-wrap');
            var $section2Slide = $('#section2 .slide');
            var $s2SlideCnt = 0;
            var $prevBtn = $('#section2 .prev-btn');
            var $nextBtn = $('#section2 .next-btn');
            var $s2StopBtn = $('#section2 .stop-btn');
            var $s2startBtn = $('#section2 .start-btn');

            var $roomWhiteBtn = $('#section2 .room-whitebtn');
            var $roomBlackBtn = $('#section2 .room-blackbtn');

            var $window = $(window);
            var $winW = $(window).width;
            var $winH = $(window).height;
            var $section2 = $('#section2');
            var $slideW = $('#section2 .slide').innerWidth();

            var setId = null;
            var setId2 = null;
            var timercnt = 0;

            function resizeFn(){
                $winW = $(window).width();
                $winH = $(window).height();
                $section2.css({width:$winW,height:$winH});
            }
            resizeFn();

            $window.resize(function(){
                resizeFn();
                s2SlideReponseFn();
            });

            function s2SlideReponseFn(){
                $slideW = $('#section2 .slide').innerWidth();
                section2SlideFn();
            }
            s2SlideReponseFn();
            setTimeout(s2SlideReponseFn, 100);

            function section2SlideFn(){
                $section2SlideWrap.stop().animate({left:-$slideW*$s2SlideCnt}, 300, 'easeOutCubic', function(){
                    if ( $s2SlideCnt > 4 ) { $s2SlideCnt = 0; }
                    if ( $s2SlideCnt < 0 ) { $s2SlideCnt = 4; }
                    $section2SlideWrap.stop().animate({left:-$slideW*$s2SlideCnt}, 0)
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
            $prevBtn.on({
                click:function(){
                    section2SlideTimerFn();
                    if (!$section2SlideWrap.is(':animated')) {
                        section2PrevCountFn();
                        $s2startBtn.removeClass('addClick');
                        $s2StopBtn.removeClass('addClick');
                    }
                }
            });

            $nextBtn.on({
                click:function(){
                    section2SlideTimerFn();
                    if (!$section2SlideWrap.is(':animated')) {
                        section2NextCountFn();
                        $s2startBtn.removeClass('addClick');
                        $s2StopBtn.removeClass('addClick');
                    }
                }
            });

            $s2StopBtn.on({
                click:function(){
                    $s2StopBtn.addClass('addClick');
                    $s2startBtn.addClass('addClick');
                    clearInterval(setId);
                    clearInterval(setId2);
                }
            });
            $s2startBtn.on({
                click:function(){
                    $s2startBtn.removeClass('addClick');
                    $s2StopBtn.removeClass('addClick');
                    section2SlideTimerFn();
                }
            });


            $section2SlideView.swipe({
                swipeLeft:function(){
                    section2SlideTimerFn();
                    if (!$section2SlideWrap.is(':animated')) {
                        section2NextCountFn();
                        $s2startBtn.removeClass('addClick');
                        $s2StopBtn.removeClass('addClick');
                    }
                },
                swipeRight:function(){
                    section2SlideTimerFn();
                    if (!$section2SlideWrap.is(':animated')) {
                        section2PrevCountFn();
                        $s2startBtn.removeClass('addClick');
                        $s2StopBtn.removeClass('addClick');
                    }
                }
            });            

            function section2SlideAutoPlayFn(){
                setId = setInterval(section2NextCountFn, 4000)
            }
            section2SlideAutoPlayFn();

            function section2SlideTimerFn(){
                timercnt = 0;
                clearInterval(setId);
                clearInterval(setId2);
                setId2 = setInterval(function(){
                    timercnt++;
                    // console.log(timercnt);
                    if (timercnt >= 4) {
                        clearInterval(setId2);
                        section2NextCountFn();
                        section2SlideAutoPlayFn();
                    }
                }, 1000);
            }

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
            var $dinningWhiteBtn = $('#section3 .dinning-whitebtn');
            var $dinningBlackBtn = $('#section3 .dinning-blackbtn');

            var $window = $(window);
            var $winW = $(window).width;
            var $winH = $(window).height;
            var $section3 = $('#section3');

            function resizeFn(){
                $winW = $(window).width();
                $winH = $(window).height();
                $section3.css({width:$winW,height:$winH});
            }
            resizeFn();
            $window.resize(function(){
                resizeFn();
            });

            $dinningWhiteBtn.on({
                mouseenter:function(){
                    $dinningBlackBtn.addClass('mouseon');
                }
            });
            $dinningBlackBtn.on({
                mouseleave:function(){
                    $dinningBlackBtn.removeClass('mouseon');
                }
            });

        },

        section4Fn:function(){
            var $slide0 = $('#section4 .slide0');
            var $slide1 = $('#section4 .slide1');
            var $slide2 = $('#section4 .slide2');

            var $facilityWhiteBtn = $('#section4 .facility-whitebtn');
            var $facilityBlackBtn = $('#section4 .facility-blackbtn');

            var $window = $(window);
            var $winW = $(window).width;
            var $winH = $(window).height;
            var $section4 = $('#section4');

            function resizeFn(){
                $winW = $(window).width();
                $winH = $(window).height();
                $section4.css({width:$winW,height:$winH});
            }
            resizeFn();
            $window.resize(function(){
                resizeFn();
            });

            $facilityWhiteBtn.on({
                mouseenter:function(){
                    $facilityBlackBtn.addClass('mouseon');
                }
            });
            $facilityBlackBtn.on({
                mouseleave:function(){
                    $facilityBlackBtn.removeClass('mouseon');
                }
            });

            $slide0.on({
                mouseenter:function(){
                    $slide0.addClass('mouseon');
                    $slide1.removeClass('mouseon');
                    $slide2.removeClass('mouseon');
                }
            });

            $slide1.on({
                mouseenter:function(){
                    $slide1.addClass('mouseon');
                    $slide0.removeClass('mouseon');
                    $slide2.removeClass('mouseon');
                }
            });

            $slide2.on({
                mouseenter:function(){
                    $slide2.addClass('mouseon');
                    $slide0.removeClass('mouseon');
                    $slide1.removeClass('mouseon');
                }
            });


        },

        section5Fn:function(){
            var $activityCleanbtn = $('#section5 .activity-cleanbtn');
            var $activityWhiteBtn = $('#section5 .activity-whitebtn');

            var $window = $(window);
            var $winW = $(window).width;
            var $winH = $(window).height;
            var $section5 = $('#section5');

            function resizeFn(){
                $winW = $(window).width();
                $winH = $(window).height();
                $section5.css({width:$winW,height:$winH});
            }
            resizeFn();
            $window.resize(function(){
                resizeFn();
            });

            $activityCleanbtn.on({
                mouseenter:function(){
                    $activityWhiteBtn.addClass('mouseon');
                }
            });
            $activityWhiteBtn.on({
                mouseleave:function(){
                    $activityWhiteBtn.removeClass('mouseon');
                }
            });
        },

        section6Fn:function(){
            var $window = $(window);
            var $winW = $(window).width;
            var $winH = $(window).height;
            var $section6 = $('#section6');

            function resizeFn(){
                $winW = $(window).width();
                $winH = $(window).height();
                $section6.css({width:$winW,height:$winH});
            }
            resizeFn();
            $window.resize(function(){
                resizeFn();
            });

        },

        section7Fn:function(){
            var $window = $(window);
            var $winW = $(window).width;
            var $winH = $(window).height;
            var $section7 = $('#section7');

            function resizeFn(){
                $winW = $(window).width();
                $winH = $(window).height();
                $section7.css({width:$winW,height:$winH});
            }
            resizeFn();
            $window.resize(function(){
                resizeFn();
            });
        },

        indicatorFn:function(){

        },

        footerFn:function(){
            var $familysiteBtn = $('#footer .familysite-btn');
            var $familyList = $('#footer .family-list');
            var $familysiteBtnI = $('#footer .familysite-btn i');


            $familysiteBtn.on({
                click:function(){
                    $familyList.toggleClass('addView');
                    $familysiteBtnI.toggleClass('addView');
                }
            });

        },

        offersFn:function(){
            var $sideBtn = $('#header .side-btn');
            var $offers = $('#offers');
            var $closeOffersWrap = $('#offers .close-offers-wrap');
            var $closeBtn = $('#offers .close-btn');
            var $offersBlind = $('.offers-blind');
            var $packagePrevBtn = $('#offers .package-prev-btn');
            var $packageNextBtn = $('#offers .package-next-btn');
            var $offerSlideWrap = $('#offers .slide-wrap');
            var $offerSlideView = $('#offers .slide-view');
            var offerCnt = 0;

            $sideBtn.on({
                click:function(){
                    $offers.animate({right:0},700, 'easeInOutQuad')
                    $closeOffersWrap.show(500);
                    $offersBlind.show(0);
                }
            });
            $closeBtn.on({
                click:function(){
                    $offers.animate({right:-1340},700, 'easeInOutQuad')
                    $closeOffersWrap.hide();
                    $offersBlind.hide();
                }
            });
            $closeOffersWrap.on({
                click:function(){
                    $offers.animate({right:-1340},700, 'easeInOutQuad')
                    $closeOffersWrap.hide();
                    $offersBlind.hide();
                }
            });
            $offersBlind.on({
                click:function(){
                    $offers.animate({right:-1340},700, 'easeInOutQuad')
                    $closeOffersWrap.hide();
                    $offersBlind.hide();
                }
            });

            function offerSlideFn(){
                $offerSlideWrap.stop().animate({left:-680*offerCnt}, 500, 'easeOutCubic',function(){
                    if ( offerCnt > 2 ) { offerCnt = 0; }
                    if ( offerCnt < 0 ) { offerCnt = 2; }
                    $offerSlideWrap.stop().animate({left:-680*offerCnt}, 0)
                })
            }
            function offerSlidePrevCountFn(){
                offerCnt --;
                offerSlideFn();
            }
            function offerSlideNextCountFn(){
                offerCnt ++;
                offerSlideFn();
            }

            $packagePrevBtn.on({
                click:function(){
                    if(!$offerSlideWrap.is(':animated')){
                        offerSlidePrevCountFn();
                    }
                }
            });
            $packageNextBtn.on({
                click:function(){
                    if(!$offerSlideWrap.is(':animated')){
                        offerSlideNextCountFn();
                    }
                }
            });

        },

        wheelEventFn:function(){
            var $main = $('#main');
            var moveCnt = null;
            var moveIndex = 0;
            var moveCntTop = 0;
            var time = false;

            // 버벅거리면서 잘안됨ㅠㅠ
            // https://codepen.io/recordboy/pen/JBmvpp 휠이벤트 참고

            function readyWheelFn(){
                $main.on('mousewheel', function(e){
                    if( time === false ){
                        wheel(e);
                    }
                });
            }
            readyWheelFn();
            
            var wheel = function(e){
                if( e.originalEvent.wheelDelta < 0 ){
                    if( moveIndex < 6 ){
                        moveIndex += 1;
                        moving(moveIndex);
                    };
                }
                else{
                    if( moveIndex > 0 ){
                        moveIndex -= 1;
                        moving(moveIndex);
                    };
                };
            };

            var moving = function(index){
                time = true;
                moveCnt = $main.children('section').eq(index);
                moveCntTop = moveCnt.offset().top;
                // console.log(moveCnt.offset().top);
                $('html, body').stop().animate({scrollTop:moveCntTop}, 1200, function(){
                    time = false;
                });
            };

        }
    }

    gjb.init();

})(jQuery);