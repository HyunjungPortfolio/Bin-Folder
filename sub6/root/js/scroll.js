(function($){
  $(function(){

    var $main = $('main'),
        $section = $main.find('section'),
        $gnb = $('.gnb'),
        $indicator = $('.indicator'),
        
        currentIndex = 0,
        count = $section.length,
        indicatorHTML = '';

    $(window).on('resize', function(){
      $section.width($(this).width());
      $section.height($(this).height());
    });
    
    $section.each(function(i){
      $(this).css({
        left: 100 * i + '%'
      });
      
      indicatorHTML += '<a href="#"></a>'
    });
    
    $indicator.html(indicatorHTML);
    $indicator.children().eq(0).addClass('on');
    
    function slide (i) {
      $main.stop().animate({
        left: -100 * i + '%'
      }, 1000);
      currentIndex = i;
      
      $gnb.children().removeClass('on');
      $gnb.children().eq(i).addClass('on');
      
      $indicator.children().removeClass('on');
      $indicator.children().eq(i).addClass('on');
    }
    
    $gnb.on('click', 'a', function(e){
      e.preventDefault();
      var i = $(this).index();
      slide(i)
    })
    
    $indicator.on('click', 'a', function(e){
      e.preventDefault();
      slide($(this).index())
    })
    
    
    $section.on('mousewheel', function(e, delta){
      e.preventDefault();
      currentIndex = $(this).index()
      
      if (delta > 0 && currentIndex > 0) {
        slide(currentIndex - 1)
      } else if (delta < 0 && currentIndex < (count-1)) {
        slide(currentIndex + 1)
      }
      
    })
    
    //popup
    var $sec3 = $section.eq(2),
        $popup1 = $sec3.find('.popup1'),
        $popup2 = $sec3.find('.popup2'),
        $pop = $('.pop'),
        $pop1 = $('.pop1'),
        $pop2 = $('.pop2');
    
    $popup1.on('click', function(e){
      e.preventDefault();
      $pop1.stop().animate({
        right: 0
      });
    })
    
    $popup2.on('click', function(e){
      e.preventDefault();
      $pop2.stop().animate({
        right: 0
      });
    })
    
    $pop.on('click', function(){
      $pop.stop().animate({
        right: '-100%'
      });
    })
  });
})(jQuery);