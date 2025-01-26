class Ball{
    constructor(){
        this.width = 200;
        this.height = 50; 
        this.positionX = 19; 
        this.positionY = 80;

        this.ballElm = document.querySelector("#ball");
        this.rodElm = document.querySelector("#rod");
        
        this.addimg(this.rodElm, "/data/flag-pole-bar-free-png.webp");
        // this.addimg(this.rodElm, "data/Jose.jpg");
        this.addimg(this.ballElm, "/data/fist.webp");
        

        this.draw();
    }
    addimg(target, src){
        const ballimg = document.createElement("img");
        ballimg.src = src;
        ballimg.alt = "Ball";
        ballimg.style.width = "100%";
        target.appendChild(ballimg)

    }

    draw(){
        this.ballElm.style.left = this.positionX + "vw";
        this.ballElm.style.top = this.positionY + "vh";

        this.ballElm.style.width = this.width + "px";
        this.ballElm.style.height = this.height + "px";
    }

    moveLeft(){
        this.positionX--;
        console.log(this.positionX)
        this.draw();
    }
    
    moveRight(){
        this.positionX++;
        this.draw();
    }

    moveDown(counter){
        
        this.positionY+=2;
        // console.log(this.positionY)
        this.draw();
    }

    moveUp(counter){
        this.positionY-=2;
        this.draw();
    }
}

