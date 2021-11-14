import { AlbumsComponent } from './components/albums/albums.component';
import { PhotosComponent } from './components/photos/photos.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'photos',component:PhotosComponent},
  {path:'albums', component:AlbumsComponent},
  {path:'404Error', component:ErrorComponent},
  {path:'**', redirectTo:'404Error', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
