;(function($){

    var quickMenuBox = {

        init:function(){
            this.scrollEventFn();

        },
        scrollEventFn:function(){
            var $window = $(window);
            var $quickMenu = $('#wrap #quickMenu');
            var quickTop = ($window.innerHeight() - $quickMenu.innerHeight())/2;

            var $section = $('#wrap .section');
            var wheelDelta = 0;

            function quickMenuFn(){
                $quickMenu.stop().animate({top:quickTop+150+$window.scrollTop()});
            }

            $window.scroll(function(){
                quickMenuFn();
            });
            setTimeout(quickMenuFn, 10);

            $section.each(function(idx){
                $(this).on('mousewheel DOMMouseScroll', function(event){
                    event.preventDefault();
                    wheelDelta = event.originalEvent.wheelDelta;

                    if(!$('html,body').is(':animated')){
                        if(wheelDelta < 0){
                            if(idx < 6){
                                $('html,body').stop().animate({scrollTop:$(this).next().offset().top}, 800);
                            }
                        }
                        else if(idx > 0){
                            $('html,body').stop().animate({scrollTop:$(this).prev().offset().top}, 800);
                        }
                    }
                });
            });

        }

    }   // quickMenuBox 끝

    quickMenuBox.init();

})(jQuery);