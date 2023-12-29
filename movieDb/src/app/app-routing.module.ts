import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UpcommingComponent } from './pages/upcomming/upcomming.component';
import { TopRatedComponent } from './pages/top-rated/top-rated.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'upcomming',
    component : UpcommingComponent
  },
  {
    path : 'top',
    component : TopRatedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
