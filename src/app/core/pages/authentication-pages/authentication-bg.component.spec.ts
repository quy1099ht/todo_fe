import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationBackGroundComponent } from './authentication-bg.component';

describe('LoginComponent', () => {
  let component: AuthenticationBackGroundComponent;
  let fixture: ComponentFixture<AuthenticationBackGroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticationBackGroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationBackGroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
