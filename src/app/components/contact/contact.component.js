"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var _meta_service_1 = require("../../_services/_metaInfo/_meta.service");
var contact_service_1 = require("./contact.service");
var alert_service_1 = require("../../_services/alert.service");
var ContactComponent = (function () {
    function ContactComponent(contactService, alertService, metaService) {
        this.contactService = contactService;
        this.alertService = alertService;
        this.metaService = metaService;
        this.model = {
            username: "",
            email: "",
            comment: ""
        };
        this.message = {
            text: '',
            type: ''
        };
        window.scrollTo(0, 60);
    }
    ContactComponent.prototype.ngOnInit = function () { };
    ContactComponent.prototype.onSubmit = function () {
        var _this = this;
        var email = this.model;
        this.contactService.postEmail(email).subscribe(function (response) { return _this.handleResponse(response); }, function (error) { return _this.handleResponse(error); });
    };
    ContactComponent.prototype.handleResponse = function (response) {
        // console.log(`msg is: {response.status}`);
        console.log("Response : " + response.status);
        if (response.status == 200) {
            this.alertService.success("Thank you for Your response, we'll surely review it.");
        }
        else {
            this.alertService.success("Error: Something went wrong.");
        }
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    core_1.Component({
        selector: 'contact',
        templateUrl: "./app/_components/_contact/contact.component.html",
        providers: [contact_service_1.ContactService]
    }),
    __metadata("design:paramtypes", [contact_service_1.ContactService, alert_service_1.AlertService, _meta_service_1.MetaService])
], ContactComponent);
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map