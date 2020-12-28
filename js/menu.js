$(function(){
    $(".b1>p").hide();
    $(".b2>p").hide();
    $(".b4>p").hide();
    $(".b5>p").hide();
    
    $(".b1").mouseenter(function(){ 
        $(".b1>p").fadeIn(100);
        $(".b1>img").fadeOut(100);
    }).mouseleave(function(){
        $(".b1>p").fadeOut(100);
        $(".b1>img").fadeIn(100);
    });
    $(".b2").mouseenter(function(){ 
        $(".b2>p").fadeIn(100);
        $(".b2>img").fadeOut(100);
    }).mouseleave(function(){
        $(".b2>p").fadeOut(100);
        $(".b2>img").fadeIn(100);
    });
    $(".b4").mouseenter(function(){ 
        $(".b4>p").fadeIn(100);
        $(".b4>img").fadeOut(100);
    }).mouseleave(function(){
        $(".b4>p").fadeOut(100);
        $(".b4>img").fadeIn(100);
    });
    $(".b5").mouseenter(function(){ 
        $(".b5>p").fadeIn(100);
        $(".b5>img").fadeOut(100);
    }).mouseleave(function(){
        $(".b5>p").fadeOut(100);
        $(".b5>img").fadeIn(100);
    });
    
    /* 웜샐러드 */
    var banner1 = $(".ban1").find("ul");
            var bannerWidth1 = banner1.children().outerWidth();   //border를 포함한 li넓이
            var bannerHeight1 = banner1.children().outerHeight();
            var length1 = banner1.children().length;      //li의갯수
            
            rollingBanner1();
            
            function rollingBanner1(){
                banner1.css("width", bannerWidth1*length1+"px");   //ul의넓이값: 340*6;
                banner1.css("height", bannerHeight1+"px");
                
                $(".next1").click(function(){
                   banner1.animate({left:-bannerWidth1+"px"}, 1000, function(){
                       //첫번째 이미지를 마지막 끝에 복사(이동이아닌 복사)
                       $(this).append("<li>"+$(this).find("li:first").html()+"</li>");
                       $(this).find("li:first").remove();
                       $(this).css("left", '0px');
                   });
                });
                $(".prev1").click(function(){
                   banner1.prepend("<li>"+banner1.find("li:last").html()+"</li>");
                    banner1.find("li:last").remove();
                    banner1.css("left", -bannerWidth1);
                    banner1.stop().animate({'left':'0px'}, 1000);
                });
            }
    
    /* 베지샐러드 */
    var banner2 = $(".ban2").find("ul");
            var bannerWidth2 = banner2.children().outerWidth();   //border를 포함한 li넓이
            var bannerHeight2 = banner2.children().outerHeight();
            var length2 = banner2.children().length;      //li의갯수
            
            rollingBanner2();
            
            function rollingBanner2(){
                banner2.css("width", bannerWidth2*length2+"px");   //ul의넓이값: 340*6;
                banner2.css("height", bannerHeight2+"px");
                
                $(".next2").click(function(){
                   banner2.animate({left:-bannerWidth2+"px"}, 1000, function(){
                       //첫번째 이미지를 마지막 끝에 복사(이동이아닌 복사)
                       $(this).append("<li>"+$(this).find("li:first").html()+"</li>");
                       $(this).find("li:first").remove();
                       $(this).css("left", '0px');
                   });
                });
                $(".prev2").click(function(){
                   banner2.prepend("<li>"+banner2.find("li:last").html()+"</li>");
                    banner2.find("li:last").remove();
                    banner2.css("left", -bannerWidth2);
                    banner2.stop().animate({'left':'0px'}, 1000);
                });
            }
    
    /* 버거 */
    var banner3 = $(".ban3").find("ul");
            var bannerWidth3 = banner3.children().outerWidth();   //border를 포함한 li넓이
            var bannerHeight3 = banner3.children().outerHeight();
            var length3 = banner3.children().length;      //li의갯수
            
            rollingBanner3();
            
            function rollingBanner3(){
                banner3.css("width", bannerWidth3*length3+"px");   //ul의넓이값: 340*6;
                banner3.css("height", bannerHeight3+"px");
                
                $(".next3").click(function(){
                   banner3.animate({left:-bannerWidth3+"px"}, 1000, function(){
                       //첫번째 이미지를 마지막 끝에 복사(이동이아닌 복사)
                       $(this).append("<li>"+$(this).find("li:first").html()+"</li>");
                       $(this).find("li:first").remove();
                       $(this).css("left", '0px');
                   });
                });
                $(".prev3").click(function(){
                   banner3.prepend("<li>"+banner3.find("li:last").html()+"</li>");
                    banner3.find("li:last").remove();
                    banner3.css("left", -bannerWidth3);
                    banner3.stop().animate({'left':'0px'}, 1000);
                });
            }
    
    /* 랩 */
    var banner4 = $(".ban4").find("ul");
            var bannerWidth4 = banner4.children().outerWidth();   //border를 포함한 li넓이
            var bannerHeight4 = banner4.children().outerHeight();
            var length4 = banner4.children().length;      //li의갯수
            
            rollingBanner4();
            
            function rollingBanner4(){
                banner4.css("width", bannerWidth4*length4+"px");   //ul의넓이값: 340*6;
                banner4.css("height", bannerHeight4+"px");
                
                $(".next4").click(function(){
                   banner4.animate({left:-bannerWidth4+"px"}, 1000, function(){
                       //첫번째 이미지를 마지막 끝에 복사(이동이아닌 복사)
                       $(this).append("<li>"+$(this).find("li:first").html()+"</li>");
                       $(this).find("li:first").remove();
                       $(this).css("left", '0px');
                   });
                });
                $(".prev4").click(function(){
                   banner4.prepend("<li>"+banner4.find("li:last").html()+"</li>");
                    banner4.find("li:last").remove();
                    banner4.css("left", -bannerWidth4);
                    banner4.stop().animate({'left':'0px'}, 1000);
                });
            }
});