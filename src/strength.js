class Strength{
    constructor(elmClass, bar, pin){
        this.parent = elmClass
        // linking elements
        this.rodElm = this.create(bar,document.querySelector(this.parent));
        this.ballElm = this.create(pin, this.rodElm);
        this.targetElm = this.create(pin, this.rodElm);
        this.targetElm.style.backgroundColor = "green";
        
        // get the position of rod Body
        this.rodBody = this.rodElm.getBoundingClientRect();
        // console.log("rodBody",this.rodBody )

        // get the percentage of the center bottom of the main bar
        this.initX = Math.round(((this.rodBody.width/2 - (this.ballElm.offsetWidth/2))/this.rodBody.width*100)*100)/100;
        this.initY = Math.round(((this.rodBody.height - this.ballElm.offsetHeight-1)/this.rodBody.height*100)*100)/100; 
        this.targetY = Math.floor(Math.random()*(80)+0);
        // console.log("initY ", this.initY)

        this.positionX =  this.initX; 
        this.positionY = this.initY;
        // console.log("positionX: ",this.positionX);
        // console.log("positionY: "+ this.positionY+"%") 

        this.placeElement(this.ballElm, this.positionY); 
        this.placeElement(this.targetElm, this.targetY);        
    }

    renewTarget(){
        this.targetY = Math.floor(Math.random()*(80)+0);
        this.placeElement(this.targetElm, this.targetY); 
    }

    create(child, parent){
        // create element with given class and append to given parent 
        const el = document.createElement("div");
        el.classList.add(child);
        parent.appendChild(el);
        // console.log(parent, el);
        return el;
    }

    placeElement(elm, y){
        elm.style.left = this.positionX + "%";
        elm.style.top = y + "%";
    }


    moveDown(){
        
        this.positionY = Math.round((this.positionY + 1)* 100/100);
        // console.log(this.positionY);
        this.placeElement(this.ballElm, this.positionY);
    }

    moveUp(){
        this.positionY = Math.round((this.positionY - 1)* 100/100);
        // console.log(this.positionY);
        this.placeElement(this.ballElm, this.positionY);
    }

    initHitBar(speed, stop){
        // if(!intrvl){
            intrvl = setInterval(() => {
                
                if(goingUp){
                        // the highest point the ball will reach
                        if (this.positionY > 0){
                            this.moveUp();
                        }else{
                            goingUp = false;
                        }
                }else{
                    // the ground 
                    if(this.positionY > this.initY-1){
                        goingUp = true;
                        if(stop){
                            clearInterval(intrvl);
                            intrvl = null;
                        }
                        // clearInterval(intrvl);
                        
                    }else{
                        this.moveDown();
                    }
                }   
            }, speed);
        // }     
    }

    checkHitResult(){
        let distance = Math.abs(this.targetY-this.positionY)
        if(distance == 0){
            console.log("perfect", this.targetY, this.positionY, distance);
            hero.enemyHealth-=2;
            hero.health++;
            audio.perfect.play();
            display.reactionPage("perfect");
            console.log("PERFECT HIT! heroHP: "+hero.health+" enemyHP: "+hero.enemyHealth);
            
            
        }else if (distance <=2){
            console.log("hit", this.targetY, this.positionY, distance);
            hero.enemyHealth--;
            audio.hit.play()
            display.reactionPage("hit");
            console.log("heroHP: "+hero.health+" enemyHP: "+hero.enemyHealth);
           
        }else{
            console.log("miss", this.targetY, this.positionY, distance);
            hero.health--;
            audio.miss.play()
            display.reactionPage("miss");
            console.log("heroHP: "+hero.health+" enemyHP: "+hero.enemyHealth);
        }

        setTimeout(() => {
            hero.healthCheck();
        }, 1000); 

        
    } 

    
}

