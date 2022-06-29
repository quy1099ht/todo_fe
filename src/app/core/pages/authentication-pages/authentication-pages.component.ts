import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './authentication-pages.component.html',
  styleUrls: ['./authentication-pages.component.scss'],
})
export class AuthenticationPagesComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    //will check if logged in later
    

    //redirect to login
    this.router.url === '/authentication'
      ? this.router.navigate(['/authentication/login'])
      : console.log('Nothing happend');
  }
}
