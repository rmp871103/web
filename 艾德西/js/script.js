

// $('.character_img').mouseleave(function(){
//     var overlay = $(this).children('.overlay');

//     overlay.fadeOut(500);
// });


/*toolbar hover change background color*/
$(function(){
    $(".nav-list-item").mouseenter(function(){
        console.log("test"); 
        $(this).children(".nav-list-item-link").css('background-color', 'gray');
        $(this).children("ul.nav-sublist").css('display', 'block');
        $(".nav-sublist-item").mouseenter(function(){
            console.log("test2"); 
            $(this).css('background-color', 'gray');
            $(this).parent(".nav-sublist").parent('nav-list-item').css('background-color', 'gray');
        }); 

        $(".nav-sublist-item").mouseleave(function(){
            console.log("test"); 
            $(this).css('background-color', 'transparent' );
            $(this).parent(".nav-sublist").parent('nav-list-item').css('background-color', 'transparent' );
        });
    });
}); 

$(function(){
    $(".nav-list-item").mouseleave(function(){
        console.log("test"); 
        $(this).children(".nav-list-item-link").css('background-color', 'transparent' );
        $(this).children("ul.nav-sublist").css('display', 'none');
    });
}); 





$(function(){
    $("div.main_picture").click(function(){

        if (document.getElementById('P1')){
            $(this).children('img').attr("src",'./img/acdc2.jpg');
            document.getElementById('P1').id = 'P2';
        }
        else if(document.getElementById('P2')){
            $(this).children('img').attr("src",'./img/acdc1.jpg');
            document.getElementById('P2').id = 'P1';           
        }
    });
});


$(function(){                   /*點擊 播放、暫停 音樂*/ 
    $('#audio_btn').click(function(){

        var music = document.getElementById('music');
        if (music.paused){
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




/*if mouseenter icon  than bigger in footer*/ 
$(function(){                                               /*facebook*/
    $(".facebook_icon").mouseenter(function(){
        console.log("test");
        $(".facebook_icon").css('height', '120%');
    }); 
});


$(function(){
    $(".facebook_icon").mouseleave(function(){
        console.log("test2");
        $(".facebook_icon").css('height', '100%');
    }); 
});


$(function(){                                               /*ig*/
    $(".ig_icon").mouseenter(function(){
        console.log("test");
        $(".ig_icon").css('height', '120%');
    }); 
});


$(function(){
    $(".ig_icon").mouseleave(function(){
        console.log("test2");
        $(".ig_icon").css('height', '100%');
    }); 
});


$(function(){                                               /*bahamut*/
    $(".bahamut_icon").mouseenter(function(){
        console.log("test");
        $(".bahamut_icon").css('height', '120%');
    }); 
});


$(function(){
    $(".bahamut_icon").mouseleave(function(){
        console.log("test2");
        $(".bahamut_icon").css('height', '100%');
    }); 
});
