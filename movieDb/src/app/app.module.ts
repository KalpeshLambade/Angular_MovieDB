import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { UpcommingComponent } from './pages/upcomming/upcomming.component';
import { TopRatedComponent } from './pages/top-rated/top-rated.component';
import {HttpClientModule} from '@angular/common/http';
import { LoaderComponent } from './components/loader/loader.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SearchPageComponent } from './pages/search-page/search-page.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UpcommingComponent,
    TopRatedComponent,
    LoaderComponent,
    MovieCardComponent,
    ErrorPageComponent,
    PageNotFoundComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
