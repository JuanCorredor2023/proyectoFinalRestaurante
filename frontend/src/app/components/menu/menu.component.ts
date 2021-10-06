import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
// import Swal from '@sweetalert2/themes/dark/'
//service
import { UserService } from 'src/app/services/user/user.service';
//modelo
import { User } from 'src/app/models/user';

//formularios
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers:[UserService],
})
export class MenuComponent implements OnInit {
  carrito: any[]
  constructor(public userService: UserService, public router: Router) {
    this.carrito = []
   }

  ngOnInit(): void {
    this.getAllUsers();
  }


getAllUsers() {
  this.userService.getAllUsers().subscribe((res) => {
    this.userService.users = res;
  })
}

addProduct(product:any){
  this.carrito.push(JSON.stringify(product))
  console.log(this.carrito)
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'El producto se añadio al Carrito de Compras',
    showConfirmButton: false,
    timer: 2000})
}
buyProducts(){
  if(localStorage.getItem('products')){
    let localArray = []
    let local = localStorage.getItem('products')
    localArray = local !== null ?JSON.parse(local):'null'
    // for(let i in localArray){
    //   localArray[i]= JSON.parse(localArray[i])
    // }
   let tmp = this.carrito.concat(localArray)
   localStorage.setItem('products',JSON.stringify(tmp))
   this.router.navigate(['/compras'])
  }else{
    localStorage.setItem('products',JSON.stringify(this.carrito))
    // Swal.fire({
    //   position: 'center',
    //   icon: 'error',
    //   title: 'No hay productos añadidos',
    //   showConfirmButton: false,
    //   timer: 1000})
      
    this.router.navigate(['/compras'])
  }
}
}
