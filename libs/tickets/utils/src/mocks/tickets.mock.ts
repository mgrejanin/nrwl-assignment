import { Ticket } from '@acme/shared-models';

export const ticketsMock: Ticket[] = [
  {
    id: 1,
    description: 'Install a monitor arm',
    assigneeId: 1,
    completed: false,
  },
  {
    id: 2,
    description: 'Move the desk to the new location',
    assigneeId: 1,
    completed: false,
  },
];
