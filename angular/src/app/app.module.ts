import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsBaseModule } from '../common/as-base.module';
import { AsMaterialModule } from '../common/as-material.module';
import { LoginComponent } from 'src/user/components/login/login.component';



@NgModule({
  declarations: [
    LoginComponent,
    AppComponent

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
