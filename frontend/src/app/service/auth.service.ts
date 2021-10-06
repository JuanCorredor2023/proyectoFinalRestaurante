import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../models/Auth';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  selectedAuth: Auth
  auth:Auth[] = []
  readonly URL_API = "http://localhost:5000"

  constructor(private http: HttpClient, private router: Router) {
    this.selectedAuth = new Auth()
  }

  //Signup
  signup(userCreated:Auth){
    console.log(`${this.URL_API}/auth/signup`)
    return this.http.post(`${this.URL_API}/auth/signup`, userCreated)
  }

  signin(userLogged:Auth){
    console.log(`${this.URL_API}/auth/signin`)
    return this.http.post<any>(`${this.URL_API}/auth/signin`, userLogged)
  }
  getAllUser(){
    console.log(`${this.URL_API}/auth/getAllUser`)
     return this.http.get<any>(`${this.URL_API}/auth/getAllUser`)
    
   }
   updateAuth(auth:Auth){
    console.log(`${this.URL_API}/auth/updateAuth`)
    return this.http.put(`${this.URL_API}/auth/updateAuth/${auth._id}`,auth)
  }

  loggedIn(){
    //return !!localStorage.getItem('token')
    if(localStorage.getItem('token')){
      return localStorage.getItem('token')
    } else {
      return false
    }
  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/home'])
  }

  getToken(){
    return localStorage.getItem('token')
  }

  deleteUser(_id:String){
    console.log(`${this.URL_API}/auth/deleteUser/${_id}`)
    return this.http.delete(`${this.URL_API}/auth/deleteUser/${_id}`)
  }
}
