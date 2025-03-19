(function($){
  $(function(){
    var $main = $('main'),
        $section = $main.find('section'),
        $video = $('.vid'),
        $article = $video.find('article'),
        $closeBtn = $('.close-btn');
    
    $section.on('click', function(){
      $main.fadeOut(400);
      var i = $(this).index(),
          $vid = $article.eq(i).find('video'),
          mov = $vid.get(0);
      
      $article.hide();
      $article.eq(i).show();
      
      $closeBtn.stop().animate({
        opacity: 1
      });
      
      mov.currentTime = 0;
      mov.play();
      
      $vid.prop({
        muted: false
      })
    });
    
    $closeBtn.on('click', function(){
      $main.fadeIn(400);
      
      var $vid = $article.find('video'),
          mov = $vid.get(0);
      
      mov.pause();
      
      $vid.prop({
        muted: true
      })

    });
    
  });
})(jQuery);