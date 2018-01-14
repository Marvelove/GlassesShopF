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
    //let video:HTMLVideoElement = this.video.nativeElement;
    let video:HTMLAudioElement = this.video.nativeElement;
    video.muted = false;
    video.controls = true;
    video.autoplay = false;
  }

  // { audio: true, video: { width: 1280, height: 720 } 
  startRecording() {
    let mediaConstraints = {
      //video: true
      /*{
        mandatory: {
          minWidth: 1280,
          minHeight: 720
        } 
      }*///,
       audio: true
    };
    navigator.mediaDevices
    .getUserMedia({ audio: true})
      //.getUserMedia({ audio: true, video: { width: 1280, height: 720 }})
      //.getUserMedia(mediaConstraints)
      .then(this.successCallback.bind(this));
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

  stopRecording() {
    let recordRTC = this.recordRTC;
    recordRTC.stopRecording(this.processVideo.bind(this));
    //recordRTC.stopRecording(this.processVideo.bind(this));
    let stream = this.stream;
    stream.getAudioTracks().forEach(track => track.stop());
    //stream.getVideoTracks().forEach(track => track.stop());
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
}
