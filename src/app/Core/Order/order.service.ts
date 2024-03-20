import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AddOrderRequest} from "./Models/add-order-request.model";

@Injectable({
  providedIn: 'root'
})
export class OrderService implements OnInit {

  constructor(private http: HttpClient) { }
  
ngOnInit() {
  this.refreshList();
}

addOrder(model: AddOrderRequest): Observable<void> {
  return this.http.post<void>(`https://localhost:7261/api/Order`, model);
}

refreshList(): Observable<AddOrderRequest[]> {
  return this.http.get<AddOrderRequest[]>(`https://localhost:7261/api/Order`);
}

}
