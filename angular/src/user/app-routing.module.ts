import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserTopComponent } from './components/user-top/user-top.component';


const routes: Routes = [
     { path: '', component: LoginComponent },
       { path: 'login', component: LoginComponent },
       { path: 'top', component: UserTopComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
