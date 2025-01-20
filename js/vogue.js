$(document).ready(function(){

	// 1. 동영상의 부모 p요소의 높이를 알아냅니다.
	// 2. 알아낸 높이를 동영상의 높이에 적용합니다.
	
	$(window).on("resize",function(){
		console.log("resize");
		// 1. 동영상의 부모 p요소의 높이를 알아냅니다.
		// 2. 알아낸 높이를 동영상의 높이에 적용합니다.
	});

	$(".btnMenu").on("click",function(){
		$(this).fadeOut();
		$("nav").addClass("on");
		$("section").addClass("on");
	});	
	
	$("nav li").on("click",function(){
		$(".btnMenu").fadeIn();
		$("nav").removeClass("on");
		$("section").removeClass("on");
	
		var i = $(this).index();

		$("section > div").removeClass("on");
		$("section > div").eq(i).addClass("on");

		/*
		if(i==0){
			$("section > div").eq(0).addClass("on");
			$("section > div").eq(1).removeClass("on");
			$("section > div").eq(2).removeClass("on");
		} else if(i==1){
			$("section > div").eq(1).addClass("on");
			$("section > div").eq(0).removeClass("on");
			$("section > div").eq(2).removeClass("on");
		} else {
			$("section > div").eq(2).addClass("on");
			$("section > div").eq(0).removeClass("on");
			$("section > div").eq(1).removeClass("on");
		}
		*/
		
	});
});