$(function(){
    $('.tab').hover(function(){
        $('.tab,.panel').removeClass('active');

        $(this).addClass('active');

        let index = $('.tab').index(this);
        $('.panel').eq(index).addClass('active');
    });
});

$(function(){
    $('.country-arrow').click(function(){
        $('.modal').fadeTo(500,0.7);
    });

    $('.modal-close').click(function(){
        $('.modal').fadeOut(700);
    });
});

$(function(){
    $('.boutique').mouseover(function(){
        $(this).addClass('backGroundColor-blue');
    });
    $('.boutique').mouseout(function(){
        $(this).removeClass('backGroundColor-blue');
    });
});

$(function(){
    $('.boutique').mouseover(function(){
        $('.boutique p').addClass('font-color-change');
    });
    $('.boutique p').mouseout(function(){
        $(this).removeClass('font-color-change');
    });
});

$(function(){
    $('.cafe').mouseover(function(){
        $(this).addClass('backGroundColor-green');
    });
    $('.cafe').mouseout(function(){
        $(this).removeClass('backGroundColor-green');
    });
});

$(function(){
    $('.cafe').mouseover(function(){
        $('.cafe p').addClass('font-color-change');
    });
    $('.cafe p').mouseout(function(){
        $(this).removeClass('font-color-change');
    });
});

$(function(){
    $('.musique').mouseover(function(){
        $(this).addClass('backGroundColor-red');
    });
    $('.musique').mouseout(function(){
        $(this).removeClass('backGroundColor-red');
    });
});

$(function(){
    $('.musique').mouseover(function(){
        $('.musique p').addClass('font-color-change');
    });
    $('.musique p').mouseout(function(){
        $(this).removeClass('font-color-change');
    });
});

$(function(){
    $('.panel-list li').mouseover(function(){
        $(this).addClass('panel-addClass');//付与
    });

    $('.panel-list li').mouseout(function(){
        $(this).removeClass('panel-addClass');//消す
    });
});

$('.open-btn').click(function(){
    $('.open-nav,close-btn-x').addClass('panelactive');
    $('open-btn-search').addClass('active');
});

$('.close-btn-x').click(function(){
    $('.open-nav').removeClass('panelactive');
    $('open-btn-search').removeClass('active');
});