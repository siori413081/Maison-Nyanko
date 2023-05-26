
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
        $(this).addClass('active');
        $('.modal').fadeTo(500,0.7);
        $('.modal-content').addClass('active')
    });

    $('.modal-close').click(function(){
        $('.country-arrow').removeClass('active');
        $('.modal').fadeOut(500);
        $('.modal-content').removeClass('active')
    });
});

/* service部分の背景傾け＆文字白くする */
$(function(){
    $('.boutique-item').hover(function(){
        $('.boutique').toggleClass('backGroundColor-blue');
        $('.boutiqueTitle').toggleClass('font-color-change');
    });
});

$(function(){
    $('.cafe-item').hover(function(){
        $('.cafe').toggleClass('backGroundColor-green');
        $('.cafeTitle').toggleClass('font-color-change');
    });
});

$(function(){
    $('.musique-item').hover(function(){
        $('.musique').toggleClass('backGroundColor-red');
        $('.musiqueTitle').toggleClass('font-color-change');
    });
});

/*検索部分をクリックした後の画面表示*/
$(function(){
    $('.search_container').focusin(function(){
        $('.bottom-menu').addClass('active');
        $('.fa-search').addClass('active');
        $('.bottom-close-x').addClass('active');
    });
});

/*検索部分をクリックした後の画面を閉じる*/
$(function(){
    $('.bottom-close-x').click(function(){
        $('.bottom-menu').removeClass('active');
        $('.fa-search').removeClass('active');
        $('.bottom-close-x').removeClass('active');
    });
});

/*ハンバーガーメニューをクリックした後のメニュー表示 */
$(function(){
    $('.hamburger-menu-btn').click(function(){
        $('.sp-open-menu').addClass('active');
        $('body').css('position','fixed');
    });
});

/*ハンバーガーメニューを閉じる */
$(function(){
    $('.sp-close-x').click(function () {
        $('.sp-open-menu').removeClass('active');
        $('body').css('position','');
    });
});

/*ハンバーガーメニューの中身 */
/*ハンバーガーメニューの中身 タイトルクリック*/
$(function(){
    $('.sp-tab li').click(function(){
        $('.sp-tab li,.sp-panel').removeClass('active');

        $(this).addClass('active');
        
        let index = $('.sp-tab li').index(this);
        $('.sp-panel').eq(index).addClass('active');
    });
});

/*ハンバーガーメニューの中身　パネルの下線 */
$(function(){
    $('.sp-panel li').mouseover(function(){
        $(this).addClass('sp-panel-border');
    });
    $('.sp-panel li').mouseout(function(){
        $(this).removeClass('sp-panel-border');
    });
});

/* selection SP スライダー */
$(function(){
    w = $(window).width();
    if ( w <= 769 ){
        //SP対応（760px以下の時）
        $('.selection-slider').slick({
            autoplay: false,//自動的に動き出すか。初期値はfalse。
            infinite: false,//スライドをループさせるかどうか。初期値はtrue。
            slidesToShow: 2,//スライドを画面に3枚見せる
            slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
            arrows: false,//ボタンなし
        });
    } else {
        //PC対応
        $('.selection-slider').slick('unslick');
    }
});

/* service SP スライダー */
$(function(){
w = $(window).width();
if ( w <= 768 ){
    //SP対応（760px以下の時）
    $('.service-slider').slick({
        autoplay: false,//自動的に動き出すか。初期値はfalse。
        infinite: true,//スライドをループさせるかどうか。初期値はtrue。
        slidesToShow: 1,//スライドを画面に1枚見せる
        slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
        arrows: false,//ボタンなし
    });
    } else {
        //PC対応
        $('.service-slider').slick('unslick');
    }
});

/* service SP 傾ける 
$(function(){
    $('.boutique').mouseover(function(){
        $(this).addClass('active');
    });
    $('.boutique').mouseout(function(){
        $(this).removeClass('active');
    });
})

$(function(){
    $('.cafe').mouseover(function(){
        $(this).addClass('active');
    });
    $('.cafe').mouseout(function(){
        $(this).removeClass('active');
    });
})
*/

