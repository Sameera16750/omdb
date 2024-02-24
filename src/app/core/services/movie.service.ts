import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {MovieRepository} from "../../data/repository/movie.repository";
import {IMovieDetailsResponse, IMovieListResponse} from "../models/response";
import {IMovieData} from "../models/movie-data";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private movieRepo: MovieRepository) {
  }

  getMovieByName(movieName: string): Observable<IMovieListResponse> {
    return this.movieRepo.getMoviesByName(movieName);
  }

  getMovieDetailsById(movieName: string): Observable<IMovieData> {
    return this.movieRepo.getMovieDetailsById(movieName).pipe(
      map((response: IMovieDetailsResponse) => {
        // Map the response to IMovieData interface
        return {
          ratings: response.Ratings,
          plot: response.Plot,
          actors: response.Actors
        };
      })
    );
  }
}
