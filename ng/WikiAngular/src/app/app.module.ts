import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppComponent } from './app.component';
import { WikiNavBarComponent } from './wiki-nav-bar/wiki-nav-bar.component';


@NgModule({
  declarations: [

    AppComponent,
    WikiNavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
