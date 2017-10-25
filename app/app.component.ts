/// <reference path="../typings/jquery/jquery.d.ts" />
import {Component, OnInit, ElementRef} from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
})
export class AppComponent {

    events: any = [];
    header: any;
    fullCalendarOption : any;

    constructor(private _elRef: ElementRef) {
    }

    ngAfterViewInit() {
        jQuery(this._elRef.nativeElement).find('.fc-day-header').each(function () {
            $(this).html($(this).text().substring(0, 2));
        });

        jQuery(this._elRef.nativeElement).find('.fc-prev-button span').html('&laquo;');
        jQuery(this._elRef.nativeElement).find('.fc-next-button span').html('&raquo;');

        jQuery(this._elRef.nativeElement).find('.fc-today').attr('day-number', new Date().getDate());

    }

    ngOnInit() {
        //Fullcalendar initialization
        this.fullCalendarOption = {
            firstDay: 1,
        };

        this.header = {
            left: 'prev,next',
            center: 'title',
            right: 'prev,next'
        };
    }



}
