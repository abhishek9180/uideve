import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: `./contact.component.html`,
})
export class ContactComponent { 
   model = {
    username: "",
    email: "",
    comment: ""
  };
  status: boolean;
  message = {
    text: '',
    type: ''
  };

  constructor(){
    window.scrollTo(0, 60);
  }
  ngOnInit(){}

  onSubmit() {
    
  }

  handleResponse(response: any){
      // console.log(`msg is: {response.status}`);
  }
  
}
