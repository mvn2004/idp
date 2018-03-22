function loaded() {
    changeColor();
    var date;
    var now = new Date().getDate();
}

function changeColor() {
    if (date < now) {
        document.body.table2.rowD.cell color.style.color: #258D57;
    } else if (date > now) {
        document.body.table2.rowD.cell color.style.color: #C53929;
    } else {
        document.body.table2.rowD.cell color.style.color: #F09300;
    }
}
