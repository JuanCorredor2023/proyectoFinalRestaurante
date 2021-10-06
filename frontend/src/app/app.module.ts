import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//modulo de peticiones - 1
import { HttpClientModule } from '@angular/common/http'
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
    CarritoComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AlifeFileToBase64Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
