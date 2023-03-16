
export default class AudioPlayer{
        
        audio = new Audio();
        muted = false;
        volume=1;
        
        constructor(){
           this.setVolume(0.5)
        }

        delayPlay(sound,delay){
            setTimeout(()=>{
                this.playByName(sound)
            },delay)
        }

        playByName(sound){
            if(!this.muted){
                this.audio = new Audio(`/sounds/`+sound);
                this.audio.volume = this.volume;
                this.audio.play();
            }
        }

        setVolume(vol){
            this.volume = vol;
        }
}