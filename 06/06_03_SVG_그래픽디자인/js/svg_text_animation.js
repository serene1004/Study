(function($){

    var svg = $('#svg').find('path');
    var objTot = [];

        function textAnimationFn(){
          
            $.each(svg, function(idx, obj){
                objTot[idx] = Math.ceil(obj.getTotalLength()); //총길이를 자리올리

                //총 배열 길이를 strokeDasharray 에 지정한다.
                //총 배열 길이만큼  strokeDashoffset  에 지정한다.
                obj.style.strokeDasharray = objTot[idx];
                obj.style.strokeDashoffset = objTot[idx];
               
                $(obj).stop().animate({ strokeDashoffset: 0 },3000, function(){
                    $(this).stop().animate({ strokeDashoffset: objTot[idx] },2000);
                });

            });

        }

        textAnimationFn();
        setInterval(textAnimationFn, 6000);




})(jQuery);