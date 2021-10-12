import { Injectable } from '@angular/core';

//cliente de http
import { HttpClient } from '@angular/common/http';
//modelo de datos
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User
  users: User[] = [];
  readonly URL_API = "http://localhost:5000"

  constructor(private http: HttpClient) {
    this.selectedUser = new User()
  }

  //obtener usuarios
  getAllUsers(){
    console.log(`${this.URL_API}/users/getAllMenus`)
    return this.http.get<User[]>(`${this.URL_API}/users/getAllMenus`)
  }
    //obtener usuarios
    getUsersByID(_id: string){
      console.log(`${this.URL_API}/users/getMenuById/${_id}`)
      return this.http.get<User[]>(`${this.URL_API}/users/getMenuById/${_id}`)
    }

  //crear usuarios
  createUser(user:User){
    console.log(`${this.URL_API}/users/createMenu`)
    return this.http.post(`${this.URL_API}/users/createMenu`, user)
  }

  updateUser(user: User){
    console.log(`${this.URL_API}/users/updateMenu/${user._id}`)
    return this.http.put(`${this.URL_API}/users/updateMenu/${user._id}`, user)
  }

  deleteUser(_id: string){
    console.log(`${this.URL_API}/users/deleteMenu/${_id}`)
    return this.http.delete(`${this.URL_API}/users/deleteMenu/${_id}`)
  }

  orderNow2(userToken: string){
    return this.http.post(`${this.URL_API}/users/sendEmail`, userToken)
  }

}
