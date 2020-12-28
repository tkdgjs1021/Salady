$(function(){
    
           $("#gnb").mouseenter(function(){
               $("#header h2").html("<h2><a href='../index.html'><img src='../images/logo2.png'></a></h2>");
               $("#header").css({'background':'white', 'transition':'all 1s'});
               $("#gnb>li>a").css({'color': 'black', 'transition':'all 0.5s'});
               $("#header h3 a").css({"color":"#ffb8b8", "border":"2px solid #ffb8b8", 'transition':'all 1s'});
               $(".btn").html("<a href='#'><img src='../images/menu.png'></a>");
           });
           $("#gnb").mouseleave(function(){
               $("#header h2").html("<h2><a href='../index.html'><img src='../images/logow.png'></a></h2>");
               $("#header").css({'background':'none', 'transition':'all 1s'});
               $("#gnb>li>a").css({'color': 'white', 'transition':'all 0.5s'});
               $("#header h3 a").css({"color":"white", "border":"2px solid white", 'transition':'all 1s'});
               $(".btn").html("<a href='#'><img src='../images/menuw.png'></a>");
           });
    
            /* 햄버거 버튼 메뉴 */
            var num = 0;
            $(".btn").click(function(e){
                e.preventDefault();
                if(num==0){
                    $(".btn>a>img").attr('src', '../images/close.png');
                    $("#header").css({'position': 'fixed', 'width':'100%', 'height':'100%', 'background':'white', 'z-index':'999'});
                    $("#header h2").html("<h2><a href='../index.html'><img src='../images/logo2.png'></a></h2>");
                    $("#header h3 a").css({"color":"#ffb8b8", "border":"2px solid #ffb8b8", 'transition':'all 0.5s'});
                    $("#gnbon").fadeIn(1000);
                    
                    num=1;
                } else {
                    $(".btn>a>img").attr('src', '../images/menuw.png');
                    $("#header").css({'width':'100%', 'height':'650px', 'background-image':'url(../images/sub1.png)','background-repeat':'no-repeat', 'z-index':'999'});
                    $("#header h2").html("<h2><a href='../index.html'><img src='../images/logow.png'></a></h2>");
                    $("#header h3 a").css({"color":"white", "border":"2px solid white", 'transition':'all 0.5s'});
                    $("#gnbon").fadeOut(10);
                    
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
    
            
    });