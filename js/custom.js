$(function(){ // 준비 구문

	var ht = $(window).height();
	$('section').height(ht);

	$(window).on("resize",function(){
		var ht = $(window).height();
		$('section').height(ht);
	});
	
	
	$('#menu li').on("click",function(e){
		e.preventDefault();

		var ht = $(window).height();
		var i = $(this).index();
		var nowTop = i*ht;
		$('html,body').stop().animate({'scrollTop':nowTop},1400,'easeOutBounce');
	});

	$(window).on("scroll",function(){
		var ht = $(window).height();
		var scroll = $(window).scrollTop();
/*
		if(scroll >= ht*0 && scroll < ht*1) {
			$('#menu li').removeClass();
			$('#menu li').eq(0).addClass('on');
		} else if(scroll >= ht*1 && scroll < ht*2) {
			$('#menu li').removeClass();
			$('#menu li').eq(1).addClass('on');
		} else if(scroll >= ht*2 && scroll < ht*3) {
			$('#menu li').removeClass();
			$('#menu li').eq(2).addClass('on');
		} else if(scroll >= ht*3 && scroll < ht*4) {
			$('#menu li').removeClass();
			$('#menu li').eq(3).addClass('on');
		}
*/
		
		for (i=0; i<4; i++){
			if(scroll >= ht*i && scroll < ht*(i+1)) {
				$('#menu li').removeClass();
				$('#menu li').eq(i).addClass('on');
			}
		}

		$('section').on('mousewheel',function(event,delta){
			
			if(delta>0){ // 마우스 휠 올렸을 때
				if($(this).index()!=0){
					var prev = $(this).prev().offset().top;
					$('html,body').stop().animate({'scrollTop':prev},1400,'easeOutBounce');
				}
			} else if (delta<0){ // 마우스 휠 내렸을 때
				if($(this).index()!=3){
					var next = $(this).next().offset().top;
					$('html,body').stop().animate({'scrollTop':next},1400,'easeOutBounce');
				}
			} 
		});
	});
});



	/*
	$('section').on("mouseenter",function(){
		$('section').stop().animate({"height":"100%"},800,'easeOutBounce');
	});

	$('section').on("mouseleave",function(){
		$('section').stop().animate({"height":"100%"},800,'easeOutBounce');
	});
	
	var imgs = "";
	for (i=0; i<10; i++){
		imgs += "<img src='images/obj"+i+".png'>";
	}
	
	$("body").on("mousemove",function(e){
		var scr_width = $(window).width();
		var posX = e.pageX;

		var percent = Math.floor((posX/scr_width)*10);
	
		$("section > img").hide();
		$("section > img").eq(percent).show();
	});
	
});	
*/