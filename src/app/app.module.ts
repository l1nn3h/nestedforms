import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

import {AppComponent} from './app.component';
import {TicketBookingComponent} from './components/ticket-booking/ticket-booking.component';
import {TicketSelectionComponent} from './components/ticket-selection/ticket-selection.component';
import {BookingComponent} from './components/booking/booking.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
            declarations: [
              AppComponent,
              TicketBookingComponent,
              TicketSelectionComponent,
              BookingComponent,
            ],
            imports: [
              BrowserModule,
              FormsModule,
              ReactiveFormsModule,
              CommonModule,
            ],
            providers: [],
            bootstrap: [AppComponent],
          })
export class AppModule {}
