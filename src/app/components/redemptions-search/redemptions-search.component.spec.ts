import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedemptionsSearchComponent } from './redemptions-search.component';

describe('RedemptionsSearchComponent', () => {
  let component: RedemptionsSearchComponent;
  let fixture: ComponentFixture<RedemptionsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedemptionsSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedemptionsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
