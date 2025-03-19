(function($){
  $(function(){
    var $closeBtn = $('.close-btn'),
        $topBtn = $('.top-btn'),
        $figure = $('figure'),
        figureH = $figure.outerHeight();
    
    $closeBtn.on('click', function(){
      window.close()
//      window.location.replace('http://purplecider.co.kr');
    })
    
    $topBtn.on('click', function(){
      $('html, body').stop().animate({
        scrollTop: 0
      }, 1000)
    });
    
    $(window).on('scroll', function(){
      var scroll = $(this).scrollTop();

      if (scroll > (figureH / 2)) {
        $topBtn.show();
      } else {
        $topBtn.hide();
      }
    });
    
    $(window).trigger('scroll');
    
  });
})(jQuery);