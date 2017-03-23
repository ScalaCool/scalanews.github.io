$(document).ready(function () {
  $.get('http://beaknotes.com/subscribe/scala-news', function (data) {
  	var r = $.parseJSON(data)
    if (r.results) {
      console.log('123')
      $('#content .wrap').html(juicer($('#news-tpl').html(), r))
    }
  })
})