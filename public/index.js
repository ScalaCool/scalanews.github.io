$(document).ready(function () {
  $.get('http://beaknotes.com/subscribe/scala-news', function (data) {
  	var r = $.parseJSON(data)
    if (r.results) {
      console.log('123')
      $('#content .wrap').html(juicer($('#news-tpl').html(), r))
      addBottomLine()
    }
  })
})

function addBottomLine(){
  var times = document.getElementsByTagName("time")
  var clearfixs = document.getElementsByClassName("clearfix")
  var weekFlag = -1
  for (var i = 0; i <= clearfixs.length; i++) {
    let nowWeekNum = moment(times[i].innerHTML,'YYYY-MM-DD').isoWeeks()
    if (weekFlag != nowWeekNum) {
      clearfixs[i].style.borderBottom="2px dotted #ff0000"
      weekFlag = nowWeekNum
    }
  }
}
