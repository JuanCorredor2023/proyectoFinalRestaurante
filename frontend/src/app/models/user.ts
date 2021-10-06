export class User {
    //constructor
    constructor(_id = "", name = "", type = "", description = "", file = ""){
        //inicializa los valores del atributo
        this._id = _id;
        this.name = name;
        this.description = description;
        this.file = file;
        this.type = type;
        
    }

    //atributos -  definicion
    _id:string
    name:string
    description:string
    type:string
    file:string
}