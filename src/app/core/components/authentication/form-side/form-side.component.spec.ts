import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSideComponent } from './form-side.component';

describe('FormSideComponent', () => {
  let component: FormSideComponent;
  let fixture: ComponentFixture<FormSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
