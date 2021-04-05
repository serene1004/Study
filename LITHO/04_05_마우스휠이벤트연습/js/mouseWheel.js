;(function($){

    var mouseWheel = {
        init:function(){
            this.mouseWheelFn();
        },
        mouseWheelFn:function(){
            var $section = $('.section');
            var wheel = 0;

            $section.each(function(idx){
                $(this).on('mousewheel DOMMouseScroll',function(event){
                    event.preventDefault();

                    if(event.originalEvent.wheelDelta){
                        wheel = event.originalEvent.wheelDelta;
                    }
                    else{
                        wheel = event.detail*-1;
                    }

                    if(!$('html,body').is(':animated')){
                        if(wheel < 0){
                            if(idx < 7){
                                $('html,body').stop().animate({scrollTop:$(this).next().offset().top}, 1000)
                            }
                        }
                        if(wheel > 0){
                            if(idx > 0){
                                $('html,body').stop().animate({scrollTop:$(this).prev().offset().top}, 1000)
                            }
                        }
                    }
                });
            });
        }
    }

    mouseWheel.init();

})(jQuery);