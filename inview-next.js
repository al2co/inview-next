(function($) {
  $.fn.inviewAnimation = function(options) {
    var settings = $.extend({
      offset: 0
    }, options);

    return this.each(function(index) {
      var $this = $(this);
      $this.addClass('animate__animated').attr('data-inview', index + 1);

      $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        var winH = $(window).height();
        var objH = $this.outerHeight();
        var objTop = $this.offset().top;
        var objBottom = objTop + objH;

        var triggerTop = objTop - settings.offset;
        var triggerBottom = objBottom + settings.offset;

        if (scroll + winH >= triggerTop && scroll <= triggerBottom) {
          $this.addClass("inview-in").removeClass("inview-out");
          var inviewInClasses = $this.data('inview-in');
          if (inviewInClasses) {
            inviewInClasses.split(',').forEach(function(className) {
              $this.addClass(className.trim());
            });
          }
        } else {
          $this.removeClass("inview-in").addClass("inview-out");
          var inviewOutClasses = $this.data('inview-out');
          if (inviewOutClasses) {
            inviewOutClasses.split(',').forEach(function(className) {
              $this.removeClass(className.trim());
            });
          }
        }
      });
    });
  };
})(jQuery);
