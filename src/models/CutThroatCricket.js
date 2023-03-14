import DartsGame from './DartsGame'
 

export default class CutThroatCricket extends DartsGame{

    constructor(name,subname){
        super("Cricket","Cut throat",2,4)
    }

    strike(){

    }

    play(){
        super.play();
        return true;
    }
    pause(){
        super.pause();
    }
}