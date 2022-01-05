import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Place } from '../model/place.model';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-new-location',
  templateUrl: './new-location.page.html',
  styleUrls: ['./new-location.page.scss'],
})
export class NewLocationPage implements OnInit {
  public currentPlace: Place;
  constructor(
    private servLoc: LocationService,
    
    private navCtrl: NavController,
 
     ) { }
  ngOnInit() {
  }

  //formulare get
  public onAddLocation(data: Place){
    data.timestamp=new Date().getTime();
    data.photo=[];
    this.servLoc.addLocalisation(data).then((result)=>{
      alert('Données sauvegardés'+JSON.stringify(result));
    }).catch((e)=>{
      alert('Erreur  De SAuvegarde des donne'+e);
    });
    /*this.geolocation.getCurrentPosition().then((result)=>{
      data.coordonates={
        longitude:result.coords.longitude,
        latitude:result.coords.latitude
    };
      console.log(data);
      this.servLoc.addLoctions(data);
    });*/
   // this.servLoc.addLoctions(data);
    this.navCtrl.back();
  }


}
