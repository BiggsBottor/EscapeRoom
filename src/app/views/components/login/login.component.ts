import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // tslint:disable: no-inferrable-types

  // DOM
  signUpMode: boolean = false;

  // FORMULARY
  loginForm: FormGroup;
  registerForm: FormGroup;
  validEmail = '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\\.[A-Za-z]{2,4}'; // a@a.aa
  get lf() { return this.loginForm.controls; }
  get rf() { return this.registerForm.controls; }
  isLoginSend: boolean = false;
  isRegisterSend: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // login formbuilder
    this.loginForm = this.formBuilder.group({
      user: ['', [Validators.required, Validators.minLength(3)]],
      pswd: ['', [Validators.required, Validators.minLength(3)]]
    });
    // register formbuilder
    this.registerForm = this.formBuilder.group({
      user: ['', [Validators.required, Validators.minLength(3)]],
      pswd: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(3), Validators.pattern(this.validEmail)]]
    });
  }

  toggleSignUpMode() {
    this.signUpMode = !this.signUpMode;
  }

  onSubmit( formType: string) {
    switch (formType) {
      case 'l':
        console.log(`login`, this.lf);
        this.isLoginSend = true;
        if (this.loginForm.invalid) { return; }

        break;
      case 'r':
        console.log(`registro`, this.rf);
        this.isRegisterSend = true;
        if (this.registerForm.invalid) { return; }
        break;
    }
  }

}
