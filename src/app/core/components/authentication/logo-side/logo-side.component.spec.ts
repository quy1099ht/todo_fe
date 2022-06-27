import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoSideComponent } from './logo-side.component';

describe('LogoSideComponent', () => {
  let component: LogoSideComponent;
  let fixture: ComponentFixture<LogoSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
