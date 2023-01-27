import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  private apiUrl:string = 'https://api.themoviedb.org/3';
  private apiKey:string = '3d3dfae29737bce876bb63b30f498361';

  constructor(private http:HttpClient) { }

  bannerApiData():Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/trending/all/week?api_key=${this.apiKey}`);
  };

  trendingMovieApiData():Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/trending/movie/day?api_key=${this.apiKey}`);
  }
};
