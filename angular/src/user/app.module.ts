import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AsMaterialModule } from '../common/as-material.module';

import { LoginComponent } from './components/login/login.component';
import { UserTopComponent } from './components/user-top/user-top.component';


@NgModule({
  declarations: [
    LoginComponent,
    UserTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AsMaterialModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule { }
