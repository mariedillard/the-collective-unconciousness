import { Component } from '@angular/core';

@Component({
  selector: 'app-user-timer',
  templateUrl: './user-timer.component.html',
  styleUrls: ['./user-timer.component.css']
})
export class UserTimerComponent{
  userStartSeconds = 0;
  userSpent = "0 sec.";

  public userTime() {
    this.userStartSeconds ++;
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

 refreshUserTime = setInterval(()=> this.userTime(), 1000);
}
