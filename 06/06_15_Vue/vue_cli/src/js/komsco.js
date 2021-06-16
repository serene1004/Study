;(function($,window,document,undefined){

    var komsco = {
        init: function(){
          this.headerFn();
          this.section1Fn();
          this.section2Fn();
          this.section3Fn();
          this.section4Fn();
          this.section5Fn();
          this.section6Fn();
          this.footerFn();

        },
        headerFn: function(){
        
        },
        section1Fn: function(){
        
            var cnt = 0;
            var $slide = $('.slide');
            var n = $('.slide').length-1;
            var $pageBtn = $('.page-btn')
            var $stopPlayBtn = $('.stop-play-btn');
            var z = null; //초기값

            var setId = null;
            var setId2 = null;
            var second = 0; //증가변수
            var t = 0;

            //1.메인 다음 슬라이드 함수
            // 디버그(오류수정)
            // 현재 슬라이드(cnt-1)는 그대로 있고 다음슬라이드 (cnt)가 나타난다.
            function mainNextSlideFn(){
              if(z==null){ //페이지 버튼을 클릭한 적이 없는경우
                z = cnt==0?n:cnt-1; //z는 null 이 아니다
              }
              console.log('z',z);
              console.log('cnt',cnt);

              $slide                   .css({ zIndex:1}).stop().animate({opacity:1},0); //전체 슬라이드 초기화
              $slide.eq(z).css({zIndex:2});                                             //현재 슬라이드를 다음 슬라이드가 덮는다.
              $slide.eq(cnt)           .css({zIndex:3}).stop().animate({opacity:0},0).animate({opacity:1},1000); //부드럽게 사라진다.
              pageButtonEventFn();
              z = null; //초기화

            }
            
            //1.메인 이전 슬라이드 함수
            // 현재 슬라이드(cnt+1)는 그대로 있고 다음슬라이드 (cnt)가 나타난다.
            function mainPrevSlideFn(){
              if(z==null){ //페이지 버튼을 클릭한 적이 없는경우
                z = cnt == n ?0:cnt+1;
              }
              $slide                   .css({zIndex:1}).stop().animate({opacity:1},0); //전체 슬라이드 초기화
              $slide.eq(cnt)           .css({zIndex:2});                               //현재 슬라이드를 다음 슬라이드가 덮는다.
              $slide.eq(z)             .css({zIndex:3}).stop().animate({opacity:1},0).animate({opacity:0},1000); //부드럽게 사라진다.
              pageButtonEventFn();
              z = null; //초기화
            }
            
            //2.다음 슬라이드 카운트 함수
            function mainNextSlideCountFn(){
              cnt ++;
              if(cnt>n){
                cnt=0;
              }
              mainNextSlideFn()
            }
            //2-1.이전 슬라이드 카운트 함수
            function mainPrevSlideCountFn(){
              cnt --;
              if(cnt<0){
                cnt=n;
              }
              mainPrevSlideFn()
            }
            //3. 다음 슬라이드 실행하는 자동 타이머
            function autoTimerFn(){
              setId = setInterval(mainNextSlideCountFn,4000);
            } 
            autoTimerFn();

            //4. 페이지버튼 이벤트 함수
            function pageButtonEventFn(){
              $pageBtn.removeClass('addPage');
              $pageBtn.eq(cnt).addClass('addPage');
            }

/*             //5. 페이지 버튼 클릭 이벤트
            $pageBtn.eq(0).on({
              click:function(){
                cnt = 0;  
                mainPrevSlideFn()
              }
            })

            //페이지 두번째 버튼 클릭 시
            $pageBtn.eq(1).on({
              click:function(){
                if(cnt > 1 ){ // cnt가 현재 클릭한 인덱스 번호보다 크면(2,3) 
                  cnt = 1;  
                  mainPrevSlideFn()
                }
                if(cnt < 1 ){ // cnt가 현재 클릭한 인덱스 번호보다 작으면(0)                 
                  cnt = 1;
                  mainNextSlideFn()
                }
              }
            });

            //페이지 세번째 버튼 클릭 시
            $pageBtn.eq(2).on({
              click:function(){
                if(cnt > 2 ){ // cnt가 현재 클릭한 인덱스 번호보다 크면(4) 
                  cnt = 2;  
                  mainPrevSlideFn()
                }
                if(cnt < 2 ){ // cnt가 현재 클릭한 인덱스 번호보다 작으면(0,1)                 
                  cnt = 2;
                  mainNextSlideFn()
                }
              }
            });
            //페이지 두번째 버튼 클릭 시
            $pageBtn.eq(1).on({
              click:function(){
                if(cnt > 1 ){ // cnt가 현재 클릭한 인덱스 번호보다 크면(2,3) 
                  cnt = 1;  
                  mainPrevSlideFn()
                }
                if(cnt < 1 ){ // cnt가 현재 클릭한 인덱스 번호보다 작으면(0)                 
                  cnt = 1;
                  mainNextSlideFn()
                }
              }
            });

            $pageBtn.eq(3).on({
              click:function(){
                cnt = 3;  
                mainNextSlideFn()
              }
            });

 */
              //each()
              $pageBtn.each(function(idx){
                $(this).on({
                  click:function(e){
                      e.preventDefault();
                      //현재 실행중인 슬라이드
                      z = cnt; //이전이나 다음일 경우 현재버튼 클릭 인덱스보다 1이 작거나 크다.

                      if( cnt > idx ){ //페이지버튼 클릭 인덱스 값이 cnt 보다 더 작으면
                        cnt = idx;
                        mainPrevSlideFn() //메인 이전 슬라이드가 호출된다.
                      }

                      if( cnt < idx ){ //페이지버튼 클릭 인덱스 값이 cnt 보다 더 크면
                        cnt = idx;
                        mainNextSlideFn() //메인 다음 슬라이드가 호출된다.
                      }
                      //타이머 중지
                      stopAndAutoPlay(); //초를 카운트
                  }
                });
              });

         
              //6. 타이머 중지 그리고 자동 플레이
              function stopAndAutoPlay(){
                
                second = 0;
                clearInterval(setId);
                clearInterval(setId2);
                $stopPlayBtn.addClass('addStop'); //플레이버튼 ▶ 으로 이미지 변경

                setId2 = setInterval(function(){
                  second++;
                  console.log(second + '초');
                  if(second >= 5){
                    second = 0;
                    clearInterval(setId);
                    clearInterval(setId2);
                    mainNextSlideCountFn(); //즉시 다음 슬라이드 호출 실행
                    autoTimerFn(); //오토 타이머는 4초 후에 실행
                    $stopPlayBtn.removeClass('addStop'); //플레이 버튼 ||로 변경
                  }
                },1000);

              }
              
              //7. 정지버튼 클릭 이벤트
              $stopPlayBtn.on({
                click:function(e){
                  e.preventDefault();
                  if(t == 0){
                    t = 1;
                    clearInterval(setId); //중지
                    $(this).addClass('addStop');
                  }
                  else{
                    t =0;
                    clearInterval(setId); 
                    mainNextSlideCountFn();
                    autoTimerFn(); //재생 
                    $(this).removeClass('addStop');
                  }
                  
                }
              })

        },
        section2Fn: function(){
          
          var $tabBtn = $('.tab-btn');
          var $row2_1 = $('.row2-1');
          var $row2_2 = $('.row2-2');
          
          $tabBtn.each(function(idx){
            $(this).on({
              
              click:function(e){
                  $tabBtn.removeClass('addTabbtn');
                  $(this).addClass('addTabbtn');
                  e.preventDefault();
                  if(idx == 0){
                    $row2_1.css({zIndex:2,position:'relative'}).stop().animate({opacity:0},0).animate({opacity:1},1000);
                    $row2_2.css({zIndex:1,position:'absolute'}).stop().animate({opacity:0},0).animate({opacity:1},0);
                  }

                  if(idx == 1){
                    $row2_1.css({zIndex:1,position:'absolute'}).stop().animate({opacity:0},0).animate({opacity:1},0);
                    $row2_2.css({zIndex:2,position:'relative'}).stop().animate({opacity:0},0).animate({opacity:1},1000);
                  }

              }
            })
          });

              
        },
        section3Fn: function(){
        
  
        },
        section4Fn: function(){
       
        },
        section5Fn: function(){
        
        
        },
        section6Fn: function(){
        
           
        },
        footerFn: function(){
        
           
        },
    
    } // 객체 끝 

    komsco.init();

    

})(jQuery,window,document);