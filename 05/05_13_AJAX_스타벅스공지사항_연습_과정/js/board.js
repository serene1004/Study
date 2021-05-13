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


                        totalPageNum = Math.ceil(total / list);

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

                        var $pageBtn = $('.page-box li .page-btn');     // html에 태그를 추가시킨 아래에서 변수설정을 해야 인식함



                        $pageBox.on("click", ".page-btn", function(event){
                            event.preventDefault();
                            $('.page-btn').removeClass('addPage');
                            $(this).addClass('addPage');

                            // 클릭한 대상의 텍스트의 숫자 변수 i의 값을 바꿔주면 될듯?
                            // console.log(parseInt($(this).text()));
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
                        }); //페이지 버튼

                        $prevBtn.on({
                            click:function(){
                                txt = '';
                                $tBody.html(txt);
                                cnt-=10;
                                for(var i=cnt*pageNumList; i<list+(cnt*pageNumList); i++){
                                    txt += '<tr>';
                                    for(var j=0; j<4; j++){
                                        txt += '<td>' + a[i][j] + '</td>';
                                    }
                                    txt += '</tr>';
                                }
                                $tBody.html(txt);
                                txt='';

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
                        }); // 이전페이지 버튼
                        
                        $nextBtn.on({
                            click:function(){
                                // 버튼을 클릭하면 cnt 가 증가하고 i의 시작값이 0이 아닌 변수로. 변수*cnt 가되면될듯
                                txt = '';
                                $tBody.html(txt);
                                cnt+=10;
                                for(var i=cnt*pageNumList; i<pageNumList+(cnt*pageNumList); i++){
                                    txt += '<tr>';
                                    for(var j=0; j<4; j++){
                                        txt += '<td>' + a[i][j] + '</td>';
                                    }
                                    txt += '</tr>';
                                }
                                $tBody.html(txt);
                                txt='';

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
                        }); // 다음페이지 버튼
                        

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