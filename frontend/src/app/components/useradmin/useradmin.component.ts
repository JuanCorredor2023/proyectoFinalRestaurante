import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
//service
import { AuthService } from 'src/app/service/auth.service';
//modelo
import { Auth } from 'src/app/models/Auth';

// formulario
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-useradmin',
  templateUrl: './useradmin.component.html',
  providers: [AuthService],
})
export class UseradminComponent implements OnDestroy, OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(public authService: AuthService) {}
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    };
    this.getAllUser();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  getAllUser() {
    this.authService.getAllUser().subscribe((res) => {
      this.authService.auth = res;
      this.dtTrigger.next();
    });
  }

  createAuth(auth: NgForm) {
    if (auth.value._id) {
      this.authService.updateAuth(auth.value).subscribe((res) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Usuario actualizado!',
          showConfirmButton: false,
          timer: 1500
        })
        this.dtTrigger.unsubscribe();
        this.getAllUser();
        this.clean(auth);
        
      });
    } else {
      this.authService.signup(auth.value).subscribe((res) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Usuario Creado!',
          showConfirmButton: false,
          timer: 1500
        })
       
        this.getAllUser();
        this.clean(auth);
        this.dtTrigger.unsubscribe();
  
       
        console.log(res);
      });
      
    }
  }
  clean(form?: NgForm) {
    if (form) {
      form.reset();
      this.authService.selectedAuth = new Auth();
    }
  }
  fillFields(auth: Auth) {
    this.authService.selectedAuth = auth;
  }
  deleteUser(_id: string) {
    let auth = confirm('Está seguro de eliminar este elemento');
    if (auth) {
      this.authService.deleteUser(_id).subscribe((res) => {
        this.getAllUser();
        this.dtOptions = {
          pagingType: 'full_numbers',
          pageLength: 5,
        };
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Usuario eliminado!',
          showConfirmButton: false,
          timer: 1500
        })
      });
    }
  }
}
