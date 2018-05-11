import { Component } from '@angular/core';

@Component({
  selector: 'post4',
  templateUrl: `./onRefresh404-post.component.html`
})
export class OnRefresh404PostComponent {
  showRelatedPostImage: boolean = false;
  relatedPostMatchPercentage: number = 20;
  relatedPostCount: number = 5;

  constructor(){
    window.scrollTo(0, 60);
  }
}
