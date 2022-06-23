import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    RouterModule.forRoot(
      [
        {
          path: 'tickets',
          loadChildren: () =>
            import('@acme/tickets/feature').then(
              (module) => module.TicketsFeatureModule
            ),
        },
        { path: '**', redirectTo: 'tickets' },
      ],
      {
        initialNavigation: 'enabledBlocking',
      }
    ),
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
