import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: `./home-content.html`
})
export class HomeComponent implements OnInit {

  showRelatedPostImage: boolean = true;
  relatedPostMatchPercentage: number = 0;
  relatedPostCount: number = 5;

  constructor() {
    window.scrollTo(0, 60);
  }

  ngOnInit() {
  }

}
