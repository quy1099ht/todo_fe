import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-feature',
  templateUrl: './login-feature.component.html',
  styleUrls: ['../../shared/styles/form.component.scss'],
})
export class LoginFeatureComponent implements OnInit {
  validateForm!: FormGroup;
  passwordVisible = false;

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      console.log('submit', this.validateForm.value);
      this.validateForm.markAllAsTouched();
    }
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }
}
