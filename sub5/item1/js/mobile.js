(function ($) {
  $(function () {
    var $header = $('header'),
      $menuBtn = $header.find('.menu-btn'),
      $closeBtn = $header.find('.close-btn'),
      $gnb = $header.find('.gnb'),
      $moreBtn = $header.find('.more'),
      $sub = $header.find('.sub');

    $menuBtn.on('click', function () {
      $gnb.addClass('on');
      $('<div class="whitebg"></div>').appendTo('.wrap');
      
      $('.whitebg').css({
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#fff'
      }); 
      
    });
    $closeBtn.on('click', function () {
      $gnb.removeClass('on');
      $('.whitebg').remove()
    });

    $moreBtn.on('click', function (e) {
      e.preventDefault();
      var z = $(this),
        i = z.parent('li').index();
      if (z.hasClass('on')) {
        z.removeClass('on');
        $sub.eq(i - 1).removeClass('on');
        } else {
      $moreBtn.removeClass('on');
      z.addClass('on');
      $sub.removeClass('on');
      $sub.eq(i - 1).addClass('on');
        }
    });
  });
})(jQuery);
