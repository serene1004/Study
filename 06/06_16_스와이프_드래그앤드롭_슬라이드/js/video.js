(function($){

  var obj = {
      init:function(){
        this.videoResizeFn();
        this.videoControlFn();
      },
      videoResizeFn: function(){
        var winW   = 0;
        var winH   = 0;
        var vidW   = 0;
        var vidH   = 0;
        var marT   = 0;
        var marL   = 0;
        var $mainVideo = $('.main-video');
        var $section1 = $('#section1');

            
            function resizeFn(){
              winW = $(window).innerWidth();
              winH = $(window).innerHeight();
              vidW = $mainVideo.innerWidth();
              vidH = $mainVideo.innerHeight();
              marT = (winH-vidH)/2; //(969-1080)/2 = -55.5
              marL = (winW-vidW)/2; //(1903-1920)/2 = -8.5

              $section1.css({ width: winW, height: winH });

              //창너비가 비디오 너비보다 크면
              if( winW > vidW ){
                $mainVideo.css({ width: winW, height: 'auto' });
              }

              //창높이가 비디오 높이보다 크면
              if( winH > vidH ){
                $mainVideo.css({ width: 'auto', height: winH });
              }

              $mainVideo.css({ marginTop: marT, marginLeft: marL });

            }

            resizeFn();
            setTimeout(resizeFn,10);

            $(window).resize(function(){
              resizeFn();
            });

      },
      videoControlFn: function(){
          //비디오 콘트롤 비디오 재생 정지 / 사운드 켜기 끄기
          var $mainVideo = $('.main-video');
          var t = 0;
          var t2 = 0;
          var x = 1;

              $mainVideo.get(0).autoplay = true; //자동 재생 true
              $mainVideo.get(0).muted = true; //사운드 꺼짐 true
              $mainVideo.get(0).loop = false; //반복재생 true
              $mainVideo.get(0).currentTime = 0; //재생 싯점위치를 지정
              x = Number(xspeed_form.xspeed.value); //폼 셀렉트 옵션 값
              $mainVideo.get(0).playbackRate = x; //1배속

              //일시정지와 재시작
              $('.play-btn').on({
                  click:function(){
                    if( t==0 ){
                      t=1;
                      $('.control-box').addClass('addPlay');
                      $mainVideo.get(0).pause();
                    }
                    else {
                        t=0;
                        $('.control-box').removeClass('addPlay');
                        $mainVideo.get(0).play();
                    }
                  }
              });


              //volume-btn
              $('.volume-btn').on({
                click:  function(){
          
                  if( t2==0 ){
                    t2=1;
                    $mainVideo.get(0).muted = false; //사운드 켜짐
                    $(this).children().attr('class','fa fa-volume-up');
                  }
                  else{
                    t2=0;
                    $mainVideo.get(0).muted = true; //사운드 꺼짐
                    $(this).children().attr('class','fa fa-volume-off');
                  }

                }
              });

              //리 프레이 다시시작
              $('.replay-btn').on({
                  click:function(){
                    $mainVideo.get(0).currentTime = 0;
                    $mainVideo.get(0).play();
                    //재시작
                    $('.control-box').removeClass('addPlay');
                    t = 0; //초기화
                  }
              });


              //배속 x0.5 x0.75  x1  x1.25  x1.5  x1.75  x2
              $('#xspeed').on({
                change: function(){
                    x = Number(xspeed_form.xspeed.value);
                    //배속 지정
                    $mainVideo.get(0).playbackRate = x; //재생 시간 조절 0.5 0.7 1 1.25 ....  2
                }
              });


              //비디오 종료(ended)되면
              //플레이 버튼이 나타나게 한다.
              //반드시 타이머를 이용 돌려서 현재 싯점과 종료 싯점을 파악하고 제어 할 수 있다.
              setId = setInterval(function(){                
                if( $mainVideo.get(0).ended == true ){
                // if( $mainVideo.get(0).currentTime > 10 ){
                  $mainVideo.get(0).pause();  //currentTime 사용시 정지 필요함.
                  $mainVideo.get(0).currentTime = 0; //종료후 처음으로 이동한다.
                  $('.control-box').addClass('addPlay');
                  t = 1; //정지 초기값
                  clearInterval( setId );
                }
              },100);
              

      }

  };

  obj.init();

})(jQuery);