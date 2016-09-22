//解决类名的兼容问题
function getClass(selector,father){
	father=father||document
   if(father.getElementsByClassName){
   	return father.getElementsByClassName(selector)
   }else{
   	var newarr=[];
   	var all=father.getElementsByTagName("*");//找所有标签
	for(var i=0;i<all.length;i++){
   		if(check(all[i].className,selector)){
   		// if(all[i].className==selector)//取类名，找到符合的
   			newarr.push(all[i])
   		}
   	}
   	return newarr;
   }
}
function check(str,selector){
	var arr=str.split(" ") 
      for(var i in arr){
		if(arr[i]==selector){
			return true
		}
	}
	return false;
}

//2、获取样式的兼容函数
/*getClass(ele,attr)
ele:操作document的对象
attr：获取哪个属性的值*/
function getStyle(ele,attr){
   if(ele.currentStyle){
      return ele.currentStyle[attr]
   }else{
      return getComputedStyle(ele,null)[attr]
   }
}


//3、获取元素的函数  参数类型必须都是字符串  获取要加下标
function $(selector,father){
   var father=father||document
    if(typeof selector=="string"){
      selector=selector.replace(/^\s*|\s*$/g,"")//去掉字符串前后的空格
      if(selector.charAt(0)=="."){//比较指定位置的字符是否是“.”
      // return   getClass(selector.slice(1),father)//截取名字,和下面的一样功能没substr强大
      return   getClass(selector.substr(1),father)
      }else if(selector.charAt(0)=="#"){
       // return father.getElementById(selector.slice(1))
       return father.getElementById(selector.substr(1))
       }else if(/^[a-z1-6]{1,10}/.test(selector)){
      //正则获取标签名  上面的两种都可以
         return father.getElementsByTagName(selector)
      }
      }else if(typeof selector=="function"){
        addEvent(window,"load",selector)
    }
}

// 事件绑定的兼容函数
function addEvent(obj,event,callback){
  if(obj.addEventListener){
    obj.addEventListener(event,callback,false)
  }else{
    obj.attachEvent("on"+event,callback)
  }
}
// 缺陷就是少个数组，写入全部的标签

// 事件删除、注销
function delEvent(obj,event,callback){
  if(obj.removeEventListener){
    obj.removeEventListener(event,callback,false)
  }else{
    obj.detachEvent("on"+event,callback)
  }
}



//滚动条出现消失效果
document.documentElement.scrollTop=1;
var obj;
if(document.documentElement.scrollTop){
   obj=document.documentElement;
}else{
   obj=document.body;
}  



// 4.获取子节点
// 元素子节点 a nodeType=1
// 元素+文本  b 
function getChilds(father,type){
  type=type||"a"//判断类型
  var all=father.childNodes;//取出所有的元素
  var arr=[]//定义一个新数组
  for(var i=0; i<all.length; i++){
    if(type=="a"){
      if(all[i].nodeType==1){
        arr.push(all[i]);
      }
    }else if(type=="b"){
      if(all[i].nodeType==1 || all[i].nodeType==3 && all[i].nodeValue.replace(/^\s*|\s*$/g,"")!=""){//将获取到的所有元素和文本中的空格去掉后应该不等于空字符。
        arr.push(all[i]);
      }
    }
  }
  return arr;
}

//5.第一个子节点的获取
function getFirst(father){
  return getChilds(father)[0]
}
//6.最后一个子节点的获取
function getLast(father){
  return getChilds(father)[getChilds(father).length-1]
}
//7.获取指定位置的子节点
function getNum(father,num){
   return getChilds(father)[num]
}
//8.获取下一个兄弟节点
// 思路：找到一个兄弟时，对它判断，如果是空文本或者是注释时，再接着向下找，如果找到的是元素节点时，停止寻找
//ele 表示元素
function getNext(ele){
  var next=ele.nextSibling//将获取到的下一个兄弟节点存到变量next中
  if(next==null){
    return false;
  }
   while(next.nodeType==3||next.nodeType==8){
    next=next.nextSibling;//判断节点类型是否是文本节点和注释节点，若是的话在它基础之上继续寻找下一个兄弟节点
    if(next==null){//如果找到的下一个兄弟结点是空的，直接跳出，不用继续找了
      return false;
    }
   }
  return next
}

//9.获取上一个兄弟节点
function getPrevious(ele){
   var pre=ele.previousSibling;
   if(pre==null){
     return false
   }
   while(pre.nodeType==3||pre.nodeType==8){
     pre=pre.previousSibling;
     if(pre==null){
       return false
     }
   }
   return pre
}

// 10.在某个对象之后插入 
 function insertAfter(father,newNode,node){
  var next=getNext(node);
  if(next){
    father.insertBefore(newNode,next)
  }else{
    father.appendChild(newNode)
  }
 }