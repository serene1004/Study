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

            // 메인메뉴, 서브메뉴 객체와 배열
            var lithoNav = {
                sub1:[
                    {sub:["Corporate","Startup","Business","Corporate","Finance","Application","Consulting","Digital agency","SEO agency","Events & conference","Marketing agency"]},
                    {sub:["Specialized","Restaurant","Architecture","Hotel & resort","Travel agency","Yoga & meditation","Gym & fitness","Spa salon","Cafe","Home decor","Interior design"]},
                    {sub:["Portfolio","Design agency","Web agency","Creative agency","Freelancer","Branding agency","Photography","Personal portfolio","Vertical portfolio","Interactive portfolio","Split portfolio","Creative portfolio"]},
                    {sub:["Other","Furniture shop","Fashion shop","Magazine","Lifestyle blog","Classic blog","Blog metro"]}
                ],
                sub2:[
                    {sub:"About", subsub:["About me","About us","Our story","Who we are"]},
                    {sub:"Services", subsub:["Our services","What we offer","Our process"]},
                    {sub:"Contact", subsub:["Contact simple","Contact classic","Contact modern"]},
                    {sub:"Additional pages", subsub:["Our team","Latest news","Pricing packages","Error 404","Maintenance","Coming soon","Coming soon - V2","FAQ's","Search result"]}
                ],
                sub3:[
                    {sub:"Portfolio classic", subsub:["Classic 2 column","Classic 3 column","Classic 4 column","Classic masonry","Classic metro"]},
                    {sub:"Portfolio boxed", subsub:["Boxed 2 column","Boxed 3 column","Boxed 4 column","Boxed masonry","Boxed metro"]},
                    {sub:"Portfolio colorful", subsub:["Colorful 2 column","Colorful 3 column","Colorful 4 column","Colorful masonry","Colorful metro"]},
                    {sub:"Portfolio bordered", subsub:["Bordered 2 column","Bordered 3 column","Bordered 4 column","Bordered masonry","Bordered metro"]},
                    {sub:"Portfolio overlay", subsub:["Overlay 2 column","Overlay 3 column","Overlay 4 column","Overlay masonry","Overlay metro"]},
                    {sub:"Portfolio switch image", subsub:["Switch image 2 column","Switch image 3 column","Switch image 4 column","Switch image masonry","Switch image metro"]},
                    {sub:"Portfolio other", subsub:["Portfolio scattered","Justified gallery","Portfolio slider"]},
                    {sub:"Single project page", subsub:["Single project page 01","Single project page 02","Single project page 03","Single project page 04","Single project page 05"]}
                ],
                sub4:[
                    {sub:["General","Accordions","Buttons","Team","Team carousel","Clients","Client carousel","Subscribe","Call to action","Tab","Google map","Contact form","Image gallery"]},
                    {sub:["Content & infographics","Progress bar","Icon with text","Over line icon box","Custom icon with text","Counters","Countdown","Pie charts","Fancy text box","Text box","Fancy text"]},
                    {sub:["Interactive","Testimonials","Testimonials carousel","Video","Interactive banners","Services","Info banner","Rotate box","Process step","Instagram","Parallax scrolling","Text slider"]},
                    {sub:["Text & containers","Heading","Drop caps","Columns","Blockquote","Highlights","Message box","Social icons","Lists","Separators","Pricing table"]}
                ],
                sub5:[
                    {
                        sub:"Header and menu",
                        subsub:["Transparent header","White header","Dark header","Header with top bar","Header with push","Center navigation","Center logo","Top logo","One page navigation","Hamburger menu","Left menu","Header type","Mobile menu"],
                        subsubsub:{
                            subsubsub1:["Hamburger menu","Hamburger menu modern","Hamburger menu half"],
                            subsubsub2:["Left menu classic","Left menu modern"],
                            subsubsub3:["Always fixed","Disable fixed","Reverse scroll","Responsive sticky"],
                            subsubsub4:["Classic","Modern","Full screen"]
                        }
                    }, 
                    {sub:"Footer",subsub:["Footer style 01","Footer style 02","Footer style 03","Footer style 04","Footer style 05","Footer style 06","Footer style 07","Footer style 08","Footer style 09","Footer style 10","Footer style 11","Footer style 12"]},
                    {sub:"Page title",subsub:["Left alignment","Right alignment","Center alignment","Colorful style","Big typography","Parallax background","Separate breadcrumbs","Gallery background","Background video","Mini version"]},
                    {sub:"Modal popup",subsub:["Simple modal","Subscription","Contact form","Youtube video","Vimeo video","Google map"]},
                    {sub:"Icon packs",subsub:["Icons mind line","Icons mind solid","Feather","Font awesome","ET line","Themify","Simple line",]},
                    {sub:"Animations"}
                ],
                sub6:[
                    {sub:"Blog grid"},
                    {sub:"Blog masonry"},
                    {sub:"Blog classic"},
                    {sub:"Blog simple"},
                    {sub:"Blog side image"},
                    {sub:"Blog metro"},
                    {sub:"Blog overlay image"},
                    {sub:"Blog modern"},
                    {sub:"Blog clean"},
                    {sub:"Blog widget"},
                    {sub:"Blog standard"},
                    {sub:"Post layout", subsub:["Blog post layout 01","Blog post layout 02","Blog post layout 03","Blog post layout 04","Blog post layout 05"]},
                    {sub:"Post types", subsub:["Standard post","Gallery post","Slider post","HTML5 video post","Youtube video post","Vimeo video post","Audio post","Blockquote post","Full width post"]}
                ],
                sub7:[
                    {sub:["Shop layout","Shop wide","Left sidebar","Right sidebar","Only categories","Single product","Utility pages","Shopping cart","Checkout","Login / Register"]},
                    {sub:["menu-banner-01.jpg"]},
                    {sub:["menu-banner-02.jpg"]},
                ],
            };  // litho 객체 배열 메뉴

            // 변수설정
            var txt = '';
            var $col = $('#header #nav .col');
            var $sub2Btn = $('#header .sub2 .sub-btn');
            var $sub2Sub = $('#header .sub2 .subsub');
            var $sub3Btn = $('#header .sub3 .sub-btn');
            var $sub3sub = $('#header .sub3 .subsub');
            var icon = '';
            var $col4 = $('#header .sub4 .col');
            var $sub5Btn = $('#header .sub5 .sub-btn');
            var $sub5Sub = $('#header .sub5 .subsub');
            var $sub6Btn = $('#header .sub6 .sub-btn');
            var $sub6Sub = $('#header .sub6 .subsub');
            var $sub7Dl1 = $('#header .sub7 dl').eq(0);
            var $sub7Img = $('#header .sub7 dl img');    // 이미지2개

            // litho 객체 배열 서브메뉴를 컴포넌트요소에 넣기
            function subObjectarrayFn(){
            // 서브1
            // 서브1 : 1~4열까지 반복
                for(var i in lithoNav.sub1){
                    for(var j in lithoNav.sub1[i].sub){
                        if(j==0){
                            txt = '<dt>' + lithoNav.sub1[i].sub[0] + '</dt>';
                        }
                        else{
                            txt += '<dd><a href="#">' + lithoNav.sub1[i].sub[j] + '</a></dd>';
                        }
                    }
                    $col.eq(i).html(txt);
                    txt = '';
                    }

                // 서브2   
                for(var i in lithoNav.sub2){
                    txt = lithoNav.sub2[i].sub;
                    icon=$sub2Btn.eq(i).html();
                    txt+=icon;
                    $sub2Btn.eq(i).html(txt);
                    txt='';
                }

                for(var i in lithoNav.sub2){
                    for(var j in lithoNav.sub2[i].subsub){
                        txt += '<li><a href="#">'+ lithoNav.sub2[i].subsub[j] +'</a></li>';
                    }
                    $sub2Sub.eq(i).html(txt);
                    txt = '';
                }

                // 서브2 서브 반복
                for(var j in lithoNav.sub2[0].subsub){
                    txt += '<li><a href="#">'+ lithoNav.sub2[0].subsub[j] +'</a></li>';
                }
                $sub2Sub.eq(0).html(txt);
                txt = '';

                for(var j in lithoNav.sub2[1].subsub){
                    txt += '<li><a href="#">'+ lithoNav.sub2[1].subsub[j] +'</a></li>';
                }
                $sub2Sub.eq(1).html(txt);
                txt = '';

                for(var j in lithoNav.sub2[2].subsub){
                    txt += '<li><a href="#">'+ lithoNav.sub2[2].subsub[j] +'</a></li>';
                }
                $sub2Sub.eq(2).html(txt);
                txt = '';

                for(var j in lithoNav.sub2[3].subsub){
                    txt += '<li><a href="#">'+ lithoNav.sub2[3].subsub[j] +'</a></li>';
                }
                $sub2Sub.eq(3).html(txt);
                txt = '';                

                // 서브3
                for(var i in lithoNav.sub3){
                    txt = lithoNav.sub3[i].sub;
                    icon=$sub3Btn.eq(i).html();
                    txt+=icon;
                    $sub3Btn.eq(i).html(txt);
                    txt='';
                }

                for(var i in lithoNav.sub3){
                    for(var j in lithoNav.sub3[i].subsub){
                        txt += '<li><a href="#">'+ lithoNav.sub3[i].subsub[j] +'</a></li>';
                    }
                    $sub3sub.eq(i).html(txt);
                    txt = '';
                }

                // 서브4
                for(var i in lithoNav.sub4){
                    for(var j in lithoNav.sub4[i].sub){
                        if(j==0){
                            txt = '<dt>'+lithoNav.sub4[i].sub[0]+'</dt>';
                        }
                        else{
                            txt += '<dd><a href="#">'+lithoNav.sub4[i].sub[j]+'</a></dd>';
                        }
                    }
                    $col4.eq(i).html(txt);
                    txt = '';
                }                

                //서브5
                for(var i in lithoNav.sub5){
                    txt = lithoNav.sub5[i].sub;
                    icon = $sub5Btn.eq(i).html();
                    txt += icon;
                    $sub5Btn.eq(i).html(txt);
                    txt = '';
                    
                    if(i==0){
                        for(j in lithoNav.sub5[i].subsub){
                            if(j < 9){
                                txt += '<li><a href="#" class="sub-sub-btn">'+ lithoNav.sub5[i].subsub[j] +'</a></li>';
                            }
                            else{
                                txt += '<li><a href="#" class="sub-sub-btn">'+ lithoNav.sub5[i].subsub[j] +'<i class="fas fa-angle-right"></i></a></li>';
                            }
                        }
                        $sub5Sub.eq(i).html(txt);
                        txt = '';
                    }
                    else if(i>0 && i<5){
                        for(j in lithoNav.sub5[i].subsub){
                            txt += '<li><a href="#" class="sub-sub-btn">'+ lithoNav.sub5[i].subsub[j] +'</a></li>';
                        }
                        $sub5Sub.eq(i).html(txt);
                        txt = '';
                    }
                    
                }

                // 서브5 서브서브
                txt = $('.sub5-sub1 > div > ul > li').eq(9).html();
                txt += '<div class="sub-sub-sub sub5-sub1-sub10">';
                txt += '<div class="sub-sub-sub-gap">';
                txt += '<ul>';
                txt += '<li><a href="#">Hamburger menu</a></li>';
                txt += '<li><a href="#">Hamburger menu modern</a></li>';
                txt += '<li><a href="#">Hamburger menu half</a></li>';
                txt += '</ul>';
                txt += '</div>';
                txt += '</div>';
                $('.sub5-sub1 > div > ul > li').eq(9).html(txt);
                txt = '';

                txt = $('.sub5-sub1 > div > ul > li').eq(10).html();
                txt += '<div class="sub-sub-sub sub5-sub1-sub11">';
                txt += '<div class="sub-sub-sub-gap">';
                txt += '<ul>';
                txt += '<li><a href="#">Left menu classic</a></li>';
                txt += '<li><a href="#">Left menu modern</a></li>';
                txt += '</ul>';
                txt += '</div>';
                txt += '</div>';
                $('.sub5-sub1 > div > ul > li').eq(10).html(txt);
                txt = '';

                txt = $('.sub5-sub1 > div > ul > li').eq(11).html();
                txt += '<div class="sub-sub-sub sub5-sub1-sub12">';
                txt += '<div class="sub-sub-sub-gap">';
                txt += '<ul>';
                txt += '<li><a href="#">Always fixed</a></li>';
                txt += '<li><a href="#">Disable fixed</a></li>';
                txt += '<li><a href="#">Reverse scroll</a></li>';
                txt += '<li><a href="#">Responsive sticky</a></li>';
                txt += '</ul>';
                txt += '</div>';
                txt += '</div>';
                $('.sub5-sub1 > div > ul > li').eq(11).html(txt);
                txt = '';

                txt = $('.sub5-sub1 > div > ul > li').eq(12).html();
                txt += '<div class="sub-sub-sub sub5-sub1-sub13">';
                txt += '<div class="sub-sub-sub-gap">';
                txt += '<ul>';
                txt += '<li><a href="#">Classic</a></li>';
                txt += '<li><a href="#">Modern</a></li>';
                txt += '<li><a href="#">Full screen</a></li>';
                txt += '</ul>';
                txt += '</div>';
                txt += '</div>';
                $('.sub5-sub1 > div > ul > li').eq(12).html(txt);
                txt = '';   // 서브 5-1 끝

                // 서브6
                for(var i in lithoNav.sub6){
                    if(i<11){
                        txt = lithoNav.sub6[i].sub;
                        $sub6Btn.eq(i).html(txt);
                    }
                    else{
                        txt = lithoNav.sub6[i].sub+'<i class="fas fa-angle-right"></i>';
                        $sub6Btn.eq(i).html(txt);
                    }
                }
                txt = '';

                for(var j in lithoNav.sub6[11].subsub){
                    txt += '<li><a href="#">'+ lithoNav.sub6[11].subsub[j] +'</a></li>';
                }
                $sub6Sub.eq(0).html(txt);
                txt = '';

                for(var j in lithoNav.sub6[12].subsub){
                    txt += '<li><a href="#">'+ lithoNav.sub6[12].subsub[j] +'</a></li>';
                }
                $sub6Sub.eq(1).html(txt);
                txt = '';

                // 서브7
                for(var i in lithoNav.sub7[0].sub){
                    if(i==0 || i==6){   // || = or(또는)
                        txt += '<dt>'+ lithoNav.sub7[0].sub[i] + '</dt>';
                    }
                    else{
                        txt += '<dd><a href="#">'+ lithoNav.sub7[0].sub[i] + '</a></dd>';
                    }
                }
                $sub7Dl1.html(txt);
                txt = '';

                // 이미지 경로정보 가져와서 객체 배열 이미지 추가
                for(var i=0; i<$sub7Img.length; i++){
                    txt = $sub7Img.eq(i).attr('src');
                    txt += lithoNav.sub7[i+1].sub[0];
                    $sub7Img.eq(i).attr('src', txt);
                    txt = '';
                }
            }    
            subObjectarrayFn();


            // 화면 크기를 확인해서 width가 980이하일때 버튼이벤트가 마우스엔터에서 클릭으로 변경
            // 리사이즈를 할때마다 버튼의 이벤트를 분기해서 넣는방법
            // 버튼의 이벤트에서 분기를하는방법
            var $window = $(window);
            var $winW = $(window).width();
            var $winH = $(window).height();

            function resizeFn(){
                $winW = $(window).width();
                // console.log('리사이즈'+$winW);
            }
            resizeFn();
            
            var resizeTimer;
            $window.resize(function(){
                resizeFn();
                isChanged = true;
                // console.log('윈도우.리사이즈'+$winW);
                if (resizeTimer) {
                    clearTimeout(resizeTimer)
                }
                /**
                 * [디바운싱] : 연속으로 발생되는 이벤트를 가장 마지막에만 발생시키게 하는 이벤트 컨트롤? 기법 => 이 기법은 퍼블리셔면 대부분이 아는 기법
                 * 페이스북에 스크롤 내리면 요소들 받아올때도 사용되는 개념 (스크롤 이벤트로 오지게 발생하는데, 데이터는 1번만 딱 받아와지는거랑 같음)
                 * resize 이벤트가 얼마나 발생하든지 마지막에 발생한 순간부터 0.5s 뒤에 pcMobileFn 실행
                 */
                 resizeTimer = setTimeout(function () {
                    pcMobileFn();
                    isChanged = false;
                }, 500);
            });


            // 네비게이션 메인버튼(메뉴) 버튼이벤트
            // 서브메뉴
            var $mainBtn = $('.main-btn');
            var $sub = $('.sub');
            var $navUlLi = $('#nav > ul > li')  // 마우스가 떠나면 sub를 숨겨지게끔 하기위한 영역설정(메인버튼과 서브메뉴들을 감싸주는 li)
           
            // 서브서브
            var $subBtn = $('.sub-btn');
            var $subSub = $('.sub-sub');
            
            // 서브서브서브
            var $subSubBtn = $('.sub-sub-btn');
            var $subSubSub = $('.sub-sub-sub');

            // 모바일버튼
            var $mobileBtn = $('#header .mobile-btn');
            var $bar = $('#header .mobile-btn .bar');
            var $nav = $('#header #nav');

            /**
             * isChanged, currentDevice 이건 뭐 하드코딩이라 할말이 없는데 ㅎ
             * 미디어쿼리 & jQuery 혼용 issue
             */
            var isChanged = true;
            var currentDevice = "";
            function pcMobileFn(){
                if (!isChanged) return;
                if($winW > 980){
                    if (currentDevice === 'pc') return;
                    $mainBtn.off('click');
                    pcFn();
                    currentDevice = 'pc';
                    $nav.css({display:'inline-block'});
                } else {
                    if (currentDevice === 'mobile') return;
                    $mainBtn.off('mouseenter');
                    $subBtn.off('mouseenter');
                    $subSubBtn.off('mouseenter');
                    $navUlLi.off('mouseleave');
                    $subSub.off('mouseleave');
                    $bar.removeClass('addMobile');
                    mobileFn();
                    currentDevice = 'mobile';
                }
            }
            pcMobileFn();

            function pcFn(){
                $mainBtn.on({
                    mouseenter:function(){
                        $(this).next().stop().slideDown(300);
                    }   
                });
               
                $navUlLi.on({
                    mouseleave:function(){
                        $sub.stop().hide(0);
                    }
                });
    
                $subBtn.on({
                    mouseenter:function(){
                        $subSub.stop().hide(0);
                        $(this).next().stop().slideDown(0);
                    }
                });
    
                $navUlLi.on({
                    mouseleave:function(){
                        $subSub.stop().hide(0);
                    }
                });
    
                $subSubBtn.on({
                    mouseenter:function(){
                        $subSubSub.stop().hide(0);
                        $(this).next().stop().slideDown(0);
                    }
                });
    
                $subSub.on({
                    mouseleave:function(){
                        $subSubSub.stop().hide(0);
                    }
                });
            }

            function mobileFn(){
                $mainBtn.on({
                    click:function(){
                        $(this).next().stop().slideToggle(300);
                    }   
                });
            }

            // // 메뉴 보이기
            // $mainBtn.on({
            //     click:function(){
            //         if($winW <= 980){
            //             $(this).next().toggle('active');
            //         }
            //     },
            //     mouseenter:function(){
            //         if($winW > 980){
            //             $(this).stop().next().slideDown(300);
            //         }
            //     }   
            // });
           
            // // 메뉴 숨기기
            // $navUlLi.on({
            //     mouseleave:function(){
            //         if($winW > 980){
            //             $sub.stop().hide(0);
            //         }
            //     }
            // });

            // // 서브메뉴 보이기
            // $subBtn.on({
            //     mouseenter:function(){
            //         if($winW > 980){
            //             $subSub.stop().hide(0);
            //             $(this).stop().next().slideDown(0);
            //         }
            //     }
            // });

            // // 서브메뉴 숨기기
            // $navUlLi.on({
            //     mouseleave:function(){
            //         if($winW > 980){
            //             $subSub.stop().hide(0);
            //         }
            //     }
            // });

            // // 서브서브 보이기
            // $subSubBtn.on({
            //     mouseenter:function(){
            //         if($winW > 980){
            //             $subSubSub.stop().hide(0);
            //             $(this).stop().next().slideDown(0);
            //         }
            //     }
            // });

            // //서브서브 숨기기
            // $subSub.on({
            //     mouseleave:function(){
            //         if($winW > 980){
            //             $subSubSub.stop().hide(0);
            //         }
            //     }
            // });


            // 모바일메뉴 이벤트
            $mobileBtn.on({
                click:function(){
                    $bar.toggleClass('addMobile');
                    $nav.stop().slideToggle(300);
                }
            });
        },
        section1Fn:function(){
            // 슬라이드의 너비와 높이를 창높이 창너비로 설정한다.(반응형)
            var $slide = $('#section1 .slide')  // 로딩시 변수설정
            var $window = $(window);            // 창
            var $winW = $(window).width();      // 창너비 즉시반환
            var $winH = $(window).height();     // 창높이 즉시반환

            var $section1 = $('#section1');
            
            var $slideWrap = $('#section1 .slide-wrap');
            var $nextBtn = $('#section1 .next-btn')
            var $prevBtn = $('#section1 .prev-btn')
            var $pageBtn = $('#section1 .page-btn');
            var $slideView = $('#section1 .slide-view');    // 터치선택자(Touch Selector)
            var cnt = 0;
            var n = $('#section1 .slide').length-2;  // 슬라이드 총갯수 - 2(맨앞, 뒤의 추가된 슬라이드)

            var setId = null;



            // 슬라이드의 너비 높이 설정 완료  // 로딩시 설정
            function resizeFn(){
                $winW = $(window).width();
                // $winH = $(window).height(); // 높이설정을 가로, 세로모드 반응형으로 하기위해 아래로 내림.
                $slide.css({width:$winW});

                // 가로형모드 반응형
                if(window.orientation == 0 || window.orientation == 180){
                    $winH = $(window).height();
                }
                // 세로형모드 반응형
                else if (window.orientation == 90 || window.orientation == -90){
                    $winH = 600;
                }


                $section1.css({width:$winW,height:$winH}); // 즉시 변환 너비 높이 적용 실행
                $slideWrap.stop().animate({left:-$winW*cnt}, 0);    // 즉시실행 0의 속도
                mainSlideFn();   // 메인슬라이드함수 전체를 가져오기때문에 300의 속도가 있음
            }
            // resizeFn(); // 로딩시 실행
            setTimeout(resizeFn, 10);  // 0.1초 뒤에 강제실행 (반응형 너비설정 resizeFn 이 즉각 실행되도록)

            // 화면의 크기가(너비와높이) 1픽셀만 변경되어도 동작되는 반응형메서드
            // $window.resize();
            $window.resize(function(){
                resizeFn();
            });
            

            // 메인슬라이드
            function mainSlideFn(){
                $slideWrap.stop().animate({left:-$winW*cnt}, 600, 'easeInOutCubic',function(){
                    if(cnt>n-1){cnt=0}  // n의 값은 3이지만, 인덱스값은 0부터 시작하기때문에 -1을 해주어야함.
                    if(cnt<0){cnt=n-1}
                    $slideWrap.stop().animate({left:-$winW*cnt}, 0);
                });
                pageBtnColorEnvetFn();  // 페이지버튼 이벤트함수 호출
            }

            // 슬라이드함수
            function prevSlideCountFn(){
                cnt --;
                mainSlideFn();
            }

            function nextSlideCountFn(){
                cnt ++;
                mainSlideFn();
            }

            // 화살버튼
            $prevBtn.on({
                click:function(e){
                    e.preventDefault();
                    puaseTimerFn();
                    if (!$slideWrap.is(':animated')) {
                        prevSlideCountFn();
                    }
                }
            })

            $nextBtn.on({
                click:function(e){
                    e.preventDefault();
                    puaseTimerFn();
                    if (!$slideWrap.is(':animated')) {
                        nextSlideCountFn();
                    }
                }
            })


            // 페이지버튼
            // 해당 슬라이드 버튼색상 변경
            function pageBtnColorEnvetFn(){
                var z = cnt;
                if(z>n-1){
                    z=0;
                }
                // console.log(z); // 0,1,2,0,1,2...
                $pageBtn.removeClass('addPage');
                $pageBtn.eq(z).addClass('addPage');
            }
            pageBtnColorEnvetFn();  // 로딩시 페이지함수 실행!

            // 페이지버튼 클릭시 해당 페이지로 이동
            $pageBtn.each(function(idx){
                $(this).on({        // $pageBtn.eq(idx)=$(this)
                    click:function(){
                        cnt = idx;  // 클릭한 버튼 인덱스 번호가 슬라이드 번호
                        mainSlideFn();
                    }
                });
            });

            // $pageBtn.eq(0).on({
            //     click:function(){
            //         cnt = 0;
            //         mainSlideFn();
            //     }
            // });


            // 터치 스와이프
            // 슬라이드를 오른쪽에서 왼쪽으로 터치시 다음슬라이드 카운트 함수호출
            // 슬라이드를 왼쪽에서 오른쪽으로 터치시 이전슬라이드 카운트 함수호출
            $slideView.swipe({
                swipeLeft:function(e){
                    e.preventDefault();
                    puaseTimerFn();
                    if (!$slideWrap.is(':animated')) {
                        nextSlideCountFn()
                    }
                },
                swipeRight:function(e){
                    e.preventDefault();
                    puaseTimerFn();
                    if (!$slideWrap.is(':animated')) {
                        prevSlideCountFn()
                    }
                }
            });

            // 자동타이머 함수 4초에 한번씩 반복
            function autoTimerFn(){
                setId = setInterval(nextSlideCountFn, 4000);
            }
            autoTimerFn();

            // 슬라이드에서 이벤트 발생시 자동 타이머를 일시중지
            var setId2 = null;
            function puaseTimerFn(){
                var t = 0;
                clearInterval(setId);
                clearInterval(setId2);
                // 5초동안 아무이벤트가 없으면 다시 자동타이머 실행
                setId2 = setInterval(function(){
                    t++;
                    if(t >= 4){
                        clearInterval(setId);
                        clearInterval(setId2);
                        nextSlideCountFn();
                        autoTimerFn();
                    }
                }, 1000)
            }
        },
        section2Fn:function(){

        },
        section3Fn:function(){
            
            var $slideWrap = $('#section3 .slide-wrap');
            var $nextBtn = $('#section3 .next-btn');
            var $prevBtn = $('#section3 .prev-btn');
            var $slideView = $('#section3 .slide-view');
            var $slideViewEnter = $('#section3 .slide-view');
           
            var $slideW = $('#section3 .slide').innerWidth();   // 반응형 슬라이드 너비
            var $window = $(window);
            
            var cnt = 0;
            var setId = null;
            var n = $('#section3 .slide').length - ( 4 + 4 ) - 1;

            
            // 반응형 슬라이드
            // 1. 반응형함수
            function reponseFn(){
                $slideW = $('#section3 .slide').innerWidth();
                section3SlideFn();
            }
            reponseFn();    // <<< 로딩시 실행
            setTimeout(reponseFn, 100);  // 0.1초 뒤에 강제실행 (반응형 너비설정 reponseFn 이 즉각 실행되도록)

            // 2. 윈도우(window) 리사이즈(resize()) 메서드
            $window.resize(function(){
                reponseFn();    // <<< 반응형 (크기가 조절이될때)
            })

            function section3SlideFn(){
                $slideWrap.stop().animate({left:-$slideW*cnt}, 300, 'easeInOutCubic',function(){
                    if(cnt>n){cnt=0;}
                    if(cnt<0){cnt=n;}
                    $slideWrap.stop().animate({left:-$slideW*cnt}, 0);
                });
            }

            function prevSlideCountFn(){
                cnt--;
                section3SlideFn();
            }
            function nextSlideCountFn(){
                cnt++;
                section3SlideFn();
            }

            $prevBtn.on({
                click:function(){
                    // clearInterval(setId);   // 자동 실행을 일시중지
                    timerFn();
                    if (!$slideWrap.is(':animated')) {
                        prevSlideCountFn();
                    }
                }
            })
            $nextBtn.on({
                click:function(){
                    timerFn();
                    if (!$slideWrap.is(':animated')) {
                        nextSlideCountFn();
                    }
                }
            })


            $slideView.swipe({
                swipeLeft:function(){
                    timerFn();
                    if (!$slideWrap.is(':animated')) {
                        nextSlideCountFn()
                    }
                },
                swipeRight:function(){
                    timerFn();
                    if (!$slideWrap.is(':animated')) {
                        prevSlideCountFn()
                    }
                },
            });

            // 마우스가 슬라이드 박스 안에있을때는 이벤트 x
            // 마우스가 슬라이드 박스 밖으로 나가면 이벤트 실행
            // $slideViewEnter.on({
            //     mouseenter:function(){
            //         clearInterval(setId);
            //     },
            //     mouseleave:function(){
            //         autoPlay();
            //     }
            // });

            function autoPlay(){
                // console.log('할당된 메모리 번지 번호 ',setId); // 할당 전
                setId = setInterval(nextSlideCountFn, 4000);
                // console.log('할당된 메모리 번지 번호 ',setId); // 할당 후
            }
            autoPlay(); // 로딩시 4초후 4초간격으로 실행

            // 타이머함수 만들기
            // 이벤트(클릭, 터치) 발생 시 애니메이션 일시정지
            // 사용자에의한 이벤트(클릭, 터치)가 없을경우 자동타이머 재샐행
            // 다음 슬라이드 함수 즉시실행 이후 자동타이머 실행
            var t = 0;
            var setId2 = null;
            function timerFn(){
                t = 0;
                clearInterval(setId);
                clearInterval(setId2);
                setId2 = setInterval(function(){
                    t++;
                    if(t>=4){
                        clearInterval(setId);
                        clearInterval(setId2);
                        nextSlideCountFn();
                        autoPlay();
                    }
                }, 1000);
            }


            // function pauseFn(){
            //     // clearInterval(setId);   // 자동 실행을 일시중지
            //     var t = 0;
            //     clearInterval(setId);   // 일시정지
            //     clearInterval(setId2);   // 일시정지
            //     var setId2 = setInterval(function(){ // 카운터
            //         t++;
            //         console.log(t);
            //         if(t>=3){
            //             clearInterval(setId);  // 일시정지
            //             clearInterval(setId2);  // 일시정지
            //             t = 0;
            //             $nextBtn.trigger('click');  // 다음 버튼을 강제로 클릭하는 메서드
            //             // nextSlideCountFn();     // 타이머 카운팅 후 즉시 함수실행
            //             autoPlay(); // setInterval 값을 3000을 주었기때문에 3초 후 해당함수 실행
            //         }
            //     }, 1000);
            // }
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