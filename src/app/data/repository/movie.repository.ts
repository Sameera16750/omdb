import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {ApiService} from "../services/api.service";
import {HttpParams} from "@angular/common/http";
import {IMovieDetailsResponse, IMovieListResponse} from "../../core/models/response";

@Injectable({
  providedIn: 'root'
})
export class MovieRepository {

  constructor(private apiService: ApiService) {
  }

  /** @summary this method used for get movies using movie name*/
  getMoviesByName(movieName: string): Observable<IMovieListResponse> {
    let params: HttpParams = new HttpParams().set("s", movieName).set("page", 1).set("type", "movie");
    return this.apiService.get(params)
  }


  /** @summary this method used for get movie details using movie id*/
  getMovieDetailsById(movieId: string): Observable<IMovieDetailsResponse> {
    let params: HttpParams = new HttpParams().set("i", movieId).set("type", "movie");
    return this.apiService.get(params)
  }
}
