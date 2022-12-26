$(document).ready(function() {
    /* 박스 슬라이더 */
    $('.slider_gallery').bxSlider({
        mode : 'fade',
        pager : true,
        speed: 500,
        pause: 4000,
        auto: true,
        autohover: true,
        // slideWidth :1440
    })


    /* SubMenu */
    // 1depth 클릭시 2depth 서브메뉴 나옴
    $('#menu .gnb_menu li a').mouseenter(function(){
        $('#menu_dept').stop().slideDown();
    });
    //  2depth 서브메뉴 사라짐
    $('.menu_nav').mouseleave (function(){
        $('#menu_dept').stop().slideUp();
    });

    
    // 링크 막기 
    $('a').on("click",function(e){
        e.preventDefault();
    });
});
