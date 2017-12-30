import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProductItemService } from './product-item.service';
import { ProductItem } from './product-item';

import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-product-item',						// selektor css, który identyfikuje ten komponent w szablonie
  templateUrl: './product-item.component.html',		// adres URL do zewnętrznego pliku zawierającego szablon widoku
  styleUrls: ['./product-item.component.css'],		// lista adresów URL do arkuszy stylów, które mają być zastosowane do widoku
  providers: [ProductItemService]
})

export class ProductItemComponent implements OnInit {

  id: number;
  private sub;
  selectedProduct : ProductItem;

  constructor(
    private productItemService : ProductItemService,
    private route: ActivatedRoute,	// contains route specific information such as route parameters, static data, resolve data, global query params, and the global fragment
    private location: Location,
  ) { }

  public back = () => {
    this.location.back();
  }

  ngOnInit() {
    
    this.sub = this.route.params.subscribe(params => { // params - contains the required and optional parameters specific to the route
                                                      // and emits a new map of values that includes id when the user navigates to the component
                                                      // subscribe - subscribe to them to make decisions based on the sequence of events in the navigation process
      this.id = +params['id'];      	// + before `params['id']` turns the string into a number
    });

    this.setServiceProperties();
    this.getProduct();
  }
  
  setServiceProperties() : void {
    this.productItemService.setProperties(this.id);
  }

  getProduct(): void {
    this.productItemService.getProduct().then(products => this.selectedProduct = products);
  }

}
