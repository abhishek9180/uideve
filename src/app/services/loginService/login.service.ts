import { Inject, Injectable, EventEmitter } from '@angular/core';

import { LoginBean } from '../../modals/login.modal';
declare const gapi: any;

@Injectable()
export class LoginService {

    //Google client ID
    googleClientId: string = '964449167882-4316gqc1abfmmu023m7pkjitla1o4uhj.apps.googleusercontent.com';
    scope = [
        'profile',
        'email',
        'https://www.googleapis.com/auth/plus.me',
        'https://www.googleapis.com/auth/contacts.readonly',
        'https://www.googleapis.com/auth/admin.directory.user.readonly'
    ].join(' ');
    public auth2: any;
    public profile: LoginBean;
    profileUpdated:EventEmitter<LoginBean> = new EventEmitter();

    constructor() {

    }

    public googleInit(element) {
        let that = this;
        gapi.load('auth2', function () {
            that.auth2 = gapi.auth2.init({
                client_id: that.googleClientId,
                cookiepolicy: 'single_host_origin',
                scope: that.scope
            });
            that.attachSignin(element.nativeElement);
        });
    }

    public attachSignin(element) {
        let that = this;
        this.auth2.attachClickHandler(element, {},
            function (googleUser) {
                that.profile = new LoginBean(googleUser.getAuthResponse().id_token, googleUser.getBasicProfile().getId(), googleUser.getBasicProfile().getName(), googleUser.getBasicProfile().getImageUrl(), googleUser.getBasicProfile().getEmail());
                that.profileUpdated.emit(that.profile);
                //console.log('User: ' + JSON.stringify(that.profile));
                //YOUR CODE HERE
            }, function (error) {
                console.log(JSON.stringify(error, undefined, 2));
            });
    }

    public googleLogout() {
        let that = this;
        this.auth2.signOut().then(function () {
            that.profile = new LoginBean('', '', '', '', '');
            that.profileUpdated.emit(that.profile);
            console.log('User signed out.');
        });
    }
}