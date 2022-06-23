import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsFeatureListComponent } from './tickets-feature-list.component';

describe('FeatureListComponent', () => {
  let component: TicketsFeatureListComponent;
  let fixture: ComponentFixture<TicketsFeatureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketsFeatureListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsFeatureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
