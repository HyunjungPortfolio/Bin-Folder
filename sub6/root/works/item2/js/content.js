(function ($) {
  $(function () {

    var $con = $('.con');

    $('.con-box1').each(function (i) {

      function clone(i) {
        var clone = $con.clone(),
          name = $('<div class="con1' + i + '"></div>');

        name.html(clone)
        name.appendTo('.con-box1');
      }
      for (i = 1; i <= 3; i++) {
        clone(i);
      }

      var $h4 = new Array();
      $h4[0] = '일상을 영화처럼<br>드림랜드의 영상 제작 클래스';
      $h4[1] = '종이에서 피어나는 꽃<br>가리의 수채화 엽서 클래스';
      $h4[2] = '접시 위의 달콤한 마법<br>초의 홈 베이킹 클래스';

      var $img = new Array();
      $img[0] = "img/top10-2.jpg"
      $img[1] = "img/top10-3.jpg"
      $img[2] = "img/top10-4.jpg"

      var $likeNumber = new Array();
      $likeNumber[0] = '4849'
      $likeNumber[1] = '12344'
      $likeNumber[2] = '1877'

      var $imgText = new Array();
      $imgText[0] = '&#35;영화 &nbsp;&#35;영상 &nbsp;&#35;촬영 &nbsp;&#35;카메라 &nbsp;&#35;일상 &nbsp;&#35;입문 &nbsp;'
      $imgText[1] = '&#35;그리기 &nbsp;&#35;꽃 &nbsp;&#35;엽서 &nbsp;&#35;펜 &nbsp;&#35;수채화 &nbsp;&#35;종이 &nbsp;&#35;중급자 &nbsp;'
      $imgText[2] = '&#35;요리 &nbsp;&#35;베이킹 &nbsp;&#35;쿠킹 &nbsp;&#35;마카롱 &nbsp;&#35;홈카페 &nbsp;&#35;영상 &nbsp;&#35;초보 &nbsp;'

      for (i = 1; i <= 3; i++) {
        $('.con1' + i).find('h4').html($h4[(i - 1)]);
        $('.con1' + i).find('img').attr("src", $img[(i - 1)]);
        $('.con1' + i).find('.img-box').find('p').html($imgText[(i - 1)]);
        $('.con1' + i).find('.likenumber').html($likeNumber[(i - 1)]);
      }

    })


    /*sec 2*/
    $('.con-box2').each(function (i) {

      function clone(i) {
        var clone = $con.clone(),
          name = $('<div class="con2' + i + '"></div>');

        name.html(clone)
        name.appendTo('.con-box2');
      }
      for (i = 1; i <= 4; i++) {
        clone(i);
      }

      var $h4 = new Array();
      $h4[0] = '감각이 완성하는 또다른 예술<br>글로우의 케이크 클래스';
      $h4[1] = '마음을 기우고 싶을 때<br>미노의 처음 잡는 뜨개질 클래스';
      $h4[2] = '글씨로 전하는 마음의 온도<br>봉봉의 캘리그라피 클래스';
      $h4[3] = '손 끝의 작은 세계<br>라임의 수채 풍경화 클래스';

      var $img = new Array();
      $img[0] = "img/md-1.jpg"
      $img[1] = "img/md-2.jpg"
      $img[2] = "img/md-3.jpg"
      $img[3] = "img/md-4.jpg"

      var $likeNumber = new Array();
      $likeNumber[0] = '4194'
      $likeNumber[1] = '2759'
      $likeNumber[2] = '5293'
      $likeNumber[3] = '1412'

      var $imgText = new Array();
      $imgText[0] = '&#35;요리 &nbsp;&#35;베이킹 &nbsp;&#35;케이크 &nbsp;'
      $imgText[1] = '&#35;공예 &nbsp;&#35;뜨개질 &nbsp;&#35;입문 &nbsp;'
      $imgText[2] = '&#35;그리기 &nbsp;&#35;드로잉 &nbsp;&#35;캘리그라피 &nbsp;'
      $imgText[3] = '&#35;그리기 &nbsp;&#35;수채화 &nbsp;&#35;종이 &nbsp;'

      for (i = 1; i <= 4; i++) {
        $('.con2' + i).find('h4').html($h4[(i - 1)]);
        $('.con2' + i).find('img').attr("src", $img[(i - 1)]);
        $('.con2' + i).find('.img-box').find('p').html($imgText[(i - 1)]);
        $('.con2' + i).find('.likenumber').html($likeNumber[(i - 1)]);
      }

      $(this).find('.con1').find('.con-btm').find('p').eq(0).html('<span class="date">11월 19일부터 수강 가능</span>');
      $(this).find('.con2').find('.con-btm').find('p').eq(0).html('<span class="date">11월 28일부터 수강 가능</span>');

    })


    /*sec 3*/

    $('.con-box3').each(function (i) {

      function clone(i) {
        var clone = $con.clone(),
          name = $('<div class="con' + i + '"></div>');

        name.html(clone)
        name.appendTo('.con-box3');
      }
      for (i = 1; i <= 4; i++) {
        clone(i);
      }

      var $h4 = new Array();
      $h4[0] = '내가 만족할 수 있는 사진<br>수연의 일상 카메라 활용 클래스';
      $h4[1] = '정성이 완성해요<br>위브의 건강 홈 베이킹 클래스';
      $h4[2] = '하나뿐인 여행 기록<br>김지언의 영상 편집 클래스';
      $h4[3] = '집에서부터 관리해요<br>홍사의 필라테스 클래스';

      var $img = new Array();
      $img[0] = "img/new-1.jpg"
      $img[1] = "img/new-2.jpg"
      $img[2] = "img/new-3.jpg"
      $img[3] = "img/new-4.jpg"

      var $likeNumber = new Array();
      $likeNumber[0] = '37'
      $likeNumber[1] = '278'
      $likeNumber[2] = '197'
      $likeNumber[3] = '302'

      var $imgText = new Array();
      $imgText[0] = '&#35;사진 &nbsp;&#35;일상 &nbsp;&#35;촬영 &nbsp;'
      $imgText[1] = '&#35;베이킹 &nbsp;&#35;건강 &nbsp;&#35;인하우스 &nbsp;'
      $imgText[2] = '&#35;사진 &nbsp;&#35;여행 &nbsp;&#35;일기 &nbsp;'
      $imgText[3] = '&#35;필라테스 &nbsp;&#35;운동 &nbsp;&#35;인하우스 &nbsp;'

      for (i = 1; i <= 4; i++) {
        $('.con' + i).find('h4').html($h4[(i - 1)]);
        $('.con' + i).find('img').attr("src", $img[(i - 1)]);
        $('.con' + i).find('.img-box').find('p').html($imgText[(i - 1)]);
        $('.con' + i).find('.likenumber').html($likeNumber[(i - 1)]);
      }

      $(this).find('.con1').find('.con-btm').find('p').eq(0).html('<span class="date">12월 3일부터 수강 가능</span>');
      $(this).find('.con2').find('.con-btm').find('p').eq(0).html('<span class="date">12월 6일부터 수강 가능</span>');
      $(this).find('.con3').find('.con-btm').find('p').eq(0).html('<span class="date">11월 28일부터 수강 가능</span>');
      $(this).find('.con4').find('.con-btm').find('p').eq(0).html('<span class="date">12월 28일부터 수강 가능</span>');

    })

  });
})(jQuery);
