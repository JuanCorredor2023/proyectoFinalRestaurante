import { Component, OnInit,OnDestroy} from '@angular/core';
import { RecepComentService } from 'src/app/service/recepComent/recep-coment.service';


//formularios
import { Comments } from 'src/app/models/Coment';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  providers: [RecepComentService],
})
export class CommentComponent implements OnDestroy, OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(
    public recepComentService: RecepComentService,
    
  ) {}

  ngOnInit(): void {
    
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
  }
  this.getAllComments();
 

  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }




  getAllComments() {
    this.recepComentService.getAllComments().subscribe((res) => {
      this.recepComentService.comments = res.comments;
      this.dtTrigger.next();
    });
  }
 


  setUser(comments:Comments){
    this.recepComentService.selectedComments = comments
  }
}
