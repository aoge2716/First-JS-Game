class Character{
    constructor(map){
        this.mapsize = map.size;
        this.mapH = map.mapH;
        this.mapW = map.mapW;
        
        

        this.hero = document.createElement("div");
        this.tiles = document.querySelectorAll(".tile");
        this.currentLocation = Math.floor(Math.random() * this.tiles.length);
        // console.log("location ", this.currentLocation);

        this.maxEnemyAmt =  Math.floor(this.mapsize/2);
        console.log("maxenemyamt "+this.maxEnemyAmt);

        console.log(this.tiles)
        this.spawn("hero", this.hero, this.currentLocation);

        this.totalEnemy = this.spawn_enemy(50);
        console.log("total enemy: ", this.totalEnemy);
    } 

    spawn(type, character, location){
        //randomly choose a tile
        character.classList.add(type); 
        this.tiles[location].appendChild(character);
        console.log(`${type} created`);
    }

    moveLeft(){
        this.tiles[this.currentLocation].removeChild(this.hero);
        this.currentLocation--;
        // console.log(this.currentLocation)
        this.tiles[this.currentLocation].appendChild(this.hero);
        this.checkEnemy(this.currentLocation)
    }
    moveRight(){
        this.tiles[this.currentLocation].removeChild(this.hero);
        this.currentLocation++;
        // console.log(this.currentLocation)
        this.tiles[this.currentLocation].appendChild(this.hero);
        this.checkEnemy(this.currentLocation)
    }
    moveUp(){
        this.tiles[this.currentLocation].removeChild(this.hero);
        this.currentLocation-=this.mapW;
        // console.log(this.currentLocation,this.mapW)
        this.tiles[this.currentLocation].appendChild(this.hero);
        this.checkEnemy(this.currentLocation)
    }
    moveDown(){
        this.tiles[this.currentLocation].removeChild(this.hero);
        this.currentLocation+=this.mapW;
        // console.log(this.currentLocation)
        this.tiles[this.currentLocation].appendChild(this.hero);
        this.checkEnemy(this.currentLocation)
    }

    spawn_enemy(rate){
        let enemyAmt=0;
        
        for(let i=0; i<this.maxEnemyAmt; i++){
            const enemy  = document.createElement("div");
            const chance = Math.floor(Math.random()*100)+1

            // console.log(`Attempt ${i}: Location ${location}, Chance ${chance}`);

            if(chance < rate){
                let location = this.spawncheck(); 
                // console.log("get location: ", location);
                this.spawn("enemy", enemy, location);
                enemyAmt++;
                // console.log("enemy added")
            }   
        }
        // console.log("Enemies successfully spawned:", enemyAmt);
        return enemyAmt;
    }

    spawncheck(){
        // check if location for spawn is occupied
       
        let location = Math.floor(Math.random() * this.tiles.length);

        if(this.tiles[location].querySelector(".enemy")==null && this.tiles[location].querySelector(".hero")==null){
            // console.log("retunred location: ", location)
            return location;
        }else{
            // console.log("RECALL");
            return this.spawncheck();
        }
    }

    checkEnemy(location){
        if(this.tiles[location].querySelector(".enemy")==null){
            console.log("safe")
            // return false;
        }else{
            
            console.log("there is enemy");
            display.fightPage();
            // return true;
        }
    }

    kill(location){
        let enemy = this.tiles[location].querySelector(".enemy");
        this.tiles[location].removeChild(enemy);
    }
}