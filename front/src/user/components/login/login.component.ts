import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, FormBuilder, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Params} from '@angular/router';
import {AsMaterialModule} from "common/as-material-module"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  userInfo = this.formBuilder.group({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private activRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    const selfUserName = this.activRoute.snapshot.queryParamMap.get('user_name');
    if(selfUserName) {
      this.userInfo.controls.userName.setValue(selfUserName);
    }
  }

  onSubmit() {
  }

}
