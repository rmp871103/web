
$(function(){
    $(".nav-item-link").mouseenter(function(){

        var title = $(this).parent('li').data('title');
        if (!$(this).children('div').length){
            $(this).append('<div class="overlay"></div>');
        }
        var overlay =$(this).children('.overlay');
        overlay.html("<h3>"+title+"</h3>");
        overlay.fadeIn(300);
    });
});
$(function(){
    $('.nav-item-link').mouseleave(function(){
        var overlay =$(this).children('.overlay');
        overlay.fadeOut(300);
    });
});