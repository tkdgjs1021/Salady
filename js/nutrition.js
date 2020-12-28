$(function(){
    $(".plus>img").mouseenter(function(){
        $(".plus>img").css({'opacity':'0.4', 'transition':'all 0.5s'});
        $(".plus>h1").css({'opacity':'1', 'transition':'all 0.5s'});
        $(".plus>p").css({'opacity':'1', 'transition':'all 0.5s'});
        
    }).mouseleave(function(){
        $(".plus>img").css({'opacity':'1'});
        $(".plus>h1").css({'opacity':'0'});
        $(".plus>p").css({'opacity':'0'});
    });
    
    $(".minus>img").mouseenter(function(){
        $(".minus>img").css({'opacity':'0.4', 'transition':'all 0.5s'});
        $(".minus>h1").css({'opacity':'1', 'transition':'all 0.5s'});
        $(".minus>p").css({'opacity':'1', 'transition':'all 0.5s'});
        
    }).mouseleave(function(){
        $(".minus>img").css({'opacity':'1'});
        $(".minus>h1").css({'opacity':'0'});
        $(".minus>p").css({'opacity':'0'});
    });
    
    $(".equal>img").mouseenter(function(){
        $(".equal>img").css({'opacity':'0.4', 'transition':'all 0.5s'});
        $(".equal>h1").css({'opacity':'1', 'transition':'all 0.5s'});
        $(".equal>p").css({'opacity':'1', 'transition':'all 0.5s'});
        
    }).mouseleave(function(){
        $(".equal>img").css({'opacity':'1'});
        $(".equal>h1").css({'opacity':'0'});
        $(".equal>p").css({'opacity':'0'});
    });
});