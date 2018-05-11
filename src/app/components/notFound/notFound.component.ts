import { Component } from '@angular/core';

@Component({
  selector: 'not-found',
  templateUrl: `./notFoundPage.html`
})
export class NotFoundComponent {
  constructor(){
    window.scrollTo(0, 60);
  }
}
