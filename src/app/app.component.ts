import { Component, ElementRef, ViewChild, Renderer2, OnInit, ChangeDetectorRef } from '@angular/core';

//import serlogin service
import { LoginService } from './services/loginService/login.service';

import { LoginBean } from './modals/login.modal';

declare var jQuery:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'app';
  isDesktop: boolean = true;
  animateMenu: boolean = false;
  public profile: LoginBean;

  activeMenu: string = 'HOME';
  //Getting signin button reference 
  @ViewChild('googleLoginButton') googleLogin;
  @ViewChild('googleLogoutButton') googleLogout;
  

  constructor(private renderer: Renderer2, public loginService: LoginService, private ref:ChangeDetectorRef) {

  }


  ngOnInit(){
    //Add scroll event listener
    let self = this;
    window.addEventListener("resize", this.adjustScreenElements);
    //scroll
    let prev = 0;
    let win = jQuery(window);
    win.on('scroll', function(){
      if(!this.isDesktop) {
        let scrollTop = win.scrollTop();
        console.log(scrollTop+" "+prev);
        if(scrollTop > prev){
          console.log("slide up");
          self.animateMenu = true;
        } else {
          self.animateMenu = false;
          console.log("slide down");
        }
        prev = scrollTop;
      }
    });  
    
    this.loginService.profileUpdated.subscribe(
      (profile) => {
        this.profile = profile;
        this.ref.detectChanges();
        console.log(JSON.stringify(this.profile));
      }
    );
  }

  ngAfterViewInit() {
    this.loginService.googleInit(this.googleLogin);
    //Add event listener to Logout button
    let self = this;
    this.renderer.listen(this.googleLogout.nativeElement, 'click', (evt) => {
      console.log('Clicking the button', evt);
      self.loginService.googleLogout()
    });
  }

  adjustScreenElements() {
    if(window.innerWidth <= 767) {
      this.isDesktop = false;
    } else {
      this.isDesktop = true;
    }
    if(!this.isDesktop) {
      
    }
  }

  setActiveMenu(menu: string) {
    this.activeMenu = menu;
  }


}
