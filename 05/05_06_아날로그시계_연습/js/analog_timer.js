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
                if(day===0){day='일요일';}
                else if(day===1){day='월요일';}
                else if(day===2){day='화요일';}
                else if(day===3){day='수요일';}
                else if(day===4){day='목요일';}
                else if(day===5){day='금요일';}
                else if(day===6){day='토요일';}

                txt = year +'-'+ month +'-'+ date +'-'+ day;

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

            // setInterval(function(){
            //     today  = new Date();
            //     second = today.getSeconds();
            //     fastSecond = second/100;

            //     txt3 = fastSecond;
            //     console.log(fastSecond)
            //     fastTimer.html(txt3);
            // },10)

            var lastDate = null;
            var firstDay = null;
        
            firstDay = new Date('2021-6-1').getDay();
            lastDate = new Date(2021, 6, 0).getDate();

            for(var i=1; i<=lastDate; i++){
                var day = new Date('2021-6-'+i).getDay();
                console.log(i +'일 ' + yoil[day]);
            }

        }
        

    }   // timer 끝

    timer.init();

})(jQuery);