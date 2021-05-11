;(function($){

    var ajaxJson = {

        init:function(){
            this.ajaxJsonFn();

        },
        ajaxJsonFn:function(){
            var a = [];
            var b = [];
            var $jsonBtn = $('.json-btn');
            var $addrBtn = $('.address-btn');
            var txt = '';
            var $tBody = $('.sungjuk tbody');
            var $addrTBody = $('.address tbody');
            var rank = 1;   // 순위는 자신을 1로 설정 후 자신보다 큰사람이 있을경우 +1씩
            var imsi = null;


            $jsonBtn.on({
                click:function(event){
                    event.preventDefault();
                    
                    // AJAX
                    $.ajax({
                        url:'./data/sungjuk.json',  // 외부파일경로
                        dataType:'JSON',            // 파일형식
                        success: function(result){
                            
                            // 결과를 배열에 저장하고 성적처리
                            $.each(result.성적표, function(idx, object){
                                // console.log(idx, object.번호, object.이름, object.자바스크립트, object.웹표준, object.반응형);
                                a[idx] = [];   // 2차원 배열 생성
                                a[idx][0] = object.번호;
                                a[idx][1] = object.이름;
                                a[idx][2] = object.자바스크립트;
                                a[idx][3] = object.웹표준;
                                a[idx][4] = object.반응형;
                                a[idx][5] = Math.round((object.자바스크립트 + object.웹표준 + object.반응형)/3);
                            }); // 배열처리 끝

                            // 석차(순위)처리 : 평균점수의 내림차순
                            for(var i=0; i<a.length; i++){
                                rank = 1;   // 순위 초기화
                                for(var j=0; j<a.length; j++){
                                    if(a[i][5] < a[j][5]){
                                        rank++; // 나보다 큰 점수가 있으면 순위 증가
                                    }
                                }
                                a[i][6] = rank; // 결정된 순위 저장
                            }

                            // 정렬(순위오름차순 == 평균점수의 내림차순) 재 정렬(SORT) - 선택정렬
                            for(var i=0; i<a.length-1; i++){        // 처음부터 마지막 전까지
                                for(var j=i+1; j<a.length; j++){    // 두번째부터 마지막까지
                                    if(a[i][5] < a[j][5]){          // 첫번째와 두번째부터 전체까지 비교
                                        // imsi    = a[i][5];       // i가 j보다 작을때 i의 값을 임시저장 후
                                        // a[i][5] = a[j][5];       // j의 값을 i에 저장하고
                                        // a[j][5] = imsi;          // 임시저장한 i값을 j에 저장
                                        for(var k=0; k<7; k++){
                                            imsi    = a[i][k];
                                            a[i][k] = a[j][k];
                                            a[j][k] = imsi;
                                        }
                                    }
                                }
                            }

                            // 배열 전체 출력 확인
                            // console.log(a.length);
                            for(var i=0; i<a.length; i++){
                                txt += '<tr>';
                                for(var j=0; j<7; j++){
                                    txt +='<td>'+ a[i][j] +'</td>';
                                }
                                txt += '</tr>';
                            }
                            $tBody.html(txt);
                            txt = '';
                            
                        },
                        error: function(){
                            alert('ajax error');
                        }
                    });

                }
            });

            $addrBtn.on({
                click:function(event){
                    event.preventDefault();

                    $.ajax({
                        url:'./data/sungjuk.json',
                        dataType:'JSON',
                        success: function(result){
                            
                            $.each(result.주소록, function(idx, object){
                                b[idx] = [];
                                b[idx][0] = object.번호;
                                b[idx][1] = object.이름;
                                b[idx][2] = object.전화번호;
                                b[idx][3] = object.지역;
                                b[idx][4] = object.등급;
                            });
                            for(var i=0; i<b.length; i++){
                                txt += '<tr>';
                                for(var j=0; j<5; j++){
                                    txt +='<td>'+ b[i][j] +'</td>';
                                }
                                txt += '</tr>';
                            }
                            $addrTBody.html(txt);
                            txt = '';
                        },
                        error: function(){
                            alert('ajax error');
                        }

                    });
                }
            });

        }
    }

    ajaxJson.init();

})(jQuery);