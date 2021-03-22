;(function($){

    var popol = {
        init: function(){            
            this.section6Fn();
        },
        section6Fn:function(){
            var $slideBtn = $('#section6 .row234 > a');
            var $slideWrap = $('#section6 .slide-down-gap');
            var iven1       = null;
            var iven2       = null;
            var $spanMoveWrap =  $('#section6 .text-wrap');
            var $spanBar      =  $('#section6 .span-bar');
            var $subArr1      =  $('#section6 .arr1');
            var $subArr2      =  $('#section6 .arr2');

            $spanMoveWrap.on({
                mouseenter:function(){
                    $spanBar.stop().animate({'margin-left':500}, 600,function(){
                        moveArrFn();
                    });
                }
            })

            function moveArrFn(){
                $subArr1.stop().animate({'left':10},600);
                $subArr2.stop().animate({'left':35},600);
                $subArr1.animate({'left':-60},0);
                $subArr2.animate({'left':-15},0);

            }

            $spanMoveWrap.on({
                mouseleave:function(){
                    $spanBar.animate({'margin-left':-500},0);
                    $spanBar.stop().animate({'margin-left':0},600);
                }
            })

            // 아코디언메뉴 알고리즘
            // 1. 버튼모양이 - 로 되어있음. addClass('addSlideDown');
            // 2. 첫번째 아코디언서브메뉴가 펼쳐져있다. 이벤트는 slideDown()
            
            var $clickBtn = $('.click-wrap')
            var $slideSub = $('.slide-down-gap');

            $clickBtn.eq(0).addClass('addSlideDown')
            // $clickBtn.eq(0).removeClass('addSlideDown')
            $clickBtn.eq(0).next().stop().slideDown(300);

            // 아코디언메뉴버튼 클릭이벤트
            // 모든 클래스를 삭제하면서 자신(클릭한대상)의 클래스도 삭제가 되어서
            // 다시 토글클래스가 동작함. (오류)
            // addslideDown의 유무를 판단 후 실행
            // hasClass('클래스이름만')
            // 클래스가있으면 true , 없으면 false            


            $clickBtn.each(function(idx){
                $(this).on({
                    click:function(e){
                        e.preventDefault();
                            if ($clickBtn.eq(idx).hasClass('addSlideDown') === false ){
                                $clickBtn.removeClass('addSlideDown')
                            }
                            $slideSub.stop().slideUp(300);
                        
                        // $clickBtn.eq(idx).toggleClass('addSlideDown');
                        $(this).toggleClass('addSlideDown');
                        $(this).next().stop().slideToggle(300);
    
                    }
                });     
            });




            
        },
       
    }


    popol.init();

})(jQuery);

