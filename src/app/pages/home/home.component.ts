import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bannerApiResults:any =[];
  trendingMovieApiResults:any =[];

  navBackground:any;

  constructor( private apiSvc:MovieApiService){}

  ngOnInit(): void {
    this.bannerData();
    this.trendigMovie();
  }

  bannerData(){
    this.apiSvc.bannerApiData().subscribe(result =>{
      this.bannerApiResults = result.results;
      // console.log(this.bannerApiResults);
    });
  }

  trendigMovie(){
    this.apiSvc.trendingMovieApiData().subscribe(result =>{
      this.trendingMovieApiResults = result.results;
      console.log(this.trendingMovieApiResults);
    });
  }
}
