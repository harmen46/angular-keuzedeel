import {UUID} from "crypto";

export interface AddBookingRequest {
  id: number;
  bookingName: string;
  bookingamount: number;
  bookingdate: string;
}
