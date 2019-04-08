import { Component } from '@angular/core';
import { initDomAdapter } from '@angular/platform-browser/src/browser';
import { getLocaleTimeFormat } from '@angular/common';
import { UserTimerComponent } from './user-timer/user-timer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userStartSeconds = 0;
  userSpent = "0 sec.";

  collectiveStartSeconds = 3601;
  collectiveSpent = "0 sec.";


  public userTime() {
    this.userStartSeconds += 1;
    if(this.userStartSeconds < 60) {
      this.userSpent = this.userStartSeconds + " sec.";
    } else if(this.userStartSeconds%60 === 0) {
      var minutes = this.userStartSeconds/60;
      this.userSpent = minutes + "min 0 sec.";
    } else if(this.userStartSeconds%60 !== 0) {
      var minutes = Math.floor(this.userStartSeconds/60);
      var seconds = this.userStartSeconds%60;
      this.userSpent = minutes + " min " + seconds + " sec.";
    } else if(this.userStartSeconds%3600 === 0)
    {
      this.userSpent = "I hope you feel less alone.";
    }
  }

  public collectiveTime() {
    
  }

 refreshUserTime = setInterval(()=> this.userTime(), 1000);
}