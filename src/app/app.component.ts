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
  startSeconds = 0;
  // startTime = new Date();
  // startMonth = this.startTime.getMonth();
  // startDay = this.startTime.getDay();
  // startYear = this.startTime.getFullYear();
  // startHour = this.startTime.getHours();
  // startMinute = this.startTime.getMinutes();
  // startSecond = this.startTime.getSeconds();

  public userTime() {
    // var currentTime = new Date();
    // //var currentMonth = currentTime.getMonth();
    // var currentDay = currentTime.getDay();
    // //var currentYear = currentTime.getFullYear();
    // var currentHour = currentTime.getHours();
    // var currentMinute = currentTime.getMinutes();
    // var currentSecond = currentTime.getSeconds();
    // // var monthsSpent = currentMonth - this.startMonth;
    // var daysSpent = currentDay - this.startDay;
    // //var yearsSpent = currentYear - this.startYear;
    // var hoursSpent = currentHour - this.startHour;
    // var minutesSpent = currentMinute - this.startMinute;
    // var secondsSpent = currentSecond - this.startSecond;
    
    // console.log(daysSpent + " days " + hoursSpent + " hours " + minutesSpent + " minutes " + secondsSpent + " seconds.")

    this.startSeconds += 1;
    if(this.startSeconds < 60) {
      console.log(this.startSeconds);
    } else if(this.startSeconds%60 === 0) {
      var minutes = this.startSeconds/60;
      console.log(minutes + ":0");
    } else if(this.startSeconds%60 !== 0) {
      var minutes = Math.floor(this.startSeconds/60);
      var seconds = this.startSeconds%60;
      console.log(minutes + ":" + seconds);
    }
  }

 getUserTime = setInterval(()=> this.userTime(), 1000);
}