// show home page
let display = new Display(4,4);
let intrvl, isHitBarPressed = false, goingUp =true,speed = 10;
let moveListener, barListener;
let hero;

// display.fightPage();

let btn = document.querySelector(".startButton");
btn.addEventListener("click", ()=>{
    display.mainPage();
    hero = new Character(display); 
    moveListener= event =>(move(hero,event));
    // display.fightPage();

    document.addEventListener("keydown",moveListener)
    
     
})

function bar(event){
    if(!display.meter) return;

    switch(event.code){
        case("Space"):
                console.log("hittin......")
                clearInterval(intrvl);
                intrvl = null;
                isHitBarPressed = false;
                display.meter.checkHitResult()
            
            break;

    }
    
}


function move(hero,event){ 
    switch(event.code){
        case("ArrowLeft"):
            // most left corner
            if(hero.currentLocation % display.mapW !== 0){
                hero.moveLeft();
            }
            // console.log("clicked");
            break;
        case("ArrowRight"):
            // most right corner
            if((hero.currentLocation+1) % display.mapW !== 0){
                hero.moveRight();
            }
            // console.log("right");
            break;
        case("ArrowUp"):
            // most right corner
            if(hero.currentLocation - display.mapW >= 0){
                hero.moveUp();
            }
            // console.log("Up");
            break;
        case("ArrowDown"):
            // most right corner
            if(hero.currentLocation + display.mapW < display.size){
                hero.moveDown();
            }
            // console.log("Down");
            break;

    }
}