let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let inputWidth = document.getElementById('width');
let inputColor = document.getElementById('color');
let clearBtn = document.getElementById('clear');

let width, height, posx, posy, color, lineWidth, dragging;

inputWidth.value = 5;
width = document.documentElement.clientWidth - 100;
height = 600;
color = inputColor.value;
lineWidth = inputWidth.value;
dragging = false;
canvas.width = width;
canvas.height = height;

canvas.addEventListener("mousedown", clickOn)
canvas.addEventListener("mousemove", detectedMousePosition)
canvas.addEventListener("mouseup", clickOff)
clearBtn.addEventListener('click', clearCanvas); 

function clickOn() {
  dragging = true;
}

function clickOff() {
  dragging = false;
  ctx.beginPath();
}

function detectedMousePosition(e) {
  if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  } else if (e.clientX || e.clientY) {
    posx = e.clientX;
    posy = e.clientY;
  }  else if (e.clientX || e.clientY) {
    posx = e.offsetX;
    posy = e.offsetY;
  }
  toDrow(); 
}

function toDrow() {
  if (dragging) { 
    ctx.lineTo(posx, posy);
    ctx.stroke();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth*2;
    ctx.beginPath();
    ctx.arc(posx, posy, lineWidth, 0, 2*Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(posx, posy);
  }
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

inputWidth.oninput = function() {
  lineWidth = inputWidth.value
}

inputColor.oninput = function() {
  color = inputColor.value
}

