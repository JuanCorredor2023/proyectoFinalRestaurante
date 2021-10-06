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
    console.log(`${this.URL_API}/users/getAllUsers`)
    return this.http.get<User[]>(`${this.URL_API}/users/getAllUsers`)
  }
    //obtener usuarios
    getUsersByID(_id: string){
      console.log(`${this.URL_API}/users/getUserById/${_id}`)
      return this.http.get<User[]>(`${this.URL_API}/users/getUserById/${_id}`)
    }

  //crear usuarios
  createUser(user:User){
    console.log(`${this.URL_API}/users/createUser`)
    return this.http.post(`${this.URL_API}/users/createUser`, user)
  }

  updateUser(user: User){
    console.log(`${this.URL_API}/users/updateUser/${user._id}`)
    return this.http.put(`${this.URL_API}/users/updateUser/${user._id}`, user)
  }

  deleteUser(_id: string){
    console.log(`${this.URL_API}/users/deleteUser/${_id}`)
    return this.http.delete(`${this.URL_API}/users/deleteUser/${_id}`)
  }

}
