window.onload=function(){
				//模拟JQuery函数
				function $(id){
					return document.getElementById(id);
				}
//				失去焦点时执行
				$("grade").onblur=function(){
					var txt=$("grade").value;
					if(txt==""){
						$("result").innerHTML="亲，内容不能为空";
						$("result").className="wrong";
					}else if(isNaN(txt)){//isNaN()是js内置函数，判断一个内容是否不是数字
						$("result").innerHTML="亲，请输入数字";
						$("result").className="wrong";
					}else if(txt>150 || txt <0){
						$("result").innerHTML="亲，请输入合理的范围（0-150）";
						$("result").className="wrong";
					}else{
						$("result").innerHTML="亲，输入合理";
						$("result").className="right";
					}
				}
			}