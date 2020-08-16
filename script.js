const $ = document.querySelector.bind(document);
const $on = document.addEventListener.bind(document);

let xmouse, ymouse;
$on('mousemove', (e) => {
    xmouse = e.clientX || e.pageX;
    ymouse = e.clientY || e.pageY;
});
const ball = $('#ball');
$('button').addEventListener('mouseover', () => {
    ball.classList.add('over');
    $('hr').classList.add('over');
});
$('button').addEventListener('mouseout', () => {
    ball.classList.remove('over');
    $('hr').classList.remove('over');
});
$on('mousedown', () => {
    ball.classList.add('over-s');
});
$on('mouseup', () => {
    ball.classList.remove('over-s');
});
let x = void 0,
    y = void 0,
    dx = void 0,
    dy = void 0,
    tx = 0,
    ty = 0,
    key = -1;

const followMouse = () => {
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

let red = 0;
let green = 127;
let blue = 255;
let hitTheLoopRed = false;
let hitTheLoopGreen = false;
let hitTheLoopBlue = false;

setInterval(() => {
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

