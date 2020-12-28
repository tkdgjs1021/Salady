$(function(){
    
            $(window).scroll(function(){
               var sct = $(window).scrollTop();
                
                $(".main").each(function(){
                   var i = $(this).index();
                    
                   if($(this).offset().top <= sct){
                     
                    $(".navbtn>li").removeClass("on");
                    $(".navbtn>li").eq(i).addClass("on");
                  
                   }
                });
            });
    
           $(".main").mousewheel(function(e, d){
               var i = $(this).index();
//               console.log(i);
               
               if(d>0){     //휠올릴때
                   var prev = $(this).prev().offset().top;                 
                   $("html, body").stop().animate({scrollTop:prev},800, "easeOutCubic");
                   if(i==4 || i==3){
                       $(".navbtn").css({'opacity':'1' , 'transform':'translate(0px)', 'transition':'all 1s'});
                   }
                   
               } else if(d<0){      //휠 내릴때
                   var next = $(this).next().offset().top;
                   $("html, body").stop().animate({scrollTop:next},800, "easeOutCubic");
                   if(i==3){
                       $(".navbtn").css({'opacity':'0' , 'transform':'translate(30px, 30px)', 'transition':'all 1s'});
                   }
               }
            });
    
            $(".navbtn li").click(function(e){
                e.preventDefault(); //li태그안에 a가 있기때문에 선언안해주면 a태그가실행됌
                
                var ht = $(window).height();    //윈도우 높이값
                var i = $(this).index();    //인덱스값(0,1,2,3)
                var nowTop = i*ht;      // nowTop=윈도우높이 * i
                
                $("html, body").stop().animate({scrollTop:nowTop}, 1000);
            });
    
            
    
            $(".navbtn>li").click(function(e){
                e.preventDefault();
                var i = $(this).index();
                
                $(".navbtn>li").removeClass("on");
                $(".navbtn>li").eq(i).addClass("on");
            });
           
           $("#gnb").mouseenter(function(){
               $("#header h2").html("<h2><a href='../index.html'><img src='images/logo2.png'></a></h2>");
               $("#header").css({'background':'white', 'transition':'all 1s'});
               $("#gnb>li>a").css({'color': 'black', 'transition':'0.5s'});
               $("#header h3 a").css({"color":"#ffb8b8", "border":"2px solid #ffb8b8", 'transition':'all 1s'});
               $(".btn").html("<a href='#'><img src='images/menu.png'></a>");
           });
           $("#gnb").mouseleave(function(){
               $("#header h2").html("<h2><a href='#'><img src='images/logow.png'></a></h2>");
               $("#header").css({'background':'none', 'transition':'all 1s'});
               $("#gnb>li>a").css({'color': 'white', 'transition':'0.5s'});
               $("#header h3 a").css({"color":"white", "border":"2px solid white", 'transition':'all 1s'});
               $(".btn").html("<a href='#'><img src='images/menuw.png'></a>");
           });
    
            /* 햄버거 버튼 메뉴 */
            var num = 0;
            $(".btn").click(function(e){
                e.preventDefault();
                if(num==0){
                    $(".btn>a>img").attr('src', 'images/close.png');
                    $("#header").css({'position': 'fixed', 'width':'100%', 'height':'100%', 'background':'white', 'transition':'all 0.5s', 'z-index':'999'});
                    $("#header h2").html("<h2><a href='../index.html'><img src='images/logo2.png'></a></h2>");
                    $("#header h3 a").css({"color":"#ffb8b8", "border":"2px solid #ffb8b8", 'transition':'all 0.5s'});
                    $("#gnbon").fadeIn(1000);
                    
                    num=1;
                } else {
                    $(".btn>a>img").attr('src', 'images/menuw.png');
                    $("#header").css({'position': 'fixed', 'width':'100%', 'height':'182px', 'background':'none', 'transition':'all 0.5s', 'z-index':'999'});
                    $("#header h2").html("<h2><a href='../index.html'><img src='images/logow.png'></a></h2>");
                    $("#header h3 a").css({"color":"white", "border":"2px solid white", 'transition':'all 0.5s'});
                    $("#gnbon").fadeOut(100);
                    
                    num=0;
                }
            });
            
            var number = 0;
            $("#gnbon>li>a>span>i").click(function(e){
               e.preventDefault();
                if(number==0){
                    $(this).css({'transform':'rotate(180deg)'});
                    number = 1;
                } else {
                    $(this).css({'transform':'rotate(0deg)'});
                    number = 0;
                }
            });
    
    
            $(".down").eq(0).click(function(e){
                e.preventDefault();
               $(".subon").eq(0).addClass(".on").slideToggle('.on'); 
            });
            $(".down").eq(1).click(function(e){
                e.preventDefault();
               $(".subon").eq(1).addClass(".on").slideToggle('.on'); 
            });
            $(".down").eq(2).click(function(e){
                e.preventDefault();
               $(".subon").eq(2).addClass(".on").slideToggle('.on'); 
            });
    
            
            /* Section1 내비게이터 */
            $(".p2").click(function(e){
                e.preventDefault();
                $(".be1 h1").html("Be Healthy");
                $(".be1 h1").css({'color':'white', 'transition':'all 1s'});
                $(".be1 h2").html('샐러디는 신선한 재료로 <br>모두에게 건강한 음식을 만듭니다.');
                $(".be1 h2").css({'color':'white', 'transition':'all 1s'});
                $(".p1").css({'background':'none', 'border':'3px solid white'});
                $(".p2").css('background', 'white');
                $(".be1img").fadeOut(300);
//                $(".be1img").css('display','none');
                $(".main1").css({'background':'url(images/main1-2.png)no-repeat center center', 'background-size':'cover', 'transition':'all 0.5s'});
            });
            $(".p1").click(function(e){
                e.preventDefault();
                $(".be1 h1").html("Be Meal");
                $(".be1 h1").css({'color':'white', 'transition':'all 1s'});
                $(".be1 h2").html("샐러디는 애피타이저가 아닌 <br>한 끼 식사의 샐러드를 만듭니다.");
                $(".be1 h2").css({'color':'white', 'transition':'all 1s'});
                 $(".p2").css({'background':'none', 'border':'3px solid white'});
                $(".p1").css('background', 'white');
                $(".be1img").fadeIn(300);
//                $(".be1img").css('display','block');
                $(".main1").css({'background':'url(images/main1-1.png)no-repeat center center', 'background-size':'cover', 'transition':'all 0.5s'});
            });
    
    
            $(".allways .img1").mouseenter(function(){
               $(".img1>img").css({'opacity':'1', 'transform':'scale(1.2)', 'transition':'all 0.5s'});
            });        
            $(".allways .img1").mouseleave(function(){
               $(".img1>img").css({'opacity':'0.85', 'transform':'scale(1)', 'transition':'all 0.5s'}); 
            });           
    
            $(".allways .img2").mouseenter(function(){
               $(".img2>img").css({'opacity':'1', 'transform':'scale(1.2)', 'transition':'all 0.5s'});
            });        
            $(".allways .img2").mouseleave(function(){
               $(".img2>img").css({'opacity':'0.85', 'transform':'scale(1)', 'transition':'all 0.5s'}); 
            });
    
            $(".allways .img3").mouseenter(function(){
               $(".img3>img").css({'opacity':'1', 'transform':'scale(1.2)', 'transition':'all 0.5s'});
            });        
            $(".allways .img3").mouseleave(function(){
               $(".img3>img").css({'opacity':'0.85', 'transform':'scale(1)', 'transition':'all 0.5s'}); 
            });
    
            $(".viewbtn a").mouseenter(function(){
               $(this).css({'border':'2px solid black', 'background-color':'black', 'transition':'all 0.5s'}); 
            });
            $(".viewbtn a").mouseleave(function(){
               $(this).css({'border':'2px solid white', 'background':'none', 'transition':'all 0.5s'}); 
            });
    
            $(".viewbtn2 a").mouseenter(function(){
               $(this).css({'border':'2px solid black', 'background-color':'black', 'transition':'all 0.5s'}); 
            });
            $(".viewbtn2 a").mouseleave(function(){
               $(this).css({'border':'2px solid white', 'background':'none', 'transition':'all 0.5s'}); 
            });

    
            $(".right").click(function(e){
                e.preventDefault();
                
                $(this).toggleClass("right");
                $(this).toggleClass("left");
                $(".left>a>img").attr('src', 'images/left.png');
                $(".right>a>img").attr('src', 'images/right.png');
                $(".bg4").toggleClass("leftbg4");
                $(".bg41").toggleClass("leftbg41");
                
                $(".hff").toggleClass("hff2");
                $(".hff h1").text($(".hff h1").text() == "It's Salady Time" ? "Healthy Fast Food" : "It's Salady Time");
                $(".hff h2").html($(".hff h2").html() == "샐러디는 미래지향적이며 <br>이 시대의 웰빙라이프를 선도합니다." ? "샐러디는 '건강한 패스트푸드'의 가치를 지닌 샐러드를 만듭니다" : "샐러디는 미래지향적이며 <br>이 시대의 웰빙라이프를 선도합니다.");                    
                $(".viewbtn2").toggleClass("viewbtn22");
            });
    

    
    });