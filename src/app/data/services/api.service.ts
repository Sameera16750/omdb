import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

//api url
  private readonly apiUrl: string = 'http://www.omdbapi.com/?apikey=e5d862e6'; // Replace with your API endpoint

  constructor(private http: HttpClient) {
  }

  // for all get methods
  get<T>(params: HttpParams): Observable<T> {
    return this.http.get<T>(this.apiUrl, {params: params});
  }

}
