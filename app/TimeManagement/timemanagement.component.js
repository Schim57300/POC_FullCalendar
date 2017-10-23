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
var TimeManagement = (function () {
    function TimeManagement(_elRef) {
        this._elRef = _elRef;
        this.events = [];
    }
    TimeManagement.prototype.ngAfterViewInit = function () {
        jQuery(this._elRef.nativeElement).find('.fc-day-header').each(function () {
            $(this).html($(this).text().substring(0, 2));
        });
        jQuery(this._elRef.nativeElement).find('.fc-prev-button span').html('&laquo;');
        jQuery(this._elRef.nativeElement).find('.fc-next-button span').html('&raquo;');
        jQuery(this._elRef.nativeElement).find('.fc-today').attr('day-number', new Date().getDate());
    };
    TimeManagement.prototype.ngOnInit = function () {
        this.fullCalendarOption = {
            firstDay: 1,
        };
        this.header = {
            left: 'prev,next',
            center: 'title',
            right: 'prev,next'
        };
    };
    TimeManagement = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'timeManagement',
            templateUrl: 'timemanagement.component.html',
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], TimeManagement);
    return TimeManagement;
}());
exports.TimeManagement = TimeManagement;
//# sourceMappingURL=timemanagement.component.js.map