;(function($){

    var timer = {

        init:function(){
            this.analogTimerFn();

        },
        analogTimerFn:function(){
            var today  = null;
            var hour   = null;
            var minute = null;
            var second = null;

            var year  = null;
            var month = null;
            var date  = null;
            var day   = null;
            yoil    = ['SUN', 'MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT'];

            var timerImg02 = $('.timer-img02');
            var timerImg03 = $('.timer-img03');
            var timerImg04 = $('.timer-img04');
            var dateBox    = $('.date-box span');
            var digitalTimer = $('.digital-timer span');
            var txt  = '';
            var txt2 = '';
            // var fastTimer = $('.digital-timer i');
            // var txt3 = '';

            var y = 0;
            var m = 0;

            function timerFn(){
                today  = new Date();
                hour   = today.getHours();
                minute = today.getMinutes();
                second = today.getSeconds();

                year  = today.getFullYear();
                month = today.getMonth()+1;
                if(month<10){month='0'+month;}
                else{month=month;}

                date  = today.getDate();
                if(date<10){date='0'+date;}
                else{date=date;}

                day   = today.getDay();

                txt = year +'-'+ month +'-'+ date +'-'+ yoil[day];

                timerImg02.css({transform:'rotate('+ second*6 +'deg)'});
                timerImg03.css({transform:'rotate('+ minute*6 +'deg)'});
                timerImg04.css({transform:'rotate('+ ((hour*30)+(minute*0.5)) +'deg)'});

                dateBox.html(txt);
            }

            function digitalFn(){
                today  = new Date();
                hour   = today.getHours();
                if(hour<10){hour='0'+hour;}
                else{hour=hour;}

                minute = today.getMinutes();
                if(minute<10){minute='0'+minute;}
                else{minute=minute;}

                second = today.getSeconds();
                if(second<10){second='0'+second;}
                else{second=second;}

                // console.log(hour, minute, second);
                txt2 = hour + ' : ' + minute + ' : ' + second;
                digitalTimer.html(txt2);
            }
            
            setInterval(function(){
                timerFn();
                digitalFn();
            }, 1000);
            timerFn();

            // setInterval(function(){
            //     today  = new Date();
            //     second = today.getSeconds();
            //     fastSecond = second/100;

            //     txt3 = fastSecond;
            //     console.log(fastSecond)
            //     fastTimer.html(txt3);
            // },10)

            var col = null;
            var firstDay = null;
            var lastDate = null;
            var prevlastDate = null;
            var cnt = null;
        
            function calenderFn(y, m){
                col = null;
                prevlastDate = null;
                cnt = null;

                $('.calender table caption').html( y +'년'+ m +'월');

                firstDay = new Date(y +'-'+ m +'-'+ 1).getDay();
                col = firstDay;
                prevlastDate = new Date(y,m-1, 0).getDate();
                lastDate = new Date(y, m, 0).getDate();


                // 이번달 화면일경우에만
                // 이전, 다음달일경우 리무브
                if(m == (today.getMonth()+1) && y== today.getFullYear()){
                    $('td').eq(firstDay-1+today.getDate()).addClass('today');
                }

    
                for(var i=1; i<=lastDate; i++){
                    if(col!==null){
                        $('td').eq(col).html(i);
                        col++;

                    }
                }
                
                for(var i=firstDay-1; i>=0; i--){
                    // console.log(prevlastDate);
                    $('td').eq(i).html(prevlastDate).addClass('prev-month');
                    prevlastDate--;
                }

                for(var i=col; i<=$('td').length; i++){
                    cnt++;
                    $('td').eq(i).html(cnt).addClass('next-month');
                }

                // 토요일에 글자색 파란색주기
                for(var i=6; i<=$('td').length; i+=7){
                    $('td').eq(i).addClass('sat');
                }

                // 일요일에 글자색 빨간색주기
                for(var i=0; i<=$('td').length; i+=7){
                    $('td').eq(i).addClass('sun');
                }
                // console.log(y, m);
            }
            calenderFn(year, month);
            

            y = year;
            m = month;

            $('.prev-btn').on({
                click:function(){
                    m--;
                    if(m<1){m=12;y--;}
                    $('td').removeClass('prev-month');
                    $('td').removeClass('next-month');
                    $('td').removeClass('today');
                    calenderFn(y, m);
                }
            })
            $('.next-btn').on({
                click:function(){
                    m++;
                    if(m>12){m=1;y++;}
                    $('td').removeClass('prev-month');
                    $('td').removeClass('next-month');
                    $('td').removeClass('today');
                    calenderFn(y, m);
                }
            })

        }
        

    }   // timer 끝

    timer.init();

})(jQuery);