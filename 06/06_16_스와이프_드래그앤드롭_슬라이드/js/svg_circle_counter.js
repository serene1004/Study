(function($){

  var circle = {
      init:function(){
        this.animationFn();
      },
      animationFn:function(){
       
          var circle = $('.circle');
          var number =  $('.number');          
          var totLen = [];
          var percent = [.68, .92, .74, .85]; //93%
          var second = 3;    //4초
          var perLen = [];
          var piece = []; //초당 길이 마디
          var cnt = [0, 0, 0, 0]; //누적변수는 반드시 초기값 설정
          var setId = [];


              $.each(circle, function(idx, obj){
                  totLen[idx] = Math.ceil( obj.getTotalLength() ); 
                  
                  obj.style.strokeDasharray = totLen[idx];
                  obj.style.strokeDashoffset = totLen[idx];
                  

                  // console.log( 'totLen[' + idx + ']', totLen[idx] );
                  
                  perLen[idx] = totLen[idx] * percent[idx];

                  // console.log( ' percent['+idx+']' ,  percent[idx] );
                  // console.log( 'perLen['+idx+']' , perLen[idx] );

                  piece[idx] = (perLen[idx]/second)/100; //0.01초 에 한마디
                  // console.log( 'piece['+idx+']', piece[idx] );



                  setId[idx] = setInterval(countFn, 10);
                  function countFn(){
                      cnt[idx] += piece[idx];

                      // console.log( 'cnt['+idx+']', cnt[idx] );

                      if( cnt[idx] > perLen[idx] ){ //93% 길이를 초과하면 끝
                        clearInterval( setId[idx] );
                      }
                      else{
                        $(obj).css({ strokeDashoffset: totLen[idx]-cnt[idx] }); //원형 라인이 그려진다.
                        number.eq(idx).html( Math.ceil(cnt[idx]/totLen[idx]*100) + '%' ); //현재의 길이/총길이 
                      }
                  }



              });


      }
  }

  circle.init();


})(jQuery);