class Display {
  constructor() {
    this.start = document.querySelector("#start");
    this.display = document.querySelector("#display");
    this.battle = document.querySelector("#battle");
    this.reaction = document.querySelector("#reaction");
    this.win = document.querySelector("#win");
    this.lost = document.querySelector("#lost");
    this.hud = document.querySelector("#hud");
    this.hudHealth = document.querySelector("#health");
    this.hudEnemy = document.querySelector("#enemy")
    this.meter = null;
    this.startPage();
    this.mapH = 2;
    this.mapW = 2;
    this.size = 4;
  }
  startPage() {
    this.display.innerHTML ="";
    this.setElementDisplay(this.start, "flex")

  }

  mainPage() {
    console.log("mapsize (w h a): ", this.mapW,this.mapH,this.size)
    this.size = this.mapH * this.mapW
    this.clearPage();
    this.setDisplay();
    
    for (let i = 0; i < this.size; i++) {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      this.display.appendChild(tile);
    //   console.log(tile);
    }
    // display hud
    this.setElementDisplay(this.hud,"flex");
    
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

    this.setElementDisplay(this.reaction, "flex");
    this.reaction.style.backgroundImage = `url("./data/background/${type}.webp")`;

    setTimeout(() => {
        console.log("REACTIONPAGE CHECK heroHP: "+hero.health+" enemyHP: "+hero.enemyHealth)
        this.setElementDisplay(this.reaction, "none");
        if (hero.health>0 && hero.enemyHealth>0){
            console.log("calling fight page")
            this.fightPage();
        }
        }, 1000);
    this.updateHud(hero.health,hero.totalEnemy);
  }

  deathPage(){
    this.clearPage();
    this.setElementDisplay(this.reaction, "flex");
    this.reaction.style.backgroundImage = `url("./data/background/enemydeath.webp")`;
    
        setTimeout(()=>{
            if (hero.totalEnemy>0){
                this.clearPage();
                this.setDisplay()
                document.addEventListener("keydown",moveListener)
            }else{
                setTimeout(()=>{
                    console.log("no enemies");
                    this.winPage();
                },1000)
                
            }  
        },1000);
     
  }

  lostPage(){
    this.clearPage();
    this.setElementDisplay(this.lost,"flex");
    audio.background.pause();
    audio.lost.play();
    btn = document.querySelector(".agianButton");
    btn.addEventListener("click", ()=>{location.reload()});
    
    console.log("you lost");
  }
  
  winPage(){
    this.clearPage();
    audio.background.pause();
    audio.win.play();
    this.setElementDisplay(this.win, "flex");    
  }

  updateHud(hp, enmyAmt){
    let enemytTxt = this.hudEnemy.querySelector("h2");
    let healthTxt = this.hudHealth.querySelector("h2");
    enemytTxt.textContent = `x${enmyAmt}`;
    healthTxt.textContent = `x${hp}`;
  }

  clearPage(){
    if(startListener){
        console.log("click listener removed");
        document.removeEventListener("click", startListener);
    }
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
    this.setElementDisplay(this.start, "none");
    this.setElementDisplay(this.display, "none");
    this.setElementDisplay(this.battle, "none");
    this.setElementDisplay(this.reaction, "none");
  }

  setDisplay(){
    this.display.setAttribute(
        "style",
        `
            display: grid;
            grid-template-columns: repeat(${this.mapW}, 1fr);
            grid-template-rows: repeat(${this.mapH},1fr);
            gap: 0px;
        `
    );
  }

  setElementDisplay(element, displaystyle) {
    // console.log("Page: "+element+"display: "+displaystyle)
    element.setAttribute(
      "style",
      `
            display: ${displaystyle};
        `
    );
  }

}
