$(function(){
   
    $(".c1").mouseenter(function(){
        $(".sector").css({'height':'500px', 'transition':'all 0.2s'});
        $(".c1 h2").fadeOut();
        $(".c1 p").fadeIn();
    }).mouseleave(function(){
        $(".sector").css({'height':'0', 'transition':'all 0.6s'});
        $(".c1 h2").fadeIn();
        $(".c1 p").fadeOut();
    });
    $(".c2").mouseenter(function(){
        $(".sector").css({'height':'500px', 'transition':'all 0.2s'});
        $(".c2 h2").fadeOut();
        $(".c2 p").fadeIn();
    }).mouseleave(function(){
        $(".sector").css({'height':'0', 'transition':'all 0.6s'});
        $(".c2 h2").fadeIn();
        $(".c2 p").fadeOut();
    });
    $(".c3").mouseenter(function(){
        $(".sector").css({'height':'500px', 'transition':'all 0.2s'});
        $(".c3 h2").fadeOut();
        $(".c3 p").fadeIn();
    }).mouseleave(function(){
        $(".sector").css({'height':'0', 'transition':'all 0.6s'});
        $(".c3 h2").fadeIn();
        $(".c3 p").fadeOut();
    });
    $(".c4").mouseenter(function(){
        $(".sector").css({'height':'500px', 'transition':'all 0.2s'});
        $(".c4 h2").fadeOut();
        $(".c4 p").fadeIn();
    }).mouseleave(function(){
        $(".sector").css({'height':'0', 'transition':'all 0.6s'});
        $(".c4 h2").fadeIn();
        $(".c4 p").fadeOut();
    });
    
    $(".diagram>img").mouseenter(function(){
       $(".diagram").css({'transform':'scale(1.2)'});
    }).mouseleave(function(){ $(".diagram").css({'transform':'scale(1)'});
    });
});