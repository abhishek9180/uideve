import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'post8',
  templateUrl: `./httpGet&Post-post.component.html`
})
export class HttpGetPostComponent {
  showRelatedPostImage: boolean = false;
  relatedPostMatchPercentage: number = 20;
  relatedPostCount: number = 5;

  //added because getting error for webpack
  successMessage: string = "";
  loginErrorMessage: string = "";
  constructor(){
    window.scrollTo(0, 60);
    
  }

 ngAfterViewInit(target: ElementRef) {
   //this.highlightJsService.highlight(target);
 }
}