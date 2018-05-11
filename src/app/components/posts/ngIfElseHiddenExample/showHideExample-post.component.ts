import { Component } from '@angular/core';

@Component({
  selector: 'post6',
  templateUrl: `./showHideExample-post.component.html`
})
export class ShowHideExamplePostComponent {
  showRelatedPostImage: boolean = false;
  relatedPostMatchPercentage: number = 20;
  relatedPostCount: number = 5;
  //added because getting error for webpack
  hidden: boolean = false;
  show: boolean = true;

  constructor(){
    window.scrollTo(0, 60);
  }
}
