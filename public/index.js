$(document).ready(function () {
  $.get('http://beaknotes.com/subscribe/scala-news', function (data) {
  	var r = $.parseJSON(data)
    if (r.results) {
      console.log('123')
      $('#content .wrap').html(juicer($('#news-tpl').html(), r))
      addDividingLine()
    }
  })
})

function addDividingLine(){
  let times = document.getElementsByTagName("time")
  let clearfixs = document.getElementsByClassName("clearfix")
  let weekFlag = -1
  for (let i = 0; i <= clearfixs.length; i++) {
    let nowWeekNum = moment(times[i].innerHTML, 'YYYY-MM-DD').isoWeeks()
    if (weekFlag != nowWeekNum) {
      if (weekFlag != -1){
        clearfixs[i].style.borderTop = "2px solid #1da1f2"
      } 
      weekFlag = nowWeekNum
    }
  }
}
