export class Answer {
    //constructor
    constructor(_id = "", name = "", subject = "", body = ""){
        //inicializa los valores del atributo
        this._id = _id;
        this.name = name;
        this.subject = subject;
        this.body = body;
      
    }

    //atributos -  definicion
    _id:string
    name:string
    subject:string
    body:string
    
}