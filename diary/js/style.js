(function ($) {

    let style = {
        init: function () {
            this.backgroundFn();
        },
        backgroundFn: function () {
            let weather = ['Sunny', 'Cloudy', 'Rainy', 'Windy', 'Snowy'];
            let amount = 50;
            let diarybg = document.querySelector('#diary-bg');
            let diaryWeather = document.querySelector('.diaryWeather');
            let i = 0;
            
            function bgAnimation () {
                weatherNum = Math.random() * 10;

                if (weatherNum < 2) {
                    diaryWeather.innerHTML = weather[0];

                    diarybg.style.background = '#fff'
                    while (i < amount) {
                        let drop = document.createElement('i');
    
                        drop.style.left = 0;
                        diarybg.appendChild(drop);
                        drop.classList.add('sun');
                        i+=50;
                    }
                } else if (weatherNum < 4) {
                    diaryWeather.innerHTML = weather[1];

                    while (i < amount) {
                        let drop = document.createElement('i');
                        let size = Math.random();
                        let positionX = Math.floor(Math.random() * window.innerWidth);
                        let aniDelay = Math.random() * -10;
    
                        drop.style.left = positionX + 'px';
                        drop.style.top = size * 1000 + 'px';
                        drop.style.animationDelay = aniDelay + 's';
                        diarybg.appendChild(drop);
                        drop.classList.add('cloud');
                        i+=5;
                    }
                } else if (weatherNum < 6) {
                    diaryWeather.innerHTML = weather[2];

                    while (i < amount) {
                        let drop = document.createElement('i');
                        let size = Math.random();
                        let positionX = Math.floor(Math.random() * window.innerWidth);
                        let aniDelay = Math.random() * -30;
    
                        drop.style.width = size + 'px';
                        drop.style.height = 100 + 'px';
                        drop.style.left = positionX + 'px';
                        drop.style.animationDelay = aniDelay + 's';
                        diarybg.appendChild(drop);
                        drop.classList.add('rain');
                        i++;
                    }
                } else if (weatherNum < 8) {
                    diaryWeather.innerHTML = weather[3];

                    while (i < amount) {
                        let drop = document.createElement('i');
                        let size = Math.random();
                        let positionX = Math.floor(Math.random() * window.innerWidth);
                        let aniDelay = Math.random() * -30;
    
                        drop.style.left = positionX + 'px';
                        drop.style.top = size*1000 + 'px';
                        drop.style.animationDelay = aniDelay + 's';
                        diarybg.appendChild(drop);
                        drop.classList.add('wind');
                        i+=2;
                    }
                } else {
                    diaryWeather.innerHTML = weather[4];

                    while (i < amount) {
                        let drop = document.createElement('i');
                        let positionX = Math.floor(Math.random() * window.innerWidth);
                        let aniDelay = Math.random() * -30;
                        
                        drop.style.left = positionX + 'px';
                        drop.style.animationDelay = aniDelay + 's';
                        diarybg.appendChild(drop);
                        drop.classList.add('snow');
                        i+=0.3;
                    }
                }
            }
            bgAnimation ();
        }
    }

    style.init();

})(jQuery);