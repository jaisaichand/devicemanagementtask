import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { MainpartComponent } from './mainpart/mainpart.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftbarComponent,
    MainpartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
