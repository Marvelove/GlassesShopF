import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaltonismTestComponent } from './daltonism-test.component';

describe('DaltonismTestComponent', () => {
  
  let component: DaltonismTestComponent;
  let fixture: ComponentFixture<DaltonismTestComponent>;	// fixture for debugging and testing a component

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaltonismTestComponent ]		// declare the test component
    })
    .compileComponents();
  }));

  beforeEach(() => {		// before each test runs
    fixture = TestBed.createComponent(DaltonismTestComponent);
    component = fixture.componentInstance;		// DaltonismTestComponent test instance
    fixture.detectChanges();					// trigger a change detection cycle for the component
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
