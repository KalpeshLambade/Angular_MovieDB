import { HttpErrorResponse } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { MovieApiResponse, MovieResult } from 'src/app/interface/response.interface';
import { MoviedataService } from 'src/app/services/moviedata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movieResult: MovieResult[] = [];
  isLoading = false;
  current_page = 1;

  constructor(private movieService: MoviedataService) { }

  ngOnInit() {
    this.fetchMovies();
  }
  
  fetchMovies() {
    this.isLoading = true;
    this.movieService.getMovie(this.current_page).subscribe({
      next: (responseData: MovieApiResponse) => {
        this.movieResult.push(...responseData.results);
        this.isLoading = false;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.error);
        this.isLoading = false;
      }
    });
    this.current_page++;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight && !this.isLoading) {
      this.fetchMovies();
    }
  }

}

