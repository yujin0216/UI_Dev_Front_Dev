$(document).ready(function(){
	
	var imgs = "";
	for (i=0; i<200; i++){
		imgs += "<img src='image/pic"+i+".jpg'>";
	}
	console.log(imgs);
	$("section").html(imgs);

	$("body").on("mousemove",function(e){
		var scr_width = $(window).width();
		var posX = e.pageX;
		
		// 브라우저 상에서 현재 커서가 위치한 만큼의 백분율 거리
		// = (현재 위치값 / 전체 거리) * 이미지 개수;
		var percent = Math.floor((posX/scr_width)*200);
	
		$("section > img").hide();
		$("section > img").eq(percent).show();
	});

	$('body').jpreLoader({
		splashID: '#jSplash',
		slashVPos: '48%',
		autoClos: true,
		closeBtnText: "Let's Begin!"
	});
});