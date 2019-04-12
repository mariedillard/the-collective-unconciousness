import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TimeKeeperComponent } from './time-keeper/time-keeper.component';
import { UserTimerComponent } from './user-timer/user-timer.component';
import { CollectiveTimerComponent } from './collective-timer/collective-timer.component';
import { CollectiveTrackingComponent } from './collective-tracking/collective-tracking.component';


@NgModule({
  declarations: [
    AppComponent,
    TimeKeeperComponent,
    UserTimerComponent,
    CollectiveTimerComponent,
    CollectiveTrackingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
