$(function(){
    $('.icon1').click(function(){
        $('nav_pop').fadeIn();
    $('.nav_close').click(function(){
        $('nav_pop').fadeOut();
    })//navpop click end

    /* 공지사항&최근검색어 참고
    var slide;
    slide = setInterval(function(){
        $('.slide_box .notice_list > li:first-child').animate({
            'margin-left':'2em'},600, function(){
                $('.slide_box .notice_list').append($('.slide_box .notice_list > li:first-child'));
                $('.slide_box .notice_list' > 'li:last-child').css({'margin-top':0});
            }); //괄호 개수 check !!!!!!!!!
        }, 2000);
    */

})//jq end