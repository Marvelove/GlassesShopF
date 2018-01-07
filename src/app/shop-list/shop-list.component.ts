import { Component, OnInit } from '@angular/core';

import { ShopListService } from './shop-list.service';
import { ProductItem } from '../product-item/product-item';

import { HttpClientModule } from '@angular/common/http'; 
import { Http, HttpModule } from '@angular/http';

@Component({
  selector: 'app-shop-list',					// selektor css, który identyfikuje ten komponent w szablonie
  templateUrl: './shop-list.component.html',	// adres URL do zewnętrznego pliku zawierającego szablon widoku
  styleUrls: ['./shop-list.component.css'],		// lista adresów URL do arkuszy stylów, które mają być zastosowane do widoku
  providers: [ShopListService]
})
export class ShopListComponent implements OnInit {

  selectedFile: any;
  products : ProductItem[];

  constructor(
    private shopListService : ShopListService,
    private http: Http
  ) { }

  ngOnInit() {

    this.getProducts();
    
  }

  fileSelected(event) {
    if (event.target && event.target.files[0]) {
      let file = event.target.files[0];
      
      const formData = new FormData();
      formData.append("image", file);
      // ten kod do servisu
      // this.userService.upload(selectedFile);
      // url powinien byc w stylu /userprofile/1
      // gdzie 1 to id usera
      this.http.post('www.google.com', formData).subscribe(res => {
        // w odpowiedzi powinno sie zwrocic link do avatara
        // this.avatarLink = res.link
        // by później robiac update user profile, wyslac odpowiedni url
      })

    }

  }

  getProducts(): void {
    this.shopListService.getProducts().then(product => this.products = product);
  }
}