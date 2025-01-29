// show home page
let display = new Display(4,4);
let intrvl, isHitBarPressed = false, goingUp =true,speed = 10;
let moveListener, barListener = event=>(bar(event));

// display.fightPage();

let btn = document.querySelector(".startButton");
btn.addEventListener("click", ()=>{
    display.mainPage();
    let hero = new Character(display); 
    moveListener= event =>(move(hero,event));
    // display.fightPage();

    document.addEventListener("keydown",moveListener)


            // case("Space"):
            //     // display.startPage();
            //     // hero.kill(hero.currentLocation);
            //     if(!pressed){
            //         const meter = new Strength("body", "bar", "pin");
            //         if(!pressed){
            //             meter.hit(speed,false); 
            //             // console.log(Math.floor(Math.random()*(80)+0))
            //             pressed =true;
            //         }else{
            //             clearInterval(intrvl);
            //             intrvl = null;
            //             pressed = false;
            //             meter.check()
            //         }
            //         break;
            //     }
                
    //     } 
    // })  
     
})

function bar(event,meter){
    switch(event.code){
        case("Space"):
            if(!isHitBarPressed){
                console.log("starting hit bar......")
                meter.initHitBar(speed,false); 
                // console.log(Math.floor(Math.random()*(80)+0))
                isHitBarPressed =true;
            }else{
                console.log("hittin......")
                clearInterval(intrvl);
                intrvl = null;
                isHitBarPressed = false;
                meter.check()
            }
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