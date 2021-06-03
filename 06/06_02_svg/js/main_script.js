(function ($) {

    var stroke = $('.circle'); //선이 배열로 구성
    var strokeLength = 0;

    function circleFn() {
        $.each(stroke, function (idx, obj) {
            strokeLength = Math.ceil(obj.getTotalLength());
            
            obj.style.strokeDasharray  = strokeLength;
            obj.style.strokeDashoffset = strokeLength;

            $(obj).stop().animate({'strokeDashoffset': 0}, 3000, function () {
                $(this).stop().animate({'strokeDashoffset': strokeLength}, 2000);
            });
        });
    }
    circleFn();
    setInterval(circleFn, 6000);


})(jQuery);