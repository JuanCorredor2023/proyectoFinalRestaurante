import { Injectable } from '@angular/core';

//cliente de http
import { HttpClient } from '@angular/common/http';
//modelo de datos
import { Comments } from 'src/app/models/Coment';


@Injectable({
  providedIn: 'root'
})
export class RecepComentService {

  selectedComments: Comments
  comments: Comments[] = [];
  readonly URL_API = "http://localhost:5000"

  constructor(private http: HttpClient) {
    this.selectedComments = new Comments()
  }
  //obtener Comentarios vistantes/clientes
  getAllComments(){
    console.log(`${this.URL_API}/contact/getAllComments`)
    return this.http.get<any>(`${this.URL_API}/contact/getAllComments`)
  }

  called(comments:Comments){
    console.log(`${this.URL_API}/contact/called`)
    return this.http.post(`${this.URL_API}/contact/called`,comments)  

}
}
