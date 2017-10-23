//Angular
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations/';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'
import 'rxjs/operator/toPromise';
import {TimeManagement} from './TimeManagement/timemanagement.component';
//Services
//PrimeNG
import {
    CalendarModule,
    DataListModule,
    FileUploadModule,
    InputSwitchModule,
    ScheduleModule,
    SelectButtonModule,
    TabMenuModule,
    TabViewModule
} from 'primeng/primeng';

@NgModule({
  imports: [ BrowserAnimationsModule,BrowserModule, FormsModule, HttpModule, ReactiveFormsModule,
      CalendarModule, SelectButtonModule, DataListModule, ScheduleModule, InputSwitchModule, TabViewModule,  TabMenuModule, FileUploadModule,
  ],       // module dependencies
  declarations: [
      AppComponent, TimeManagement],
  bootstrap: [ AppComponent ],     // root component

  providers: [
    ] // services
})
export class AppModule { }
