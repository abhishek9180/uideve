import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { LoggerPostComponent } from './components/posts/logger/logger-post.component';
import { DataSharingPostComponent } from './components/posts/dataSharing/data-sharing-post.component';
import { AddMetadataPostComponent } from './components/posts/addMetadata/addMetadata-post.component';
import { OnRefresh404PostComponent } from './components/posts/onRefresh404/onRefresh404-post.component';
import { NgSwitchExamplePostComponent } from './components/posts/ngSwitchExample/ngSwitchExample-post.component';
import { ShowHideExamplePostComponent } from './components/posts/ngIfElseHiddenExample/showHideExample-post.component';
import { FormValidationPostComponent } from './components/posts/formValidation/formValidation-post.component';
import { SearchHighlighterPostComponent } from './components/posts/searchHighlighter/searchHighlighter-post.component';
import { HttpGetPostComponent } from './components/posts/httpGet&Post/httpGet&Post-post.component';
import { ImagePreviewPostComponent } from './components/posts/imagePreview/imagePreview-post.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { GuideComponent } from './components/guide/guide.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { NotFoundComponent } from './components/notFound/notFound.component';
import { RelatedPostExampleComponent} from './components/posts/relatedPost/relatedPost-post.component';
import { ImageDragDropPostComponent } from './components/posts/imageDragDrop/imageDragDrop-post.component';

import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';
import { HighlightCodeDirective } from './directives/code-highlighter.directive';
import { RelatedPostComponent } from './components/relatedPost/relatedPost.component';
import { RelatedPostService } from './services/relatedPost.service';
import { LoginService } from './services/loginService/login.service';

@NgModule({
  imports:      [ BrowserModule.withServerTransition({ appId: 'tour-of-heroes' }), FormsModule, HttpModule, HighlightJsModule, AppRoutingModule],
  declarations: [ AppComponent, HomeComponent, RelatedPostComponent, HighlightCodeDirective, DataSharingPostComponent, LoggerPostComponent, ContactComponent, GuideComponent, QuizComponent, AddMetadataPostComponent, OnRefresh404PostComponent, NotFoundComponent, NgSwitchExamplePostComponent, ShowHideExamplePostComponent,
  FormValidationPostComponent, SearchHighlighterPostComponent, HttpGetPostComponent, ImagePreviewPostComponent, RelatedPostExampleComponent, ImageDragDropPostComponent ],
  /*providers: [ {provide: LocationStrategy, useClass: HashLocationStrategy}, AlertService, RelatedPost],*/
  providers: [ HighlightJsService, RelatedPostService, LoginService ],

  bootstrap:    [ AppComponent ]
})

export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
 }
