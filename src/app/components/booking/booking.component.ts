import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent {

  numberOfTickets: number = 0;
  public changeNumber(newNumber: number): void {
    this.numberOfTickets = newNumber;
  }
}
