$(function() {
	function banner() {
		var imgInfo = [{
				bac: "img/banner/1.jpg",
				img: "img/banner/x1.jpg"
			},
			{
				bac: "img/banner/2.jpg",
				img: "img/banner/x2.jpg"
			},
			{
				bac: "img/banner/3.jpg",
				img: "img/banner/x3.jpg"
			}
		];
		var isMobile = true;
		var width = $(window).width();
		if(width < 768) {
			isMobile = true;
		} else {
			isMobile = false;
		};
		var data = {
			isMobile: isMobile,
			json: imgInfo
		}
		var html = template('slider', data);
		$('#inner').html(html);

		//移动触摸事件
		var isMove = false; //是否滑动
		var startX = 0; //初始手指位置
		var moveX = 0; //手指在屏幕上的滑动到的位置
		var distanceX = 0; //滑动的距离
		$('#inner').on('touchstart', function(e) {
			startX = e.originalEvent.touches[0].clientX;
		}).on('touchmove', function(e) {
			isMove = true;
			moveX = e.originalEvent.touches[0].clientX;

		}).on('touchend', function() {
			distanceX = moveX - startX;
			if(Math.abs(distanceX) > 50 && isMobile) {
				if(distanceX < 0) {
					//下一张
					$('#carousel-example-generic').carousel('next');
				} else if(distanceX > 0) {
					//上一张
					$('#carousel-example-generic').carousel('prev');
				}
			};
			isMove = false; //是否滑动
			startX = 0; //初始手指位置
			moveX = 0; //手指在屏幕上的滑动到的位置
			distanceX = 0; //滑动的距离
		})
	}
	$(window).on('resize', banner).trigger('resize');

	//	window.onscroll = function() {
	//		var height = parseInt(window.getComputedStyle(document.body, null).height) - window.innerHeight - window.pageYOffset;
	//		if(height < 150) {
	//			
	//		}
	//	}
})




/*返回顶部*/
function toDestination(id) {
	//获取点击放回顶部按钮的元素
	var DOM = document.getElementById(id);
	//获取
	var des = DOM.offsetTop;
	var t = document.body.scrollTop || document.documentElement.scrollTop;
	var time = 500;
	var offset = ((t - des) / time) * 10;
	anime();

	function anime() {
		var top = document.body.scrollTop || document.documentElement.scrollTop;
		if(offset > 0) {
			if(top <= des) {
				document.body.scrollTop = des;
			} else {
				document.body.scrollTop = top - offset;
				setTimeout(function() {
					anime();
				}, 10);
			}
		} else {
			if(top >= des) {
				document.body.scrollTop = des;
				setTimeout(function() {
					anime();
				}, 10);
			}
		}
	}
}


window.sunzhihao = {}; //命名空间

sunzhihao.addEvent = function(obj, fn) {
	obj.addEventListener('transitionEnd', fn);
	obj.addEventListener('webkitTransitionEnd', fn);
}


//自适应
sunzhihao.rem=function(){
	var body=document.documentElement;
	AutoPage();
	function AutoPage(){
		if(body.clientWidth>640){
			body.style.fontSize='64px';
		}else if(body.clientWidth<320){
			body.style.fontSize='32px';
		}else{
			body.style.fontSize = body.clientWidth /10+ 'px';
		}
	}
	window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize" , AutoPage, false);
}
sunzhihao.rem();