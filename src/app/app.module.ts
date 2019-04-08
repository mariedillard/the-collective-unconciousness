import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TimeKeeperComponent } from './time-keeper/time-keeper.component';


@NgModule({
  declarations: [
    AppComponent,
    TimeKeeperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
