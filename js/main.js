$(function () {
  // 헤더 호버 이벤트
  $('.gnb').hover(handleHover, handleMouseOut);

  function handleHover() {
    if ($(window).width() > 1240) {
      $('.header').css('background', 'rgba(30, 30, 30, 0.9)').css('transition', '0s');
    }
  }
  function handleMouseOut() {
    if ($(window).width() > 1240) {
      $('.header').css('background', 'transparent').css('transition', '0.5s 0.5s');
    }
  }

  function handleGnbClick() {
    if ($(window).width() < 1240) {
      $('.sub_menu', this).toggleClass('on');
    }
  }

  // 모바일 메뉴버튼 클릭 이벤트

  $('.m_open').click(function () {
    $('.hd_down').toggleClass('on');
  });

  $('.menu').on('click', handleGnbClick);

  $('main').fullpage({
    navigation: true,
  });
});
