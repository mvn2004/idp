function loaded() {
    changeColor();
    var today = new Date();
    var date = new Date('time');
}

function changeColor() {
    if (today < date) {
        document.body.table2.rowD.cell color.style.color: #258D57;
    } else if (today > date) {
        document.body.table2.rowD.cell color.style.color: #C53929;
    } else {
        document.body.table2.rowD.cell color.style.color: #F09300;
    }
}
