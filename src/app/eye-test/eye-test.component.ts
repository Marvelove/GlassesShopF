import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { EyeTestService } from './eye-test.service';
import { Image } from './image';

import { HttpClientModule } from '@angular/common/http'; 
import { Http, HttpModule } from '@angular/http';

import * as RecordRTC from 'recordrtc';
import { ProductItem } from '../product-item/product-item';

import { Headers, RequestOptions } from '@angular/http';

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

  //letters : Image[]; 
  //picked_letter: Image;
  selectedFile : any;
    
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
  

  public pickedLetter_mocked;

  
  public getRandomLetter_mocked = () => {	
    let id = Math.floor(Math.random() * this.letters_mocked.length);
    this.pickedLetter_mocked = this.letters_mocked[id];;
  }
  
  async ngOnInit() {  
    this.demo();
    await this.sleep(6000);
    this.startRecording();
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async demo() {
    await this.sleep(6000);
    for ( var i = 0; i < 5; i++) {
      this.getRandomLetter_mocked();
      await this.sleep(3000);
      console.log('next');
    }
  
  }
  
 test  =
  {
    "id": 0,
    "email": "testtest@asdf.pl",
    "password": "string",
    "matchingPassword": "string",
    "firstName": "string",
    "lastName": "string",
    "userName": "teeest"
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
      //this.http.post('http://localhost:8080/test', formData).subscribe(res => {
        //this.http.post('http://localhost:8080/admin/item', this.glasses).subscribe(res => {
      // w odpowiedzi powinno sie zwrocic link do avatara
        // this.avatarLink = res.link
        // by później robiac update user profile, wyslac odpowiedni url
      //})

      console.log("wysylam nowego uzytkownika");
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post("http://localhost:8080/registration", this.test, options).toPromise()
             .then(this.extractData)
             .catch(this.handleErrorPromise);
    }

  }

  extractData : any;
  handleErrorPromise : any;

  stream : MediaStream;
  recordRTC : any;
  @ViewChild('audio') video: any

  ngAfterViewInit() {
    // set the initial state of the video
    let video:HTMLAudioElement = this.video.nativeElement;
    video.muted = false;
    video.controls = true;
    video.autoplay = false;
  }

  async startRecording() {
    await this.sleep(5000);
    let mediaConstraints = {
       audio: true
    };
    navigator.mediaDevices
    .getUserMedia({ audio: true})
      .then(this.successCallback.bind(this));
      this.stopRecording();
  }

  async stopRecording() {

    await this.sleep(15000);
    console.log('stop!');

    let recordRTC = this.recordRTC;
    recordRTC.stopRecording(this.processVideo.bind(this));
    let stream = this.stream;
    stream.getAudioTracks().forEach(track => track.stop());
    this.download2();  
  }

  async download2() {
    await this.sleep(5000);
    console.log('download2');
    this.recordRTC.save('video.wav');
  }

  successCallback(stream: MediaStream) {
    var options = {
          mimeType: 'video/webm', // or video/webm\;codecs=h264 or video/webm\;codecs=vp9
          audioBitsPerSecond: 128000,
          //videoBitsPerSecond: 128000,
          bitsPerSecond: 128000 // if this line is provided, skip above two
        };
        this.stream = stream;
        this.recordRTC = RecordRTC(stream, options);
        this.recordRTC.startRecording();
        let video: HTMLAudioElement = this.video.nativeElement;
        video.src = window.URL.createObjectURL(stream);
        this.toggleControls();
        
  }
  
  toggleControls() {
    let video: HTMLAudioElement = this.video.nativeElement;
    video.muted = !video.muted;
    video.controls = !video.controls;
    video.autoplay = !video.autoplay;
  }

  processVideo(audioWebMURL) {
    let video: HTMLAudioElement = this.video.nativeElement;
    let recordRTC = this.recordRTC;
    video.src = audioWebMURL;
    this.toggleControls();
    var recordedBlob = recordRTC.getBlob();
    recordRTC.getDataURL(function (dataURL) { });
  }
}