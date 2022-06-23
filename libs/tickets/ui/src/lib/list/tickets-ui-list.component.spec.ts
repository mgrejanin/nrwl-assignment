// import { of } from 'rxjs';
// import { TestBed } from '@angular/core/testing';

// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { ApiService } from '@acme/tickets/data-access';
// import { TicketsUiModule } from '../tickets-ui.module';

// describe('TicketsComponent', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: [ApiService],
//       declarations: [TicketsUiModule],
//     });
//   });

//   it('should create', () => {
//     const fixture = TestBed.createComponent(TicketsComponent);
//     const component = fixture.componentInstance;
//     const apiService = TestBed.inject(ApiService);
//     jest.spyOn(apiService, 'tickets').mockImplementation(() => of([]));
//     jest.spyOn(apiService, 'users').mockImplementation(() => of([]));
//     fixture.detectChanges();

//     expect(component).toBeTruthy();
//   });
// });
