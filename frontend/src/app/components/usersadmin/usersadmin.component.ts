import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

//service
import { UserService } from 'src/app/services/user/user.service';
//modelo
import { User } from 'src/app/models/user';

//formularios
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-usersadmin',
  templateUrl: './usersadmin.component.html',
  styleUrls: ['./usersadmin.component.css'],
  providers: [UserService],
})
export class UsersadminComponent implements OnInit {
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((res) => {
      this.userService.users = res;
    });
  }

  save(user: NgForm) {
    if (user.value._id) {
      //actualizar el formulario
      this.userService.updateUser(user.value).subscribe((res) => {
        alert('usuario actualizado');
        this.getAllUsers();
        this.clean(user);
      });
    } else {
      // crear un nuevo usuario
      user.value.file = this.userService.selectedUser.file;
      this.userService.createUser(user.value).subscribe(
        (res) => {
          console.log(res);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'El producto fue creado',
            showConfirmButton: false,
            timer: 1000})
          this.getAllUsers();
          this.clean(user);
        },
        (err) => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'El producto ya existe',
            showConfirmButton: false,
            timer: 1000
          })
        }
      );
    }

    /**/
  }

  clean(form?: NgForm) {
    if (form) {
      form.reset();
      this.userService.selectedUser = new User();
    }
  }

  fillFields(user: User) {
    this.userService.selectedUser = user;
  }

  deleteUser(_id: string) {
    Swal.fire({
      title: '¿Esta seguro que desea eliminar este producto?',
      text: "Ojo, si ya borro paila!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borralo!'
    }).then((result) => {
      if (result.isConfirmed) {
        
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'producto eliminado con exito',
          showConfirmButton: false,
          timer: 1000
        })

        this.userService.deleteUser(_id).subscribe(res => {
          this.getAllUsers()
        })
      } else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Accion Cancelada',
          showConfirmButton: false,
          timer: 1000
        })
      }
    })
  }

  //carga de la imagen
  loadImage(event: any) {
    console.log(event);

    let limit = 2 * 1024 * 1024; //2mb
    console.log(limit, event[0].size)


    if (event[0].size <= limit) {
      this.userService.selectedUser.file = event[0].base64;
      alert('Imagen cargada!');
    } else {
      alert('Imagen demasiado grande');
    }
    console.log(this.userService.selectedUser);
  }
}
