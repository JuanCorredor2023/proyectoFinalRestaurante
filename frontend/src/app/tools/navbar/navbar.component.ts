import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/models/Auth';
import { AuthService } from 'src/app/service/auth.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit(): void {
  }
  signin(userLogged: NgForm) {
    this.authService.signin(userLogged.value).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/home'])
      },
      (err) => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: err.error.message,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    );
  }
}



