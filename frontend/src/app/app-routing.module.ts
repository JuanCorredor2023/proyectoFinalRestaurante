import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CarritoComprasComponent } from './components/carrito-compras/carrito-compras.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { UsersadminComponent } from './components/usersadmin/usersadmin.component';
import { CommentComponent } from './components/comment/comment.component';
import { UseradminComponent } from './components/useradmin/useradmin.component';
import { AuthGuard } from './tools/auth.guard.service';


const routes: Routes = [
  //{path:'',component:HomeComponent},//
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'adminMenu',component: UsersadminComponent},
  {path:'compras',component: CarritoComprasComponent},
  {path:'menu',component:MenuComponent},
  {path:'comment',component:CommentComponent,canActivate: [AuthGuard]},
  {path:'useradmin',component:UseradminComponent,canActivate: [AuthGuard]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
