import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'post2',
  templateUrl: `./logger-post.html`
})
export class LoggerPostComponent { 
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
