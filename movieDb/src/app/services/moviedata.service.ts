import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieApiResponse } from '../interface/response.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviedataService {
  private api_key = 'c45a857c193f6302f2b5061c3b85e743';
  private api_url = 'https://api.themoviedb.org/3'

  params = new HttpParams().set("api_key", this.api_key).append("language", "en-US");

  constructor(private http: HttpClient) { }

  /**
   * 
   * @param {number} page  - The page number for paginated results (default is 1).
   * @param {string} endpoint - The endpoint for the movie API (e.g., 'popular', 'top_rated')
   * @returns  - An observable containing the movie data.
   */
  getMovie(page: number = 1, endpoint: string = "popular") {
    let params = this.params.append("page", page);

    return this.http.get<MovieApiResponse>(`${this.api_url}/movie/${endpoint}`,
      {
        params,
        observe: 'body'
      }
    )
  }

  getSearchMovie(page: number = 1, movie: string) {
    let endpoint = "search";
    if(!movie) movie = "default";
    let params = this.params.append("query", movie).append("page", page);
    console.log(params);
    return this.http.get<MovieApiResponse>(`${this.api_url}/${endpoint}/movie`,
      {
        params
      }
    )
  }
}
