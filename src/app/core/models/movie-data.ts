export interface IMovieData {
  ratings: { Source: string, Value: string }[]
  plot: string;
  actors: string;
}

export interface IMovieResult {
  Poster?: string;
  Title: string;
  Year?: string;
  imdbID: string;
}
