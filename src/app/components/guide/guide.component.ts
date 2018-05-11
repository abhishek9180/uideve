import { Component, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'guide',
  templateUrl: `./guide.component.html`
})
export class GuideComponent implements OnInit {

  public current: string = '1';
  constructor(){
    window.scrollTo(0, 60);
  }

  ngOnInit() {
    jQuery(function() {
      function toggleChevron(e) {
          jQuery(e.target)
                  .prev('.panel-heading')
                  .find("i")
                  .toggleClass('rotate-icon');
          jQuery('.panel-body.animated').toggleClass('zoomIn zoomOut');
      }
      
      jQuery('#accordion').on('hide.bs.collapse', toggleChevron);
      jQuery('#accordion').on('show.bs.collapse', toggleChevron);
    }) 
  }
 }
