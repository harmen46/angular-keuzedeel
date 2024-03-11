import { Routes } from '@angular/router';
import path from "path";
import {HomeIndexComponent} from "./Core/Home/Home-index/home-index/home-index.component";
import {OrderComponent} from "./Core/Order/order/order.component";
import {BookingComponent} from "./Core/Booking/booking/booking.component";

export const routes: Routes = [
  {
    path: 'home/index',
    component: HomeIndexComponent
  },
  {
    path: '',
    redirectTo: 'home/index',
    pathMatch: 'full'
  },
  {
    path: 'booking',
    component: BookingComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
];
