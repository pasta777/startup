var $ = document.querySelector.bind(document);
var $on = document.addEventListener.bind(document);

var xmouse, ymouse;
$on('mousemove', function (e) {
    xmouse = e.clientX || e.pageX;
    ymouse = e.clientY || e.pageY;
});

var ball = $('#ball');
var x = void 0,
    y = void 0,
    dx = void 0,
    dy = void 0,
    tx = 0,
    ty = 0,
    key = -1;

var followMouse = function followMouse() {
    key = requestAnimationFrame(followMouse);

    if (!x || !y) {
        x = xmouse;
        y = ymouse;
    } else {
        dx = (xmouse - x) * 0.125;
        dy = (ymouse - y) * 0.125;
        if (Math.abs(dx) + Math.abs(dy) < 0.1) {
            x = xmouse;
            y = ymouse;
        } else {
            x += dx;
            y += dy;
        }
    }
    ball.style.left = x + 'px';
    ball.style.top = y + 'px';
};

var red = 0;
var green = 127;
var blue = 255;
var hitTheLoopRed = false;
var hitTheLoopGreen = false;
var hitTheLoopBlue = false;

setInterval(function() {
    // Red
    if(red < 255 && !hitTheLoopRed) {
        red++;
    } else {
        red--;
        hitTheLoopRed = true;
        if(red === 0) {
            hitTheLoopRed = false;
        }
    }
    // Green
    if(green < 255 && !hitTheLoopGreen) {
        green++;
    } else {
        green--;
        hitTheLoopGreen = true;
        if(green === 0) {
            hitTheLoopGreen = false;
        }
    }
    // Blue
    if(blue < 255 && !hitTheLoopBlue) {
        blue++;
    } else {
        blue--;
        hitTheLoopBlue = true;
        if(blue === 0) {
            hitTheLoopBlue = false;
        }
    }
    ball.style.borderColor = `rgb(${red}, ${green}, ${blue})`;
}, 10);