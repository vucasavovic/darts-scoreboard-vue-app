import DartsGame from './DartsGame'
import {GameState} from '@/models/GameState'
import { CricketNumber } from './Number';
 

export default class CutThroatCricket extends DartsGame{
    
    cricketNumbers = [20,19,18,17,16,15,25]

    constructor(name,subname){
        super("Cricket","Cut throat",2,4)
        this.throws = 3;
    }
 
    miss(){
        if(this.state==GameState.Playing){
            this.throwsCount()
            this.audio.playByName('missed.wav');
        } 
    }
 
    strike(number,multiplier=1){
        if(this.state!=GameState.Playing) return;

        if(this.currentPlayer.id === number.parent){
            if(number.closed){
                this.assignPoints(number.val * multiplier,number.name);
               
            }else{

                let surplus = number.strike(multiplier,(closed)=>{
                    
                    if(closed){
                        this.audio.playByName('closed.wav');
                    }else{
                        this.audio.playByName('strike.wav');
                    }
                });

                if(surplus>0){
                    this.assignPoints(number.val * surplus);
                } 
                
            }  
            
            if(this.gameOver()) return;
            this.throwsCount()
  
        }
    }

   assignPoints(pts,numName){
    this.audio.playByName('points.wav');
     for(var player of this.players){
        if(player!=this.currentPlayer){
            let num = player.numbers.find(n=>n.name===numName);
            //console.log(`Num ${numName} closed: `, num.closed )
            if(num.closed==false){
                player.addScore(pts);
            }
        }
     }

      
   }

   gameOver(){
    loop1:
    for(var player of this.players){

         let unclosed = player.numbers.filter(n=>n.closed==false).length > 0;
        
         if(!unclosed){
            console.log('Game Over!!!','Player: ',player.name, ' has closed alll !!');
            this.winner = this.setWinner();
            console.log(this.winner);
            this.setState(GameState.Finished);
            return  true;
         }
     }
   }

   throwsCount(){
        this.throws--;
        if(this.throws==0){
            this.setState(GameState.Forbidden)
            setTimeout(()=>{
                this.throws=3;
                this.nextPlayer();
                this.setState(GameState.Playing)
            },1000)
        }
    }
    
    addPlayer(name){
        const player = super.addPlayer(name);
        player.numbers = this.createNumbersArray(this.cricketNumbers,player.id)
    }

    quit(){
        super.quit();
        this.throws = 3;
    }

    pause(){
        return  super.pause();
    }

    createNumbersArray(numbers,playerId=null){
        const arr = []
        for(var n of numbers){
            
            if(n==25) {
                arr.push(new CricketNumber("bull",n,playerId))
            }
            else{
                arr.push(new CricketNumber(n.toString(),n,playerId))
            }
           
        }
        return arr;
    }
    
}