import { MatSnackbarMock } from '@acme/tickets-utils';
import { TicketsDataAccessModule } from '@acme/tickets/data-access';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { TicketsFeatureContainerComponent } from './tickets-feature-container.component';

describe('TicketsFeatureContainerComponent', () => {
  let component: TicketsFeatureContainerComponent;
  let fixture: ComponentFixture<TicketsFeatureContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TicketsDataAccessModule,
        RouterTestingModule,
      ],
      providers: [{ provide: MatSnackBar, useClass: MatSnackbarMock }],

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
