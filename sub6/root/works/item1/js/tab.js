(function($){
  $(function(){
    
    $('.tabs').each(function(){
      
      var $tabs = $(this),
          $tabMenu = $tabs.find('.tab-menu'),
          $section = $tabs.find('section');
      
      $tabMenu.on('click', 'a', function(e){
        e.preventDefault();
        
        var $a = $(this);
        
        if($a.hasClass('on')){
          return
        }
        
        $tabMenu.children().removeClass('on');
        $a.addClass('on');
        
        $section.hide();
        
        $($a.attr('href')).show()
        
      });
      
      $tabMenu.find('a').eq(0).trigger('click')
    });
    });
})(jQuery);