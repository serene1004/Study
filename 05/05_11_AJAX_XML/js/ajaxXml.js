;(function($){

    var ajaxXml = {

        init:function(){
            this.ajaxXmlFn();

        },
        ajaxXmlFn:function(){
            var $xmlBtn = $('.xml-btn');
            var $tBody  = $('.sungjuk tbody');
            var a = [];
            var temp = null;
            var rank = 1;
            var txt = '';


            $xmlBtn.on({
                click:function(){

                    $.ajax({
                        url:'./data/sungjuk.xml',
                        dataType:'xml',
                        success:function(data){
                            
                            // 태그요소는 선택자로 검색하여 데이터처리함.
                            $(data).find('record').each(function(idx){
                                a[idx] = [];

                                a[idx][0] = $(this).find('number').text();
                                a[idx][1] = $(this).find('name').text();
                                a[idx][2] = parseInt($(this).find('kor').text());
                                a[idx][3] = parseInt($(this).find('eng').text());
                                a[idx][4] = parseInt($(this).find('mat').text());
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
                                else if(a[idx][6] >= 75){
                                    a[idx][7] = 'C+';
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
                            
                            // 석차처리
                            // 총점을 기준으로 내림차순 석차처리
                            for(var i=0; i<a.length; i++){
                                rank = 1;
                                for(var j=0; j<a.length; j++){
                                    if(a[i][5] < a[j][5]){
                                        rank++;
                                    }
                                }
                                a[i][8] = rank;
                            }

                            // 총점을 기준으로 석차의 오름차순
                            for(var i=0; i<a.length; i++){
                                for(var j=i+1; j<a.length; j++){
                                    if(a[i][8] > a[j][8]){
                                        for(var k=0; k<=8; k++){
                                            temp = a[i][k];
                                            a[i][k] = a[j][k];
                                            a[j][k] = temp;
                                        }
                                    }
                                }
                            }


                            // 데이터 출력
                            for(var i=0; i<a.length; i++){
                                txt += '<tr>';
                                for(var j=0; j<a.length-1; j++){
                                    txt += '<td>'+ a[i][j] +'</td>';
                                }
                                txt += '</tr>';
                            }
                            $tBody.html(txt);
                            txt ='';
                        },
                        error:function(){
                            alert('ajax failed');
                        }
                    });
                }
            });

        }

    }

    ajaxXml.init();

})(jQuery);