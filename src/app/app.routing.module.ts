import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, NavigationEnd } from '@angular/router';

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



export const routes: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		component: HomeComponent,
		data: {
			meta: {
				title: 'Learn-Angular2 Home',
				description: 'Learn-angular2 Provides the solutions of many problems that we face during the development of angular2 applications. Here I will tell you about angular2 services, loggers, components and many more...'
			},
			post_tags: [],
			post_title: 'Learn-Angular2 Home',
			post_description: '',
			post_image_url: '',
			show_in_related_post: 'false'
		},
	},
	{
		path: 'contact',
		component: ContactComponent,
		data: {
			meta: {
				title: 'Learn-Angular2 Contact',
				description: 'If you find any error, issues or want to send any suggestion. You can Contact me. Please fill you details.'
			},
			post_tags: ['Contact', 'Abhishek Jha'],
			post_title: 'Learn-Angular2 Contact',
			post_description: '',
			post_image_url: '',
			show_in_related_post: 'false'
		}
	},
	{
		path: 'guide',
		component: GuideComponent,
		data: {
			meta: {
				title: 'Angular2 Guide',
				description: 'Know about the author of this website'
			},
			post_tags: ['About', 'Author', 'Abhishek Jha'],
			post_title: 'Author - Abhishek Jha',
			post_description: '',
			post_image_url: '',
			show_in_related_post: 'false'
		}
	},
	{
		path: 'quiz',
		component: QuizComponent,
		data: {
			meta: {
				title: 'Angular2 Quiz',
				description: 'Know about the author of this website'
			},
			post_tags: ['About', 'Author', 'Abhishek Jha'],
			post_title: 'Author - Abhishek Jha',
			post_description: '',
			post_image_url: '',
			show_in_related_post: 'false'
		}
	},
	{
		path: 'data-sharing-using-service',
		component: DataSharingPostComponent,
		data: {
			meta: {
				title: 'Share data Across 2 Components usign services in Angular2',
				description: 'Services are used to share data between components. They follow a module pattern that allows you to share the data throughout your application so that your data is consistent and in sync.'
			},
			post_tags: ['angular2', 'share-data', 'service', 'component-communication'],
			post_title: 'Share data Across 2 Components usign services in Angular2',
			post_description: 'Services are used to share data between components and perform the task that can be used by multiple components.',
			post_image_url: '',
			show_in_related_post: 'true'
		}
	},
	{
		path: 'angular2-logger',
		component: LoggerPostComponent,
		data: {
			meta: {
				title: 'Log Error, Debug and Info messages to console and server in Angular2',
				description: 'Loggers are used to track the errors of applications whenever any error occured to the application. You can also use the logger to debug the code.'
			},
			post_tags: ['angular2', 'logger', 'log', 'debug', 'error', 'console-message'],
			post_title: 'Log Error, Debug and Info messages to console and server in Angular2',
			post_description: 'Loggers are used to track the errors of applications whenever any error occured to the application.',
			post_image_url: '',
			show_in_related_post: 'true'
		}
	},
	{
		path: 'adding-metaInfo-in-angular2',
		component: AddMetadataPostComponent,
		data: {
			meta: {
				title: 'Add title,  meta description & meta Info to WebAPP in Angular2',
				description: 'To Imporve your website ranking in search result your webpage must be optimized, and adding the proper title and meta information to it is first step for SEO optimization. So, Lets see how we can do it in angular2'
			},
			post_tags: ['angular2', 'metainfo', 'page-title', 'page-description'],
			post_title: 'Add title,  meta description & meta Info to WebAPP in Angular2',
			post_description: 'Adding HTML meta information and page title for different route in Angular.',
			post_image_url: '',
			show_in_related_post: 'true'
    	}
	},
	{
		path: 'resolving-404-error-on-page-refresh',
		component: OnRefresh404PostComponent,
		data: {
			meta: {
				title: 'Angular2-routing: 404 error when page is refreshed',
				description: 'Angular by default uses HTML5 pushstate (PathLocationStrategy) and uses html5 routing by default rather than using hashes at the end of the url, refreshing the page looks like a request for a different resource.'
			},
			post_tags: ['angular2', '404-resolver', 'page-refresh'],
			post_title: 'Resolving 404 error when page is refreshed',
			post_description: 'Resolving page not found error when page is refreshed using hashbang strategy in Angular.',
			post_image_url: '',
			show_in_related_post: 'true'
    	}
	},
	{
		path: 'show-hide-using-ngswitch-angular2',
		component: NgSwitchExamplePostComponent,
		data: {
			meta: {
				title: 'Show, Hide elements using ngSwitch',
				description: 'ngSwitch can be used to show and hide HTML elements depending upon the switch case. It is very similar to a switch statement in javaScript and other languages.'
			},
			post_tags: ['angular2', 'ngswitch', 'show', 'hide'],
			post_title: 'show-hide-using-ngswitch-angular2',
			post_description: 'Show and hide HTML elements depending upon the switch case in Angular.',
			post_image_url: '',
			show_in_related_post: 'true'
    	}
	},
	{
		path: 'ngIf-hidden-in-angular2',
		component: ShowHideExamplePostComponent,
		data: {
			meta: {
				title: 'Show and hide elements using ngIf and hidden in Angular2',
				description: 'ngIf is a structural directive, it creates or destroy contents inside the DOM conditionally. While hidden directive simply show and hide the HTML DOM conditionally.'
			},
			post_tags: ['angular2', 'ngif', 'hidden', 'show', 'hide'],
			post_title: 'Show and hide elements using ngIf and hidden in Angular2',
			post_description: 'Difference between ngIf and hidden directive using example in Angular',
			post_image_url: '',
			show_in_related_post: 'true'
    	}
	},
	{
		path: 'form-validation-in-angular2',
		component: FormValidationPostComponent,
		data: {
			meta: {
				title: 'Form Validation in Angular2',
				description: 'This article is about validate user input in the UI and display useful validation messages and prevent the user from submitting if it is invalid using Template Driven Form.'
			},
			post_tags: ['angular2', 'form-validation', 'form'],
			post_title: 'Form validation example in Angular',
			post_description: 'Validate user input in the UI and display useful validation messages.',
			post_image_url: '',
			show_in_related_post: 'true'
    	}
	},
	{
		path: 'search-result-highlighter-in-angular2',
		component: SearchHighlighterPostComponent,
		data: {
			meta: {
				title: 'Search result highlighter in Angular2',
				description: "This article is about filtering the data and highlighting the filtered/searched results using Pipe in angular2."
			},
			post_tags: ['angular2', 'search', 'search-highlighter'],
			post_title: 'Search result highlighter in Angular2',
			post_description: 'Filtering the data and highlighting the filtered/searched results using Pipe in angular',
			post_image_url: '',
			show_in_related_post: 'true'
    	}
	},
	{
		path: 'http-get-and-post-in-angular2',
		component: HttpGetPostComponent,
		data: {
			meta: {
				title: 'Angular2 Http get() & post() using Observable and Promise',
				description: 'The angular Http library is the primary protocol for client/server communication. It communicates with the server using Http request/response protocol using XMLHttpRequest as the default backend.'
			},
			post_tags: ['angular2', 'http', 'get()', 'post()', 'observable', 'promise', 'client-server-communication'],
			post_title: 'Angular2 Http get() & post() using Observable and Promise',
			post_description: 'Client-server communication using http protocol in Angular.',
			post_image_url: '',
			show_in_related_post: 'true'
    	}
	},
	{
		path: 'show-image-preview',
		component: ImagePreviewPostComponent,
		data: {
			meta: {
				title: 'Show Uploaded Image Preview in Angular2',
				description: 'This Post explain about How we can show the preview of the uploaded Image File in Angular2'
			},
			post_tags: ['angular2', 'image-upload', 'image-preview'],
			post_title: 'Show Uploaded Image Preview in Angular2',
			post_description: 'Show preview of uploaded Image File in Angular2',
			post_image_url: '',
			show_in_related_post: 'true'
		}
	},
	{
		path: 'drag-drop-image',
		component: ImageDragDropPostComponent,
		data: {
			meta: {
				title: 'Upload Image using drag & drop in Angular2',
				description: 'This Post explain about How we can upload images by drag & drop in Angular'
			},
			post_tags: ['angular2', 'image-upload', 'image-preview', 'drag&drop'],
			post_title: 'Upload Image using drag & drop in Angular2',
			post_description: 'Image Upload using drag & drop',
			post_image_url: '',
			show_in_related_post: 'true'
		}
	},
	{
		path: 'show-related-post',
		component: RelatedPostExampleComponent,
		data: {
			meta: {
				title: 'Show Related Post in Angular2',
				description: 'This Post explain about How we can show all the post that are related to current post using in Angular2'
			},
			post_tags: ['angular2', 'related-post', 'tags', 'labels'],
			post_title: 'Show Related Post in Angular2',
			post_description: 'Show all the post that are related to current post using in Angular2',
			post_image_url: '',
			show_in_related_post: 'true'
		}
	},
	{
		path: '404',
		component: NotFoundComponent,
		data: {
			post_tags: [],
			post_title: "Error",
			post_description: 'Something went wrong.',
			show_in_related_post: 'false'
		}
	},
	{
		path: '**',
		redirectTo: '/404'
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
  })

export class AppRoutingModule {
	constructor(private router: Router) {

	}

}