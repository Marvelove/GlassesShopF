import { Component, OnInit } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'; 
import { Http, HttpModule } from '@angular/http';

import { DaltonismTestService } from './daltonism_test.service';
import { Image } from './image';


@Component({
  selector: 'app-daltonism-test',					// selektor css, który identyfikuje ten komponent w szablonie (katalog)???
  templateUrl: './daltonism-test.component.html',	// adres URL do zewnętrznego pliku zawierającego szablon widoku
  styleUrls: ['./daltonism-test.component.css'],		// lista adresów URL do arkuszy stylów, które mają być zastosowane do widoku tego komponentu
  providers: [DaltonismTestService]
})
export class DaltonismTestComponent implements OnInit {

  constructor(
    private daltonismTestService : DaltonismTestService
  ) { }

  images : Image[];
  picked_image : Image;

  
  public images_mocked = [{
    id: 1,
    image: 'assets/images/d1.jpg'
  }, {
    id: 2,
    image: 'assets/images/d2.jpg'
  }, {
    id: 3,
    image: 'assets/images/d3.jpg'
  }];
  

  public pickedImage_mocked;

  
  public getRandomImage_mocked = () => {		// also after click the button
    let id = Math.floor(Math.random() * this.images_mocked.length);
    this.pickedImage_mocked = this.images_mocked[id];
  }
  
  
  ngOnInit() {
    //this.getImages();
    //this.printImages();
    this.demo();
    //this.getRandomImage_mocked();
  }
  /*
  getImages() : void {
    this.daltonismTestService.getImages().then(downloaded_image => this.images = downloaded_image)
  }
  */
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  /*
  async printImages() {
    for ( var i = 0; i < this.images.length; i++) {
      this.picked_image = this.images[i];
      await this.sleep(6000);
      console.log('6 second later');
    }
  }
  */
  
  async demo() {
    for ( var i = 0; i < this.images_mocked.length; i++) {
      this.pickedImage_mocked = this.images_mocked[i];
      await this.sleep(6000);
      console.log('6 second later');
    }
  }
  
}