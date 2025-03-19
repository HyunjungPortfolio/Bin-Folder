(function($){
  $(function(){
    var $btn = $('.btn'),
        $header = $('header'),
        $list = $header.find('li'),
        $section = $('section');
    
    $list.on('click', function(){
      var i = $(this).index();
      $section.eq(i).addClass('on');
      $header.removeClass('on');
    })
    
    $btn.on('click', function(){
      $header.addClass('on');
      $section.removeClass('on');
    })
    
  });
})(jQuery)