import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

export class LoginSet {
  constructor(public username: string, public password: string) {}
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logionSet = new LoginSet('', '');
  hide = true;
  constructor() {}

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.logionSet)
  }

}
