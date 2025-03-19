(function ($) {
  $(function () {
    
    var $win = $(window),
        $visual = $('.visual'),
        $section = $('section'),
        $main = $('main'),
        $remote = $main.find('.remote'),
        $mnb = $main.find('.mnb'),
        $a = $mnb.find('a'),
        headTop = $visual.outerHeight();
    
    $win.on('scroll', function(){
      var scroll = $(this).scrollTop(),
          mainHeight = $main.outerHeight();
      
      if(headTop < scroll) {
        $mnb.addClass('on')
      } else {
        $mnb.removeClass('on')
      }
      
      if(headTop < scroll && (mainHeight) > scroll) {
        $remote.addClass('on')
      } else {
        $remote.removeClass('on')
      }
            
      var $sec1H = headTop + ($section.eq(0).outerHeight()) + ($section.eq(1).outerHeight()),
          $sec2H = $sec1H + $section.eq(2).outerHeight(),
          $sec3H = $sec2H + $section.eq(3).outerHeight(),
          $sec4H = $sec3H + $section.eq(4).outerHeight(),
          $sec5H = $sec4H + $section.eq(5).outerHeight();
      
      if (($sec1H) > scroll) {
        $a.removeClass('on');
        $a.eq(0).addClass('on');
      } else if ($sec1H <= scroll && $sec2H > scroll) {
        $a.removeClass('on');
        $a.eq(1).addClass('on');
      } else if ($sec2H <= scroll && $sec3H > scroll) {
        $a.removeClass('on');
        $a.eq(2).addClass('on');
      } else if ($sec3H <= scroll && $sec4H > scroll) {
        $a.removeClass('on');
        $a.eq(3).addClass('on');
      } else if ($sec4H <= scroll && $sec5H > scroll) {
        $a.removeClass('on');
        $a.eq(4).addClass('on');
      } else {
        $a.removeClass('on');
      }
      
    });

  });
})(jQuery);
