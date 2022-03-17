import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ProductService } from './services/product.service';
import { OutdatedproductsService } from './services/outdatedproducts.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    PatientListComponent,
    ProductInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService,OutdatedproductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
