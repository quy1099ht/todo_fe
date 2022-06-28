import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-side',
  templateUrl: './form-side.component.html',
  styleUrls: ['./form-side.component.scss'],
})
export class FormSideComponent implements OnInit {
  url : string = "";
  constructor(private router : Router) {}

  ngOnInit(): void {
    this.url = this.router.url;
  }
}
