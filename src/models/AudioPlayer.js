
export default class AudioPlayer{
        
 
        constructor(){

        }

        playByName(sound){
            var audio = new Audio(`/sounds/${sound}`);
            audio.play();
        }
}