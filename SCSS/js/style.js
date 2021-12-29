(function ($) {

    let style = {
        init: function () {
            this.section02Fn ();
        },
        section02Fn: function () {
            
            function shootingStar (){
                let amount = 30;
                let section02 = document.querySelector('#section02');
                let i = 0;

                while(i < amount){
                    let drop = document.createElement('i');

                    let size = Math.random() * 5;
                    let positionX = Math.floor(Math.random() * window.innerWidth);
                    let aniDelay = Math.random() * -50;
                    drop.style.width = 0.1 + size + 'px';
                    drop.style.left = positionX + 'px';
                    drop.style.animationDelay = aniDelay + 's';
                    section02.appendChild(drop);
                    i++;
                }
            }
            shootingStar ();
        }
    }

    style.init();

})(jQuery);