$(function() {
  var saveButton = $(".saveBtn");
  saveButton.on("click", function (){
    var key = $(this).parent().attr("id");
    var description = (this).siblings("textarea").val();
    localStorgae.setItem(key, description);
    key.children("textarea").val(localStorage.getItem(key));
  })
}
)

var day = dayjs().day();
var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log(day);
var now = dayjs().format('MM/DD/YYYY');
var hour = dayjs().format('HH');
$("#currentDay").text(weekday[day] + " " + now);

for (var i = 9; i < 20; i++) {
  var timeBlock = $("#hour-" + i);

  if (i < hour) {
    timeBlock.addClass("past");
  } else if (i == hour) {
    timeBlock.addClass("present");
  } else {
    timeBlock.addClass("future");
  }}

  for (var i = 9; i < 20; i++) {
    var div = $("#hour-" + i);
    div.children("textarea").val(localStorage.getItem(div.attr("id"))); }