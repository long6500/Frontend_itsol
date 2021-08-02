import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {OauthLoginService} from '../services/oauth-login.service';
import {CustomValidationService} from '../services/validation/custom-validation.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  display = 'none';
  modalObject = {};
  errorMessage: string;
  signupForm: FormGroup;
  selectedRole = '';
  selectedGender = '';
  // convert from string to int for gender
  y: number;
  newDate: Date;

  constructor(
    private fb: FormBuilder,
    private oauthService: OauthLoginService,
    private customValidator: CustomValidationService) {
  }

  ngOnInit() {
    this.newDate = new Date();

    // sign up form builder
    this.signupForm = this.fb.group({
        firstname: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(1)]],
        middlename: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(1)]],
        lastname: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(1)]],
        userName: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(4)]],
        password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
        confirmPassword: ['', [Validators.required]],
        // role: ['', [Validators.required]],
        dob: ['', [Validators.required]],
        // gender: ['', [Validators.required]],
        phone: ['', Validators.compose([Validators.required, this.customValidator.patternPhone()])],
        email: ['', [Validators.required, Validators.email]],
        type: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(2)]],
        personalID: ['', Validators.compose([Validators.required, this.customValidator.patternPersonalID()])],
        address: ['', [Validators.required, Validators.maxLength(100), Validators.minLength(2)]],
        education: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(2)]],
        school: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(2)]],
        faculty: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(2)]],
        course: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(2)]]

      }, {
        validator: this.customValidator.MatchPassword('password', 'confirmPassword')
      }
    );
    this.modalObject = {
      title: '',
      body: ''
    };
  }


  get signupFormControl() {
    return this.signupForm.controls;
  }

  onSubmit() {
    const user = {
      firstname: this.signupForm.value.firstname,
      middlename: this.signupForm.value.middlename,
      lastname: this.signupForm.value.lastname,
      userName: this.signupForm.value.userName,
      password: this.signupForm.value.password,
      role: this.selectedRole,
      dob: this.signupForm.value.dob,
      gender: this.y,
      phone: this.signupForm.value.phone,
      email: this.signupForm.value.email,
      type: this.signupForm.value.type,
      personalID: this.signupForm.value.personalID,
      address: this.signupForm.value.address,
      education: this.signupForm.value.education,
      school: this.signupForm.value.school,
      faculty: this.signupForm.value.faculty,
      course: this.signupForm.value.course,
      // timejoin - get current date
      timejoin: this.newDate.toLocaleDateString('en-CA'),
      status: 1
    };
    this.oauthService.userRegister(user).subscribe(
      response => {
        this.errorMessage = null;
        this.showModal();
        console.log(response);
      },
      error => {
        // this.signupForm.reset();
        if (error.error.message) {
          this.errorMessage = error.error.message;
        } else {
          this.errorMessage = 'Unknown error occured, try after some time..';
        }
      }
    );
  }

  selectGender(event: any) {
    // update the ui
    this.selectedGender = event.target.value;
    if (this.selectedGender === '1') {
      this.y = 1;
    } else {
      this.y = 0;
    }
  }

  selectRole(event: any) {
    // update the ui
    this.selectedRole = event.target.value;
  }


  displayChange(value) {
    this.display = 'none';
  }

  showModal() {
    this.display = 'block';
    this.modalObject = {
      title: 'SignUp Successful'
    };
  }

}
