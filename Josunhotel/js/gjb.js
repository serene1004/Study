// GJB = GrandJosunBusan
;(function($){

    var gjb = {
        init:function(){
            this.headerFn();
            this.section1Fn();
            this.section2Fn();
            this.section3Fn();
            this.section4Fn();
            this.section5Fn();
            this.section6Fn();
            this.section7Fn();
            this.indicatorFn();
            this.footerFn();
        },

        headerFn:function(){
            
        },

        section1Fn:function(){
            var $window = $(window);
            var $winW = $(window).width;
            var $winH = $(window).height;
            var $mainBgSlide = $('#section1 .mainBg-slide') 

            function resizeFn(){
                $winW = $(window).width();
                $winH = $(window).height();
                $mainBgSlide.css({width:$winW,height:$winH});
            }
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

        section6Fn:function(){

        },

        section7Fn:function(){

        },

        indicatorFn:function(){

        },

        footerFn:function(){

        }
    }

    gjb.init();

})(jQuery);