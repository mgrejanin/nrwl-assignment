import { MatSnackbarMock } from '@acme/tickets-utils';
import { TicketsDataAccessModule } from '@acme/tickets/data-access';
import { TicketsUiModule } from '@acme/tickets/ui';
import { UsersDataAccessModule } from '@acme/users/data-access';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { TicketsFeatureDetailsComponent } from './tickets-feature-details.component';

describe('TicketsFeatureDetailsComponent', () => {
  let component: TicketsFeatureDetailsComponent;
  let fixture: ComponentFixture<TicketsFeatureDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        TicketsDataAccessModule,
        UsersDataAccessModule,
        TicketsUiModule,
      ],
      providers: [{ provide: MatSnackBar, useClass: MatSnackbarMock }],
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
