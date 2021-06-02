(function($){

    var stroke = $('.circle');
    var strokeLength = 0;
    
    function circleFn(){
        $.each(stroke, function(idx, obj){
            strokeLength = Math.ceil(obj.getTotalLength());
            
            obj.style.strokeDasharray  = strokeLength;
            obj.style.strokeDashoffset = strokeLength;

            $(obj).stop().animate({'strokeDashoffset':0}, 3000);

        });
    }
    circleFn();


})(jQuery);