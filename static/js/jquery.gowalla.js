(function($) {

  $.fn.gowalla = function(o) {
    var s = {
      username: ["islandsvinur"]
    };

    return this.each(function() {
      var list = $('<ul class="gowalla_list">').appendTo(this);
      var url = 'http://gowalla.com/users/'+s.username+'/visits.atom';

      $.getFeed({
        url: 'http://gowalla.com/users/'+s.username+'/visits.atom',
        success: function(feed) { alert("done"); }
      });
    });
  };

})(jQuery);
