$(function () {
  var saveButton = $(".saveBtn");
  saveButton.on("click", function () {
    var key = $(this).parent().attr("id");
    var description = $(this).siblings("textarea").val();
    localStorage.setItem(key, description);
    $(this).siblings("textarea").val(localStorage.getItem(key));
  });

  var day = dayjs().day();
  var weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  console.log(day);
  var now = dayjs().format("MM/DD/YYYY");
  var hour = dayjs().format("HH");
  $("#currentDay").text(weekday[day] + " " + now);

  for (i = 9; i < 20; i++) {
    if (i < dayjs().hour()) {
      $("#hour-" + i).attr("class", "past row time-block");
    } else if (i === dayjs().hour()) {
      $("#hour-" + i).attr("class", "present row time-block");
    } else {
      $("#hour-" + i).attr("class", "future row time-block");
    }
  }

  for (i = 9; i < 20; i++) {
    var div = $("#hour-" + i);
    div.children("textarea").val(localStorage.getItem("hour-" + i));
  }
});
