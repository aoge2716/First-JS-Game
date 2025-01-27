// show home page
let display = new Display(4,5);



let x ;

let btn = document.querySelector(".startButton");
btn.addEventListener("click", ()=>{
    display.mainPage();
    let hero = new Character(display,"hero"); 
    hero.spawn();
    
    const meter = new Strength("#display ", "bar", "pin");
    let intrvl, pressed = false, goingUp =true,speed = 10;

    document.addEventListener("keydown",(event)=>{
        switch(event.code){
            case("ArrowLeft"):
                // most left corner
                if(hero.currentLocation % display.mapW !== 0){
                    hero.moveLeft();
                }
                console.log("clicked");
                break;
            case("ArrowRight"):
                // most right corner
                if((hero.currentLocation+1) % display.mapW !== 0){
                    hero.moveRight();
                }
                console.log("right");
                break;
            case("ArrowUp"):
                // most right corner
                if(hero.currentLocation - display.mapW >= 0){
                    hero.moveUp();
                }
                console.log("Up");
                break;
            case("ArrowDown"):
                // most right corner
                if(hero.currentLocation + display.mapW < display.size){
                    hero.moveDown();
                }
                console.log("Down");
                break;


            case("Space"):
                if(!pressed){
                    meter.hit(speed,false); 
                    // console.log(Math.floor(Math.random()*(80)+0))
                    pressed =true;
                }else{
                    clearInterval(intrvl);
                    intrvl = null;
                    pressed = false;
                    meter.check()
                }
                break;
        } 
    })  
    

    
        
})