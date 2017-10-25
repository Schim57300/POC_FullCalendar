//Angular
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations/';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';

//Services
//PrimeNG
import {
    CalendarModule,
    ScheduleModule,
} from 'primeng/primeng';

@NgModule({
  imports: [ BrowserAnimationsModule,BrowserModule, FormsModule, HttpModule, ReactiveFormsModule,
      CalendarModule, ScheduleModule,
  ],       // module dependencies
  declarations: [
      AppComponent],
  bootstrap: [ AppComponent ],     // root component

  providers: [
    ] // services
})
export class AppModule { }
