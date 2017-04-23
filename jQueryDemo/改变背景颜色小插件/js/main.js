// 第三步 $.fn.固定语法，放在点后面的函数可以为jQuery里的任意对象调用
	$.fn.changeBackgroundColor = function (color){
		$('.cls').css('backgroundColor', color);
	};
	

		