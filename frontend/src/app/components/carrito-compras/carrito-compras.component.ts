import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

//service
import { UserService } from 'src/app/services/user/user.service';
//modelo
import { User } from 'src/app/models/user';

//formularios
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css'],
  providers: [UserService],
})
export class CarritoComprasComponent implements OnInit {
  carrito: any;
  local: any;
  userData: any;

  constructor(public userService: UserService, public router: Router) {
    this.carrito = [];
    this.local = '';
    this.userData = {};
  }

  ngOnInit(): void {
    this.local = localStorage.getItem('products');
    this.carrito = this.local !== null ? JSON.parse(this.local) : 'null';
    this.productsParser();
    console.log(this.carrito);
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((res) => {
      this.userService.users = res;
    });
  }

  getUsersByID(_id: string) {
    this.userService.getUsersByID(_id).subscribe((res) => {
      this.userService.users = res;
    });
  }

  productsParser() {
    let result = [];
    for (let i in this.carrito) {
      // result.push( JSON.parse(this.carrito[i]))
      this.carrito[i] = JSON.parse(this.carrito[i]);
    }
  }

  borrarToken() {
    localStorage.removeItem('products');
    this.router.navigate(['/menu']);
  }

  orderNow() {
    this.userData.token = localStorage.getItem('token');
    this.userData.carrito = localStorage.getItem('products');
    this.userData.carrito = JSON.parse(this.userData.carrito);
    for (let producto in this.userData.carrito) {
      this.userData.carrito[producto] = JSON.parse(
        this.userData.carrito[producto]
      );
    }
    this.userData.carrito = JSON.stringify(this.userData.carrito)
    console.log(this.userData.carrito);
    
    this.userService.orderNow2(this.userData).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
    
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Su orden esta siendo procesada, espere el pedido en su mesa',
      showConfirmButton: false,
      timer: 3000,
    });
    this.router.navigate(['/home']);
    localStorage.removeItem('products');
  }
}
