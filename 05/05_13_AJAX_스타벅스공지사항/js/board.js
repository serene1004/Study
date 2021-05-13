;(function($){

    var board = {

        init:function(){
            this.boardFn();

        },
        boardFn:function(){
            var $tBody = $('.board tbody');
            var $pageBox = $('.page-box ul');
            var $prevBtn = $('.prev-btn');
            var $nextBtn = $('.next-btn');

            var a = [];
            var txt = '';
            var list = 10;
            var total = null;
            var totalPageNum = Math.ceil(total / list);  // 전체 페이지 수
            var pageNumList = 10;                        // 페이지 그룹 10개씩 묶음
            var pageGroup = Math.ceil(totalPageNum/pageNumList);
            var gruopStartNum = null;
            var groupEndNum = null;

            var startNum = 0;
            var endNum = list;

            var cnt = 0;


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

                        
                        // 리스트내용 출력
                        function listOutputFn(){
                            txt = '';
                            $tBody.html(txt);
                            for(var i=startNum; i<endNum; i++){
                                txt += '<tr>';
                                for(var j=0; j<4; j++){
                                    txt += '<td>' + a[i][j] + '</td>';
                                }
                                txt += '</tr>';
                            }
                            $tBody.html(txt);
                            totalPageNum = Math.ceil(total / list);
                            pageGroup = Math.ceil(totalPageNum/pageNumList);
                        }
                        setTimeout(listOutputFn, 100);


                        // 좌우화살버튼 클릭이벤트
                        $prevBtn.on({
                            click:function(){
                                cnt--;
                                if(cnt<0){
                                    cnt=0;
                                }
                                pageNationFn();
                            }
                        });
                        $nextBtn.on({
                            click:function(){
                                cnt++;
                                if(cnt>pageGroup-1){
                                    cnt=pageGroup-1;
                                    return;
                                }
                                pageNationFn();
                            }
                        });

                        
                        // 그룹페이지 버튼 함수
                        function pageNationFn(){
                            txt='';
                            $pageBox.html(txt);

                            gruopStartNum = cnt * pageNumList;
                            groupEndNum = gruopStartNum + pageNumList;
                            
                            // 그룹의 끝번호가 전체페이지 번호보다 크면 끝번호를 전체페이지 번호로
                            if(groupEndNum > totalPageNum){
                                groupEndNum = totalPageNum;
                            }
                            
                            for(var i=gruopStartNum; i<groupEndNum; i++){
                                if(i%pageNumList===0){
                                    txt += '<li><a href="#" class="page-btn addPage">'+ (i+1) +'</a></li>'
                                }
                                else{
                                    txt += '<li><a href="#" class="page-btn">'+ (i+1) +'</a></li>'
                                }
                            }
                            $pageBox.html(txt);
                            // $pageBox.append(txt);
                            $pageBtn = $('.page-box li .page-btn');     // html에 태그를 추가시킨 아래에서 변수설정을 해야 인식함

                            startNum = parseInt($pageBtn.eq(0).text()-1)*list;
                            endNum = startNum+list;
                            
                            if(endNum > total){
                                endNum = total;
                            }

                            listOutputFn();
                        }
                        setTimeout(pageNationFn, 100);
                        

                        

                        // $(document).on('mouseenter', '.page-btn', function(){
                        //     $('.page-btn').each(function(idx){
                        //         $(this).on({
                        //             click:function(event){
                        //                 event.preventDefault();
                        //                 $pageBtn.removeClass('addPage');
                        //                 $(this).addClass('addPage');

                        //                 startNum = (parseInt($(this).text())-1)*list;
                        //                 endNum = startNum + list;
                        //                 if(endNum > total){
                        //                     endNum = total; // 전체 갯수
                        //                 }
                        //                 listOutputFn();
                        //             } 
                        //         });
                        //     });
                        // });

                        $pageBox.on('click', '.page-btn', function(event){
                            event.preventDefault();
                            $('.page-btn').removeClass('addPage');
                            $(this).addClass('addPage');

                            startNum = (parseInt($(this).text())-1)*list;
                            endNum = startNum + list;
                            if(endNum > total){
                                endNum = total; // 전체 갯수
                            }
                            listOutputFn();
                        })
                        


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