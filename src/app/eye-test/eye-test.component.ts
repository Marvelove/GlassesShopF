import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eye-test',						// selektor css, który identyfikuje ten komponent w szablonie
  templateUrl: './eye-test.component.html',		// adres URL do zewnętrznego pliku zawierającego szablon widoku
  styleUrls: ['./eye-test.component.css']		// lista adresów URL do arkuszy stylów, które mają być zastosowane do widoku
})
export class EyeTestComponent implements OnInit {

  constructor() { }

  public letters = [{
    id: 1,
    image: 'assets/images/k.jpg',
    value: "K"
  }, {
    id: 2,
    image: 'assets/images/m.jpg',
    value: "M"
  }, {
    id: 3,
    image: 'assets/images/o.jpg',
    value: "O"
  }, {
    id: 4,
    image: 'assets/images/r.jpg',
    value: "R"
  }, {
    id: 5,
    image: 'assets/images/s.jpg',
    value: "S"
  }, {
    id: 6,
    image: 'assets/images/t.jpg',
    value: "T"
  }, {
    id: 7,
    image: 'assets/images/y.jpg',
    value: "Y"
  }, {
    id: 8,
    image: 'assets/images/z.jpg',
    value: "Z"
  }];

  public pickedLetter;

  public getRandomLetter = () => {		// also after click the button 
    let id = Math.floor(Math.random() * this.letters.length);
    this.pickedLetter = this.letters[id];;
  }

  ngOnInit() {
    this.getRandomLetter();
  }

}
