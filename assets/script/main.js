// ハンバーガーメニュー
var hamburger = $('.hamburger__menu');

$('.hamburger__button').on('click', function () {
    hamburger.toggleClass('hamburger__menu-active');
});

$(window).on('resize', function () {
    hamburger.removeClass('hamburger__menu-active');
});

$(".hamburger__menu__list__group>li").click(function () {
    hamburger.removeClass('hamburger__menu-active');
});

// タブ
$('#smarttab').smartTab({
    enableUrlHash: false,
    autoAdjustHeight: false
});