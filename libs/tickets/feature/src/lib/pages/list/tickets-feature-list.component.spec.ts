import { MatSnackbarMock } from '@acme/tickets-utils';
import { TicketsDataAccessModule } from '@acme/tickets/data-access';
import { TicketsUiModule } from '@acme/tickets/ui';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { TicketsFeatureListComponent } from './tickets-feature-list.component';

describe('FeatureListComponent', () => {
  let component: TicketsFeatureListComponent;
  let fixture: ComponentFixture<TicketsFeatureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        TicketsUiModule,
        TicketsDataAccessModule,
        NoopAnimationsModule,
      ],
      providers: [{ provide: MatSnackBar, useClass: MatSnackbarMock }],
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
