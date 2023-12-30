import { MovieResult } from './../../interface/response.interface';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
  encapsulation : ViewEncapsulation.Emulated
})
export class MovieCardComponent {
  @Input() completeMovieList! : MovieResult[]; 


}
