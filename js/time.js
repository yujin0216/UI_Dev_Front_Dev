$(document).ready(function(){
	
	var timer =  setInterval(function(){
		
		var now = new Date();
		var hr = now.getHours();
		var min = now.getMinutes();
		var sec = now.getSeconds();

		if(hr<10){
			hr ='0'+hr;
		}

		if(min<10){
			min ='0'+min;
		}

		if(sec<10){
			sec ='0'+sec;
		}
		$('p span').eq(0).text(hr);
		$('p span').eq(1).text(min);
		$('p span').eq(2).text(sec);
		// console.log(hr+" : "+min+" : "+sec );

	},1000);
	
	var now = new Date();
	var hr = now.getHours();

	if(hr>=5 && hr<11){
		$('#wrap').removeClass();
		$('#wrap').addClass('morning');
		$('nav li').removeClass('on');
		$('nav li').eq(0).addClass('on');
	} else if(hr>=11 && hr<17){
		$('#wrap').removeClass();
		$('#wrap').addClass('afternoon');
		$('nav li').removeClass('on');
		$('nav li').eq(1).addClass('on');
	} else if(hr>=17 && hr<24){
		$('#wrap').removeClass();
		$('#wrap').addClass('evening');
		$('nav li').removeClass('on');
		$('nav li').eq(2).addClass('on');
	} else {
		$('#wrap').removeClass();
		$('#wrap').addClass('night');
		$('nav li').removeClass('on');
		$('nav li').eq(3).addClass('on');
	}



	$('nav li').on('click',function(){
		
		var className = $(this).children('a').text();
		$('nav li').removeClass('on');
		$(this).addClass('on');
		$('#wrap').removeClass();
		$('#wrap').addClass(className);
	
	
	});
});
	/*
    var timer =  setInterval(function(){
        var now = new Date();
        var hr = addZeros(now.getHours(),2);
        var min = addZeros(now.getMinutes(),2);
        var sec = addZeros(now.getSeconds(),2);
        
        $("span").eq(0).text(hr);
        $("span").eq(1).text(min);
        $("span").eq(2).text(sec);
        
    },1000);
    
    function addZeros(num, digit) { // 자릿수 맞춰주기
        var zero = '';
        num = num.toString();
        if (num.length < digit) {
            for (i = 0; i < digit - num.length; i++) {
                zero += '0';
            }
        }
        return zero + num;
    }
      $('nav li').eq(0).click(function(){ // 아침에
      $('body').css({'background-image':'url(./images/bg_morning.jpg)'});
      $('figure').css({'background-image':'url(./images/phone_morning.png)'});
	  $('h1 img').css({'background-image':'url(./images/logo_b.png)'});
   });
      $('nav li').eq(1).click(function(){ // 오후에 
      $('body').css({'background-image':'url(images/bg_afternoon.jpg)'});
      $('figure').css({'background-image':'url(images/phone_afternoon.png)'});
	  $('h1 img').css({'background-image':'url(images/logo_b.png)'});
   });
      $('nav li').eq(2).click(function(){ // 저녁에 
      $('body').css({'background-image':'url(images/bg_evening.jpg)'});
      $('figure').css({'background-image':'url(images/phone_evening.png)'});
	  $('h1 img').css({'background-image':'url(images/logo_w.png)'});
   });
      $('nav li').eq(3).click(function(){ // 밤에 
      $('body').css({'background-image':'url(images/bg_night.jpg)'});
	  $('h1').css({'background-image':'url(images/logo_w.png)'});
      $('figure').css({'background-image':'url(images/phone_night.png)'});
      $('figure span').css({"color":"#fff"});
      $('article p').css({"color":"#B3A4A1"});
      $('article strong').css({"color":"#fff"});
      $('#gnb > li > a').css({"color":"#fff"}),$('#sns > li > a').css({"color":"#fff"});
   });
	*/
