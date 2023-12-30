import { HttpErrorResponse } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieApiResponse, MovieResult } from 'src/app/interface/response.interface';
import { MoviedataService } from 'src/app/services/moviedata.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  movieResult: MovieResult[] = [];
  isLoading = false;
  current_page = 1;
  movie_name = ''

  constructor(private router: Router, private route: ActivatedRoute, private movieServies: MoviedataService) { }

  ngOnInit() {
    this.route.queryParams.subscribe((movie) => {
      this.movie_name = movie['movie_name'];
      this.getSearchMovies();
    });
    this.getMoviesAppendData();
  }

  getMovies(processData: (results: MovieResult[]) => void) {
    this.isLoading = true;
    this.movieServies.getSearchMovie(this.current_page, this.movie_name).subscribe(
      {
        next: (responseData: MovieApiResponse) => {
          processData(responseData.results);
          this.isLoading = false;
        },
        error: (err: HttpErrorResponse) => {
          this.router.navigate(['/error']);
        }
      }
    )
  }

  getMoviesAppendData(){
    this.getMovies((results: MovieResult[])=>{
        this.movieResult.push(...results)
    })
  }

  getSearchMovies(){
    this.getMovies((results:MovieResult[])=>{
      this.movieResult = results;
    })
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight && !this.isLoading) {
      this.getMoviesAppendData();
    }
  }

}
