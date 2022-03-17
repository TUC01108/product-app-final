import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(){
    return [
        { 'productId':2001, productName : 'OnePlus',quantityOnHand:25, price: 3990},
        {'productId':1002, productName : 'Aroma',quantityOnHand:100, price: 99},
        {'productId':1003, productName : 'Pendrive',quantityOnHand:500, price: 699},
        {'productId':1004, productName : 'Mouse',quantityOnHand:600, price: 899},
        {'productId':1005, productName : 'Laptop',quantityOnHand:100, price: 2999},
      ]
}
}
