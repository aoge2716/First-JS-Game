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
    if (display.mapH < 1){
        display.mapH = 1;
    }
    display.mapW = parseInt(document.getElementById("mapWInput").value);
    if(display.mapW < 1){
        display.mapW = 1;
    }
    if (display.mapH<=2 && display.mapW<=2){
        display.mapH = 2;
        display.mapH = 2;
    }
    let spawnRate = parseInt(document.getElementById("spawnRateInput").value);
    if(spawnRate<1){
        spawnRate = 1;
    }

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