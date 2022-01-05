import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  public keyword: string;
  public currenPage=1;
  public size=10;
  public galleryData=[];
  private totalPages: number;
  constructor(private serGallery: GalleryService) { }

  ngOnInit() {
  }
  onImageSearch(){
    this.galleryData=[];
    this.currenPage=1;
    this.totalPages=0;
    this.rechercheImages();
  }
  rechercheImages(){
   this.serGallery.getImagesList(this.keyword, this.size, this.currenPage)
    .subscribe(data=>{
      data['hits'].forEach(image => {
        this.galleryData.push(image);
        this.totalPages=data['totalHits']/this.size;
      });
    }, err=>{console.log(err);
    });
  }
  loadData(evt){
    if(this.currenPage<this.totalPages){
      ++this.currenPage;
      this.rechercheImages();
      evt.target.complete();
    }
    if(this.currenPage>=this.totalPages){
      evt.target.diseabled=true;
    }
  }
}
