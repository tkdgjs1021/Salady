$(function(){
    $("#section3>ul>li").mouseenter(function(){
        $(this).css({'transform':'translateY(-30px)', 'transition':'all 0.5s'});
    }).mouseleave(function(){
        $(this).css({'transform':'translateY(0px)', 'transition':'all 0.5s'});
    });
    
});