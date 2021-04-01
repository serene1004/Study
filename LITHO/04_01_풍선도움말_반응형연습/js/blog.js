;(function($){

    var blog = {
        init:function(){
            this.blogFn();
        },
        blogFn:function(){
            var $li = $('#blog .content-wrap > ul > li');
            var $imgW = $('#blog .img-wrap img').innerWidth();
            var $imgH = $('#blog .img-wrap img').innerHeight();
            var $h4 = $('.text-content h4');
            var $p = $('.text-content p');
            var h4FontSize = $imgW * 0.042105263
            var pFontSize  = $imgW * 0.063157895


            function resizeFn(){
                $imgW = $('#blog .img-wrap img').innerWidth();
                $imgH = $('#blog .img-wrap img').innerHeight();
                h4FontSize = $imgW * 0.042105263
                pFontSize  = $imgW * 0.063157895
                
                $li.css({height:$imgH});
                $h4.css({fontSize:h4FontSize});
                $p.css({fontSize:pFontSize});

            };

            $(window).resize(function(){
                resizeFn();
            });
            setTimeout(resizeFn, 100);
        }
    }

    blog.init();

})(jQuery);