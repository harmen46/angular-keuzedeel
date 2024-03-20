import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AddBookingRequest} from "./Models/add-booking-request.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookingService implements OnInit {

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.refreshList();
  }

  addBooking(model: AddBookingRequest): Observable<void> {
    return this.http.post<void>(`https://localhost:7261/api/Booking`, model);
  }
  refreshList(): Observable<AddBookingRequest[]> {
    return this.http.get<AddBookingRequest[]>(`https://localhost:7261/api/Booking`);
  }


}
