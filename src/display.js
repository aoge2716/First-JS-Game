class Display {
  constructor(mapH, mapW) {
    this.display = document.querySelector("#display");
    this.battle = document.querySelector("#battle");
    this.reaction = document.querySelector("#reaction");
    this.meter = null;
    this.startPage();
    this.mapH = mapH;
    this.mapW = mapW;
    this.size = this.mapH * this.mapW;
  }
  startPage() {
    this.display.setAttribute(
      "style",
      `
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        `
    );
    this.display.innerHTML = `
            <H1> Hello Hero </H1>
            <H2>welcome to the world</h2>
            <button class="startButton"> Start Game</button>    
        `;
  }

  mainPage() {
    this.display.innerHTML = "";
    this.display.setAttribute(
      "style",
      `
            display: grid;
            grid-template-columns: repeat(${this.mapW}, 1fr);
            grid-template-rows: repeat(${this.mapH},1fr);
            gap: 0px;
        `
    );

    for (let i = 0; i < this.size; i++) {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      this.display.appendChild(tile);
      console.log(tile);
    }
  }

  fightPage() {
    console.log("FIGHT PAGE CALLED heroHP: "+hero.health+" enemyHP: "+hero.enemyHealth)
    this.clearPage();
    // document.removeEventListener("keydown", moveListener);
    // this.setElementDisplay(this.display, "none");

    this.setElementDisplay(this.battle, "flex");
    this.meter = new Strength("#battle", "bar", "pin");
    this.meter.initHitBar(speed, false);
    // console.log(this.meter);

    barListener = (event) => bar(event);
    addEventListener("keydown", barListener);
  }

  reactionPage(type) {
    this.clearPage();
    // console.log("hitpage");
    // this.setElementDisplay(this.battle, "none");
    this.setElementDisplay(this.reaction, "flex");
    this.reaction.style.backgroundImage = `url("./data/fightpage/${type}.webp")`;
    // document.removeEventListener("keydown", barListener);
    // this.battle.querySelector(".bar").remove();
    // this.meter = null;
    
    
    setTimeout(() => {
        console.log("REACTIONPAGE CHECK heroHP: "+hero.health+" enemyHP: "+hero.enemyHealth)
        this.setElementDisplay(this.reaction, "none");
        if (hero.health>0 && hero.enemyHealth>0){
            console.log("calling fight page")
            this.fightPage();
        }
        
        }, 1000);

    
  }

  deathPage(type){
    this.clearPage();
    this.setElementDisplay(this.reaction, "flex");
    this.reaction.style.backgroundImage = `url("./data/fightpage/${type}.webp")`;
    // if (type === "enemydeath"){
        setTimeout(()=>{
            this.clearPage();
            this.display.setAttribute(
                "style",
                `
                      display: grid;
                      grid-template-columns: repeat(${this.mapW}, 1fr);
                      grid-template-rows: repeat(${this.mapH},1fr);
                      gap: 0px;
                  `
              );
            document.addEventListener("keydown",moveListener)
        },1000)
    // }else{
    //     setTimeout(()=>{
    //         this.clearPage();
    //         this.lostPage();
    //     },2000)
    // }
    
  }

  LostPage(){
    console.log("you lost")
  }

  clearPage(){
    if(moveListener){
        document.removeEventListener("keydown", moveListener);
    }
    if(barListener){
        document.removeEventListener("keydown", barListener);
        this.meter = null;
    }
    if(this.battle.querySelector(".bar")){
        this.battle.querySelector(".bar").remove();
    }
    this.setElementDisplay(this.display, "none");
    this.setElementDisplay(this.battle, "none");
    this.setElementDisplay(this.reaction, "none");
  }

  

  setElementDisplay(element, displaystyle) {
    element.setAttribute(
      "style",
      `
            display: ${displaystyle};
        `
    );
  }

  lostPage() {}
}
