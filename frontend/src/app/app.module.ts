import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//modulo de peticiones - 1
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
//imagenes
import { AlifeFileToBase64Module } from 'alife-file-to-base64';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NavbarComponent } from './tools/navbar/navbar.component';
import { FooterComponent } from './tools/footer/footer.component';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { UsersadminComponent } from './components/usersadmin/usersadmin.component';
import { CarritoComprasComponent } from './components/carrito-compras/carrito-compras.component';

import { AuthGuard } from './tools/auth.guard.service';
import { TokenInterceptorService } from './service/tokenInterceptor/token-interceptor.service.service';
import { CommentComponent } from './components/comment/comment.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule } from '@angular/material/dialog';
import { DataTablesModule } from "angular-datatables";
import { UseradminComponent } from './components/useradmin/useradmin.component';




import { NavbarHomeComponent } from './tools/navbar-home/navbar-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    ContactUsComponent,
    NavbarComponent,
    FooterComponent,
    AdminMenuComponent,
    UsersadminComponent,
    CarritoComprasComponent,
    CommentComponent,
    UseradminComponent,
   
    NavbarHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AlifeFileToBase64Module,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    DataTablesModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
