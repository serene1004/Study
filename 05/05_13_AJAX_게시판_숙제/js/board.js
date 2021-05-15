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
            var $firstpageBtn = $('.firstpage-btn');
            var $lastpageBtn  = $('.lastpage-btn');

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
            var btn = true;


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

                        });

                        total = a.length;

                        function listOutputFn(){
                            txt = '';
                            $tBody.html(txt);
                            for(var i=startNum; i<endNum; i++){
                                txt += '<tr>';
                                for(var j=0; j<3; j++){
                                    txt += '<td>' + a[i][j] + '</td>';
                                }
                                txt += '</tr>';
                            }
                            $tBody.html(txt);
                            totalPageNum = Math.ceil(total / list);
                            pageGroup = Math.ceil(totalPageNum/pageNumList);
                        }
                        setTimeout(listOutputFn, 100);

                        $prevBtn.on({
                            click:function(){
                                btn = true;
                                cnt--;
                                if(cnt<0){
                                    cnt=0;
                                }
                                pageNationFn();
                            }
                        });
                        $nextBtn.on({
                            click:function(){
                                btn = true;
                                cnt++;
                                if(cnt>pageGroup-1){
                                    cnt=pageGroup-1;
                                    return;
                                }
                                pageNationFn();
                            }
                        });

                        $firstpageBtn.on({
                            click:function(){
                                btn = true;
                                cnt=0;
                                pageNationFn();
                            }
                        });

                        $lastpageBtn.on({
                            click:function(){
                                btn = false;
                                cnt=pageGroup-1;
                                pageNationFn();
                            }
                        });

                        function pageNationFn(){
                            txt='';
                            $pageBox.html(txt);

                            gruopStartNum = cnt * pageNumList;
                            groupEndNum = gruopStartNum + pageNumList;

                            if(btn == true){
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
                                $pageBtn = $('.page-box li .page-btn');
    
                                startNum = parseInt($pageBtn.eq(0).text()-1)*list;
                                endNum = startNum+list;
                                
                                if(endNum > total){
                                    endNum = total;
                                }                                
                            }
                            else{
                                for(var i=gruopStartNum; i<groupEndNum; i++){
                                    if(i%pageNumList===9){
                                        txt += '<li><a href="#" class="page-btn addPage">'+ (i+1) +'</a></li>'
                                    }
                                    else{
                                        txt += '<li><a href="#" class="page-btn">'+ (i+1) +'</a></li>'
                                    }
                                }
                                $pageBox.html(txt);
                                $pageBtn = $('.page-box li .page-btn');
    
                                startNum = parseInt($pageBtn.eq(9).text()-1)*list;
                                endNum = startNum+list;
                            
                                if(endNum > total){
                                    endNum = total;
                                }
                            }
                            listOutputFn();
                        }
                        setTimeout(pageNationFn, 100);

                        
                        $pageBox.on('click', '.page-btn', function(event){
                            event.preventDefault();
                            $('.page-btn').removeClass('addPage');
                            $(this).addClass('addPage');

                            startNum = (parseInt($(this).text())-1)*list;
                            endNum = startNum + list;
                            if(endNum > total){
                                endNum = total;
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