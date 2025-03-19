(function ($) {
  $(function () {

    $('header').each(function () {

      var $header = $(this),
        $allMenu = $('.all-menu'),
        $subMenu = $('.sub-menu'),
        height = Math.floor($header.outerHeight());

      $(window).on('scroll', function () {
        var scroll = $(this).scrollTop();

        if (height < scroll) {
          $header.addClass('on');
        } else {
          $header.removeClass('on');
        }

      });

      $allMenu
        .on('mouseenter', function () {
        $subMenu.show()
      })
        .on('mouseleave', function () {
        $subMenu.hide()
      })

      var $searchBtn = $header.find('.search-btn'),
        $headSearch = $('.head-search');

      $searchBtn.on('click', function () {
        $headSearch.fadeIn(200);
        $('<div class="blackbg"></div>').appendTo('.wrap');
        $searchBtn.stop().animate({
          opacity: 0
        }, 0);
        $headSearch.find('input').focus();
        $('body').css({
          overflow: 'hidden'
        })
      
      $('.blackbg')
        .css({
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,.7)',
      zIndex: 1
      })
        .on('click', function(){
        $headSearch.hide();
        $('.blackbg').remove();
        $searchBtn.stop().animate({
          opacity: 1
        });
        $('body').css({
          overflow: 'visible'
        });
      });
      });
      
      
      $headSearch.find('a').eq(0).on('click', function(e){
        e.preventDefault();
        $headSearch.hide();
        $searchBtn.stop().animate({
          opacity: 1
        });
        $('.blackbg').remove();
        $('body').css({
          overflow: 'visible'
        });
      })
      
    });
    
    var $mobileMenu = $('.mobile-menu'),
        $hmBtn = $mobileMenu.find('.hm-btn'),
        $mnb = $mobileMenu.find('.mnb'),
        $mnbBg = $mobileMenu.find('.mnb-bg'),
        $cgMenu = $mnb.find('.cg-menu'),
        $msnb = $mnb.find('.msnb');
    
    $hmBtn.on('click', function(){
      $hmBtn.toggleClass('on');
      $mnb.toggleClass('on');
      $mnbBg.toggleClass('on');
    });
    
    $cgMenu.on('click', function(e){
      e.preventDefault();
      $msnb.toggleClass('on');
    });

  });
})(jQuery);
