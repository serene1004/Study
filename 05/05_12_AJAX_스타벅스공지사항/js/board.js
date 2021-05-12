;(function($){

    var board = {

        init:function(){
            this.boardFn();

        },
        boardFn:function(){
            var $tBody = $('.board tbody');
            var $pageBox = $('.page-box ul');
            var $pageBtn = $('.page-box li .page-btn');
            var $prevBtn = $('.prev-btn');
            var $nextBtn = $('.next-btn');

            var a = [];
            var txt = '';
            var list = 10;
            var total = null;
            var totalPageNum = Math.ceil(total / list);  // 전체 페이지 수
            var pageNumList = 10;   // 페이지 그룹 10개씩 묶음
            var pageGroup = Math.ceil(totalPageNum/pageNumList);    // 3 페이지 그룹이 나옴


            var cnt = 0;

            // JSON 데이터파일의 정보를 tbody에 출력
            // 출력방법은 글번호의 내림차순으로
            function ajaxRunFn(){
                $.ajax({
                    url:'./data/board.json',
                    dataType:'json',
                    success:function(result){
                        $.each(result.notice, function(idx, obj){
                            a[idx] = [];

                            a[idx][0] = obj.no;
                            a[idx][1] = obj.title;
                            a[idx][2] = obj.date;
                            a[idx][3] = obj.count;

                        });

                        total = a.length;

                        for(var i=0; i<list; i++){
                            txt += '<tr>';
                            for(var j=0; j<4; j++){
                                txt += '<td>' + a[i][j] + '</td>';
                            }
                            txt += '</tr>';
                        }
                        $tBody.html(txt);

                        // 페이지번호 10개씩 묶음
                        // 313/10 나머지는 자리올림
                        // pageNum = Math.ceil(a.length / list)
                        // 전체 페이지수
                        txt = '';

                        totalPageNum = Math.ceil(total / list);
                        for(var i=0; i<pageNumList; i++){
                            if(i===0){
                                txt += '<li><a href="#" class="page-btn addPage">'+ (i+1) +'</a></li>'
                            }
                            else{
                                txt += '<li><a href="#" class="page-btn">'+ (i+1) +'</a></li>'
                            }
                        }
                        $pageBox.html(txt);
                        txt = '';

                        $pageBox.on("click", "a", function(event){
                            event.preventDefault();
                            $('a').removeClass('addPage');
                            $(this).addClass('addPage');
                        });
            
                        $prevBtn.on({
                            click:function(){
                                txt = '';
                                $tBody.html(txt);
                                cnt--;
                                for(var i=cnt*(pageNumList); i<list*(cnt+1); i++){
                                    txt += '<tr>';
                                    for(var j=0; j<4; j++){
                                        txt += '<td>' + a[i][j] + '</td>';
                                    }
                                    txt += '</tr>';
                                }
                                $tBody.html(txt);
                            }
                        });
                        
                        $nextBtn.on({
                            click:function(){
                                // 버튼을 클릭하면 for(var i=0; i<list; i++){}
                                // cnt 가 증가하고 i의 시작값이 0이 아닌 변수로. 변수*cnt 가되면될듯
                                txt = '';
                                $tBody.html(txt);
                                cnt+=10;
                                for(var i=cnt*pageNumList; i<list+(cnt*pageNumList); i++){
                                    txt += '<tr>';
                                    for(var j=0; j<4; j++){
                                        txt += '<td>' + a[i][j] + '</td>';
                                    }
                                    txt += '</tr>';
                                }
                                $tBody.html(txt);
                            }
                        });

                        // 이거는 한페이지씩 넘어감
                        // cnt++;
                        // for(var i=cnt*pageNumList; i<list*(cnt+1); i++){
                        //     txt += '<tr>';
                        //     for(var j=0; j<4; j++){
                        //         txt += '<td>' + a[i][j] + '</td>';
                        //     }
                        //     txt += '</tr>';
                        // }


                    },
                    error:function(){
                        alert('FAILED');
                    }
                });
            }
            setTimeout(ajaxRunFn, 100);


        }

    }

    board.init();

    
})(jQuery);