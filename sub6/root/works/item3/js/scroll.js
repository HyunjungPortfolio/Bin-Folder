(function($){
  $(function(){
    
    //scroll
    var $win = $(window),
        $visual = $('.visual'),
        $bg = $visual.find('.bg'),
        $video = $bg.find('video'),
        $downBtn = $visual.find('.down-btn');
    
    $bg.height($win.height());
    
    $win.on('resize', function(){
      $bg.height($win.height());
    });
    
    var bgH = $bg.outerHeight();
    
    $visual.on('mousewheel', function(e, delta){
//      e.preventDefault()
      
      if (delta < 0) {
        $('html, body').stop().animate({
        scrollTop: bgH
      }, 1000);
      } else if (delta > 0) {
        $('html, body').stop().animate({
        scrollTop: 0
      }, 1000)
      }
    });
    
    $downBtn
      .on('click', function(){
      $('html, body').stop().animate({
        scrollTop: bgH
      }, 1000)
    });
    
    //button
    var $header = $('header'),
        $hmBtn = $header.find('.hm-btn'),
        $gnb = $header.find('.gnb'),
        $topBtn = $('.top-btn');
    
    $hmBtn.on('click', function(){
      $hmBtn.toggleClass('on'),
      $gnb.fadeToggle(300)
    })
    
    $win.on('scroll', function(){
      var scroll = $(this).scrollTop();
      
      if (scroll < bgH) {
        $topBtn.hide();
      } else {
        $topBtn.show()
      }
      
    })
    
    $topBtn.on('click', function(){
      $('html, body').stop().animate({
        scrollTop: 0
      }, 2000)
    })
    
    
  });
})(jQuery);