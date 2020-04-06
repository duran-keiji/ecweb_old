import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserTopComponent } from './components/user-top/user-top.component';
import { UserProductDetailComponent} from './components/user-product-detail/user-product-detail.component';
import { UserCartComponent } from './components/user-cart/user-cart.component';

const routes: Routes = [
     { path: '', component: LoginComponent },
       { path: 'login', component: LoginComponent },
       { path: 'top', component: UserTopComponent },
       { path: 'productDetail', component: UserProductDetailComponent },
       { path: 'cart', component: UserCartComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
