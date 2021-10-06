import { Component, OnInit } from '@angular/core';
import { RecepComentService } from 'src/app/service/recepComent/recep-coment.service';
import Swal from 'sweetalert2';
//modelo
import { Comments} from 'src/app/models/Coment';

// formulario
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  providers:[RecepComentService]
})
export class ContactUsComponent implements OnInit {

  constructor(public recepComentService:RecepComentService) {}

  ngOnInit(): void {
    this.clean()
  }



  called(comments: NgForm) {
  
  this.recepComentService.called(comments.value).subscribe((res) => {
    
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Enviado!',
      showConfirmButton: false,
      timer: 1500
    })

    this.recepComentService.selectedComments= new Comments();
    console.log(res);
  })
    }
  
  clean(form?:NgForm){
  if(form){
    form.reset()
    this.recepComentService.selectedComments= new Comments();
  }
    }
fillFields(comments:Comments){
  this.recepComentService.selectedComments=comments
}}
