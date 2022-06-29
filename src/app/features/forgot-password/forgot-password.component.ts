import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['../../shared/styles/form.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  validateForm!: FormGroup;
  passwordVisible = false;

  submitForm(): void {
    console.log('submit', this.validateForm.value);
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      
    }
  }

  constructor(private fb: FormBuilder, private title : Title) {}

  ngOnInit(): void {
    this.title.setTitle("Forgot Password")
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }     

}
