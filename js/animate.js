var element = document.getElementById('hours');
var minX = 0;
var maxX = 1238;
var pos = 0;
var dir = 1;
var speed = 4;
var fps = 60;
var setTimeoutID;
var animationFrameID;

function animateHours() {
    setTimeout(function () {
        animationFrameID = window.requetAnimationFrame(animateHours)
        pos = element.getBoundingClientRect().left;
        if (pos > maxX || pos < minX) {
            dir = -dir;
        }
        element.style.left = (pos + dir * speed) + 'px';
    }, 1000 / fps)

}
window.requetAnimationFrame(animateHours);
