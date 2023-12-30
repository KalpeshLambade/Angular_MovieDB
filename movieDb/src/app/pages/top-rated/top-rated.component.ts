import { HttpErrorResponse } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieApiResponse, MovieResult } from 'src/app/interface/response.interface';
import { MoviedataService } from 'src/app/services/moviedata.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent {
  movieResult: MovieResult[] = [];
  isLoading = false;
  current_page = 1;

  constructor(private movieService: MoviedataService, private router:Router) { }

  ngOnInit() {
    this.fetchMovies();
  }
  
  fetchMovies() {
    this.isLoading = true;
    this.movieService.getMovie(this.current_page,"top_rated").subscribe({
      next: (responseData: MovieApiResponse) => {
        this.movieResult.push(...responseData.results);
        this.isLoading = false;
      },
      error: (err: HttpErrorResponse) => {
        this.isLoading = false;
        this.router.navigate(['/error']);
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
