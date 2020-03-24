import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AsBaseModule } from '../common/as-base.module';
import { AsMaterialModule } from '../common/as-material.module';

import { AppComponent } from '../app/app.component';
import { LoginComponent } from './components/login/login.component';
import { UserTopComponent } from './components/user-top/user-top.component';
import { UserHeaderComponent } from './components/user-header/user-header.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserTopComponent,
    UserHeaderComponent
  ],
  imports: [
    AsBaseModule,
    AppRoutingModule,
    AsMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
