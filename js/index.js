$(document).ready(function(){
    pagefull();
    nav_li();
});


function pagefull(){
    var winheight = $(window).height();
    $(".section").height(winheight);
    
    // 페이지에 따른 gnb 생성
    var pageindex = $("#fullpage > div").size();
    $("#fullpage").prepend("<div class='gnb'><ul>");
    for(var i=1;i<=pageindex;i++){
        $("#fullpage > .gnb > ul").append("<li><span>"+i+"</span></li>");
    }
    $("#fullpage .gnb li:first-child").addClass("on");


    // 마우스 휠 이벤트
    $(window).bind("mousewheel", function(event){   
        var gnb = $(".gnb ul li.on");

        if($("body").find("#fullpage:animated").length >= 1) return false;
        if(event.originalEvent.wheelDelta >= 0) { // up
            if(gnb.index() >= 0) gnb.prev().addClass("on").siblings(".on").removeClass("on");

            if(gnb.index() > 0){
                gnb = gnb.index()-1;
                $("#fullpage").animate({"top": -winheight*gnb + "px"},800, "swing");
            };		
        }else{ // down
            if(gnb.index() <= $(".gnb ul li").size()-1) gnb.next().addClass("on").siblings(".on").removeClass("on");

            if(gnb.index() < 3){
                gnb = gnb.index() + 1;
                $("#fullpage").animate({"top": -winheight*gnb + "px"},800, "swing");
            };				
        }
    });
}

// gnb 클릭시 페이지 이동
function nav_li(){
    var winheight = $(window).height();

    $(".gnb li").click(function(){
        var gnbindex = $(this).index();
        if($("body").find("#fullpage:animated").length >= 1) return false;
        $(this).addClass("on").siblings("li").removeClass("on");
        $("#fullpage").animate({"top": -winheight*gnbindex + "px"},800, "swing");
        return false;
    });
}
