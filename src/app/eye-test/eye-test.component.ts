import { Component, OnInit } from '@angular/core';

import { EyeTestService } from './eye-test.service';
import { Image } from './image';

import { HttpClientModule } from '@angular/common/http'; 
import { Http, HttpModule } from '@angular/http';

@Component({
  selector: 'app-eye-test',						// selektor css, który identyfikuje ten komponent w szablonie
  templateUrl: './eye-test.component.html',		// adres URL do zewnętrznego pliku zawierającego szablon widoku
  styleUrls: ['./eye-test.component.css'],	// lista adresów URL do arkuszy stylów, które mają być zastosowane do widoku
  providers: [EyeTestService]
})
export class EyeTestComponent implements OnInit {

  constructor(    
    private eyeTestService : EyeTestService,
    private http: Http
  ) { }

  letters : Image[]; 
  picked_letter: Image;
  selectedFile : any;
  /*
  public letters_mocked = [{
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
  */

  //public pickedLetter_mocked;

  /*
  public getRandomLetter_mocked = () => {		// also after click the button 
    let id = Math.floor(Math.random() * this.letters_mocked.length);
    this.pickedLetter_mocked = this.letters_mocked[id];;
  }
  */
  ngOnInit() {
    this.getImages();
    this.printImages();
    //this.getRandomLetter_mocked();      
    //this.demo();
  }

  getImages() : void {
    this.eyeTestService.getImages().then(product => this.letters = product); 
  } 

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async printImages() {
    for ( var i = 0; i < this.letters.length; i++) {
      this.picked_letter = this.letters[i];
      await this.sleep(6000);
      console.log('6 second later');
    }
  }
  /*
  async demo() {

    for ( var i = 0; i < 5; i++) {
      this.getRandomLetter_mocked();
      await this.sleep(6000);
      console.log('6 second later');
    }
  
  }
  */


  
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

}
