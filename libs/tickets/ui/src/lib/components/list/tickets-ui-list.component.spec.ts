import { ticketsMock } from '@acme/tickets-utils';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { TicketsUiListComponent } from './tickets-ui-list.component';

describe('TicketsUiListComponent', () => {
  let component: TicketsUiListComponent;
  let fixture: ComponentFixture<TicketsUiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule,
        MatChipsModule,
        MatProgressSpinnerModule,
        NoopAnimationsModule,
        RouterTestingModule,
      ],
      declarations: [TicketsUiListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsUiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render received tickets in data table', () => {
    fixture.componentInstance.tickets = ticketsMock;
    fixture.detectChanges();

    const table = fixture.debugElement.query(By.css('.container__table'));
    expect(table.attributes['ng-reflect-data-source']?.toString()).toBe(
      component.dataSource.toString()
    );
  });
});
