import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { PopularMoviesResponse } from '../interfaces/popular-movies-response';

const API_KEY = '9ec2925faf495997db423b0d862259f0';

@Service()
export class MoviesService {
  http = inject(HttpClient);

  getPopularMovies(): Observable<PopularMoviesResponse> {
    return this.http.get<PopularMoviesResponse>(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
  }
}
