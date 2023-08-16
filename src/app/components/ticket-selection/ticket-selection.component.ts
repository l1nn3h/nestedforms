import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-ticket-selection',
  templateUrl: './ticket-selection.component.html',
  styleUrls: ['./ticket-selection.component.css']
})
export class TicketSelectionComponent {

  @Output() newNumberEvent = new EventEmitter<number>();

  updateNumOfTickets(value: any) {
    this.newNumberEvent.emit(value);
  }
}
