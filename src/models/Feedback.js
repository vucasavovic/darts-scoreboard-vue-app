export default class Feedback{
    constructor(message,theme='default'){
        this.timestamp = Date.now();
        this.themes = ['default','warning','success']
        this.message = message;
        this.theme= this.themes.includes(theme) ? theme : 'default';
 
        return this;

    }

    static warning(message){
            return new Feedback(message,"warning")
    }
}