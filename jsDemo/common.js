//alert("外部JS样式");

/**
* 获得对象函数
*/
function $(id){
		return document.getElementById(id);
	}

/**
*处理兼容 封装获取下一个兄弟元素 的兼容函数
*/
function getNextElement(element){
	if(element.nextElementSibling){
		return element.nextElementSibling;
	} else {
		var next = element.nextSibling;//下一个兄弟节点
		while(next && next.nodeType != 1){//一直往后找的条件：1.有节点不能是空2.并且不是元素节点
			next = next.nextSibling;
		}
		return next; //返回的结果可能是 null或是一个元素节点。
	}
}

/**
*处理兼容 封装获取上一个兄弟元素 的兼容函数
*/
function getPreviousElement(element){
	if(element.previousElementSibling){
		return element.previousElementSibling;
	} else {
		var prev = element.previousSibling;
		while(prev && prev.nodeType != 1){
			prev = prev.previousSibling;
		}
		return prev; 
	}
}


/*
*获取第一个子元素 (兼容所有浏览器)
*/
function getFirstElement(element){
	if(element.firstElementChild){
		return element.firstElementChild;
	} else {
		var node = element.firstChild;
		while(node && node.nodeType != 1){
			node = node.nextSibling;
		}
		return node;
	}
}

/*
*获取最后一个子元素 (兼容所有浏览器)
*/
function getLastElement(element){
	if(element.lastElementChild){
		return element.lastElementChild;
	} else {
		var node = element.lastChild;
		while(node && node.nodeType != 1){
			node = node.previousSibling;
		}
		return node;
	}
}

/*
*方法封装：获取任意对象的内部文本 (兼容所有浏览器)
*/
function getInnerText(ele){
    if(typeof ele.innerText == "string"){
    	return ele.innerText;
    } else {
    	return ele.textContent;
    }
}

/*
*设置任意对象的内部文本 (兼容所有浏览器)
*/
function setInnerText(ele, content){
    if(typeof ele.innerText == "string"){
    	ele.innerText = content;
    } else {
    	ele.textContent = content;
    }
}

/*
*封装：可以对任意对象类名进行替换
*/
function replaceClassName(ele, oldStr, newStr){
        var nameArr = ele.className.split(" ");
        for (var i = 0; i < nameArr.length; i++){
            if(nameArr[i] == oldStr){
                nameArr[i] = newStr;
            }
        }
        ele.className = nameArr.join(" ");
    }
/*
* 通过类名获取 元素的兼容函数
*/
function getElementsByClassName(element, className){
        if(element.getElementsByClassName){
            return element.getElementsByClassName(className);
        } else {
            var filterArr = [];
            var elements = element.getElementsByTagName("*"); 
            for (var i = 0 ;i < elements.length; i++){
                var nameArr = elements[i].className.split(" ");
                for (var j = 0;j < nameArr.length; j++){
                    if (nameArr[i] == className){
                        filterArr.push( elements[i] );
                        break;
                    }
                }
                
            }
            return filterArr;
        }
    }
