import { AuthentificationService } from './../services/authentification.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {

  constructor(private serAuth: AuthentificationService, private router:Router) { }

  ngOnInit() {
  }

  onLogin(user){
   const auth= this.serAuth.onAuth(user.username, user.password)
    if(auth===true){
      this.router.navigate(['/menu/home']);
    }
  }
}
