$(function () {

	$('.page-Wrap-ul').turn();

	$(window).on({
		keydown: function (event) {
			var k = event.which || event.keyCode;

			if (k === 39) { //우측화살키보드 누르면  // keypress keydown keyup
				$('.page-Wrap-ul').turn('next'); // 다음페이지
			} else if (k === 37) { // 좌측화살키보드 누르면 
				$('.page-Wrap-ul').turn('previous'); // 이전페이지
			}

		}
	});


});