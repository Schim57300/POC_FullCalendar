"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var _1 = require("@angular/platform-browser/animations/");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/operator/toPromise");
var timemanagement_component_1 = require("./TimeManagement/timemanagement.component");
var primeng_1 = require("primeng/primeng");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [_1.BrowserAnimationsModule, platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, forms_1.ReactiveFormsModule,
                primeng_1.CalendarModule, primeng_1.SelectButtonModule, primeng_1.DataListModule, primeng_1.ScheduleModule, primeng_1.InputSwitchModule, primeng_1.TabViewModule, primeng_1.TabMenuModule, primeng_1.FileUploadModule,
            ],
            declarations: [
                app_component_1.AppComponent, timemanagement_component_1.TimeManagement
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: []
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map