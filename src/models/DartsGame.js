import Player from '@/models/Player'
import {GameState} from '@/models/GameState'
import { capitalizeFirstLetter } from './Utils'

export default class DartsGame {
    name=''
    subname=''
    playerRange = {min:2,max:12}
    players=[]

    state = GameState.Default;

    constructor(name,subname,minPlayer,maxPlayer){
        this.name = name;
        this.playerRange = {min:minPlayer,max:maxPlayer}
    }

    play(){
        this.setState(GameState.Playing)
    }
    pause(){
        this.setState(GameState.Paused)
    }

    addPlayer(name) {
        if(!name || name==='') return false;

        const formattedName = capitalizeFirstLetter(name.toLowerCase());
 
        if(this.players.find(p=>p.name === formattedName)) return false;
        let player = new Player(formattedName);
        player.id = this.players.length+1;
        this.players.push(player)
        return true;
    }

    setState(newState){
        this.state = newState;
        console.log(this.state);

        switch(newState){
            case GameState.Default:
                break;
            case GameState.Playing:
                break;
            case GameState.Paused:
                break;
        }
    }
}


 