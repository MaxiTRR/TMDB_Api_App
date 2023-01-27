import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/moviesDetails/moviesDetails.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {path:'search', component: SearchComponent},
  {path:'moviesDetails/:id', component:MoviesComponent},
  {path:'', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
