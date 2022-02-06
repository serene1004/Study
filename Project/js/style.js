function introAnimation () {
    let intro = document.querySelector('.intro_bg');
    let introBar = document.querySelectorAll('.intro_bg div');
    let introBarCnt = introBar.length;

    intro.onclick = function(){
        for (let i = 0; i < introBarCnt; i ++) {
            if (i % 2 === 0) {
                introBar[i].style.transform = 'skew(30deg) translateX('+ (20+(10*i)) + 'vw) translateY(-100vh)';
            } else if (i % 2 === 1) {
                introBar[i].style.transform = 'skew(30deg) translateX('+ (20+(10*i)) + 'vw) translateY(100vh)';
            }
        }

        setTimeout(function(){
            intro.style.opacity = 0;

            setTimeout(function(){
                intro.style.display = 'none';
            }, 1000)
            backgroundVideo();
        }, 1500)
    }
}
introAnimation();

function backgroundVideo () {
    let video = document.querySelector('.bg_video video');
    let videoProgress = document.querySelector('.progress_bar span');

    video.play();
    video.style.transform = 'scale(1)'
    videoProgress.classList.add('on')
}

function svgCircleAnimation () {
    // let svgBtn = document.querySelectorAll('.btn_wrap');
    // let svgBtnCnt = svgBtn.length;
    // let svgCircle = document.querySelectorAll('.btn_wrap circle');
    // let svgCircleCnt = svgCircle.length;

    // for (let i = 0; i < svgBtnCnt; i++) {
    //     svgBtn[i].addEventListener('mouseleave', function(){
    //         for (let j = 0; j < svgCircleCnt; j++) {
    //             svgCircle[j].classList.add('on');
    //             setTimeout(function() {
    //                 svgCircle[j].classList.remove('on');
    //             }, 300)
    //         }
    //     });
    // }

    document.querySelectorAll('.btn_wrap').forEach(function (el) {
        let circle = el.querySelector('circle')

        el.addEventListener('mouseleave', function(){
            circle.classList.add('on');
            setTimeout(function() {
                circle.classList.remove('on');
            }, 300)
        })
    })
}
svgCircleAnimation ();


// 현재 보여지고있는 화면에서 그라디언트가 움직이고있음. 이건어케하는거지?