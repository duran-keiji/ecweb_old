import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AsBaseModule } from '../common/as-base.module';
import { AsMaterialModule } from '../common/as-material.module';


import { AppComponent } from './app.component';
import { LoginComponent } from 'src/user/components/login/login.component';
import { UserTopComponent } from 'src/user/components/user-top/user-top.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserTopComponent

  ],
  imports: [
    AppRoutingModule,
    AsBaseModule,
    AsMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
