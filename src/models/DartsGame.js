"use strict"
import Player from '@/models/Player'
import {GameState} from '@/models/GameState'
import { capitalizeFirstLetter } from './Utils'
import Feedback from './Feedback'
import AudioPlayer from '../models/AudioPlayer'
 

export default class DartsGame {
    name='';
    subname='';
    playerRange = {min:2,max:12};
    winner = null;
    players=[]
    currentPlayerIndex = -1;
    currentPlayer = null;
    state = GameState.Default;
    audio = new AudioPlayer();

    constructor(name,subname,minPlayer,maxPlayer){
        this.name = name;
        this.playerRange = {min:minPlayer,max:maxPlayer}
    }

    play(){
        return new Promise((resolve,reject)=>{
            if(this.players.length >= this.playerRange.min && this.players.length <= this.playerRange.max){
                this.setState(GameState.Playing)
                this.nextPlayer()
                resolve()
            } else{
                reject(Feedback.warning('Invalid Player number!'))
            }
        })
         
    }
    nextPlayer(){
        this.currentPlayerIndex++
        if(this.currentPlayerIndex>=this.players.length) this.currentPlayerIndex = 0;
        this.currentPlayer = this.players[this.currentPlayerIndex]
    }
    
    resume(){
        if(this.state==GameState.Paused){
            return this.setState(GameState.Playing)
        }
    }
    pause(){
        if(this.state === GameState.Playing)  return this.setState(GameState.Paused)
        return false;
    }
    quit(){
        this.winner = null;
        this.currentPlayerIndex = -1;
        this.currentPlayer = null;
        this.setState(GameState.Default);
        for(var player of this.players){
            player.reset();
        }
    }

    setWinner(){
        return this.players.reduce((prev,current)=> (prev.score < current.score) ? prev : current)
    }

    addPlayer(name) {
      
        if(!name || name==='') return  Feedback.warning('Name must contain at least 1 character!');
        if(name.length>12) return  Feedback.warning('Max name character length is 12!');
        if(this.players.length<this.playerRange.max){
            const formattedName = capitalizeFirstLetter(name.toLowerCase());
            if(this.players.find(p=>p.name === formattedName)) return  Feedback.warning('Duplicate Player name!');
            let player = new Player(formattedName);
            this.players.push(player)
            return player;
        }else{
            return Feedback.warning('Max number of player!')
        }
       
    }

    removePlayer(id){
        this.players = this.players.filter(p=>p.id!=id);
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

        return true;
    }
}


 