import { Directive, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { HighlightJsService } from 'angular2-highlight-js';

declare var hljs: any;

@Directive({
  selector: 'code[highlight]'
})
export class HighlightCodeDirective {
  constructor(private eltRef:ElementRef) {
  }

  ngAfterViewInit() {
    hljs.highlightBlock(this.eltRef.nativeElement);
  }
}