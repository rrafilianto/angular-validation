import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CicilanComponent } from './cicilan.component';

describe('CicilanComponent', () => {
  let component: CicilanComponent;
  let fixture: ComponentFixture<CicilanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CicilanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CicilanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
