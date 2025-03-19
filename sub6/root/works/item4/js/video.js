(function($){
  $(function(){
    
    var $tabs = $('.tabs'),
        $tabMenu = $tabs.find('.tab-menu'),
        $con = $tabs.find('.con'),
        $section = $con.find('section');
  
    
    $tabMenu.on('mouseenter', 'a', function(e){
      e.preventDefault;
      var $a = $(this);
      
      if($a.hasClass('on')){
        return
      }
      
      $tabMenu.children().removeClass('on');
      $a.addClass('on');
      
      $section.hide();
      
      $($a.attr('href')).show();
      
    });
    $tabMenu.on('mouseleave', 'a', function(){
      $tabMenu.children().removeClass('on');
      $section.hide()
    });
    
    var pics = '';
    
    for(var i=0; i<224; i++){
      pics += '<img src="img/mov/vid'+i+'.jpg">'
    }
    
    var $vidbg = $('.vidbg');
    
    $vidbg.html(pics);
    
    $('body').on('mousemove', function(e){
      var posX = e.pageX,
          winWidth = $(window).width(),
          percent = (posX/winWidth)*224,
          result = Math.floor(percent);
      
    $vidbg.children().hide();
    $vidbg.find('img').eq(result).show();
      
    });
    
    var $btn = $('.fa-moon');
    
    $btn.on('click', function(){
      $('.wrap').toggleClass('bl');
    })
    
    $('body').jpreLoader({
      loaderVPos: '60%'
    });
    
    $(window).trigger('mousemove')
  });
})(jQuery);