import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './authentication-bg.component.html',
  styleUrls: ['./authentication-bg.component.scss'],
})
export class AuthenticationBackGroundComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    //will check if logged in later

    this.router.url === '/authentication'
      ? this.router.navigate(['/authentication/login'])
      : console.log('Nothing happend');
  }
}
