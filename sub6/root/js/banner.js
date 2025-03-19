(function($){
  $(function(){
    
    $('#sec1').each(function(){
      
      var $sec1 = $(this),
          $imgSlide = $sec1.find('.img-slide'),
          $img = $imgSlide.find('li'),
          $txtSlide = $sec1.find('.txt-slide'),
          $txt = $txtSlide.find('li'),
          
          sp = 500,
          
          currentIndex = 0,
          count = $img.length,
          
          interval = 3000,
          timer;
      
      $img.each(function(i){
        $(this).css({
          top: 100 * i + '%'
        });
      })
      $txt.each(function(i){
        $(this).css({
          top: -100 * i + '%'
        })
      })
        
      function slideShow(index) {
        $imgSlide.stop().animate({
          top: -100 * index + '%'
        }, sp, function(){
          
          if (index == (count-1)) {
          $imgSlide.stop().css({
            top: 0
          })
          }
          
        });
        
        $txtSlide.stop().animate({
          top: 100 * index + '%'
        }, sp, function(){
          
          if (index == (count-1)) {
          $txtSlide.stop().css({
            top: 0
          })
          }
          
        });
        
        currentIndex = index;
        
        
        
        }
      
      function startTimer() {
        timer = setInterval(function(){
          
          var nextIndex = (currentIndex + 1) % count;
          
          slideShow(nextIndex);
          
        }, interval);
      }
      function stopTimer() {
        clearInterval(timer)
      }
      
      $('.txt-banner').on({
        mouseenter: stopTimer,
        mouseleave: startTimer
      })
      
      slideShow(currentIndex);
      startTimer()
      
    });

  });
})(jQuery);