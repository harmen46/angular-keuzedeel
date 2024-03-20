import { Component } from '@angular/core';
import {AddBookingRequest} from "../Models/add-booking-request.model";
import {BookingService} from "../booking.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {

  model: AddBookingRequest;

  constructor(private bookingService: BookingService) {
    this.model = {
      id: 0,
      bookingName: '',
      bookingdate: '',
      bookingamount: 0,
    };
  }

  onFormSubmit(form: any) {
    this.bookingService.addBooking(this.model)
    .subscribe ({
      next: (response) => {
        console.log('this was succesful');
      }
    });
  }

}
