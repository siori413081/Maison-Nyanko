$(function(){
    $('.tab').hover(function(){
        $('.tab .panel').removeClass('active');

        $(this).addClass('active');

        let index = $('.tab').index(this);
        $('.panel').eq(index).addClass('active');
    });
});