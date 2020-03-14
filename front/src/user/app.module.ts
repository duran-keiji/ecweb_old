import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './components/login/login.component';

import { AsBaseModule } from '../common/as-base.module';
import { AsMaterialModule } from '../common/as-material-module';




@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    AsBaseModule,
    AsMaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule { }