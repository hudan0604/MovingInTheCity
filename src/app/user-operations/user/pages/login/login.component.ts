import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  Validators,
  FormGroup
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/auth/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginCtrl: FormControl;
  passwordCtrl: FormControl;
  loginForm: FormGroup;
  userUnknown: boolean;

  constructor(
    fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.loginCtrl = fb.control('', Validators.required);
    this.passwordCtrl = fb.control('', Validators.required);
    this.loginForm = fb.group({
      login: this.loginCtrl,
      password: this.passwordCtrl
    });
  }

  ngOnInit() {}
  login() {
    let login = this.loginForm.value.login;
    let password = this.loginForm.value.password;
    this.userService.authenticate(login, password)
      ? this.router.navigate(['/'])
      : (this.userUnknown = true);
  }
}