$(function(){
    $('.musique').mouseover(function(){
        $(this).addClass('active');
    });
    $('.musique').mouseout(function(){
        $(this).removeClass('active');
    });
})

function delayScrollAnime() {
	var time = 0.2;//遅延時間を増やす秒数の値
	var value = time;
	$('.delayScroll').each(function () {
		var parent = this;					//親要素を取得
		var elemPos = $(this).offset().top;//要素の位置まで来たら
		var scroll = $(window).scrollTop();//スクロール値を取得
		var windowHeight = $(window).height();//画面の高さを取得
		var childs = $(this).children();	//子要素を取得
		
		if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {//指定領域内にスクロールが入ったらまた親要素にクラスplayがなければ
			$(childs).each(function () {
				
				if (!$(this).hasClass("fadeUp")) {//アニメーションのクラス名が指定されているかどうかをチェック
					
					$(parent).addClass("play");	//親要素にクラス名playを追加
					$(this).css("animation-delay", value + "s");//アニメーション遅延のCSS animation-delayを追加し
					$(this).addClass("fadeUp");//アニメーションのクラス名を追加
					value = value + time;//delay時間を増加させる
					
					//全ての処理を終わったらplayを外す
					var index = $(childs).index(this);
					if((childs.length-1) == index){
						$(parent).removeClass("play");
					}
				}
			})
		}else {
			$(childs).removeClass("fadeUp");//アニメーションのクラス名を削除
			value = time;//delay初期値の数値に戻す
		}
	})
}

// 画面をスクロールをしたら動かしたい場合の記述
	$(window).scroll(function (){
		delayScrollAnime();/* アニメーション用の関数を呼ぶ*/
	});// ここまで画面をスクロールをしたら動かしたい場合の記述

    function fadeAnime(){

//ふわっと動くきっかけのクラス名と動きのクラス名の設定
$('.fadeUpTrigger').each(function(){ //fadeInUpTriggerというクラス名が
    var elemPos = $(this).offset().top-100; //要素より、100px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');
    // 画面内に入ったらfadeInというクラス名を追記
    }
    });

//関数でまとめることでこの後に違う動きを追加することが出来ます
$('.fadeDownTrigger').each(function(){ //fadeInDownTriggerというクラス名が
    var elemPos = $(this).offset().top-100; //要素より、100px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeDown');
    // 画面内に入ったらfadeDownというクラス名を追記
    }
    });


}//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定

// 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// 

/*user-menu */
$(function(){
    $('.user').click(function(){
        $('.user-menu').addClass('active');
        $('.opacity').addClass('active');
    });
});

$(function(){
    $('.user-menu-x').click(function(){
        $('.user-menu').removeClass('active');
        $('.opacity').removeClass('active');
    });
});
/*カートの中 */
$(function(){
    $('.login-box').mouseover(function(){
        $(this).addClass('active');
    });

    $('.login-box').mouseout(function(){
        $(this).removeClass('active');
    });
});

/*bag */
$(function(){
    $('.bag').click(function(){
        $('.bag-in').addClass('active');
        $('.opacity').addClass('active');
    });

    $('.opacity').click(function(){
       $('.bag-in').removeClass('active');
       $('.opacity').removeClass('active');
    });
});

/*footer */
$('.footerMenuTitle').hover(function(){
    $(this).toggleClass('active');
});

$('.footerItem').hover(function(){
    $(this).toggleClass('active');
});

/*矢印の向き 言語 */
$('.language-arrow').click(function(){
    $(this).toggleClass('active');
    $('.language-menu').toggleClass('active');
});

$(function(){
    $('.shopItem').hover(function(){

        let index = $('.shopItem').index(this);
        $('.size').eq(index).toggleClass('active');
    });
});

$(function(){
    $('.shopItem').hover(function(){

        let index = $('.shopItem').index(this);
        $('.slick-prev').eq(index).toggleClass('active');
        $('.slick-next').eq(index).toggleClass('active');
    });
});

/*PC selection slider */
$('.selection-item-slider').slick({
    autoplay: false,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
    speed:1000,//スライドの動きのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に1枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    arrows: true,//左右の矢印あり
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    pauseOnFocus: false,//フォーカスで一時停止を無効
    pauseOnHover: false,//マウスホバーで一時停止を無効
});
