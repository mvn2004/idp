"use strict"

var obj_hours = document.getElementById("hours");
var name_month = new Array("января", "февраля", "марта", "апреля", "мая", "июня",
  "июля", "августа", "сентября", "октября", "ноября", "декабря");
var name_day = new Array("воскресенье", "понедельник", "вторник", "среда",
  "четверг", "пятница", "суббота");

function wr_hours() {
  var time = new Date();
  var time_sec = time.getSeconds();
  var time_min = time.getMinutes();
  var time_hours = time.getHours();
  var time_wr = ((time_hours < 10) ? "0" : "") + time_hours;
  time_wr += ":";
  time_wr += ((time_min < 10) ? "0" : "") + time_min;
  time_wr += ":";
  time_wr += ((time_sec < 10) ? "0" : "") + time_sec;
  time_wr = "Сегодня " + name_day[time.getDay()] + ", " + time.getDate() + " " +
    name_month[time.getMonth()] + " " + time.getFullYear() + " г., время " + time_wr;
  obj_hours.innerHTML = time_wr;
}

wr_hours();
setInterval("wr_hours();", 1000);
