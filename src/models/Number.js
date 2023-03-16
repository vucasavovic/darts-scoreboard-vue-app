class Number{
    constructor(name,val){
        this.name = name;
        this.val=val;
    }
}


export class CricketNumber extends Number{
    constructor(name,val,parent){
        super(name,val);
        this.closed = false;
        this.strikes=0;
        this.parent = parent;
    }


    strike(multiplier=1,callback){
        if(!this.closed){
            const sum = this.strikes + multiplier - 3;

            if(sum>=0){
                this.closed = true;
                this.strikes=3;
                callback(true);
                return sum;
            }else {
                callback(false);
                this.strikes += multiplier;
                return 0;
            }
 
        }
    }

    reset(){
        this.closed = false;
        this.strikes = 0; 
    }
}