import { Component, OnInit } from '@angular/core';

import { ShopListService } from './shop-list.service';
import { ProductItem } from '../product-item/product-item';

import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-shop-list',					// selektor css, który identyfikuje ten komponent w szablonie
  templateUrl: './shop-list.component.html',	// adres URL do zewnętrznego pliku zawierającego szablon widoku
  styleUrls: ['./shop-list.component.css'],		// lista adresów URL do arkuszy stylów, które mają być zastosowane do widoku
  providers: [ShopListService]
})
export class ShopListComponent implements OnInit {

  constructor(
    private shopListService : ShopListService
  ) { }

  products : ProductItem[];

  ngOnInit() {

    this.getProducts();
    
  }

  getProducts(): void {
    this.shopListService.getProducts().then(product => this.products = product);
  }
}
