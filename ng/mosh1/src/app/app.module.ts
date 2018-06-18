import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import {EmailService} from './email.service';
import { InputcompComponent } from './inputcomp/inputcomp.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    InputcompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
