
//这是Alan的JavaScript代码库


//前台调用
var $ =function(){
	return new Base();
}

//基础库
function Base(){
	//创建一个数组，来保存获取的节点和节点数组
	this.elements=[];
};


	
	//获取ID节点
	Base.prototype.getId=function(id){
		this.elements.push(document.getElementById(id));
		return this;	
	};
	
	//获取元素节点 数组
	Base.prototype.getTagName=function(tag){
		var tags = document.getElementsByTagName(tag);
		for(var i = 0;i < tags.length; i++){
			this.elements.push(tags[i]);
		}
		
		return this;
	}

	//获取class节点数组
	Base.prototype.getClass=function(className,idName){
		var node=null;
		if(arguments==2){
			node=document.getById(idName);
		}else{
			node=document;
		}
			
		var all=node.getElementsByTagName("*");
		for(var i = 0;i<all.length;i++){
			if(all[i].className==className){
				this.elements.push(all[i]);
			}
		}	
	return this;
	}
	//获取节点数组的某一个
	Base.prototype.getElement=function(num){
			var element=this.elements[num];//设个element中转一下
			this.elements=[];//清空elements
			this.element[0]=element;//把上面得到的element赋给element[0];
			return this;//返回this对象，方便连缀；
	}
	//设置css
	Base.prototype.css=function(attr,value){
		for(var i=0;i<this.elements.length;i++){
			if(arguments.length==1){
				
				return this.elements[i].style[attr];
			}
			this.elements[i].style[attr]=value;
		}
		
		return this;
		
	}	
	
	//添加class;
	Base.prototype.addClass=function(className){
		for(var i=0;i<this.elements.length;i++){
			this.elements[i].className += ''+className;
		}
		return this;
	}

	//获取某一个节点的属性
	Base.prototype.attr=function(attr){
		return this.elements[0][attr];
	}
	//设置innerHTML,不在html()设参数，则传回原innerHTML，如果设置参数，则把参数设为innerHTML
	Base.prototype.html=function(str){
		for(var i=0;i<this.elements.length;i++){
			if(arguments.length==0){
				return this.elements[i].innerHTML;
			}
			this.elements[i].innerHTML=str;
		}
		
		return this;
		
	}	
	
	//触发点击事件
	Base.prototype.click=function(fn){
		for(var i=0;i<this.elements.length;i++){
			this.elements[i].onclick=fn;
		}
		
		return this;		
	}	
	
	//设置鼠标移入移出方法
	Base.prototype.hover=function(over,out){
		for(var i=0;i<this.elements.length;i++){
			this.elements[i].onmouseover=over;
			this.elements[i].onmouseout=out;
			
		}
		return this;
	}
	
	//设置显示
	Base.prototype.show=function(){
		
		for(var i=0;i<this.elements.length;i++){
			this.elements[i].style.display="block";
		}
		return this;
	}
	
	//设置隐藏
	Base.prototype.hide=function(){
		for(var i=0;i<this.elements.length;i++){
			this.elements[i].style.display="none";
		}
		return this;
	}
	
	//设置物体居中
	Base.prototype.center=function(width,height){
		
			var top =(document.documentElement.clientHeight-height)/2;
			var left =(document.documentElement.clientWidth-width)/2;
			for(var i=0;i<this.elements.length;i++){
				this.elements[i].style.top=top+"px";
				this.elements[i].style.left=left+"px";
				
				}
		
		return this;
	}
	
	//锁屏功能
	Base.prototype.lock=function(){
		for(var i=0;i<this.elements.length;i++){
		  this.elements[i].style.width=document.documentElement.clientWidth+"px";
		  this.elements[i].style.height=document.documentElement.clientHeight+"px";
		  this.elements[i].style.display="block";	
		  document.documentElement.style.overflow="hidden";
			}
		return this;	
					
	}
	
	Base.prototype.unlock=function(){
		for(var i=0;i<this.elements.length;i++){
		this.elements[i].style.display="none";
		document.documentElement.style.overflow="auto";
					}
		return this;					
	}
	
	//触发浏览器窗口事件
	Base.prototype.resize=function(fn){
		window.onresize=fn;
		return this;
	}
	
	//拖拽功能
	Base.prototype.drag=function(){
		for(var i=0;i<this.elements.length;i++){
			this.elements[i].onmousedown=function(e){
				var e=getEvent(e);
				var _this=this;
				var diffX=e.clientX-_this.offsetLeft;
				var diffY=e.clientY-_this.offsetTop;
				
				document.onmousemove=function(e){
					var e=getEvent(e);
					_this.style.left=e.clientX-diffX+"px";
					_this.style.top=e.clientY-diffY+"px";
				};
				document.onmouseup=function(){
					this.onmousemove=null;
					this.onmouseup=null;
				};
			};
			
		}
		return this;
	};
	
	
	
		










































