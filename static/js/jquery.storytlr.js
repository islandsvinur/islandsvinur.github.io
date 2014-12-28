(function($) {
	$.fn.storytlr = function(o) {
		var s = {
			url: "http://storytlr.luijten.org/embed/json",
			count: 20
		};

		$.fn.extend({
			linkUrl: function() {
				var returning = [];
				var regexp = /((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi;
				this.each(function() {
					returning.push(this.replace(regexp,"<a href=\"$1\">$1</a>"))
				});
				return $(returning);
			},
			linkUser: function() {
				var returning = [];
				var regexp = /[\@]+([A-Za-z0-9-_]+)/gi;
				this.each(function() {
					returning.push(this.replace(regexp,"<a href=\"http://twitter.com/$1\">@$1</a>"))
				});
				return $(returning);
			},
			linkHash: function() {
				var returning = [];
				var regexp = / [\#]+([A-Za-z0-9-_]+)/gi;
				this.each(function() {
					returning.push(this.replace(regexp, ' <a href="http://search.twitter.com/search?q=&tag=$1&lang=all">#$1</a>'))
				});
				return $(returning);
			},
			capAwesome: function() {
				var returning = [];
				this.each(function() {
					returning.push(this.replace(/(a|A)wesome/gi, 'AWESOME'))
				});
				return $(returning);
			},
			capEpic: function() {
				var returning = [];
				this.each(function() {
					returning.push(this.replace(/(e|E)pic/gi, 'EPIC'))
				});
				return $(returning);
			},
			makeHeart: function() {
				var returning = [];
				this.each(function() {
					returning.push(this.replace(/[&lt;]+[3]/gi, "<tt class='heart'>&#x2665;</tt>"))
				});
				return $(returning);
			}
		});

		function relative_time(parsed_date) {
			// var parsed_date = Date.parse(time_value);
			var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
			var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
			if(delta < 60) {
				return 'minder dan een minuut geleden';
			} else if(delta < 120) {
				return 'ongeveer een minuut geleden';
			} else if(delta < (45*60)) {
				return (parseInt(delta / 60)).toString() + ' minuten geleden';
			} else if(delta < (90*60)) {
				return 'ongeveer een uur geleden';
			} else if(delta < (24*60*60)) {
				return 'ongeveer ' + (parseInt(delta / 3600)).toString() + ' uur geleden';
			} else if(delta < (48*60*60)) {
				return '1 dag geleden';
			} else {
				return (parseInt(delta / 86400)).toString() + ' dagen geleden';
			}
		}

		if (o) $.extend(s, o);
		return this.each(function() {
			var list = $('<ul class="storytlr_list">').appendTo(this);
			$.getJSON(s.url + '?count=' + s.count +'&callback=?', function(data) {
					var even = true;
					$.each(data.items, function(i, item) {
						list.append('<li class="storytlr_'
							+ (even ? "even" : "odd")
							+ '"><a class="storytlr_link" href="'
							+ item.link
							+ '"><img class="storytlr_image" src="'
							+ item.image
							+ '"/> '
							+ '</a> <span class="storytlr_content">'
							+ $([item.content]).linkUser().linkHash()[0]
							+ '</span> <span clas="storytlr_time">('
							+ relative_time(item.timestamp * 1000)
							+ ')</span></li>');
						even = !even;
					});
				});
			});
	};
})(jQuery);
