// show home page
let display = new Display();
let intrvl, isHitBarPressed = false, goingUp =true,speed = 10;
let moveListener, barListener; 
let startListener = event=>startGame(event);
let hero;

// display.fightPage();

let btn = document.querySelector(".startButton");
btn.addEventListener("click", startListener);


function startGame(event){
    display.mapH = parseInt(document.getElementById("mapHInput").value);
    display.mapW = parseInt(document.getElementById("mapWInput").value);
    let spawnRate = parseInt(document.getElementById("spawnRateInput").value)

    display.mainPage();
    hero = new Character(display,spawnRate); 
    
    display.updateHud(hero.health,hero.totalEnemy);
    moveListener= event =>(move(hero,event));
    // display.lostPage();

    document.addEventListener("keydown",moveListener); 
}

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