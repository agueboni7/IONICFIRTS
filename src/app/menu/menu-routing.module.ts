import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'gallery',
        loadChildren: () => import('../gallery/gallery.module').then( m => m.GalleryPageModule)
      },
      {
        path: 'location',
        loadChildren: () => import('../location/location.module').then( m => m.LocationPageModule)
      },
      {
        path: 'meteo',
        loadChildren: () => import('../meteo/meteo.module').then( m => m.MeteoPageModule)
      },
      {
        path: 'new-location',
        loadChildren: () => import('../new-location/new-location.module').then( m => m.NewLocationPageModule)
      },
      {
        path: 'location-detail',
        loadChildren: () => import('../location-detail/location-detail.module').then( m => m.LocationDetailPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
