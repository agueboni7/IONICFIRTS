import { Component, OnInit } from '@angular/core';
import { MeteoService } from '../services/meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.page.html',
  styleUrls: ['./meteo.page.scss'],
})
export class MeteoPage implements OnInit {
  public city: string;
  public dataMeteo;
  constructor(private servMeteo: MeteoService) { }

  ngOnInit() {
  }
  onLoandMeteo(){
    this.servMeteo.getMeteo(this.city)
    .subscribe(data=>{
      this.dataMeteo=data;
    },err=>{console.log(err);
    });
  }
}
