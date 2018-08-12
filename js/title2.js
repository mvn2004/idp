"use strict"

var scrollCounter = 0;
var scrollText = "Индивидуальный план развития на 2018 г.";
var scrollDelay = 30;
var i = 0;

while (i++ < 600) {
  scrollText = " " + scrollText;
}

function Scroller() {
  window.status = scrollText.substring(scrollCounter++, scrollText.length);

  if (scrollCounter == scrollText.length) {
    scrollCounter = 0;
  }

  setTimeout("Scroller()", scrollDelay);
}

Scroller();
window.status = 'Индивидуальный план развития на 2018 г.';
