export class Auth {
    //constructor
    constructor(_id = "", email = "", password = "" ){
        //inicializa los valores del atributo
        this._id = _id;
        this.email = email;
        this.password = password;
        
        
    }

    //atributos -  definicion
    _id:string
    email:string
    password:string
   
}