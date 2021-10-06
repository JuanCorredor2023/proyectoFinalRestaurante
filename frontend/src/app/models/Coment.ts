export class Comments {
    //constructor
    constructor(_id = "", name = "", subject = "", body = "",email=""){
        //inicializa los valores del atributo
        this._id = _id;
        this.name = name;
        this.subject = subject;
        this.body = body;
        this.email = email;
      
    }

    //atributos -  definicion
    _id:string
    name:string
    subject:string
    body:string
    email:string
    
}