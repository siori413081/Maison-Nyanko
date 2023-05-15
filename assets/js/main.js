
/*headerのhoverしたら表示されるタブバー */
$(function(){
    $('.tab').hover(function(){
        $('.tab,.panel').removeClass('active');

        $(this).addClass('active');

        let index = $('.tab').index(this);
        $('.panel').eq(index).addClass('active');
    });
});

/* hover後のタブメニューの下線 */
$(function(){
    $('.panel-list li').mouseover(function(){
        $(this).addClass('panel-addClass');//付与
    });

    $('.panel-list li').mouseout(function(){
        $(this).removeClass('panel-addClass');//消す
    });
});

/* modal画面の表示 */
$(function(){
    $('.country-arrow').click(function(){
        $('.modal').fadeTo(500,0.7);
    });

    $('.modal-close').click(function(){
        $('.modal').fadeOut(700);
    });
});

/* service部分の背景傾け＆文字白くする */
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

/*検索部分をクリックした後の画面表示 */
$(function(){
    $('.open-btn').click(function(){
        $('.open-nav,close-btn-x').addClass('panelActive');
        $('#open-btn-search').addClass('active');
    });
});

/*検索部分をクリックした後の画面を閉じる */
$(function(){
    $('.close-btn-x').click(function(){
        $('.open-nav').removeClass('panelActive');
        $('#open-btn-search').removeClass('active');
    });
});

/*ハンバーガーメニューをクリックした後のメニュー表示 */
$(function(){
    $('.hamburger-menu-btn').click(function(){
        $(this).addClass('active');
        $('.sp-open-menu').addClass('start');
    });
});

/*ハンバーガーメニューを閉じる */
$(function(){
    $('.sp-open-menu a').click(function () {
        $('.hamburger-menu-btn').removeClass('active');
        $('.sp-open-menu a').removeClass('start');
    });
});