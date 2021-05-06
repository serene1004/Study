;(function(){

    var quickMenuBox = {

        init:function(){
            this.scrollEventFn();

        },
        scrollEventFn:function(){
            var $quickMenuBox = document.querySelector('#quickMenuBox');
            var quickTop = (window.innerHeight - $quickMenuBox.offsetHeight)/2;

            function quickMenuBoxFn(){
                $quickMenuBox.style.transition = 'top 1s';
                $quickMenuBox.style.top = (quickTop + window.scrollY)+'px';
            }
            
            window.addEventListener('scroll',function(){
                quickMenuBoxFn();
            });
            setTimeout(quickMenuBoxFn, 10);
        }

    }   // quickMenuBox 끝

    quickMenuBox.init();

})();