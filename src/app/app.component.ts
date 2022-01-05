import { LocationService } from './services/location.service';
import { AuthentificationService } from './services/authentification.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private aut:AuthentificationService, private servLoc: LocationService,
     private router: Router) {}

  ngOnInit(): void {
    this.servLoc.createDatabase().then(()=>{
      
    });
    this.onLoandToken();
  }
  onLoandToken(){
    const auten=this.aut.loadToken();
    if(auten===true){
      this.router.navigate(['/menu/home']);
    }else{
      this.router.navigate(['/authentification']);
    }
  }
}
