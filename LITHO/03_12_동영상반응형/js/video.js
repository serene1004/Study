;(function($){

    var videoObj = {
        init:function(){
            var that = this;

            that.resizeFn();
            that.controlFn();
            that.youtubeFn();
        },
        resizeFn:function(){
            var $win = $(window);
            var $video = $('.main-video');
            var $section1 = $('#section1');
            var $winW = $(window).innerWidth();
            var $winH = $(window).innerHeight();
            var $videoW =  $video.innerWidth();
            var $videoH =  $video.innerHeight();
            var marginL = ($winW-$videoW)/2;
            var marginT = ($winH-$videoH)/2;

            function videoResizeFn(){
                var $winW = $(window).innerWidth();
                var $winH = $(window).innerHeight();
                var $videoW =  $video.innerWidth();
                var $videoH =  $video.innerHeight();
                    marginL = ($winW-$videoW)/2;
                    marginT = ($winH-$videoH)/2;
                // 창크기와 비디오 크기 비교, 창크기에 비디오 크기를 맞춰서 반응형 제작
                if ( $winW > $videoW ) {
                    $video.css({ width:$winW, height:'auto' });

                }
                if ( $winH > $videoH ) {
                    $video.css({ width:'auto', height:$winH });
                }
                $section1.css({ width:$winW, height:$winH });
                $video.css({ marginLeft:marginL, marginTop:marginT });
            }
            setTimeout(videoResizeFn, 100);

            $win.resize(function(){
                setTimeout(videoResizeFn, 100);
            });

        },
        controlFn:function(){

        },
        youtubeFn:function(){
            // var $win = $(window);
            // var $winW = $(window).innerWidth();
            // var $winH = $(window).innerHeight();
            // var $youtube = $('section2 .youtube');
            // var $youtubeW = $youtube.innerWidth();
            // var $youtubeH = $youtube.innerHeight();
            // var marginL = ($winW-$youtubeW)/2;
            // var marginT = ($winH-$youtubeH)/2;

            // function youtubeResizeFn(){
            //         marginL = ($winW-$youtubeW)/2;
            //         marginT = ($winH-$youtubeH)/2;
            //     if ( $winW > $youtubeW ) {
            //         $youtube.css({ width:$winW, height:'auto' });
            //     }
            //     if ( $winH > $youtubeH ) {
            //         $youtube.css({ width:'auto', height:$winH });
            //     }
            //     $section2.css({ width:$winW, height:$winH });
            //     $youtube.css({ marginLeft:marginL, marginTop:marginT });
            // }
            // setTimeout(youtubeResizeFn, 100);


            // $win.resize(function(){
            //     setTimeout(youtubeResizeFn, 100);
            // });
        }
    };
    videoObj.init();

})(jQuery);