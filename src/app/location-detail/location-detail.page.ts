import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Place } from '../model/place.model';
import { LocationService } from '../services/location.service';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.page.html',
  styleUrls: ['./location-detail.page.scss'],
})
export class LocationDetailPage implements OnInit {
  public currentPlace: Place;
  constructor(
    private serLoc: LocationService,
    private camera: Camera,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.currentPlace=this.serLoc.currentLocation;
  }

  async  onClick(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      allowEdit: true
    };
    const options1: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: true
    };
    const alert= await this.alertCtrl.create({
      cssClass: 'secondary',
      header:'Confirmation',
      message: 'Source ?',
      buttons:[
        {
          text: 'Camera',
          cssClass: 'primary',
          handler:()=>{
            this.getEDPicture(options);
          }
      },{
        text: 'Librairie',
        cssClass: 'primary',
        handler: ()=>{
          this.getEDPicture(options1);
        }
      }
      ]
    });
    await alert.present();
  }
  getEDPicture(op: CameraOptions) {
    this.camera.getPicture(op).then((imageData)=>{
      this.currentPlace.photo=[];
      const base64Image = 'data:image/jpeg;base64,'+imageData;
      this.currentPlace.photo.push(base64Image);
      //this.serLoc.addPhoto(base64Image, this.currentPlace.id);
    });
  }

}
