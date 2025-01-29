class Display{
    constructor(mapH,mapW){
        this.display = document.querySelector("#display");
        this.battle = document.querySelector("#battle")
        this.startPage();
        this.mapH = mapH;
        this.mapW = mapW; 
        this.size = this.mapH*this.mapW;
    }
    startPage(){
        this.display.setAttribute("style", `
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        `);
        this.display.innerHTML=`
            <H1> Hello Hero </H1>
            <H2>welcome to the world</h2>
            <button class="startButton"> Start Game</button>    
        `
    }
    
    mainPage(){
        this.display.innerHTML="";
        this.display.setAttribute("style", `
            display: grid;
            grid-template-columns: repeat(${this.mapW}, 1fr);
            grid-template-rows: repeat(${this.mapH},1fr);
            gap: 0px;
        `); 
        
 
        for (let i=0; i<this.size; i++){
            const tile = document.createElement("div");
            tile.classList.add("tile");
            this.display.appendChild(tile);
            console.log(tile)
        }
        
    }

    fightPage(){
        document.removeEventListener("keydown",moveListener);
        this.display.setAttribute("style", `
            display: none;
        `); 
        this.battle.classList.toggle("hidden");
        const meter = new Strength("#battle", "bar", "pin");

        addEventListener("keydown", event=>(bar(event, meter)))
    }

    winPage(){

    }
    lostPage(){

    }
}