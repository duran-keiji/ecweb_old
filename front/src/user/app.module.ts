import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './components/login/login.component';

import { AsBaseModule } from '../common/as-base.module';




@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    AsBaseModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule { }