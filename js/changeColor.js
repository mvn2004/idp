//"use strict";
var today = new Date();
var datesStr = document.getElementsByClassName("cellDate");

//Изменение цвета шрифта от даты
function changeColor() {
    var dateStrLen = datesStr.length;
    
    for (var i = 0; i < dateStrLen; i++) {
//    for (let dateStr of datesStr) { // только для Chrome & Firefox
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