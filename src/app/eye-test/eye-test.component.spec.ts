import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EyeTestComponent } from './eye-test.component';

describe('EyeTestComponent', () => {
  let component: EyeTestComponent;
  let fixture: ComponentFixture<EyeTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EyeTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EyeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
