"use strict"

var tit = document.title;
var c = 0;

function writetitle() {
  if (document.all || document.getElementById) {
    document.title = tit.substring(0, c);

    if (c == tit.length) {
      c = 1;
      setTimeout("writetitle()", 300); // длина паузы
    } else {
      c++;
      setTimeout("writetitle()", 200); // скорость строки
    }
  }
}

writetitle();
