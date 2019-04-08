import { Component } from '@angular/core';
import { initDomAdapter } from '@angular/platform-browser/src/browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  startTime = new Date();
  startMonth = this.startTime.getMonth();
  startDay = this.startTime.getDay();
  startYear = this.startTime.getFullYear();
  startHour = this.startTime.getHours();
  startMinute = this.startTime.getMinutes();
  startSecond = this.startTime.getSeconds();
  ngOnInit() {
    var currentTime = new Date();
    //var currentMonth = currentTime.getMonth();
    var currentDay = currentTime.getDay();
    //var currentYear = currentTime.getFullYear();
    var currentHour = currentTime.getHours();
    var currentMinute = currentTime.getMinutes();
    var currentSecond = currentTime.getSeconds();
    
   // var monthsSpent = currentMonth - this.startMonth;
    var daysSpent = currentDay - this.startDay;
    //var yearsSpent = currentYear - this.startYear;
    var hoursSpent = currentHour - this.startHour;
    var minutesSpent = currentMinute - this.startMinute;
    var secondsSpent = currentSecond - this.startSecond;

    if(minutesSpent <= 0) {
      console.log(secondsSpent + " seconds.");
    } else if(hoursSpent <= 0) {
      console.log(minutesSpent + " minutes " + secondsSpent + " seconds.");
    } else if(daysSpent <= 0) {
      console.log(hoursSpent + " hours " + minutesSpent + " minutes " + secondsSpent + " seconds.");
    } else {
      console.log("error");
    }
  }
}