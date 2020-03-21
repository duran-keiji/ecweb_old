import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserTopComponent } from './components/user-top/user-top.component';
import { LoginComponent } from './components/login/login.component';


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
