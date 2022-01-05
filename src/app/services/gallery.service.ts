import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }

  getImagesList(key: string, siz: number, thisPage: number){
    return this.http.get('https://pixabay.com/api/?key=23949451-321116a488aa26ee0d11ad409&q='+key+
    '&image_type=photo&per_page='+siz+'&page='+thisPage);
  }
}
