;(function($){

    var ajaxText = {

        init:function(){
            this.ajaxTextFn();

        },
        ajaxTextFn:function(){
            var $textBtn = $('.text-btn');
            var $tBody  = $('.sungjuk tbody');
            var a = [];
            var temp = null;
            var rank = 1;
            var txt = '';


            $textBtn.on({
                click:function(){
                    $.ajax({
                        url:'./data/sungjuk.txt',
                        dataType:'text',
                        success:function(data){
                            
                            // 줄끝을 split('.') .을 기준으로 자름
                            var record = data.split('.');
                            
                            $.each(record, function(idx){
                                // 칸을 split(' ') 공백을 기준으로 자름
                                var field = record[idx].split(' ');

                                a[idx] =  [];
                                
                                a[idx][0] = parseInt(field[0]);
                                a[idx][1] = field[1];
                                a[idx][2] = parseInt(field[2]);
                                a[idx][3] = parseInt(field[3]);
                                a[idx][4] = parseInt(field[4]);
                                a[idx][5] = a[idx][2] + a[idx][3] + a[idx][4];
                                a[idx][6] = Math.round(a[idx][5]/3);

                                if(a[idx][6] >= 95){
                                    a[idx][7] = 'A+';
                                }
                                else if(a[idx][6] >= 90){
                                    a[idx][7] = 'A';
                                }
                                else if(a[idx][6] >= 85){
                                    a[idx][7] = 'B+';
                                }
                                else if(a[idx][6] >= 80){
                                    a[idx][7] = 'B';
                                }
                                else if(a[idx][6] >= 70){
                                    a[idx][7] = 'C';
                                }
                                else if(a[idx][6] >= 60){
                                    a[idx][7] = 'D';
                                }
                                else{
                                    a[idx][7] = 'F';
                                }

                            });
                            
                            for(var i=0; i<a.length; i++){
                                rank=1;
                                for(var j=0; j<a.length; j++){
                                    if(a[i][5]<a[j][5]){
                                        rank++;
                                    }
                                }
                                a[i][8] = rank;
                            }

                            for(var i=0; i<a.length; i++){
                                for(var j=i+1; j<a.length; j++){
                                    if(a[i][5]<a[j][5]){
                                        for(var k=0; k<=8; k++){
                                            temp = a[i][k];
                                            a[i][k] = a[j][k];
                                            a[j][k] = temp;

                                        }
                                    }
                                }
                            }


                            for(var i=0; i<a.length; i++){
                                txt += '<tr>';
                                for(var j=0; j<a.length-1; j++){
                                    txt += '<td>'+ a[i][j] +'</td>';
                                }
                                txt += '</tr>';
                            }

                            $tBody.html(txt);
                            txt='';

                        },
                        error:function(){
                            alert('ajax failed');
                        }
                    });
                }
            });

        }

    }

    ajaxText.init();

})(jQuery);