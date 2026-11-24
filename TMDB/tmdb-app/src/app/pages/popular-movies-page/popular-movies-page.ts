import { Component, inject, OnInit, signal } from '@angular/core';
import { MoviesService } from '../../services/movies-service';
import { Movie } from '../../interfaces/popular-movies-response';

@Component({
  imports: [],
  selector: 'app-popular-movies-page',
  styleUrl: './popular-movies-page.css',
  templateUrl: './popular-movies-page.html',
})
export class PopularMoviesPage implements OnInit {
  moviesService = inject(MoviesService);
  movieList = signal<Movie[]>([]);

  ngOnInit(): void {
    this.moviesService.getPopularMovies().subscribe(resp => {
      this.movieList.set(resp.results);
    });
  }
}
