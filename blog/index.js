
window.onload=function(){
	//个人中心
	$().getClass("member").hover(function(){
		$(this).css("background","url(images/arrow2.png)no-repeat 75px center");
		$().getTagName("ul").show();
		
	},function(){
		$(this).css("background","url(images/arrow.png)no-repeat 75px center");
		$().getTagName("ul").hide();
		
	});
	
	//登陆框
	//用到的知识点有：隐藏，显示，浏览器窗口改变大小触发事件，计算屏幕居中位置等功能
	/*window.onresize=function(){
	var top =(document.documentElement.clientHeight-250)/2;
	var left =(document.documentElement.clientWidth-350)/2;
	$().getId("login").css("top",top+"px").css("left",left+"px");
	}*/
	var login= $().getId("login");
	var screen=$().getId("screen");
	var reg=$().getId("reg");
	login.center(350,250);
	
	//注册框
	reg.center(600,550);
	
	//浏览器尺寸变化时的调整
	$().resize(function(){
		login.center(350,250);
		if(login.css("display")=="block"){
			screen.lock();
		};
		
	});
	
	
	$().getClass("login").click(function(){
		login.css("display","block");
		//锁屏
		screen.lock();
		
	});
	$().getClass("close").click(function(){
		login.css("display","none");
		reg.css("display","none");
		//关闭锁屏
		screen.unlock();
	});
	
	
	//浏览器尺寸变化时的调整
	$().resize(function(){
		reg.center(600,550);
		if(reg.css("display")=="block"){
			screen.lock();
		};
		
	});
	
	
	$().getClass("reg").click(function(){
		reg.css("display","block");
		//锁屏
		screen.lock();
		
	});

	
	
	//拖拽
	//var oDiv=document.getElementById("login");
	//拖拽流程：
	//1.先点下去
	//2.在点下的物体被选中，进行move移动
	//3.抬起鼠标，停止移动
	//注意：点击某个物体，用oDiv即可，move和up是全局区域,也就是整个文档通用，应该用document;
	login.drag();
	reg.drag();
	
	//轮播器初始化
	$().getClass('lbq1').css("display","block");
	$().getClass('li1').css("color","#333");
	$().getClass('span').html($().getClass('lbq1').attr("alt"));
	
	//自动轮播器
	setInterval(function(){
		
	},1000);
	
	//手动轮播器
	$().getClass("li1").hover(function(){
		$().getClass('lbq2').css("display","none");
		$().getClass('lbq3').css("display","none");
		$().getClass('lbq1').css("display","block");
		$().getClass('li2').css("color","grey");
		$().getClass('li3').css("color","grey");
		$().getClass('li1').css("color","#333");
		$().getClass('span').html($().getClass('lbq1').attr("alt"));
	},function(){
		
	});
	
	$().getClass("li2").hover(function(){
		$().getClass('lbq1').css("display","none");
		$().getClass('lbq3').css("display","none");
		$().getClass('lbq2').css("display","block");
		$().getClass('li1').css("color","grey");
		$().getClass('li3').css("color","grey");
		$().getClass('li2').css("color","#333");
		$().getClass('span').html($().getClass('lbq2').attr("alt"));
	},function(){
		
	});
	
	$().getClass("li3").hover(function(){
		$().getClass('lbq1').css("display","none");
		$().getClass('lbq2').css("display","none");
		$().getClass('lbq3').css("display","block");
		$().getClass('li1').css("color","grey");
		$().getClass('li2').css("color","grey");
		$().getClass('li3').css("color","#333");
		$().getClass('span').html($().getClass('lbq3').attr("alt"));
	},function(){
		
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
};	
	
	
	
	
	
	
	
	
	
	
