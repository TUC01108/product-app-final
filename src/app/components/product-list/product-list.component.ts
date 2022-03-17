import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductData } from 'src/app/ProductData';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  // productData = new ProductData();
  public productAvailable = true;
  public color="blue";
  public guestName : string = "Isha";

  constructor(public productService: ProductService) {
    // this.products = this.productData.getProducts();
    this.products = productService.getProducts();
   }

   getColor(country: string) {
    switch (country) {
      case 'UK':
        return 'green';
      case 'USA':
        return 'blue';
      case 'IN':
        return 'red';
      default:
        return 'yellow'
    }
  }
  people: any[] = [
    {
      "name": "Tufail Ahmed",
      "country": 'IN'
    },
    {
      "name": "Neha Sharma",
      "country": 'UK'
    },
    {
      "name": "Ravi Kiran",
      "country": 'IN'
    },
    {
      "name": "Tarun Sharma",
      "country": 'IN'
    },
    {
      "name": "Cook Tyson",
      "country": 'USA'
    },
    {
      "name": "Dennis Dennison",
      "country": 'ARG'
    }
  ];

  ngOnInit(): void {
  }

}
