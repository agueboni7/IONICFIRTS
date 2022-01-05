import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public contact={
    name:'XABOTTA',
    email:'xabotta@gmail.com',
    tel:'60000000000',
    logo:'assets/images/logo.jpg',
    location:'assets/images/location.png'
  };
  constructor() {}

}
