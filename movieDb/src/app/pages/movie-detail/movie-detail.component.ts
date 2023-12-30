import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetails, Person } from 'src/app/interface/response.interface';
import { MoviedataService } from 'src/app/services/moviedata.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit{

  cast!:Person[];
  crew!:Person[];
  movieData!:MovieDetails;
  
  constructor(private movieService:MoviedataService, private route:ActivatedRoute, private router:Router){}

  ngOnInit(){
    this.route.params.subscribe((movie_id)=>{
      this.getMovieDetails(movie_id['id'])
    })
  }

  getMovieDetails(id:number){
    this.movieService.getMovieDetail(id).subscribe({
      next: (res)=>{
        this.movieData = res;
      },
      error: (err)=>{
        this.router.navigate(['/error']);
      }
    });

    this.movieService.getMovieCastDetails(id).subscribe({
      next: (res)=>{
        this.cast = res.cast;
        this.crew = res.crew;
      },
      error: (err)=>{
        this.router.navigate(['/error']);
      }
    })
  }

  handleImageError(event: ErrorEvent) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = 'https://i.ibb.co/6BHp0W8/broken-img.jpg';
    imgElement.alt = 'broken-img';
  }
}
