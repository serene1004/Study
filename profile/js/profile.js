;(function($){

    var profile = {
        init:function(){
            this.profileFn();
        },
        profileFn:function(){
            var $Wrap = $('#wrap');
            var $cube = $('#wrap .cube');
            var x = 0;
            var y = 0;

            $Wrap.on({
                mousemove:function(event){

                    x = event.clientX*0.1;
                    y = event.clientY*0.1;
                    // console.log(x);
                    // console.log(y);
                    $cube.css({transform:'perspective(600px) rotateX('+ y +'deg) rotateY('+ x +'deg) scale3d(1,1,1)'});
                }
            });

        }
        
    }

    profile.init();

})(jQuery);