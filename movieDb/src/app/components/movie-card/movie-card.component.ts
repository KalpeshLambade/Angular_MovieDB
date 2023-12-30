import { MovieResult } from './../../interface/response.interface';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MovieCardComponent {
  @Input() completeMovieList!: MovieResult[];

  constructor() { }

  handleImageError(event: ErrorEvent) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = 'https://i.ibb.co/6BHp0W8/broken-img.jpg';
    imgElement.alt = 'broken-img';
  }
  
}
