(function ($) {
  $(function () {
    var $header = $('header'),
      $gnb = $header.find('.gnb-con'),
      $gnbSub = $header.find('.gnb-sub'),
      $sec1 = $('#sec1'),
      $blockquote = $sec1.find('blockquote'),
      $descP = $sec1.find('p'),
      $descImg = $sec1.find('.img-box').find('img');

    //gnb 펼치기
    $gnb
      .on('mouseenter', function () {
        $gnbSub.fadeIn(100)
      })
      .on('mouseleave', function () {
        $gnbSub.fadeOut(100)
      });

    //sec1
    $blockquote.on('click', function () {
      var z = $(this),
        i = z.index();
        
        if (z.hasClass('on')) {
          z.removeClass('on');
          $descP.eq(i).removeClass('on');
          $descP.eq(3).addClass('on');
          $descImg.eq(i+3).removeClass('up');
        } else {
        $blockquote.removeClass('on');
        z.toggleClass('on');

        $descP.removeClass('on');
        $descP.eq(i).toggleClass('on');

        $descImg.removeClass('up');
        $descImg.eq(i + 3).addClass('up');
        }
    })
    
    //top btn
    var $topBtn = $('.top-btn');
    
    $(window).on('scroll', function(){

    var pageHeight = $('header').outerHeight(),
        scroll = Math.floor($(this).scrollTop());
      
      if (pageHeight < scroll) {
        $topBtn.fadeIn(300);
      } else {
        $topBtn.fadeOut(300);
      }
    })
    
    $topBtn.on('click', function(){
      
      $('html, body').stop().animate({
        scrollTop: 0
      }, 500)
      
    });
    $(window).trigger('scroll');
    
  })
})(jQuery);
