import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NikComponent } from './nik.component';

describe('NikComponent', () => {
  let component: NikComponent;
  let fixture: ComponentFixture<NikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
