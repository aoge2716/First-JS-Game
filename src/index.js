const ball = new Ball();
let intrvl;
let a = 5, b =2;
let counter = 0;
let goingUp = true;
const maxcount = 15;
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

            if(!intrvl){
                intrvl = setInterval(() => {
                    if(goingUp){
                            ball.moveUp();
                            counter++;
                            if (counter >= maxcount){
                                goingUp = false;
                            }
                    }else{
                        ball.moveDown();
                        counter--;
                        
                        if(counter <= 0){
                            console.log(counter);
                            goingUp = true;
                        }
                    }   
                }, goingUp ? a:b);
            }            
            break;
        case("Q"):
            if(intrvl){
                clearInterval(intrvl);
                intrvl = null;
            }
            break
    };
})

