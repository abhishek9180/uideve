import { Component } from '@angular/core';

@Component({
  selector: 'post1',
  templateUrl: `./data-sharing-post.html`
})
export class DataSharingPostComponent {
  showRelatedPostImage: boolean = false;
  relatedPostMatchPercentage: number = 20;
  relatedPostCount: number = 5;

  //added because getting error for webpack
  data: string = "";
  
  constructor(){
    window.scrollTo(0, 60);
  }
}
