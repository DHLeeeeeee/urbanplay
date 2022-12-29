$(function () {
  $('.gnb').hover(
    function () {
      $('.header').css('background', 'rgba(30, 30, 30, 0.9)').css('transition', '0s');
    },
    function () {
      setTimeout(function () {
        $('.header').css('transition', '0.5s').css('background', 'transparent');
      }, 500);
    }
  );

  $('main').fullpage({
    navigation: true,
  });
});
