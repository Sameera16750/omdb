import {Component, Input, OnInit} from '@angular/core';
import {IMovieData, IMovieResult} from "../../../core/models/movie-data";
import {Observable, Subject, takeUntil} from "rxjs";
import {MovieService} from "../../../core/services/movie.service";
import {ApiDataLoaderComponent} from "../../loaders/api-data-loader/api-data-loader.component";

@Component({
  selector: 'movie-card',
  standalone: true,
  imports: [
    ApiDataLoaderComponent
  ],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent implements OnInit{
  @Input() movieDetails!: IMovieResult;
  $onDestroy: Subject<Observable<any>> = new Subject<Observable<any>>()
  isDetailsOpened:boolean=false;
  isLoading:boolean=false;
  movieAllDetails!:IMovieData;

  constructor(private movieService: MovieService,) {
  }

  ngOnInit() {
  }

  getMovieDetailsById() {
    this.isDetailsOpened=true;
    this.isLoading=true;
    this.movieService.getMovieDetailsById(this.movieDetails.imdbID).pipe(takeUntil(this.$onDestroy)).subscribe({
      next: (res: IMovieData) => {
        this.movieAllDetails=res;
        this.isLoading=false;
      }
    })
  }
}
