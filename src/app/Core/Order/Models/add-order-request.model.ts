import {UUID} from "crypto";

export interface AddOrderRequest {
  id: number;
  productName: string;
  productAmount: number;
  productPrice: number;
}
