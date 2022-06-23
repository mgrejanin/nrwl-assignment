import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsUiAddTicketDialogComponent } from './tickets-ui-add-ticket-dialog.component';

describe('TicketsUiAddTicketDialogComponent', () => {
  let component: TicketsUiAddTicketDialogComponent;
  let fixture: ComponentFixture<TicketsUiAddTicketDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketsUiAddTicketDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsUiAddTicketDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
