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

            var y = 0;  // 년 카운트
            var m = 0;  // 월 카운트

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

                txt     = year + ' - ' + month + ' - ' + date + ' - ' + yoil[day];


                timerImg2.css({transform:'rotate(' + seconds*6 + 'deg)'});
                timerImg3.css({transform:'rotate(' + minutes*6 + 'deg)'});
                timerImg4.css({transform:'rotate(' + ((hours*30)+(minutes*0.5)) + 'deg)'});

                dateBox.html(txt);
            }

            // 현재시간
            setInterval(function(){
                timerFn();
            }, 1000);
            timerFn();
            
            // var lastDate = null;
            // var firstDay = null;

            // for(var i=2018; i<=2021; i++){
            //     for(var j=0; j<=12; j++){
            //         lastDate = new Date(i, j, 0).getDate();
            //         console.log('마지막일자', + i + ',' + j + ',' + lastDate);
            //     }
            // }

            // 5월 달력일자 출력
            // firstDay = new Date('2021-5-0').getDay();     // 5월1일의 요일을 출력
            // lastDate = new Date(2021, 5, 0).getDate();    // 5월의 마지막날을 출력
            // for(var i=1; i<=lastDate; i++){
            //     var day = new Date('2021-5-'+i).getDay();
            //     console.log(i +'일 ' + yoil[day]);
            // }


            // 달력은 총 42개의 칸(td)
            // 1. 5월1일 첫날 요일(토요일 idx=6)에 맞게 칸(columm)을 설정
            var lastDate = null;
            var firstDay = null;
            var col      = null;
            var prevLastDate = null;
            var cnt = null;     // 다음달 일자 증가값

            function calenderFn(y, m){
                col = null;
                prevLastDate = null;
                cnt = null;
                
                $('.calender table caption').html( y +'년'+ m +'월');
                $('td').removeClass('today');

                firstDay = new Date(y + '-' + m + '-' + 1).getDay();   // 5월 1일 요일 구하기
                col      = firstDay;                        // 몇번째 칸에서 시작하는가를 결정, 카운트 ~ 마지막날까지(lastDate)
                prevLastDate = new Date(y, m-1, 0).getDate();      // 4월 마지막 일자 구하기
                lastDate = new Date(y, m, 0).getDate();  // 5월 마지막 일자 구하기
                
                // 오늘 날짜의 달, 일 가져오기
                var todayY = new Date().getFullYear();
                var todayM = new Date().getMonth()+1;
                var todayD = new Date().getDate();
    
                for(var i=1; i<=lastDate; i++){
                    if(col!==null){
                        $('td').eq(col).html(i);
                        if(todayY == y && todayM == m){
                            if(todayD == i){
                                $('td').eq(col).addClass('today');
                            }
                        }
                        else{
                            $('td').removeClass('today');
                        }

                        col++;
                    }
                }

                // 이번달 첫날 이전의 빈칸을 이전달 마지막 날자로 차례대로 채우기
                for(var i=firstDay-1; i>=0; i--){
                    // $('td').removeClass('prev-month');   // 버튼 클릭시 이전, 다음달로 이동시에 초기화
                    $('td').eq(i).html(prevLastDate).addClass('prev-month');
                    prevLastDate--;
                }

                // 이번달 칸번호 카운트변수가 다음빈칸의 첫칸이 됨. 그리고 증가 카운트
                // td.length 미만까지
                for(var i=col;i<$('td').length; i++){
                    // console.log(i);
                    cnt++;
                    $('td').eq(i).html(cnt).addClass('next-month');
                }
            }

            calenderFn(year, month);    // 아규먼트

            y = year;   // 변수에 현재 년 대입
            m = month;  // 변수에 현재 월 대입

            // 다음달 버튼
            $('.next-btn').on({
                click:function(){
                    m++;
                    // 월이 12보다 커지면 년을 1만큼 증가하고 월은 1로
                    if(m>12){y++;m=1;}
                    console.log(y, m);
                    $('td').removeClass('prev-month');
                    $('td').removeClass('next-month');
                    calenderFn(y, m);
                }
            })

            // 이전달 버튼
            $('.prev-btn').on({
                click:function(){
                    m--;
                    // 월이 1보다 작아지면 년을 1만큼 감소하고 월은 12로
                    if(m<1){y--;m=12;}
                    console.log(y, m);
                    $('td').removeClass('prev-month');
                    $('td').removeClass('next-month');
                    calenderFn(y, m);
                }
            })


        }

    }   // timer 끝

    timer.init();

})(jQuery);