import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UpcommingComponent } from './pages/upcomming/upcomming.component';
import { TopRatedComponent } from './pages/top-rated/top-rated.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'upcomming',
    component: UpcommingComponent
  },
  {
    path: 'top',
    component: TopRatedComponent
  },
  {
    path: 'search',
    component: SearchPageComponent
  },
  {
    path: 'movie-detail',
    component: MovieDetailComponent
  },
  {
    path: 'error',
    component: ErrorPageComponent
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/page-not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
