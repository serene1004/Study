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

            // litho 객체 배열 서브메뉴를 컴포넌트요소에 넣기
            // 서브1

            var $col = $('#nav .col')
            var txt = '';

                // 서브1 : 1~4열까지 반복

                // if문 사용 자동화
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


                // // 구구단하듯이
                //     txt = '<dt>'+lithoNav.sub1[0].sub[0]+'</dt>';
                //     for(var j=1; j<lithoNav.sub1[0].sub.length; j++){
                //         txt += '<dd><a href="#">'+lithoNav.sub1[0].sub[j]+'</a></dd>';
                //     }
                //     $col.eq(0).html(txt);
                //     txt = '';    

                // // 서브1 자동화    
                // for(var i in lithoNav.sub1){
                //     txt = '<dt>' + lithoNav.sub1[i].sub[0] + '</dt>';
                //     for(var j in lithoNav.sub1[i].sub){
                //         txt += '<dd><a href="#">' + lithoNav.sub1[i].sub[j] + '</a></dd>';
                //     }
                //     $col.eq(i).html(txt);
                //     txt = '';
                //     }

                // // 1열
                // txt = '<dt>' + lithoNav.sub1[0].sub[0] + '</dt>';
                // for(var i in lithoNav.sub1[0].sub){
                //     txt += '<dd><a href="#">' + lithoNav.sub1[0].sub[i] + '</a></dd>';
                // }
                // $col.eq(0).html(txt);
                // txt = '';

                // // 2열
                // txt = '<dt>' + lithoNav.sub1[1].sub[0] + '</dt>';
                // for(var i in lithoNav.sub1[1].sub){
                //     txt += '<dd><a href="#">' + lithoNav.sub1[1].sub[i] + '</a></dd>';
                // }
                // $col.eq(1).html(txt);
                // txt = '';

                // //  for(var j=1; j<lithoNav.sub1[1].sub.length; j++)   구구단식 만들듯이
                // txt = '<dt>'+lithoNav.sub1[1].sub[0]+'</dt>';
                // for(var j=1; j<lithoNav.sub1[1].sub.length; j++){
                //     txt += '<dd><a href="#">'+lithoNav.sub1[1].sub[j]+'</a></dd>';
                // }
                // $col.eq(1).html(txt);
                // txt = '';

                // // 3열
                // txt = '<dt>' + lithoNav.sub1[2].sub[0] + '</dt>';
                // for(var i in lithoNav.sub1[2].sub){
                //     txt += '<dd><a href="#">' + lithoNav.sub1[2].sub[i] + '</a></dd>';
                // }
                // $col.eq(2).html(txt);
                // txt = '';

                // // 4열
                // txt = '<dt>' + lithoNav.sub1[3].sub[0] + '</dt>';
                // for(var i in lithoNav.sub1[3].sub){
                //     txt += '<dd><a href="#">' + lithoNav.sub1[3].sub[i] + '</a></dd>';
                // }
                // $col.eq(3).html(txt);
                // txt = '';


                // 서브2
                var $sub2Btn = $('.sub2 .sub-btn')
                var $sub2Sub = $('.sub2 .subsub')
                    
                for(var i in lithoNav.sub2){
                    txt = lithoNav.sub2[i].sub;
                    icon=$sub2Btn.eq(i).html();
                    txt+=icon;
                    $sub2Btn.eq(i).html(txt);
                    txt='';
                }

                // txt = lithoNav.sub2[0].sub+'<i class="fas fa-angle-right"></i>';
                // $sub2Btn.eq(0).html(txt);
                // txt = '';

                // txt= lithoNav.sub2[1].sub+'<i class="fas fa-angle-right"></i>';
                // $sub2Btn.eq(1).html(txt);
                // txt = '';

                // txt= lithoNav.sub2[2].sub+'<i class="fas fa-angle-right"></i>';
                // $sub2Btn.eq(2).html(txt);
                // txt = '';
                // txt= lithoNav.sub2[3].sub+'<i class="fas fa-angle-right"></i>';

                // $sub2Btn.eq(3).html(txt);
                // txt = '';

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



                // // 서브2-1
                // txt += '<li><a href="#">'+ lithoNav.sub2[0].subsub[0] +'</a></li>';
                // txt += '<li><a href="#">'+ lithoNav.sub2[0].subsub[1] +'</a></li>';
                // txt += '<li><a href="#">'+ lithoNav.sub2[0].subsub[2] +'</a></li>';
                // txt += '<li><a href="#">'+ lithoNav.sub2[0].subsub[3] +'</a></li>';
                // $sub2Sub.eq(0).html(txt);
                // txt = '';

                // // 서브2-2
                // txt += '<li><a href="#">'+ lithoNav.sub2[1].subsub[0] +'</a></li>';
                // txt += '<li><a href="#">'+ lithoNav.sub2[1].subsub[1] +'</a></li>';
                // txt += '<li><a href="#">'+ lithoNav.sub2[1].subsub[2] +'</a></li>';
                // $sub2Sub.eq(1).html(txt);
                // txt = ''; 

                // // 서브2-3
                // txt += '<li><a href="#">'+ lithoNav.sub2[2].subsub[0] +'</a></li>';
                // txt += '<li><a href="#">'+ lithoNav.sub2[2].subsub[1] +'</a></li>';
                // txt += '<li><a href="#">'+ lithoNav.sub2[2].subsub[2] +'</a></li>';
                // $sub2Sub.eq(2).html(txt);
                // txt = '';                
                
                // // 서브2-4
                // txt += '<li><a href="#">'+ lithoNav.sub2[3].subsub[0] +'</a></li>';
                // txt += '<li><a href="#">'+ lithoNav.sub2[3].subsub[1] +'</a></li>';
                // txt += '<li><a href="#">'+ lithoNav.sub2[3].subsub[2] +'</a></li>';
                // txt += '<li><a href="#">'+ lithoNav.sub2[3].subsub[3] +'</a></li>';
                // txt += '<li><a href="#">'+ lithoNav.sub2[3].subsub[4] +'</a></li>';
                // txt += '<li><a href="#">'+ lithoNav.sub2[3].subsub[5] +'</a></li>';
                // txt += '<li><a href="#">'+ lithoNav.sub2[3].subsub[6] +'</a></li>';
                // txt += '<li><a href="#">'+ lithoNav.sub2[3].subsub[7] +'</a></li>';
                // txt += '<li><a href="#">'+ lithoNav.sub2[3].subsub[8] +'</a></li>';
                // $sub2Sub.eq(3).html(txt);
                // txt = '';                   

                // 서브3
                var $sub3Btn = $('.sub3 .sub-btn')
                var $sub3sub = $('.sub3 .subsub')
                var icon = '';
                

                for(var i in lithoNav.sub3){
                    txt = lithoNav.sub3[i].sub;
                    icon=$sub3Btn.eq(i).html();
                    txt+=icon;
                    $sub3Btn.eq(i).html(txt);
                    txt='';
                }


                // txt = lithoNav.sub3[0].sub;
                // icon=$sub3Btn.eq(0).html();
                // txt+=icon;
                // $sub3Btn.eq(0).html(txt);


                // for(var i in ){
                //     for(var j in lithoNav.sub3){
                //         txt += '<li><a href="#">'+ lithoNav.sub3[0].subsub[j] +'</a></li>';
                //         $sub3sub.eq(0).html(txt);
                //     }
                //     txt = '';
                // }


                for(var i in lithoNav.sub3){
                    for(var j in lithoNav.sub3[i].subsub){
                        txt += '<li><a href="#">'+ lithoNav.sub3[i].subsub[j] +'</a></li>';
                    }
                    $sub3sub.eq(i).html(txt);
                    txt = '';
                }



                // for(var j in lithoNav.sub3){
                //     txt += '<li><a href="#">'+ lithoNav.sub3[0].subsub[j] +'</a></li>';
                //     $sub3sub.eq(0).html(txt);
                // }
                // txt = '';


                // txt += '<li><a href="#">'+ lithoNav.sub3[0].subsub[0] +'</a></li>';
                // $sub3sub.eq(0).html(txt);
                // txt = '';


                // 서브4
                var $col4 = $('.sub4 .col')

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

                // txt = '<dt>' + lithoNav.sub4[0].sub[0] + '</dt>';
                // for(var i in lithoNav.sub4[0].sub){
                //     txt += '<dd><a href="#">' + lithoNav.sub4[0].sub[i] + '</a></dd>';
                // }
                // $col4.eq(0).html(txt);
                // txt = '';


                //서브5
                var $sub5Btn = $('.sub5 .sub-btn');
                var $sub5Sub = $('.sub5 .subsub');

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

                // txt = lithoNav.sub5[0].sub;
                // icon = $sub5Btn.eq(0).html();
                // txt += icon;
                // $sub5Btn.eq(0).html(txt);
                // txt = '';


                // for(j in lithoNav.sub5[0].subsub){
                //     if(j < 9){
                //         txt += '<li><a href="#" class="sub-sub-btn">'+ lithoNav.sub5[0].subsub[j] +'</a></li>';
                //     }
                //     else{
                //         txt += '<li><a href="#" class="sub-sub-btn">'+ lithoNav.sub5[0].subsub[j] +'<i class="fas fa-angle-right"></i></a></li>';
                //     }
                // }
                // $sub5Sub.eq(0).html(txt);
                // txt = '';

                // for(var j in lithoNav.sub5[1].subsub){
                //     txt += '<li><a href="#" class="sub-sub-btn">'+ lithoNav.sub5[1].subsub[j] +'</a></li>';
                // }
                // $sub5Sub.eq(1).html(txt);
                // txt = '';
                
                // txt += '<li><a href="#" class="sub-sub-btn">'+ lithoNav.sub5[0].subsub[0] +'</a></li>';
                // txt += '<li><a href="#" class="sub-sub-btn">'+ lithoNav.sub5[0].subsub[1] +'</a></li>';
                // txt += '<li><a href="#" class="sub-sub-btn">'+ lithoNav.sub5[0].subsub[2] +'</a></li>';
                // txt += '<li><a href="#" class="sub-sub-btn">'+ lithoNav.sub5[0].subsub[3] +'</a></li>';
                // txt += '<li><a href="#" class="sub-sub-btn">'+ lithoNav.sub5[0].subsub[4] +'</a></li>';
                // txt += '<li><a href="#" class="sub-sub-btn">'+ lithoNav.sub5[0].subsub[5] +'</a></li>';
                // txt += '<li><a href="#" class="sub-sub-btn">'+ lithoNav.sub5[0].subsub[6] +'</a></li>';
                // txt += '<li><a href="#" class="sub-sub-btn">'+ lithoNav.sub5[0].subsub[7] +'</a></li>';
                // txt += '<li><a href="#" class="sub-sub-btn">'+ lithoNav.sub5[0].subsub[8] +'</a></li>';
                // txt += '<li><a href="#" class="sub-sub-btn">'+ lithoNav.sub5[0].subsub[9] +'<i class="fas fa-angle-right"></i></a></li>';
                // txt += '<li><a href="#" class="sub-sub-btn">'+ lithoNav.sub5[0].subsub[10] +'<i class="fas fa-angle-right"></i></a></li>';
                // txt += '<li><a href="#" class="sub-sub-btn">'+ lithoNav.sub5[0].subsub[11] +'<i class="fas fa-angle-right"></i></a></li>';
                // txt += '<li><a href="#" class="sub-sub-btn">'+ lithoNav.sub5[0].subsub[12] +'<i class="fas fa-angle-right"></i></a></li>';
                // $sub5Sub.eq(0).html(txt);
                // txt = '';

                // txt += '<li><a href="#" class="sub-sub-btn">'+ lithoNav.sub5[1].subsub[0] +'</a></li>';
                // txt += '<li><a href="#" class="sub-sub-btn">'+ lithoNav.sub5[1].subsub[1] +'</a></li>';
                // txt += '<li><a href="#" class="sub-sub-btn">'+ lithoNav.sub5[1].subsub[2] +'</a></li>';
                // txt += '<li><a href="#" class="sub-sub-btn">'+ lithoNav.sub5[1].subsub[3] +'</a></li>';
                // txt += '<li><a href="#" class="sub-sub-btn">'+ lithoNav.sub5[1].subsub[4] +'</a></li>';
                // txt += '<li><a href="#" class="sub-sub-btn">'+ lithoNav.sub5[1].subsub[5] +'</a></li>';
                // txt += '<li><a href="#" class="sub-sub-btn">'+ lithoNav.sub5[1].subsub[6] +'</a></li>';
                // txt += '<li><a href="#" class="sub-sub-btn">'+ lithoNav.sub5[1].subsub[7] +'</a></li>';
                // txt += '<li><a href="#" class="sub-sub-btn">'+ lithoNav.sub5[1].subsub[8] +'</a></li>';
                // txt += '<li><a href="#" class="sub-sub-btn">'+ lithoNav.sub5[1].subsub[9] +'</a></li>';
                // txt += '<li><a href="#" class="sub-sub-btn">'+ lithoNav.sub5[1].subsub[10] +'</a></li>';
                // txt += '<li><a href="#" class="sub-sub-btn">'+ lithoNav.sub5[1].subsub[11] +'</a></li>';
                // $sub5Sub.eq(1).html(txt);
                // txt = '';


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
                var $sub6Btn = $('.sub6 .sub-btn')
                var $sub6Sub = $('.sub6 .subsub')


                // for(var i in lithoNav.sub6){
                //     txt = lithoNav.sub6[i].sub;
                //     icon = $sub6Btn.eq(i).html();
                //     txt += icon;
                //     $sub6Btn.eq(i).html(txt);
                // }
                // txt = '';

                // txt = lithoNav.sub6[0].sub;
                // icon = $sub6Btn.html();
                // txt += icon;
                // $sub6Btn.html(txt);
                // txt = '';

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

                // txt = '<li><a href="#">'+ lithoNav.sub6[11].subsub[0] +'</a></li>';
                // $sub6Sub.html(txt);
                // txt = '';


                // 서브7
                var $sub7Dl1 = $('.sub7 dl').eq(0);
                var $sub7Img = $('.sub7 dl img');    // 이미지2개
            

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

                // txt += '<dt>'+lithoNav.sub7[0].sub[0]+'</dt>';
                // txt += '<dd><a href="#">'+lithoNav.sub7[0].sub[1]+'</a></dd>';
                // txt += '<dd><a href="#">'+lithoNav.sub7[0].sub[2]+'</a></dd>';
                // txt += '<dd><a href="#">'+lithoNav.sub7[0].sub[3]+'</a></dd>';
                // txt += '<dd><a href="#">'+lithoNav.sub7[0].sub[4]+'</a></dd>';
                // txt += '<dd><a href="#">'+lithoNav.sub7[0].sub[5]+'</a></dd>';
                // txt += '<dt>'+lithoNav.sub7[0].sub[6]+'</dt>';
                // txt += '<dd><a href="#">'+lithoNav.sub7[0].sub[7]+'</a></dd>';
                // txt += '<dd><a href="#">'+lithoNav.sub7[0].sub[8]+'</a></dd>';
                // txt += '<dd><a href="#">'+lithoNav.sub7[0].sub[9]+'</a></dd>';
                // $sub7Dl1.html(txt);
                // txt = '';


                // 이미지 경로정보 가져와서 객체 배열 이미지 추가

                for(var i=0; i<$sub7Img.length; i++){
                    txt = $sub7Img.eq(i).attr('src');
                    txt += lithoNav.sub7[i+1].sub[0];
                    $sub7Img.eq(i).attr('src', txt);
                    txt = '';
                }

                // txt = $sub7Img.eq(0).attr('src');   // 속성가져오기
                // // txt = $sub7Img.eq(0).porp('src');    // 속성 가져오기
                // txt += lithoNav.sub7[1].sub[0];
                // $sub7Img.eq(0).attr('src', txt);
                // txt = '';

                // txt = $sub7Img.eq(1).attr('src');   // ./img/
                // txt += lithoNav.sub7[2].sub[0];     // menu-banner-01.jpg
                // $sub7Img.eq(1).attr('src', txt);    // ./img/menu-banner-01.jpg
                // txt = '';


             




            ////// 버튼이벤트
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



        },
        section1Fn:function(){
            // 슬라이드의 너비와 높이를 창높이 창너비로 설정한다.(반응형)
            var $slide = $('#section1 .slide')  // 로딩시 변수설정
            var $window = $(window);            // 창
            var $winW = $(window).width();      // 창너비 즉시반환
            var $winH = $(window).height();     // 창높이 즉시반환

            var $slideWrap = $('#section1 .slide-wrap');
            var $nextBtn = $('#section1 .next-btn')
            var $prevBtn = $('#section1 .prev-btn')
            var $pageBtn = $('#section1 .page-btn');
            var cnt = 0;

                // 슬라이드의 너비 높이 설정 완료  // 로딩시 설정
                function resizeFn(){
                    $winW = $(window).width();
                    $winH = $(window).height();
                    $slide.css({width:$winW,height:$winH}); // 즉시 변환 너비 높이 적용 실행
                    $slideWrap.stop().animate({left:-$winW*cnt}, 0);    // 즉시실행 0의 속도
                    // mainSlideFn();   // 메인슬라이드함수 전체를 가져오기때문에 300의 속도가 있음
                }
                resizeFn(); // 로딩시 실행

                // 화면의 크기가(너비와높이) 1픽셀만 변경되어도 동작되는 반응형메서드
                // $window.resize();
                $window.resize(function(){

                    resizeFn();
                });
                

                // 메인슬라이드
                function mainSlideFn(){
                    $slideWrap.stop().animate({left:-$winW*cnt}, 300, function(){
                        if(cnt>2){cnt=0}
                        if(cnt<0){cnt=2}
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
                    click:function(){
                        if (!$slideWrap.is(':animated')) {
                            prevSlideCountFn();
                        }
                    }
                })

                $nextBtn.on({
                    click:function(){
                        if (!$slideWrap.is(':animated')) {
                            nextSlideCountFn();
                        }
                    }
                })


                // 페이지버튼
                // 해당 슬라이드 버튼색상 변경
                function pageBtnColorEnvetFn(){
                    var z = cnt;
                    if(z>2){
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



        },
        section2Fn:function(){
            
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