import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

import { Image } from '../eye-test/image';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class EyeTestService {
    
    private getImagesUrl = 'http://localhost:8080/eye-test/images/all';     // URL to web api

    constructor(private http: Http) { }

    getImages(): Promise<Image[]> {

        return this.http.get(this.getImagesUrl)
            .toPromise()
            .then(response => response.json() as Image[])
            .catch(this.handleError);

    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}