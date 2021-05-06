;(function($){

    var timer = {

        init:function(){
            this.analogTimerFn();

        },
        analogTimerFn:function(){
            var today = new Date(); // 날짜객체
            var hours = today.getHours;
            var minutes = today.getMinutes;
            var seconds = today.getSeconds;

            var timerImg2 = $('.timer-img02');  // 초
            var timerImg3 = $('.timer-img03');  // 분
            var timerImg4 = $('.timer-img04');  // 시

            // 현재시간
            setInterval(function(){
                var today = new Date(); // 날짜객체
                var hours = today.getHours;
                var minutes = today.getMinutes;
                var seconds = today.getSeconds;

                timerImg2.css({transform:'rotate(' + seconds + 'deg)'});
                timerImg3.css({transform:'rotate(' + minutes + 'deg)'});
                timerImg4.css({transform:'rotate(' + hours   + 'deg)'});
            }, 1000);


        }

    }   // timer 끝

    timer.init();

})(jQuery);