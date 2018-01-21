import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import * as RecordRTC from 'recordrtc';


@Component({
  selector: 'app-record-rtc',
  templateUrl: './record-rtc.component.html',
  styleUrls: ['./record-rtc.component.css']
})
export class RecordRtcComponent implements OnInit {

  constructor(

  ) { }

  ngOnInit() {
  }

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

  startRecording() {

    let mediaConstraints = {
       audio: true
    };
    navigator.mediaDevices
      .getUserMedia({ audio: true})
      .then(this.successCallback.bind(this));
      this.stopRecording();
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

  async stopRecording() {

    await this.sleep(15000);
    console.log('stop!');

    let recordRTC = this.recordRTC;
    recordRTC.stopRecording(this.processVideo.bind(this));
    let stream = this.stream;
    stream.getAudioTracks().forEach(track => track.stop());
    
    this.download2();
  }

  processVideo(audioWebMURL) {
    let video: HTMLAudioElement = this.video.nativeElement;
    let recordRTC = this.recordRTC;
    video.src = audioWebMURL;
    this.toggleControls();
    var recordedBlob = recordRTC.getBlob();
    recordRTC.getDataURL(function (dataURL) { });
  }

  download() {
    this.recordRTC.save('video.wav');
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async download2() {
    await this.sleep(6000);
    console.log('download2');
    this.recordRTC.save('video.wav');
  }

}
