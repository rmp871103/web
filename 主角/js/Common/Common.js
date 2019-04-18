$(function(){
    $(".characters__item").mouseenter(function(){
        var title=$(this).data('title');
        if(!$(this).children("div").length)
        {
            $(this).append('<div class="overlay"></div>');
        }
        var overlay=$(this).children('.overlay');
        overlay.html('<h3>'+title+'</h3>');
    overlay.show();
    });
    $(".characters__item").mouseleave(function(){
        var overlay=$(this).children('.overlay');
    
        overlay.hide();
    });
    $("#Joseph").click(function(){
        $('.characters').hide(500);
        $('#Joseph_Introduction').show(500);
        $('#Joseph_Introduction').css('display:flex');
    });
    $("#Caesar").click(function(){
        $('.characters').hide(500);
        $('#Caesar_Introduction').show(500);
        $('#Caesar_Introduction').css('display:flex');
    });
    $("#Lisa").click(function(){
        $('.characters').hide(500);
        $('#Lisa_Introduction').show(500);
        $('#Lisa_Introduction').css('display:flex');
    });
    $("#Stroheim").click(function(){
        $('.characters').hide(500);
        $('#Stroheim_Introduction').show(500);
        $('#Stroheim_Introduction').css('display:flex');
    });
    $('.close').click(function(){
        $('.characters').show(500);
        $(this).parent('div').hide(500);
        var music=document.getElementById('music');
        if(music.play)
        {
            music.pause();
            music.currentTime = 0;
        }
        // $(this).parent('div').css('display:none');
    });
    $('#voice_btn').click(function(){
        var music = document.getElementById('music');
        if(music.pause)
        {
            music.play();
            console.log("audio play");
        }
        else{
            music.pause();
            music.currentTime = 0;
            console.log("audio pause");
        }
    });
});

