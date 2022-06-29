import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationPagesComponent } from './authentication-pages.component';

describe('LoginComponent', () => {
  let component: AuthenticationPagesComponent;
  let fixture: ComponentFixture<AuthenticationPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticationPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
