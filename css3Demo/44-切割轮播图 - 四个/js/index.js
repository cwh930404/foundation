$(function (){
	var clickCount = 0; // 记录点击的次数

	
	$('.right').click(function (){

		clickCount++; // 累加点击次数

		$('li').css('transform', 'rotateX('+ clickCount * 90 +'deg)');
	});
	$('.left').click(function (){
		clickCount--; // 

		$('li').css('transform', 'rotateX('+ clickCount * 90 +'deg)');
	});
});