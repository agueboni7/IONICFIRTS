import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

 
  public menus= [
    {title:'Home', url:'/menu/home', icon:'home'},
    {title:'Meteo', url:'/menu/meteo', icon:'snow'},
    {title:'Gallery', url:'/menu/gallery', icon:'school'},
    {title:'Location', url:'/menu/location', icon:'sync'},
    {title:'Logout', url:'/authentification', icon:'log-out'},
    {title:'Exit', url:'/exit', icon: 'power'}
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onMenuItem(m){
    if(m.url==='/authentification'){
      localStorage.removeItem('Maklé');
      this.router.navigate(['/authentification']);
    }
    else if(m.url==='/exit'){
      // eslint-disable-next-line @typescript-eslint/dot-notation
      navigator['app'].exitApp();
    }
    else
    // eslint-disable-next-line curly
    this.router.navigateByUrl(m.url);
  }
}
