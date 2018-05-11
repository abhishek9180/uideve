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
var _meta_service_1 = require("../../../_services/_metaInfo/_meta.service");
//import { CeiboShare } from '../../../_services/socialShare/socialshare.service';
var AddMetadataPostComponent = (function () {
    function AddMetadataPostComponent(metaService) {
        this.metaService = metaService;
        this.showRelatedPostImage = false;
        this.relatedPostMatchPercentage = 20;
        this.relatedPostCount = 5;
        window.scrollTo(0, 60);
        //this.repoUrl = "http://learn-angular2.com/#/data-sharing-using-service";
        //this.imageUrl = 'http://learn-angular2.com/favicon.ico';
    }
    return AddMetadataPostComponent;
}());
AddMetadataPostComponent = __decorate([
    core_1.Component({
        selector: 'post3',
        templateUrl: "./app/_components/_posts/_addMetadata/addMetadata-post.component.html",
    }),
    __metadata("design:paramtypes", [_meta_service_1.MetaService])
], AddMetadataPostComponent);
exports.AddMetadataPostComponent = AddMetadataPostComponent;
//# sourceMappingURL=addMetadata-post.component.js.map