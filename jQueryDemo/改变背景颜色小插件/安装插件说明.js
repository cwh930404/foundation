// 需要在页面中引入外部的css和js文件
//  <link rel="stylesheet" href="css/main.css">
// 	<script src="js/jquery-1.12.2.min.js"></script>
// 	<script src="js/main.js"></script>


// 插件的HTML结构
// <input type="button" value="green">	
// <input type="button" value="red">	
// <input type="button" value="blue">	
// <div id="dv">
// 	<div class="cls"></div>
// 	<div class="cls"></div>
// 	<div class="cls"></div>
// 	<div class="cls"></div>
// 	<div class="cls"></div>
// </div>



// 在页面DOM元素加载完毕之后，复制下面代码
// $(function (){
// 			// 点击按钮 改变div的背景颜色
// 			$('input[type=button]').click(function (){
				
// 				$('.cls').changeBackgroundColor( $(this).val() );

// 			});
// 		});