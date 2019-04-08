import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-timer',
  templateUrl: './user-timer.component.html',
  styleUrls: ['./user-timer.component.css']
})
export class UserTimerComponent implements OnInit {
  startTime = new Date();
  startMonth = this.startTime.getMonth();
  startDay = this.startTime.getDay();
  startYear = this.startTime.getFullYear();
  startHour = this.startTime.getHours();
  startMinute = this.startTime.getMinutes();
  startSecond = this.startTime.getSeconds();
  timeHere() {
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
      return secondsSpent + " seconds.";
    } else if(hoursSpent <= 0) {
      return minutesSpent + " minutes " + secondsSpent + " seconds.";
    } else if(daysSpent <= 0) {
      return hoursSpent + " hours " + minutesSpent + " minutes " + secondsSpent + " seconds.";
    } 
  };

  ngOnInit() {
  }

}
