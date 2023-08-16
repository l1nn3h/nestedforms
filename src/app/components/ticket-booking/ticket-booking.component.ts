import {Component, Input, OnChanges} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

function uniqueValuesValidator(controls: AbstractControl): { [key: string]: any } | null {
  const names = controls.value.map((control: any) => control.name);
  const idNums = controls.value.map((control: any) => control.idNum);

  if (
    names.some((name: string, index: number) => names.indexOf(name) !== index) ||
    idNums.some((idNum: string, index: number) => idNums.indexOf(idNum) !== index)
  ) {
    return { duplicateValues: true };
  }

  return null;
}

@Component({
             selector: 'app-ticket-booking',
             templateUrl: './ticket-booking.component.html',
             styleUrls: ['./ticket-booking.component.css'],
           })
export class TicketBookingComponent implements OnChanges {
  bookingForm: FormGroup;

  @Input() numberOfTickets: number = 0;

  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
                                       cardNum: ['', Validators.required],
                                       tickets: new FormArray([], uniqueValuesValidator),
                                     });
  }

  ngOnChanges(): void {
    this.adjustTicketForms();
  }

  adjustTicketForms(): void {
    const currentTickets = this.ticketsFormArray.length;
    if (currentTickets < this.numberOfTickets) {
      for (let i = currentTickets; i < this.numberOfTickets; i++) {
        this.addTicket();
      }
    } else if (currentTickets > this.numberOfTickets) {
      for (let i = currentTickets; i > this.numberOfTickets; i--) {
        this.removeTicket(i - 1);
      }
    }
  }

  addTicket(): void {
    const ticketGroup = this.fb.group({
                                        name: ['', Validators.required],
                                        idNum: ['', Validators.required],
                                      });

    this.ticketsFormArray.push(ticketGroup);
  }

  removeTicket(index: number): void {
    this.ticketsFormArray.removeAt(index);
  }

  get ticketsFormArray(): FormArray {
    return this.bookingForm.get('tickets') as FormArray;
  }

  submitForm(): void {
    console.log("submit button clicked");
      console.log(this.bookingForm.value);
  }
}
