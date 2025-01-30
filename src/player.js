class Character{
    constructor(map){
        this.mapsize = map.size;
        this.mapH = map.mapH;
        this.mapW = map.mapW;
        
        this.health = 2;
        this.enemyHealth = 2; 
        this.hero = document.createElement("div");
        this.tiles = document.querySelectorAll(".tile");
        this.currentLocation = Math.floor(Math.random() * this.tiles.length);
        // console.log("location ", this.currentLocation);

        this.maxEnemyAmt =  Math.floor(this.mapsize/2);
        console.log("maxenemyamt "+this.maxEnemyAmt);

        console.log(this.tiles)
        this.spawn("hero", this.hero, this.currentLocation);

        this.totalEnemy = this.spawn_enemy(50);
        this.spawn_chest();
        console.log("total enemy: ", this.totalEnemy);
    } 

    spawn(type, character, location){
        //randomly choose a tile
        character.classList.add(type); 
    
        const img = document.createElement("img");
        if(type === "hero"){
            img.src = "./data/knight-crop.gif";
            img.alt = "Player";
        }else if(type === "enemy"){
            img.src = "./data/enemy.gif"; 
            img.alt = "Enemy";
        }else if(type === "item"){
            img.src = "./data/chest.png";
        }
        img.classList.add("characterImg");
        character.appendChild(img);
        
        this.tiles[location].appendChild(character);
        console.log(`${type} created`);

    }

    

    spawn_enemy(rate){
        let enemyAmt=0;
        // create enemy with max amount of map/2 
        for(let i=0; i<this.maxEnemyAmt; i++){
            const enemy  = document.createElement("div");
            // get random number
            const chance = Math.floor(Math.random()*100)+1
            // console.log(`Attempt ${i}: Location ${location}, Chance ${chance}`);
            // if random number is lower than the given rate then generate enemy on a empty tile 
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

    spawn_chest(){
        let location = this.spawncheck();
        const item = document.createElement("div");
        this.spawn("item", item, location);
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
            this.enemyHealth = 2;
            display.fightPage();
            // return true;
        }
    }

    
    die(queryType, location){
        // remove character from the tile
        let enemy = this.tiles[location].querySelector(queryType);
        this.tiles[location].removeChild(enemy);
        this.enemyHealth = 2;
    }

    healthCheck(){
        if(this.health < 1){
            console.log("hero ded")
            display.deathPage("death");

        }
        if(this.enemyHealth < 1){
            console.log("enemy ded")
            display.deathPage("enemydeath");
            this.die(".enemy",this.currentLocation);
        }
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
}