import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private http: HttpClient) { }

  getMeteo(city: string){
   return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid=a5d1a5c77a1795bedcab3d3a76d187e4');
  }
}
