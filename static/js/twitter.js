
var tweets = new Array();

function twitterCallback(obj) {

  // tweets.concat(obj);

  for (var i=0; i<obj.length; i++) {
    tweets.push(obj[i]);
    // document.getElementById('tweet').innerHTML += " " + obj[i].user.name + " " + obj[i].created_at;
  }

  updateWebpage();

}

function parseCreateTime(time) {
  var values = time.split(" ");
  time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
  return Date.parse(time_value);
}

function sortFunction(a, b) {
  return (parseCreateTime(b.created_at) - parseCreateTime(a.created_at));
}

function updateWebpage() {

  var statusHTML = "";

  tweets.sort(sortFunction);
  
  for (var i=0; i<tweets.length; i++){
    var d = new Date();
    var time = parseCreateTime(tweets[i].created_at);
    d.setTime(time);
    
    statusHTML += "<li>";
    statusHTML += " <span class=\"date\">" + d.getDate() + "." + (d.getMonth()+1) + "</span>";
    statusHTML += " <span class=\"name\"><a href=\"http://twitter.com/" + tweets[i].user.screen_name + "\">" + tweets[i].user.screen_name + "</a>:</span>";
    statusHTML += " <span class=\"text\">" + linkify(tweets[i].text) + "</span>";
    statusHTML += " <span class=\"permalink\"><a href=\"http://twitter.com/" + tweets[i].user.screen_name + "/statuses/" + tweets[i].id + "\">" + relative_time(tweets[i].created_at) + "</a></span>";
    statusHTML += "</li>";

    // statusHTML += " <li><span>" + tweets[i].user.name + "</span> <span>" + tweets[i].text + "</span> <span>" + tweets[i].created_at + "</span></li>";
    
    // statusHTML += ('<li><span>'+tweets[i].text+'</span> <a style="font-size:85%" href="http://twitter.com/'+username+'/statuses/'+tweets[i].id+'">'+relative_time(tweets[i].created_at)+'</a></li>')
  }

  document.write("<ol id=\"tweet\">" + statusHTML + "</ol>");

  // document.getElementById('tweet').innerHTML = statusHTML;

}

function relative_time(time_value) {
    var values = time_value.split(" ");
    time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
    var parsed_date = Date.parse(time_value);
    var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
    var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
    delta = delta + (relative_to.getTimezoneOffset() * 60);

    var r = '';
    if (delta < 60) {
        r = 'minder dan een minuut geleden';
    } else if(delta < 120) {
        r = 'ong. een minuut geleden';
    } else if(delta < (45*60)) {
        r = (parseInt(delta / 60)).toString() + ' minuten geleden';
    } else if(delta < (2*90*60)) { // 2* because sometimes read 1 hours ago
        r = 'ong. een uur geleden';
    } else if(delta < (24*60*60)) {
        r = 'ong. ' + (parseInt(delta / 3600)).toString() + ' uur geleden';
    } else if(delta < (48*60*60)) {
        r = '1 dag geleden';
    } else {
        r = (parseInt(delta / 86400)).toString() + ' dagen geleden';
    }

    return r;
}

function linkify(s) {
    return s.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&\?\/.=]+/g, function(m) {
        return m.link(m);
    }).replace(/@[\S]+/g, function(m) {
        return '<a href="http://twitter.com/' + m.substr(1) + '">' + m + '</a>';
    });
}
