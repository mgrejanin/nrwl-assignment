import { of } from 'rxjs';

export class MatSnackbarMock {
  open() {
    return {
      afterClosed: () => of(),
    };
  }
}
