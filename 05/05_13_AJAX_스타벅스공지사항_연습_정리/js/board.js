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
            var pageNumList = 10;                        // 페이지 그룹 묶음

            var pageNum = null;
            var lastNum = list*pageNum;
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


                        for(var i=0; i<list; i++){
                            txt += '<tr>';
                            for(var j=0; j<4; j++){
                                txt += '<td>' + a[i][j] + '</td>';
                            }
                            txt += '</tr>';
                        }
                        $tBody.html(txt);
                        txt = '';

                        for(var i=0; i<pageNumList; i++){
                            if(i === 0){
                                txt += '<li><a href="#" class="page-btn addPage">'+ (i+1) +'</a></li>'
                            }
                            else{
                                txt += '<li><a href="#" class="page-btn">'+ (i+1) +'</a></li>'
                            }
                            $prevBtn.hide();
                        }
                        $pageBox.html(txt);
                        txt = '';
                        
                        // var $pageBtn = $('.page-box li .page-btn');     // html에 태그를 추가시킨 아래에서 변수설정을 해야 인식함

                        totalPageNum = Math.ceil(total / list);
                        


                        $pageBox.on("click", ".page-btn", function(event){
                            event.preventDefault();
                            $('.page-btn').removeClass('addPage');
                            $(this).addClass('addPage');

                            pageNum = parseInt($(this).text());
                            lastNum = list*pageNum;
                            if(lastNum > total){
                                lastNum = total;
                            }
                            
                            txt = '';
                            $tBody.html(txt);
                            for(var i=(pageNum-1)*list; i<lastNum; i++){
                                txt += '<tr>';
                                    for(var j=0; j<4; j++){
                                        txt += '<td>' + a[i][j] + '</td>';
                                    }
                                    txt += '</tr>';
                            }
                            $tBody.html(txt);
                        });

                        function listOutputFn(){
                                txt = '';
                                $tBody.html(txt);
                                for(var i=cnt*pageNumList; i<pageNumList+(cnt*pageNumList); i++){
                                    txt += '<tr>';
                                    for(var j=0; j<4; j++){
                                        txt += '<td>' + a[i][j] + '</td>';
                                    }
                                    txt += '</tr>';
                                }
                                $tBody.html(txt);
                        }

                        // function pageNationFn(){
                            
                        // }

                        $prevBtn.on({
                            click:function(){
                                cnt-=10;
                                listOutputFn();
                                txt = '';
                                $nextBtn.show();

                                if(cnt < 1){
                                    $prevBtn.hide();
                                }
                                for(var i=0+cnt; i<pageNumList+cnt; i++){
                                    if(i === cnt){
                                        txt += '<li><a href="#" class="page-btn addPage">'+ (i+1) +'</a></li>'
                                    }
                                    else{
                                        txt += '<li><a href="#" class="page-btn">'+ (i+1) +'</a></li>'
                                    }
                                }
                                $pageBox.html(txt);
                                txt = '';
                            }
                        });
                        
                        $nextBtn.on({
                            click:function(){
                                cnt+=10;
                                listOutputFn();
                                txt = '';
                                $prevBtn.show();

                                if(pageNumList+cnt > totalPageNum){
                                    for(var i=0+cnt; i<totalPageNum; i++){
                                        if(i === cnt){
                                            txt += '<li><a href="#" class="page-btn addPage">'+ (i+1) +'</a></li>'
                                        }
                                        else{
                                            txt += '<li><a href="#" class="page-btn">'+ (i+1) +'</a></li>'
                                        }
                                    }
                                    $nextBtn.hide();
                                }
                                else{
                                    for(var i=0+cnt; i<pageNumList+cnt; i++){
                                        if(i === cnt){
                                            txt += '<li><a href="#" class="page-btn addPage">'+ (i+1) +'</a></li>'
                                        }
                                        else{
                                            txt += '<li><a href="#" class="page-btn">'+ (i+1) +'</a></li>'
                                        }
                                    }
                                }
                                $pageBox.html(txt);
                                txt = '';
                            }
                        });
                        

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