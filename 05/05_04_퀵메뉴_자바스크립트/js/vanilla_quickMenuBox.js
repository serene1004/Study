;(function(){

    var vanilla_quickMenuBox = {

        init:function(){
            this.scrollEventFn();

        },
        scrollEventFn:function(){
            var $quickMenuBox = document.querySelector('#quickMenuBox');
                // window 높이는 innerHeight
                // 요소의 높이는 clientHeight / offsetHeight
                //스크롤이벤트 스크롤 탑값 window.scrollY
                console.log($quickMenuBox.clientHeight);    // 패딩 보더 제외한 순수높이
                console.log($quickMenuBox.offsetHeight);    // 패딩 보더 포함한 높이
            var qucikTop = ( window.innerHeight - $quickMenuBox.offsetHeight )/2;

            function quickMenuBoxFn(){
                $quickMenuBox.style.transition = 'top .6s';
                $quickMenuBox.style.top = (qucikTop + window.scrollY)+'px';
            }

            
            window.addEventListener('scroll',function(){
                quickMenuBoxFn();
            });
            setTimeout(quickMenuBoxFn, 10);

        }

    }   // vanilla_quickMenuBox 끝

    vanilla_quickMenuBox.init();

})();