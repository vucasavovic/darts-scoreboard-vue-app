import { v4 as uuidv4 } from 'uuid';


export default class Player{
    id;
    name='';
    numbers=[];
    score=0;
    constructor(name){
        this.name=name;
        this.id = uuidv4();
    }

    addScore(amount){
        this.score += amount;
    }
    

    reset(){
        this.score=0
        this.resetNumbers();
    }

    resetNumbers(){
        for(var num of this.numbers){
            num.reset();
        }
    }

}