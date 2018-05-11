import { Component } from '@angular/core';

@Component({
  selector: 'post5',
  templateUrl: `./ngSwitchExample-post.component.html`
})
export class NgSwitchExamplePostComponent {
  showRelatedPostImage: boolean = false;
  relatedPostMatchPercentage: number = 20;
  relatedPostCount: number = 5;

  constructor(){
    window.scrollTo(0, 60);
  }
}
