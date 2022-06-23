import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket, User } from '@acme/shared-models';

@Injectable()
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  ticket(id: number) {
    return this.httpClient.get<Ticket>(`/api/tickets/${id}`);
  }

  users() {
    return this.httpClient.get<User[]>('/api/users');
  }

  user(id: number) {
    return this.httpClient.get<User>(`/api/users/${id}`);
  }

  assign(ticketId: number, userId: number) {
    return this.httpClient.put<void>(
      `/api/tickets/${ticketId}/assign/${userId}`,
      {}
    );
  }

  complete(ticketId: number, completed: boolean) {
    if (completed) {
      return this.httpClient.put<void>(`/api/tickets/${ticketId}/complete`, {});
    } else {
      return this.httpClient.delete<void>(`/api/tickets/${ticketId}/complete`);
    }
  }
}
