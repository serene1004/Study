;(function($){
    
    var litho = {
        init:function(){
            this.headerFn();
            this.section1Fn();
            this.section2Fn();
            this.section3Fn();
            this.section4Fn();
            this.section5Fn();
            this.footerFn();
        },
        headerFn:function(){

        },
        section1Fn:function(){

            var $slide = $('#section1 .slide');
            var $window = $(window);
            var $widW = $(window).width();
            var $widH = $(window).height();

            function resizeFn(){
                $widW = $(window).width();
                $widH = $(window).height();
                $slide.css({width:$widW,height:$widH});
            };
            resizeFn();

            $window.resize(function(){
                resizeFn();
            });




        },
        section2Fn:function(){

        },
        section3Fn:function(){

        },
        section4Fn:function(){

        },
        section5Fn:function(){

        },
        footerFn:function(){

        }
    }

    litho.init(); // litho실행 (이거없으면 실행안됨)

})(jQuery);