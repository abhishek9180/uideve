import { Component, OnInit } from '@angular/core';

import { Chapter } from '../../modals/chapter.modal';

declare var jQuery: any;

@Component({
  selector: 'quiz',
  templateUrl: `./quiz.component.html`
})
export class QuizComponent implements OnInit {
  
  chapter: Chapter[] = [
    {
      chapter_no: 2,
      chapter_name: 'Test2',
      status: 'P',
      score: 20,
      total: 25

    },
    {
      chapter_no: 3,
      chapter_name: 'Test3',
      status: 'F',
      score: 5,
      total: 25
    },
    {
      chapter_no: 1,
      chapter_name: 'Test4',
      status: 'PR',
      score: 5,
      total: 25
    },
    {
      chapter_no: 4,
      chapter_name: 'Test5',
      status: 'N',
      score: 0,
      total: 25
    }
  ]
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
