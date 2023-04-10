$(function () {
  // 헤더 호버 이벤트
  const handleHeaderHover = () => {
    $('.gnb').hover(
      function () {
        $('.header').css('background', 'rgba(30, 30, 30, 0.9)').css('transition', '0s');
      },
      function () {
        setTimeout(function () {
          $('.header').css('background', 'transparent').css('transition', '0.5s');
        }, 500);
      }
    );
  };

  const cancelHandleHeaderHover = () => {
    $('.gnb').hover(
      function () {
        $('.header').css('background', 'inherit').css('transition', '0s');
      },
      function () {
        setTimeout(function () {
          $('.header').css('background', 'inherit').css('transition', '0s');
        }, 500);
      }
    );
  };

  const handleGnbClick = () => {
    $('.menu').click(function () {
      $('.sub_menu', this).toggleClass('on');
    });
  };

  if ($(window).width() > 1024) {
    // 1024px 이상 display load시
    handleHeaderHover();
  } else {
    cancelHandleHeaderHover();
    handleGnbClick();
  }

  $(window).resize(function () {
    if ($(window).width() > 1024) {
      // 1024xp 이상 display resize
      handleHeaderHover();
    } else {
      cancelHandleHeaderHover();
      handleGnbClick();
    }
  });

  // 모바일 메뉴버튼 클릭 이벤트

  $('.m_open').click(function () {
    $('.hd_down').toggleClass('on');
  });

  $('main').fullpage({
    navigation: true,
  });
});
