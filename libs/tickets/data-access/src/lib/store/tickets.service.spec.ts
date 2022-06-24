import { Ticket } from '@acme/shared-models';
import { MatSnackbarMock } from '@acme/tickets-utils';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TicketsQuery } from './tickets.query';
import { TicketsService } from './tickets.service';
import { TicketsStore } from './tickets.store';

@Component({
  template: ``,
})
class DummyComponent {}

const mockedTicketId = 1;

describe('TicketsService', () => {
  let ticketsService: TicketsService;
  let ticketsQuery: TicketsQuery;
  let ticketsStore: TicketsStore;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DummyComponent],
      providers: [
        TicketsService,
        TicketsQuery,
        TicketsStore,
        { provide: MatSnackBar, useClass: MatSnackbarMock },
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'tickets', component: DummyComponent },
        ]),
      ],
    });

    ticketsService = TestBed.inject(TicketsService);
    ticketsStore = TestBed.inject(TicketsStore);
    ticketsQuery = TestBed.inject(TicketsQuery);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(ticketsService).toBeDefined();
  });

  describe('and getTickets method is called', () => {
    it('should update store with the request result', () => {
      const expectedUrl = `/api/tickets`;
      const storeSpy = jest.spyOn(ticketsStore, 'set');

      ticketsService.getTickets();

      const request = httpMock.expectOne(expectedUrl);
      request.flush([]);

      expect(request.request.method).toBe('GET');
      expect(storeSpy).toHaveBeenCalledWith([]);
    });
  });

  describe('and setActiveTicket method is called', () => {
    describe('and the store is loading', () => {
      it('should not call setActive', () => {
        ticketsStore.setLoading(true);
        const storeSpy = jest.spyOn(ticketsStore, 'setActive');

        ticketsService.setActiveTicket(mockedTicketId);

        expect(storeSpy).not.toHaveBeenCalled();
      });
    });
    describe('and the store is not loading', () => {
      describe('and the ticket ID is not found', () => {
        it('should notify user and redirect to /tickets', () => {
          const snackbar = TestBed.inject<MatSnackBar>(MatSnackBar);
          const router = TestBed.inject<Router>(Router);
          ticketsStore.setLoading(false);
          const querySpy = jest.spyOn(ticketsQuery, 'hasEntity');
          const storeSpy = jest.spyOn(ticketsStore, 'setActive');
          const snackbarSpy = jest.spyOn(snackbar, 'open');
          const routerSpy = jest.spyOn(router, 'navigate');

          ticketsService.setActiveTicket(mockedTicketId);

          expect(snackbarSpy).toHaveBeenCalledWith(
            'Ticket ID not found',
            'Close',
            {
              duration: 5000,
              horizontalPosition: 'right',
              verticalPosition: 'top',
            }
          );
          expect(routerSpy).toHaveBeenCalledWith(['tickets']);
          expect(querySpy).toHaveBeenCalledWith(mockedTicketId);
          expect(storeSpy).not.toHaveBeenCalled();
        });
      });
      describe('and the ticket ID is founded', () => {
        it('should call setActive with ticket ID as param', () => {
          ticketsStore.setLoading(false);
          ticketsStore.set([{ id: mockedTicketId } as Ticket]);
          const storeSpy = jest.spyOn(ticketsStore, 'setActive');

          ticketsService.setActiveTicket(mockedTicketId);

          expect(storeSpy).toHaveBeenCalledWith(mockedTicketId);
        });
      });
    });
  });

  describe('and complete method is called', () => {
    describe('and complete param is true', () => {
      it('should trigger a PUT request and update the ticket in store', () => {
        const expectedUrl = `/api/tickets/${mockedTicketId}/complete`;
        const storeSpy = jest.spyOn(ticketsStore, 'updateActive');

        ticketsService.complete(mockedTicketId, true);

        const request = httpMock.expectOne(expectedUrl);
        request.flush(null);

        expect(request.request.method).toBe('PUT');
        expect(storeSpy).toHaveBeenCalledWith({ completed: true });
      });
    });

    describe('and complete param is false', () => {
      it('should trigger a DELETE request and update the ticket in store', () => {
        const expectedUrl = `/api/tickets/${mockedTicketId}/complete`;
        const storeSpy = jest.spyOn(ticketsStore, 'updateActive');

        ticketsService.complete(mockedTicketId, false);

        const request = httpMock.expectOne(expectedUrl);
        request.flush(null);

        expect(request.request.method).toBe('DELETE');
        expect(storeSpy).toHaveBeenCalledWith({ completed: false });
      });
    });
  });
});
