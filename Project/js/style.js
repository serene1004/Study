function introAnimation () {
    let intro = document.querySelector('.intro-bg');
    let introBar = document.querySelectorAll('.intro-bg div');
    let introBarCnt = introBar.length;

    intro.onclick = function(){
        for (let i = 0; i < introBarCnt; i ++) {
            if (i % 2 === 0) {
                introBar[i].style.transform = 'skew(20deg) translateX('+ (20+(10*i)) + 'vw) translateY(-100vh)';
            } else if (i % 2 === 1) {
                introBar[i].style.transform = 'skew(20deg) translateX('+ (20+(10*i)) + 'vw) translateY(100vh)';
            }
        }

        setTimeout(function(){
            intro.style.opacity = 0;

            setTimeout(function(){
                intro.style.display = 'none';
            }, 1000)
        }, 1500)
    }
}
introAnimation();


// 제이쿼리 안쓰고 해보자
(function ($) {
    let style = {
        init: function () {
            this.styleFn();
        },
        styleFn: function () {

        }
    }
    style.init();
})(jQuery);