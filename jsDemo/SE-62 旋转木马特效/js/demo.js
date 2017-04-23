window.onload = function (){
	
	var wrap = document.getElementById("wrap");
	var arrow = document.getElementById("arrow");
	var arrLeft = document.getElementById("arrLeft");
	var arrRight = document.getElementById("arrRight");

	var slide = document.getElementById("slide");
	var ul = slide.children[0];
	var lis = ul.children; // 所有图片
	//1.鼠标经过轮播图 让箭头渐渐显示 鼠标离开轮播图 让箭头渐渐消失
	wrap.onmouseover = function (){
		animate(arrow, {"opacity": 1});
	};
	wrap.onmouseout = function (){
		animate(arrow, {"opacity": 0});
	};

	//2. 设置图片位置

    var config = [
        {
            "width": 400,
            "top": 20,
            "left": 50,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 600,
            "top": 70,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 800,
            "top": 100,
            "left": 200,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            width: 600,
            top: 70,
            left: 600,
            opacity: 0.8,
            zIndex: 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ];//其实就是一个配置单 规定了 一开始 每张图片的大小位置层级透明度
    // 数组里是一个一个对象，每个对象就是页面上li应该去的位置

	//2.1 获取页面所有li 让他们从当前位置 缓动到 一开始的配置单位置 
	function assign(){
		for ( var i = 0; i < lis.length; i++){
			animate(lis[i], config[i], function (){
				flag = true; //动画完成之后，重新打开阀门
			}); //animate第二个参数就是一个对象
		}
	} 
	assign();// 页面刚打开加载一次，让图片各就位

	//3. 点击箭头 旋转

	//3.1 右箭头 旋转 操作配置单 每点一次 就是把数组开始的元素放在最后
	arrRight.onclick = function (){
		if(flag){
			flag = false; //点击之后 关闭阀门
			config.push(config.shift() );
			assign();
		}
	};
	//3.2 左箭头 旋转 操作配置单 每点一次 就是把数组最后的元素放在前面开始位置
	arrLeft.onclick = function (){
		if(flag){
			flag = false;
			
			config.unshift(config.pop() );
			assign();
		}
	};

	//4. 点击之后不能立马再点 等所有图片到了位置才能再点(即添加节流阀)
	var flag = true; //表示阀门是打开的，可以点击

};