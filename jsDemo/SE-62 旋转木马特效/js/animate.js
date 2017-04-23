function animate(obj, json, fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;
            for(var k in json){ // {k:json[k]}

                if (k === "opacity"){
                    //var leader = parseInt(getStyle(obj, k)) || 0;
                    var leader = getStyle(obj, k) * 100; //1
                    // 因为没有单位所以不用parseInt，参与运算自动转换为数值
                    var target = json[k] * 100; //0.5
                    var step = (target - leader) / 10; //0.5-1=-0.5
                    step = step > 0 ? Math.ceil(step) : Math.floor(step); //-1
                    leader = leader + step; // 1-1 = 0
                    obj.style[k] = leader / 100;
                } else if (k === "zIndex") {
                    obj.style.zIndex = json[k]; //无需渐变 
                } else {
                    var leader = parseInt(getStyle(obj, k)) || 0;
                    var target = json[k];
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader + "px";
                }
                if (leader !== target) { 
                    flag = false;
                    
                }
            }
            if(flag){

                clearInterval(obj.timer);
                if(fn){//如果有实参才调用,没有为undefined,注意不要写成fn()
                    fn();//动画执行完成后执行
                }
                
            }

        }, 15);
    }

    function getStyle(obj, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(obj, null)[attr];
        } else {
            return obj.currentStyle[attr];
        }
    }