import { TicketsService } from '@acme/tickets/data-access';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()
export class TicketDetailsGuard implements CanActivate {
  constructor(
    private router: Router,
    private ticketsService: TicketsService,
    private snackbar: MatSnackBar
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const ticketId = route.paramMap.get('ticketId');

    if (ticketId) {
      if (this.ticketsService.setActiveTicket(+ticketId)) {
        return true;
      }
    }

    this.snackbar.open('Invalid ticket ID', 'Close', { duration: 5000 });
    this.router.navigate(['/tickets']);
    return false;
  }
}
