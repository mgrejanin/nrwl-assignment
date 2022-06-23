import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('@acme/tickets/feature').then(
              (module) => module.TicketsFeatureModule
            ),
        },
        { path: '**', redirectTo: '/' },
      ],
      {
        initialNavigation: 'enabledBlocking',
      }
    ),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
