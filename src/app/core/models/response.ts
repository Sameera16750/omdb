import {IMovieResult} from "./movie-data";

export interface IMovieListResponse {
  Response: string;
  Error?: string;
  Search?: IMovieResult[];
  totalResults?: string;
}

export interface IMovieDetailsResponse {
  Response: string;
  Error?: string;
  Actors: string;
  Plot: string;
  Ratings: { Source: string, Value: string }[]
}

export interface IMessage {
  isError: boolean;
  message: string;
}
