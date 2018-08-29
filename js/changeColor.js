"use strict";

var date = new Date();
var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
var datesStr = document.getElementsByClassName("cellDate");

//Изменение цвета шрифта от даты
function changeColor() {

  for (var i = 0; i < datesStr.length; i++) {
    // for (let dateStr of datesStr) { // только для Chrome & Firefox
    var date = new Date(datesStr[i].innerText.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));

    if (today < date) {
      datesStr[i].style.color = "#258D57";
    } else if (today > date) {
      datesStr[i].style.color = "#C53929";
    } else {
      datesStr[i].style.color = "#F09300";
    }
  }
}

changeColor();
