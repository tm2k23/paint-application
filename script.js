console.log('Hello World');
var isPenActive = false;
var isDrawing = false;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
var startX, startY, currentX, currentY;

function selectPen(){
    isPenActive = true;
    console.log("Pen is active now");
}

function selectEraser(){
    isPenActive = false;
    console.log("Eraser is active now");
}

function clearCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    isPenActive = true;
}

function draw(e){
    console.log("Drawing");
    if( !isDrawing ){
        return;
    }
    currentX = e.offsetX; 
    currentY = e.offsetY;
    if( !isPenActive ){
        ctx.fillStyle = 'rgb(255, 255, 255)';
        ctx.fillRect(currentX-15, currentY-15, 30, 30);
    }
    else{
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();
        startX = currentX;
        startY = currentY;
    }
}


// add event listeners to the canvas
canvas.addEventListener("mousedown", (e)=>{
    isDrawing = true;
    startX = e.offsetX;
    startY = e.offsetY;
    console.log("user clicked the mouse inside canvas, might be he would drag to draw, so enable the pen");
});
canvas.addEventListener("mousemove", e=>{
    draw(e);
});
canvas.addEventListener("mouseup", ()=>{
    isDrawing = false;
    console.log("user released the mouse inside canvas, disable the pen");
} );
