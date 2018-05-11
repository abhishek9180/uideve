import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'post7',
  templateUrl: `./formValidation-post.component.html`
})
export class FormValidationPostComponent {
  showRelatedPostImage: boolean = false;
  relatedPostMatchPercentage: number = 20;
  relatedPostCount: number = 5;

  constructor(){
    window.scrollTo(0, 60);
    
  }

 ngAfterViewInit(target: ElementRef) {
   //this.highlightJsService.highlight(target);
 }
}