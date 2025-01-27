class Character{
    constructor(map, type){
        this.mapsize = map.size;
        this.mapH = map.mapH;
        this.mapW = map.mapW;
        this.type = type; 
        

        this.character = document.createElement("div");
        this.tiles = document.querySelectorAll(".tile");
        this.currentLocation = Math.floor(Math.random() * this.tiles.length);
        console.log("location ", this.currentLocation)
        this.maxEnemyAmt =  Math.floor(this.mapsize/2);
        console.log("amxenemyamt "+this.maxEnemyAmt);
    } 

    spawn(){
        //randomly choose a tile
        this.character.classList.add(this.type); 
        this.tiles[this.currentLocation].appendChild(this.character);
        console.log(`${this.type} created`);
    }

    moveLeft(){
        this.tiles[this.currentLocation].removeChild(this.character);
        this.currentLocation--;
        this.tiles[this.currentLocation].appendChild(this.character);
    }
    moveRight(){
        this.tiles[this.currentLocation].removeChild(this.character);
        this.currentLocation++;
        console.log(this.currentLocation)
        this.tiles[this.currentLocation].appendChild(this.character);
    }
    moveUp(){
        this.tiles[this.currentLocation].removeChild(this.character);
        this.currentLocation-=this.mapW;
        console.log(this.currentLocation,this.mapW)
        this.tiles[this.currentLocation].appendChild(this.character);
    }
    moveDown(){
        this.tiles[this.currentLocation].removeChild(this.character);
        this.currentLocation+=this.mapW;
        this.tiles[this.currentLocation].appendChild(this.character);
    }
    // spawn_enemy(){
    //     for(val of this.maxEnemyAmt){
    //         console.log("hello");
    //     }
    // }
}