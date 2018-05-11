import { Component } from '@angular/core';

@Component({
  selector: 'post3',
  templateUrl: `./addMetadata-post.component.html`,
})
export class AddMetadataPostComponent { 
  showRelatedPostImage: boolean = false;
  relatedPostMatchPercentage: number = 20;
  relatedPostCount: number = 5;


  constructor(){
    window.scrollTo(0, 60);
  }
 }
