import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-feature',
  templateUrl: './login-feature.component.html',
  styleUrls: ['../../shared/styles/form.component.scss']
})
export class LoginFeatureComponent implements OnInit {
  validateForm!: FormGroup;
  passwordVisible = false;

  submitForm(): void {
    console.log('submit', this.validateForm.value);
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      
    }
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }       
}
