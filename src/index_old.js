const button = document.querySelector(".startButton");

const ball = new Ball("#display","rod", "ball", "bottom");
const strength = new Ball("#display ", "bar", "pin", "center");



let intrvl;
let a = 5, b =2;
let goingUp = true;
const maxcount = 80; 
const minInterval = 10;
let pressed = false


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
            if(pressed === false){
                pressed = true;
                console.log(100-maxcount,ball.initY,false);
                strength.hit(100,10); 
            }else{
                pressed = false;
                if(intrvl){
                    clearInterval(intrvl);
                    intrvl = null;
                }
                ball.hit(100 - strength.positionY, 10, true); 
                if(ball.positionY === strength.positionY){
                    clearInterval(intrvl);
                    intrvl = null;
                } 
            }
            
            break;
    };
})

