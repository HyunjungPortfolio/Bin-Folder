(function($){
  $(function(){

    var $main = $('main'),
        $section = $main.find('section'),
        $gnb = $('.gnb'),
        $indicator = $('.indicator'),

        $folderText = $('.folder-text'),
        
        currentIndex = 0,
        count = $section.length,
        indicatorHTML = '';

    $(window).on('resize', function(){
      $section.width($(this).width());
      $section.height($(this).height());
    });
    
    $section.each(function(i){
      $(this).css({
        top: 100 * i + '%'
      });
      
      indicatorHTML += '<a href="#"></a>'
    });
    
    $indicator.html(indicatorHTML);
    $indicator.children().eq(0).addClass('on');
    
    function slide (i) {
      $main.stop().animate({
        top: -100 * i + '%'
      }, 1000);
      currentIndex = i;
      
      $gnb.children().removeClass('on');
      $gnb.children().eq(i).addClass('on');
      
      $indicator.children().removeClass('on');
      $indicator.children().eq(i).addClass('on');

      $indicator.children().animate({ backgroundColor: i === 2 || i === 4 ? "rgb(157, 203, 255)" : "white" }, 500);

      $folderText.children().each(function (index) {
        let position = index === i ? '50%' : index < i ? '-100%' : '150%';
        $(this).animate({ left: position }, 1000);
    });
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
    
  });
})(jQuery);
