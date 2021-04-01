;(function($){

    var blog = {
        init:function(){
            this.blogFn();
        },
        blogFn:function(){
            var $li = $('#blog .content-wrap > ul > li');
            var $imgH = $('#blog .img-wrap img').innerHeight();
            var $imgW = $('#blog .img-wrap img').innerWidth();

            var $h4 = $('#blog .text-content h4');
            var $p = $('#blog .text-content p');

            var h4FontSize = $imgW * 0.03963964     // 박스너비 * 비율
            var pFontSize  = $imgW * 0.064864865
            

            function resizeFn(){
                $imgW = $('#blog .img-wrap img').innerWidth();
                $imgH = $('#blog .img-wrap img').innerHeight();
                h4FontSize = $imgW * 0.03963964
                pFontSize  = $imgW * 0.064864865

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