import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movieAPI';
  navBackground = {'background-color':'#000000'};
  // navBackground:any;

  // @HostListener('document:scroll') scrollOver(){
  //   if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
  //     this.navBackground = {
  //       'background-color':'#000000'
  //     }
  //   }else{
  //     this.navBackground = {};
  //   };
  // };
};
