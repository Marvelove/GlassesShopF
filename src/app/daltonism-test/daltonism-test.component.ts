import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daltonism-test',					// selektor css, który identyfikuje ten komponent w szablonie (katalog)???
  templateUrl: './daltonism-test.component.html',	// adres URL do zewnętrznego pliku zawierającego szablon widoku
  styleUrls: ['./daltonism-test.component.css']		// lista adresów URL do arkuszy stylów, które mają być zastosowane do widoku tego komponentu
})
export class DaltonismTestComponent implements OnInit {

  constructor() { }

  public images = [{
    id: 1,
    image: 'assets/images/d1.jpg'
  }, {
    id: 2,
    image: 'assets/images/d2.jpg'
  }, {
    id: 3,
    image: 'assets/images/d3.jpg'
  }];

  public pickedImage;

  public getRandomImage = () => {		// also after click the button
    let id = Math.floor(Math.random() * this.images.length);
    this.pickedImage = this.images[id];
  }

  ngOnInit() {
    this.getRandomImage();
  }

}
