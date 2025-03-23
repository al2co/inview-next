$(function(){
  //＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
  $('.inview').each(function(index) {
    $(this).addClass('animate__animated');
    $(this).attr('data-inview', index + 1);
  });
  //＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
  var scroll;
  var winH = $(window).height();

  $(window).on('scroll', function() {
    scroll = $(window).scrollTop();

    $('.inview').each(function() {
      var $this = $(this);
      var objH = $this.outerHeight();
      var objTop = $this.offset().top;
      var objBottom = objTop + objH;
      var offset = parseInt($this.data('inview-offset')) || 0;
      

      // オフセットを考慮した判定
      var triggerTop = objTop - offset;
      var triggerBottom = objBottom + offset;

      // 要素が画面内に入った場合
      if (scroll + winH >= triggerTop && scroll <= triggerBottom) {
        $this.addClass("inview-in");
        $this.removeClass("inview-out");

        // Data属性inview-inの値をClassとして付与
        var inviewClasses = $this.data('inview-in');
        if (inviewClasses) {
          var classArray = inviewClasses.split(',');
          classArray.forEach(function(className) {
            $this.addClass(className.trim()); // 前後の空白を削除してクラスを追加
          });
        }
      } else {
        // 要素が画面外に出た場合
        $this.removeClass("inview-in");
        $this.addClass("inview-out");

        // Data属性inview-outの値をClassから削除
        var inviewClasses = $this.data('inview-out');
        if (inviewClasses) {
          var classArray = inviewClasses.split(',');
          classArray.forEach(function(className) {
            $this.removeClass(className.trim()); // 前後の空白を削除してクラスを追加
          });
        }
      }
    });
  });
  //＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
});
