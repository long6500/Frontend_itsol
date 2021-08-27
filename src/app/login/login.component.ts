import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {OauthLoginService} from '../services/oauth-login.service';
import {isObject} from 'util';
import {NotificationService} from '../services/notification.service';
import {Constants} from '../constants';
import {AuthenticationService} from '../services/auth/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string;
  invalidLogin = false;
  loginForm: FormGroup;
  rememberMe = false;
  display = 'none';
  verifyModalData = {};

  constructor(private router: Router,
              private fb: FormBuilder,
              private oauthService: OauthLoginService,
              private notifyService: NotificationService,
              private loginservice: AuthenticationService) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', Validators.required]
    });
    if (localStorage.getItem('userName') && localStorage.getItem('password')) {
      this.loginForm.patchValue({
        userName: localStorage.getItem('userName'),
        password: localStorage.getItem('password')
      });
    }
    this.setVerifyModalData();
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

  getLogo() {
    return Constants.LOGO_URL;
  }

  getAddon() {
    return Constants.ADDON_URL;
  }

  onSubmit() {
    const user = this.loginForm.value;
    this.oauthService.login(user).subscribe(
      data => {
        // console.log(response);
        // this.notifyService.showToast('logged in successfully!', 'success');
        // this.invalidLogin = false;
        // this.saveCredentials();
        this.router.navigate(['list']);
      },
      error => {
        this.invalidLogin = true;
        if (error.error.message) {
          this.errorMessage = error.error.message;
        } else {
          this.errorMessage = 'Unknown error occured, try after some time..';
        }
      }
    );

    // if (this.loginservice.authenticate(this.loginForm.value.userName, this.loginForm.value.password)
    // ) {
    //   this.router.navigate(['list']);
    //   this.invalidLogin = false;
    // } else {
    //   this.invalidLogin = true;
    // }
  }



  toggleValue(event) {
    if (event.target.checked) {
      this.rememberMe = true;
    }
  }

  saveCredentials() {
    if (this.rememberMe) {
      localStorage.setItem('userName', this.loginForm.value.userName);
      localStorage.setItem('password', this.loginForm.value.password);
    }
  }

  openVerifyEmailModal() {
    this.setVerifyModalData('Verify email', 'Send link', 'verify');
    this.display = 'block';
  }

  forgotPass() {
    this.setVerifyModalData('Reset Password', 'Send OTP', 'reset');
    this.display = 'block';
  }

  eventDisplay(event) {
    this.display = 'none';
  }

  setVerifyModalData(title: string = '', btn: string = '', type: string = '') {
    this.verifyModalData = {
      title,
      btn,
      type
    };
  }
}
