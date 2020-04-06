import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AsBaseModule } from '../common/as-base.module';
import { AsMaterialModule } from '../common/as-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from '../app/app.component';
import { LoginComponent } from './components/login/login.component';
import { UserTopComponent } from './components/user-top/user-top.component';
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { UserProductDetailComponent } from './components/user-product-detail/user-product-detail.component';
import { UserCartComponent } from './components/user-cart/user-cart.component';

import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserTopComponent,
    UserHeaderComponent,
    UserProductDetailComponent,
    UserCartComponent
  ],
  imports: [
    AsBaseModule,
    AppRoutingModule,
    AsMaterialModule,
    FontAwesomeModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
