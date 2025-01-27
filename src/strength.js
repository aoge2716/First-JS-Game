class Strength{
    constructor(elmClass, bar, pin){
        // this.ballElm = document.querySelector("#ball");
        // this.rodElm = document.querySelector("#rod");
        
        this.rodElm = this.create(bar,document.querySelector(elmClass));
        this.ballElm = this.create(pin, this.rodElm);
        this.targetElm = this.create(pin, this.rodElm);
        this.targetElm.style.backgroundColor = "green";
        
        // get the position of rod Body
        this.rodBody = this.rodElm.getBoundingClientRect();
        // console.log("body: ",this.rodBody);
        // console.log("ball width: ", this.ballElm.offsetWidth);

        // get the percentage of the center bottom of the main bar
        this.initX = Math.round(((this.rodBody.width/2 - (this.ballElm.offsetWidth/2))/this.rodBody.width*100)*100)/100;
        this.initY = Math.round(((this.rodBody.height - this.ballElm.offsetHeight-1)/this.rodBody.height*100)*100)/100; 
        this.targetY = Math.floor(Math.random()*(80)+0);
        
        console.log("initY ", this.initY)
        this.positionX =  this.initX; 
        this.positionY = this.initY;
        console.log("positionX: ",this.positionX);
        console.log("positionY: "+ this.positionY+"%") // Bottom inside the rod

        this.draw(this.ballElm, this.positionY); 
        this.draw(this.targetElm, this.targetY);
    }

    create(elmClass, parent){
        // create element with given class and append to given parent 
        const el = document.createElement("div");
        el.classList.add(elmClass);
        parent.appendChild(el);
        console.log(parent, el);
        return el;
    }

    addimg(target, src, altdesc){
        const img = document.createElement("img");
        img.src = src;
        img.alt = altdesc;
        img.style.width = "100%";
        target.appendChild(img)

    }

    draw(elm, y){
        elm.style.left = this.positionX + "%";
        elm.style.top = y + "%";
    }

    moveLeft(){
        this.positionX = Math.round((this.positionX - 10)*100/100);
        console.log(this.positionX,this.positionY);
        this.draw(this.ballElm, this.positionY);
    }
    
    moveRight(){
        this.positionX+=10;
        console.log(this.positionY);
        this.draw(this.ballElm, this.positionY);
    }

    moveDown(){
        
        this.positionY = Math.round((this.positionY + 1)* 100/100);
        console.log(this.positionY);
        this.draw(this.ballElm, this.positionY);
    }

    moveUp(){
        this.positionY = Math.round((this.positionY - 1)* 100/100);
        console.log(this.positionY);
        this.draw(this.ballElm, this.positionY);
    }

    hit(speed, stop){
        if(!intrvl){
            intrvl = setInterval(() => {
                if(goingUp){
                        // the highest point the ball will reach
                        if (this.positionY > 0){
                            this.moveUp();
                        }else{
                            goingUp = false;
                        }
                }
                else{
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
        }     
    }

    check(){
        let distance = Math.abs(this.targetY-this.positionY)
        if(distance == 0){
            console.log("perfect", this.targetY, this.positionY, distance);
            
        }else if (distance <=2){
            console.log("hit", this.targetY, this.positionY, distance);
        }else{
            console.log("miss", this.targetY, this.positionY, distance);
        }
        return distance;
    } 

    
}

