class Audio{
    constructor(){
        this.hit = this.getAudio("hitSound",0.5);
        this.miss = this.getAudio("missSound",0.5);
        this.perfect = this.getAudio("perfectSound",0.5);
        this.background = this.getAudio("backgroundSound",0.5);
        this.item = this.getAudio("itemSound",0.5);
        this.death = this.getAudio("deathSound",0.7);
        this.win = this.getAudio("winSound",0.5);
        this.lost = this.getAudio("lostSound", 0.5);
        this.forest = this.getAudio("forestSound",0.3);
        this.move = this.getAudio("moveSound",0.5);
        this.found = this.getAudio("foundSound",0.5);
    }

    getAudio(elementID,vol){
        const sound = document.querySelector(`#${elementID}`);
        sound.volume = vol;
        return sound;
    }

    stopAudio(element){
        element.pause();
        element.currentTime=0;
    }

}