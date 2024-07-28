import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilesCalculatorComponent } from './miles-calculator.component';

describe('MilesCalculatorComponent', () => {
  let component: MilesCalculatorComponent;
  let fixture: ComponentFixture<MilesCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilesCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MilesCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
