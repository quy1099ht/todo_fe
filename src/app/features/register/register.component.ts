import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../shared/styles/form.component.scss'],
})
export class RegisterComponent implements OnInit {
  validateForm!: FormGroup;
  passwordVisible = false;

  regexNumber: RegExp = new RegExp('[0-9]');
  regexLowercase: RegExp = new RegExp('[a-z]');
  regexUppercase: RegExp = new RegExp('[A-Z]');
  regexSpecial: RegExp = new RegExp('[@#_]');
  regexOnly: RegExp = new RegExp('^[0-9a-zA-Z@#$%]*$');
  regexEmail: RegExp = new RegExp(
    /^[\/0-9=?A-Z^_a-z{|}~](\.?[\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/
  );

  regex: RegExp = new RegExp('^[0-9]+$');

  submitForm(): void {
    
    if (this.validateForm.valid) {
      return console.log('submit', this.validateForm.value);
    }
    // for (const key in this.validateForm.value) {
    //   console.log(key,this.validateForm.value[key]);
    // }
    Object.values(this.validateForm.controls).forEach((control) => {
      control.markAsDirty();      
    });
    
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required,this.emailValidator]],
      username: [null, [Validators.required]],
      password: [null, [Validators.required,this.passwordValidator]],
      confirmPassword: [null, [Validators.required,this.confirmationValidator]],
    });
    
  }

  emailValidator = (control: FormControl): { [s: string]: boolean } => {
    if(!control.value) return {require: true}

    if (!this.regexEmail.test(control.value)) return { invalid: true };

    return {};
  };

  passwordValidator = (control: FormControl): { [s: string]: boolean } => {
    if(!control.value) return {require: true}

    if (!this.regexLowercase.test(control.value)) return { pattern: true };

    if (!this.regexUppercase.test(control.value)) return { pattern: true };

    if (!this.regexNumber.test(control.value)) return { pattern: true };

    if (!this.regexSpecial.test(control.value)) return { pattern: true };

    if (!this.regexOnly.test(control.value)) return { pattern: true };

    return {};
  };
  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };
}
