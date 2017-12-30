import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

import { ProductItem } from './product-item';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductItemService {
    
    id : number;
    getProductUrl : string;     // URL to web api    

    constructor(private http: Http) { }

    setProperties (id : number) {
        this.id = id;
        this.getProductUrl = 'http://localhost:8080/item/' + id;
    }

    getProduct(): Promise<ProductItem> {

        return this.http.get(this.getProductUrl)
            .toPromise()
            .then(response => response.json() as ProductItem)
            .catch(this.handleError);

    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}