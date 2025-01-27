class Ball{
    constructor(elmClass, bar, pin, role){
        // this.ballElm = document.querySelector("#ball");
        // this.rodElm = document.querySelector("#rod");
        
        this.rodElm = this.create(bar,document.querySelector(elmClass));
        this.ballElm = this.create(pin, this.rodElm);
        this.role = role;
        
        // get the position of rod Body
        this.rodBody = this.rodElm.getBoundingClientRect();
        console.log("body: ",this.rodBody)
        console.log("ball width: ", this.ballElm.offsetWidth);

        // get the percentage of the center bottom of the main bar
        this.initX = Math.round(((this.rodBody.width/2 - (this.ballElm.offsetWidth/2))/this.rodBody.width*100)*100)/100;
        this.initY = Math.round(((this.rodBody.height - this.ballElm.offsetHeight-1)/this.rodBody.height*100)*100)/100; 
        
        
        console.log("initY ", this.initY)
        this.positionX =  this.initX; 
        this.positionY = this.initY;
        console.log("positionX: ",this.positionX);
        console.log("positionY: "+ this.positionY+"%") // Bottom inside the rod

        this.draw(); 
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

    draw(){
        this.ballElm.style.left = this.positionX + "%";
        this.ballElm.style.top = this.positionY + "%";
    }

    moveLeft(){
        this.positionX = Math.round((this.positionX - 10)*100/100);
        console.log(this.positionX,this.positionY);
        this.draw();
    }
    
    moveRight(){
        this.positionX+=10;
        console.log(this.positionY);
        this.draw();
    }

    moveDown(){
        
        this.positionY = Math.round((this.positionY + 1)* 100/100);
        console.log(this.positionY);
        this.draw();
    }

    moveUp(){
        this.positionY = Math.round((this.positionY - 1)* 100/100);
        console.log(this.positionY);
        this.draw();
    }

    hit(max, speed, stop){
        if(!intrvl){
            intrvl = setInterval(() => {
                if(goingUp){
                        // the highest point the ball will reach
                        if (this.positionY < 101- max){
                            goingUp = false;
                            
                        }else{
                            this.moveUp();
                        }
                }else{
                    // the ground 
                    if(this.positionY > this.initY-1){
                        goingUp = true;
                        if(stop){
                            clearInterval(intrvl);
                            intrvl = null;
                            window.alert(max+"%");
                        }
                        // clearInterval(intrvl);
                        
                    }else{
                        this.moveDown();
                    }
                }   
            }, speed);
        }     
    }

    
}

