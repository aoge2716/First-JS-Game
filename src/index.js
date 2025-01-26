const ball = new Ball("#display","rod", "ball");
const strength = new Ball("#display ", "bar", "pin");
let intrvl;
let a = 5, b =2;
let goingUp = true;
const maxcount = 80; 
const minInterval = 10;


document.addEventListener("keydown",(event)=>{
    switch(event.code){
        case ("ArrowUp"):
            ball.moveUp();
            break;
        case("ArrowDown"):
            ball.moveDown();
            break;
        case ("ArrowLeft"):
            ball.moveLeft();
            break;
        case("ArrowRight"):
            ball.moveRight();
            break;
        case("Space"):
            console.log(100-maxcount,ball.initY);
            strength.hit(100,10); 
            break;
        case("KeyQ"):
            console.log("Q pressed")
            if(intrvl){
                clearInterval(intrvl);
                intrvl = null;
            }
            ball.hit(100 - strength.positionY,10,true); 
            if(ball.positionY === strength.positionY){
                clearInterval(intrvl);
                intrvl = null;
            } 
            break;
    };
})

