"use strict"
import Player from '@/models/Player'
import {GameState} from '@/models/GameState'
import { capitalizeFirstLetter } from './Utils'
import Feedback from './Feedback'
import AudioPlayer from '../models/AudioPlayer'
 

export default class DartsGame {
    name='';
    subname='';
    description='';
    playerRange = {min:2,max:12};
    winner = null;
    players=[]
    currentPlayerIndex = -1;
    currentPlayer = null;
    state = GameState.Default;
    audio = new AudioPlayer();

    constructor(name,subname,description,minPlayer,maxPlayer){
        this.name = name;
        this.subname = subname;
        this.description= description;
        this.playerRange = {min:minPlayer,max:maxPlayer}
    }

    play(){
        return new Promise((resolve,reject)=>{
            if(this.players.length >= this.playerRange.min && this.players.length <= this.playerRange.max){
                this.setState(GameState.Playing)
                this.nextPlayer()
                resolve()
            } else{
                reject(Feedback.warning(`${this.name} ${this.subname} requires ${this.playerRange.min}-${this.playerRange.max} players.`))
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
        let feedback = null
        if(!name || name==='')  feedback = Feedback.warning('A name must have 1-12 characters!');
        else if(name.length > 12)  feedback =  Feedback.warning('A name must have 1-12 characters!');
        else if(this.players.length<this.playerRange.max){
            const formattedName = capitalizeFirstLetter(name.toLowerCase());
            if(this.players.find(p=>p.name === formattedName)) return  Feedback.warning('Players name must be unique.');
            let player = new Player(formattedName);
            this.players.push(player)
            return player;
        }else{
            feedback = Feedback.warning('Max number of players reached!')
        }
       return feedback;
    }

    removePlayer(id){
        this.players = this.players.filter(p=>p.id!=id);
    }

    setState(newState){
        this.state = newState;
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


 