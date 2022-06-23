import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsFeatureDetailsComponent } from './tickets-feature-details.component';

describe('TicketsFeatureDetailsComponent', () => {
  let component: TicketsFeatureDetailsComponent;
  let fixture: ComponentFixture<TicketsFeatureDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketsFeatureDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsFeatureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
