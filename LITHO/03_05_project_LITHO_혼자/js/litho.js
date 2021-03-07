;(function($){

    var litho = {
        init:function(){
            this.headerFn();
            this.section1Fn();
            this.section2Fn();
            this.section3Fn();
            this.section4Fn();
            this.section5Fn();
            this.section6Fn();
            this.section7Fn();
            this.section8Fn();
            this.section9Fn();
            this.section10Fn();
            this.footerFn();
        },
        headerFn:function(){
            // 네비게이션
            // 메인버튼(메뉴)
            // 서브메뉴
            var $mainBtn = $('.main-btn');
            var $sub = $('.sub');
            var $navUlLi = $('#nav > ul > li')  // 마우스가 떠나면 sub를 숨겨지게끔 하기위한 영역설정(메인버튼과 서브메뉴들을 감싸주는 li)
           
            // 서브-서브
            // 서브메뉴버튼에 마우스오버시 서브-서브메뉴가 보이도록
            var $subBtn = $('.sub-btn')
            var $subSub = $('.sub-sub')
            
            // 서브서브서브
            var $subSubBtn = $('.sub-sub-btn')
            var $subSubSub = $('.sub-sub-sub')

            // 메뉴 보이기
            $mainBtn.on({
                mouseenter:function(){
                    $(this).stop().next().slideDown(300);
                }   
            });
           
            // 메뉴 숨기기
            $navUlLi.on({
                mouseleave:function(){
                    $sub.stop().hide(0);
                }
            });

            // 서브메뉴 보이기
            $subBtn.on({
                mouseenter:function(){
                    $subSub.stop().hide(0);
                    $(this).stop().next().slideDown(0);
                }
            });

            // 서브메뉴 숨기기
            $navUlLi.on({
                mouseleave:function(){
                    $subSub.stop().hide(0);
                }
            });

            // 서브서브 보이기
            $subSubBtn.on({
                mouseenter:function(){
                    $subSubSub.stop().hide(0);
                    $(this).stop().next().slideDown(0);
                }
            });

            //서브서브 숨기기
            $subSub.on({
                mouseleave:function(){
                    $subSubSub.stop().hide(0);
                }
            });

            // // 메인메뉴, 서브메뉴 객체와 배열
            // var lithoNav = {
            //     sub1:[
            //         {sub:["Corporate","Startup","Business","Corporate","Finance","Application","Consulting","Digital agency","SEO agency","Events & conference","Marketing agency"]},
            //         {sub:["Specialized","Restaurant","Architecture","Hotel & resort","Travel agency","Yoga & meditation","Gym & fitness","Spa salon","Cafe","Home decor","Interior design"]},
            //         {sub:["Portfolio","Design agency","Web agency","Creative agency","Freelancer","Branding agency","Photography","Personal portfolio","Vertical portfolio","Interactive portfolio","Split portfolio","Creative portfolio"]},
            //         {sub:["Other","Furniture shop","Fashion shop","Magazine","Lifestyle blog","Classic blog","Blog metro"]}
            //     ],
            //     sub2:[
            //         {sub:"About", subsub:["About me","About us","Our story","Who we are"]},
            //         {sub:"Services", subsub:["Our services","What we offer","Our process"]},
            //         {sub:"Contact", subsub:["Contact simple","Contact classic","Contact modern"]},
            //         {sub:"Additional pages", subsub:["Our team","Latest news","Pricing packages","Error 404","Maintenance","Coming soon","Coming soon - V2","FAQ's","Search result"]}
            //     ],
            //     sub3:[
            //         {sub:"Portfolio classic", subsub:["Classic 2 column","Classic 3 column","Classic 4 column","Classic masonry","Classic metro"]},
            //         {sub:"Portfolio boxed", subsub:["Boxed 2 column","Boxed 3 column","Boxed 4 column","Boxed masonry","Boxed metro"]},
            //         {sub:"Portfolio colorful", subsub:["Colorful 2 column","Colorful 3 column","Colorful 4 column","Colorful masonry","Colorful metro"]},
            //         {sub:"Portfolio bordered", subsub:["Bordered 2 column","Bordered 3 column","Bordered 4 column","Bordered masonry","Bordered metro"]},
            //         {sub:"Portfolio overlay", subsub:["Overlay 2 column","Overlay 3 column","Overlay 4 column","Overlay masonry","Overlay metro"]},
            //         {sub:"Portfolio switch image", subsub:["Switch image 2 column","Switch image 3 column","Switch image 4 column","Switch image masonry","Switch image metro"]},
            //         {sub:"Portfolio other", subsub:["Portfolio scattered","Justified gallery","Portfolio slider"]},
            //         {sub:"Single project page", subsub:["Single project page 01","Single project page 02","Single project page 03","Single project page 04","Single project page 05"]}
            //     ],
            //     sub4:[
            //         {sub:["General","Accordions","Buttons","Team","Team carousel","Clients","Client carousel","Subscribe","Call to action","Tab","Google map","Contact form","Image gallery"]},
            //         {sub:["Content & infographics","Progress bar","Icon with text","Over line icon box","Custom icon with text","Counters","Countdown","Pie charts","Fancy text box","Text box","Fancy text"]},
            //         {sub:["Interactive","Testimonials","Testimonials carousel","Video","Interactive banners","Services","Info banner","Rotate box","Process step","Instagram","Parallax scrolling","Text slider"]},
            //         {sub:["Text & containers","Heading","Drop caps","Columns","Blockquote","Highlights","Message box","Social icons","Lists","Separators","Pricing table"]}
            //     ],
            //     sub5:[
            //         {sub:"Header and menu",subsub:["Transparent header","White header","Dark header","Header with top bar","Header with push","Center navigation","Center logo","Top logo","One page navigation","Hamburger menu","Left menu","Header type","Mobile menu"]}, 
            //         {sub:"Footer",subsub:["Footer style 01","Footer style 02","Footer style 03","Footer style 04","Footer style 05","Footer style 06","Footer style 07","Footer style 08","Footer style 09","Footer style 10","Footer style 11","Footer style 12"]},
            //         {sub:"Page title",subsub:["Left alignment","Right alignment","Center alignment","Colorful style","Big typography","Parallax background","Separate breadcrumbs","Gallery background","Background video","Mini version"]},
            //         {sub:"Modal popup",subsub:["Simple modal","Subscription","Contact form","Youtube video","Vimeo video","Google map"]},
            //         {sub:"Icon packs",subsub:["Icons mind line","Icons mind solid","Feather","Font awesome","ET line","Themify","Simple line",]},
            //         {sub:"Animations"}
            //     ],
            //     sub6:[
            //         {sub:"Blog grid"},
            //         {sub:"Blog masonry"},
            //         {sub:"Blog classic"},
            //         {sub:"Blog simple"},
            //         {sub:"Blog side image"},
            //         {sub:"Blog metro"},
            //         {sub:"Blog overlay image"},
            //         {sub:"Blog modern"},
            //         {sub:"Blog clean"},
            //         {sub:"Blog widget"},
            //         {sub:"Blog standard"},
            //         {sub:"Post layout", subsub:["Blog post layout 01","Blog post layout 02","Blog post layout 03","Blog post layout 04","Blog post layout 05"]},
            //         {sub:"Post types", subsub:["Standard post","Gallery post","Slider post","HTML5 video post","Youtube video post","Vimeo video post","Audio post","Blockquote post","Full width post"]}
            //     ],
            //     sub7:[
            //         {sub:["Shop layout","Shop wide","Left sidebar","Right sidebar","Only categories","Single product"]},
            //         {sub:["Utility pages","Shopping cart","Checkout","Login / Register"]},
            //         {sub:["menu-banner-01.jpg"]},
            //         {sub:["menu-banner-02.jpg"]},
            //     ],
            // };

            // // console.log(lithoNav.sub1[0]);  // 전체 메뉴를 객체화하여 첫번째 서브메뉴 호출
            // // console.log(lithoNav.sub1[0].col[2]);

            // // for(var i in lithoNav.sub1[0].col){
            // //     console.log(i+' '+lithoNav.sub1[0].col[i]);
            // // }
            // // for(var i in lithoNav.sub1[1].col){
            // //     console.log(i+' '+lithoNav.sub1[1].col[i]);
            // // }
            // // for(var i in lithoNav.sub1[2].col){
            // //     console.log(i+' '+lithoNav.sub1[2].col[i]);
            // // }
            // // for(var i in lithoNav.sub1[3].col){
            // //     console.log(i+' '+lithoNav.sub1[3].col[i]);
            // // }

            // // console.log(lithoNav.sub1.length);  // 서브1 총 줄수
            // // console.log(lithoNav.sub1[0].col.length); // 서브1 1행 칸수 11
            // // console.log(lithoNav.sub1[1].col.length); // 서브1 2행 칸수 11
            // // console.log(lithoNav.sub1[2].col.length); // 서브1 3행 칸수 12
            // // console.log(lithoNav.sub1[3].col.length); // 서브1 4행 칸수 7

            // // 서브1
            // for(var i in lithoNav.sub1){    // 줄(행) 카운트 0 1 2 3
            //     for(var j in lithoNav.sub1[i].sub){  // 칸(열) 카운트 
            //         console.log(lithoNav.sub1[i].sub[j]);   // 각 행별로 서브1 모두 출력
            //     }
            //     console.log('///////////////////////////////');
            // }

            // // 서브2
            // for(var i in lithoNav.sub2){
            //     // 서브2
            //     console.log('-------------------------------');
            //     console.log(lithoNav.sub2[i].sub);
            //     console.log('-------------------------------');
            //     for(var j in lithoNav.sub2[i].subsub){
            //         //서브2 서브
            //         console.log(lithoNav.sub2[i].subsub[j]);
            //     }
            //     console.log('///////////////////////////////');
            // }

            // // 서브3
            // for(var i in lithoNav.sub3){
            //     //서브3
            //     console.log('-------------------------------');
            //     console.log(lithoNav.sub3[i].sub);
            //     console.log('-------------------------------');
            //     for(var j in lithoNav.sub3[i].subsub){
            //         // 서브3 서브
            //         console.log(lithoNav.sub3[i].subsub[j]);
            //     }
            //     console.log('///////////////////////////////');
            // }

            // // 서브4
            // for(var i in lithoNav.sub4){
            //     for(var j in lithoNav.sub4[i].sub){
            //         console.log(lithoNav.sub4[i].sub[j]);
            //     }
            //     console.log('///////////////////////////////');
            // }

            // // 서브5
            // for(var i in lithoNav.sub5){
            //     //서브5
            //     console.log('-------------------------------');
            //     console.log(lithoNav.sub5[i].sub);
            //     console.log('-------------------------------');
            //     for(var j in lithoNav.sub5[i].subsub){
            //         // 서브5 서브
            //         console.log(lithoNav.sub5[i].subsub[j]);
            //     }
            //     console.log('///////////////////////////////');
            // }

            // // 서브6
            // for(var i in lithoNav.sub6){
            //     //서브6
            //     console.log('-------------------------------');
            //     console.log(lithoNav.sub6[i].sub);
            //     console.log('-------------------------------');
            //     for(var j in lithoNav.sub6[i].subsub){
            //         // 서브6 서브
            //         console.log(lithoNav.sub6[i].subsub[j]);
            //     }
            //     console.log('///////////////////////////////');
            // }
            
            // // 서브7
            // for(var i in lithoNav.sub7){
            //     for(var j in lithoNav.sub7[i].sub){
            //         console.log(lithoNav.sub7[i].sub[j]);
            //     }
            //     console.log('///////////////////////////////');
            // }



        },
        section1Fn:function(){
            // 슬라이드의 너비와 높이를 창높이 창너비로 설정한다.(반응형)
            var $slide = $('#section1 .slide')  // 로딩시 변수설정
            var $window = $(window);            // 창
            var $winW = $(window).width();      // 창너비 즉시반환
            var $winH = $(window).height();     // 창높이 즉시반환

            var $slideWrap = $('#section1 .slide-wrap');
            var $prevBtn = $('#section1 .prev-btn');
            var $nextBtn = $('#section1 .next-btn');
            var $pageBtn = $('#section1 .page-btn');
            var $slideView = $('#section1 .slide-view');
            var cnt = 0;
            var n = $('#section1 .slide').length-2;
            
            // 자동실행, 타이머함수 관련변수
            var timecount = 0;
            var setMainSlide = null;
            var setMainSlide2 = null;


                // 슬라이드의 너비 높이 설정 완료  // 로딩시 설정
                function resizeFn(){
                    $winW = $(window).width();
                    $winH = $(window).height();
                    $slide.css({width:$winW,height:$winH}); // 즉시 변환 너비 높이 적용 실행
                    $slideWrap.stop().animate({left:-$winW*cnt}, 0)
                }
                resizeFn(); // 로딩시 실행

                // 화면의 크기가(너비와높이) 1픽셀만 변경되어도 동작되는 반응형메서드
                // $window.resize();
                $window.resize(function(){

                    resizeFn();
                });


                // 메인슬라이드
                function mainSlideFn(){
                    $slideWrap.stop().animate({left:-$winW*cnt}, 300, 'easeInOutCubic', function(){
                        if(cnt>n-1){cnt=0;}
                        if(cnt<0){cnt=n-1;}
                        $slideWrap.stop().animate({left:-$winW*cnt}, 0)
                    })
                    pageBtnColorFn();
                }

                function nextslideCountFn(){
                    cnt ++;
                    mainSlideFn();
                }
                function prevslideCountFn(){
                    cnt --;
                    mainSlideFn();
                }

                $nextBtn.on({
                    click:function(){
                        timerFn()
                        if(!$slideWrap.is(':animated')){
                            nextslideCountFn();
                        }
                    }
                });
                $prevBtn.on({
                    click:function(){
                        timerFn()
                        if(!$slideWrap.is(':animated')){
                            prevslideCountFn();
                        }
                    }
                });

                // 메인슬라이드 페이지버튼
                function pageBtnColorFn(){
                    var i = cnt;
                    if(i>n-1){
                        i=0;
                    }
                    $pageBtn.removeClass('onPage')
                    $pageBtn.eq(i).addClass('onPage')
                }
                pageBtnColorFn();

                
                $pageBtn.each(function(idx){
                    $(this).on({
                        click:function(){
                            timerFn()
                            cnt=idx;
                            mainSlideFn()
                        }
                    });
                })

                // $pageBtn.eq(0).on({
                //     click:function(){
                //         cnt=0;
                //         mainSlideFn()
                //     }
                // });
                // $pageBtn.eq(1).on({
                //     click:function(){
                //         cnt=1;
                //         mainSlideFn()
                //     }
                // });
                // $pageBtn.eq(2).on({
                //     click:function(){
                //         cnt=2;
                //         mainSlideFn()
                //     }
                // });


                // 슬라이드 스와이프
                $slideView.swipe({
                    swipeLeft:function(){
                        timerFn()
                        if(!$slideWrap.is(':animated')){
                            nextslideCountFn();
                        }
                    },
                    swipeRight:function(){
                        timerFn()
                        if(!$slideWrap.is(':animated')){
                            prevslideCountFn();
                        }
                    }
                });

                // 슬라이드 자동실행
                function mainSlideAutoPlayFn(){
                    setMainSlide = setInterval(nextslideCountFn, 3000);
                }
                mainSlideAutoPlayFn();

                // 타이머
                function timerFn(){
                    timecount = 0;
                    clearInterval(setMainSlide);
                    clearInterval(setMainSlide2);
                    setMainSlide2 = setInterval(function(){
                        timecount ++;
                        console.log('타이머:',timecount);
                        if(timecount >= 3 ){
                            clearInterval(setMainSlide);
                            clearInterval(setMainSlide2);
                            console.log('슬라이드 즉시실행, 이후 3초마다 실행');
                            nextslideCountFn();
                            mainSlideAutoPlayFn();
                        }
                    }, 1000)
                }


                

        },
        section2Fn:function(){
            
        },
        section3Fn:function(){
            var $section3SlideWrap = $('#section3 .slide-wrap')
            var $prevBtn = $('#section3 .prev-btn')
            var $nextBtn = $('#section3 .next-btn')
            var $section3SlideView = $('#section3 .slide-view')
            var cnt = 0;
            var setS3Slide = null;

            function section3SlideFn(){
                $section3SlideWrap.stop().animate({left:-390*cnt}, 500, 'easeInOutCubic',function(){
                    if(cnt>3){cnt=0;}
                    if(cnt<0){cnt=3;}
                    $section3SlideWrap.stop().animate({left:-390*cnt}, 0)
                })
            }

            function $prevBtncountFn(){
                cnt --;
                section3SlideFn();
            }
            function $nextBtncountFn(){
                cnt ++;
                section3SlideFn();
            }

            $prevBtn.on({
                click:function(){
                    slideTimerFn();
                    if(!$section3SlideWrap.is(':animated')){
                        $prevBtncountFn();
                    }
                }
            });
            $nextBtn.on({
                click:function(){
                    slideTimerFn();
                    if(!$section3SlideWrap.is(':animated')){
                        $nextBtncountFn();
                    }
                }
            });

            $section3SlideView.swipe({
                swipeLeft:function(){
                    slideTimerFn();
                    if(!$section3SlideWrap.is(':animated')){
                        $nextBtncountFn();
                    }
                },
                swipeRight:function(){
                    slideTimerFn();
                    if(!$section3SlideWrap.is(':animated')){
                        $prevBtncountFn();
                    }
                }
            });



            function slideAutoPlayFn(){
                setS3Slide = setInterval($nextBtncountFn, 4000);
            }
            slideAutoPlayFn();


            var t = 0;
            var setS3Slide2 = null;
            function slideTimerFn(){
                t = 0;
                clearInterval(setS3Slide);
                clearInterval(setS3Slide2);
                    setS3Slide2 = setInterval(function(){
                    t ++;
                    console.log(t);
                    if(t>=4){
                        clearInterval(setS3Slide);
                        clearInterval(setS3Slide2);
                        $nextBtncountFn();
                        slideAutoPlayFn();
                    }
                }, 1000)
            }

            


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
            
        }
    }   //객체 끝

    litho.init();   // litho 실행

})(jQuery);