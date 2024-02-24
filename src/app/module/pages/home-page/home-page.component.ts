import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MovieCardComponent} from "../../../shared/cards/movie-card/movie-card.component";
import {MessagesModule} from "primeng/messages";
import {MovieService} from "../../../core/services/movie.service";
import {Observable, of, Subject, takeUntil} from "rxjs";
import {IMovieResult} from "../../../core/models/movie-data";
import {IMessage, IMovieListResponse} from "../../../core/models/response";
import {ApiDataLoaderComponent} from "../../../shared/loaders/api-data-loader/api-data-loader.component";

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [
    FormsModule,
    MovieCardComponent,
    MessagesModule,
    ReactiveFormsModule,
    ApiDataLoaderComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements OnInit, OnDestroy{
  movieList: IMovieResult[] = [];
  $onDestroy: Subject<Observable<any>> = new Subject<Observable<any>>();
  searchForm!: FormGroup;
  loading: boolean = false;
  message!:IMessage;

  constructor(
    private movieService: MovieService,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    this.message={
      message:"Welcome To Open Movie Database",
      isError:false
    }
    this.initForm();
  }

  ngOnDestroy() {
    this.$onDestroy.next(of(undefined));
    this.$onDestroy.complete()
  }

  initForm() {
    this.searchForm = this.fb.group({
      movieName: [""]
    });
  }

  getMovieByName() {
    this.loading = true;
    let value = this.searchForm.value.movieName.toString();
    if (value === undefined || value === "" || value === null || value === " ") {
      this.showError();
      return;
    }
    this.movieService.getMovieByName(value).pipe(takeUntil(this.$onDestroy)).subscribe({
      next: (res: IMovieListResponse) => {
        console.log(res)
        if (res.Response.toString() === "False") {
          this.showError();
          console.log(this.movieList.length);
          return;
        }
        this.movieList = res?.Search || [];
        this.loading = false;
      }
    })
  }

  showError() {
    this.movieList = [];
    this.message={
      isError:true,
      message:"Movie Not Found"
    }
    this.loading = false;
  }
}

