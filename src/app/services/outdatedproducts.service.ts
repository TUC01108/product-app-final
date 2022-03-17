import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OutdatedproductsService {

  constructor() { }
  getProducts(){
    return [
        {'productId':1004, productName : 'Mouse',quantityOnHand:600, price: 899},
        {'productId':1005, productName : 'Laptop',quantityOnHand:100, price: 2999}
      ]
}
}
