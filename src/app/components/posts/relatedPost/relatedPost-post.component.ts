import { Component } from '@angular/core';

@Component({
  selector: 'post11',
  templateUrl: `./relatedPost-post.component.html`
})
export class RelatedPostExampleComponent {
    showRelatedPostImage: boolean = false;
    relatedPostMatchPercentage: number = 20;
    relatedPostCount: number = 5;

  constructor(){
    window.scrollTo(0, 60);
  }
}
