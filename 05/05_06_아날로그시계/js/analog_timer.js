;(function($){

    var timer = {

        init:function(){
            this.analogTimerFn();

        },
        analogTimerFn:function(){
            var today   = null;
            var hours   = null;
            var minutes = null;
            var seconds = null;
            
            var year    = null;
            var month   = null;
            var date    = null;
            var day     = null;
            yoil    = ['SUN', 'MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT'];
            
            var timerImg2 = $('.timer-img02');  // 초
            var timerImg3 = $('.timer-img03');  // 분
            var timerImg4 = $('.timer-img04');  // 시
            var dateBox   = $('.date-box span');
            var txt = '';

            function timerFn(){
                today   = new Date(); // 날짜객체
                hours   = today.getHours();
                minutes = today.getMinutes();
                seconds = today.getSeconds();

                year    = today.getFullYear();
                month   = today.getMonth()+1;
                if(month<10){month='0'+month;}
                else{month=month;}

                date    = today.getDate();
                if(date<10){date='0'+date;}
                else{date=date;}

                day     = today.getDay();
                yoil    = ['SUN', 'MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT'];
                

                // if(day===0){day='일';}
                // else if(day===1){day='월';}
                // else if(day===2){day='화';}
                // else if(day===3){day='수';}
                // else if(day===4){day='목';}
                // else if(day===5){day='금';}
                // else if(day===6){day='토';}

                txt     = year + ' - ' + month + ' - ' + date + ' - ' + yoil[day];

                // switch(day){
                //     case 0:
                //         yoil = 'SUN';
                //         break;
                //     case 1:
                //         yoil = 'MON';
                //         break;
                //     case 2:
                //         yoil = 'TUE';
                //         break;
                //     case 3:
                //         yoil = 'WEN';
                //         break;
                //     case 4:
                //         yoil = 'THU';
                //         break;
                //     case 5:
                //         yoil = 'FRI';
                //         break;
                //     case 6:
                //         yoil = 'SAT';
                //         break;
                // }

                timerImg2.css({transform:'rotate(' + seconds*6 + 'deg)'});
                timerImg3.css({transform:'rotate(' + minutes*6 + 'deg)'});
                // 시침의 분당각도는 0.5deg
                timerImg4.css({transform:'rotate(' + ((hours*30)+(minutes*0.5)) + 'deg)'});

                dateBox.html(txt);

            }

            // 현재시간
            setInterval(function(){
                timerFn();
            }, 1000);


            // 달력 알고리즘
            // 월별 마지막 날짜 가져오기
            // 1. date 객체 월별설정
            // 2. 변수 설정
            // 3. 출력

            var lastDate = null;
            var firstDay = null;
            
            // for(var i=2018; i<=2021; i++){
            //     for(var j=0; j<=12; j++){
            //         lastDate = new Date(i, j, 0).getDate();
            //         console.log('마지막일자', + i + ',' + j + ',' + lastDate);
            //     }
            // }


            // 5월 달력일자 출력
            firstDay = new Date('2021-5-1').getDay();     // 5월1일의 요일을 출력
            lastDate = new Date(2021, 5, 0).getDate();    // 5월의 마지막날을 출력

            for(var i=1; i<=lastDate; i++){
                var day = new Date('2021-5-'+i).getDay();
                console.log(i +'일 ' + yoil[day]);
            }




        }

    }   // timer 끝

    timer.init();

})(jQuery);