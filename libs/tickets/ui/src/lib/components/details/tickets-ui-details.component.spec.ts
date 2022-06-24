import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsUiDetailsComponent } from './tickets-ui-details.component';

describe('TicketsUiDetailsComponent', () => {
  let component: TicketsUiDetailsComponent;
  let fixture: ComponentFixture<TicketsUiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketsUiDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsUiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
