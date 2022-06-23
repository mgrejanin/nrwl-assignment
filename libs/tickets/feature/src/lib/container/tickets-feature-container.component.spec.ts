import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsFeatureContainerComponent } from './tickets-feature-container.component';

describe('TicketsFeatureContainerComponent', () => {
  let component: TicketsFeatureContainerComponent;
  let fixture: ComponentFixture<TicketsFeatureContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketsFeatureContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsFeatureContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
