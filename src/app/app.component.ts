import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  start time = new Date();
  var startMonth = this.startTime.getMonth();
  var startDay = this.startTime.getDay();
  var startYear = this.startTime.getFullYear();
  var startHour = this.startTime.getHours();
  var startMinutes = this.startTime.getMinutes();
  var startSeconds = this.startTime.getSeconds();
  
  timeHere = function(currentTime, currentMonth, currentDate, currentDay, currentYear, currentHour, currentMinute, currentSecond, timeSpent) {
    currentTime = new Date();
    currentMonth = this.currentTime.getMonth();
    currentDay = this.currentTime.getDay();
    currentYear = this.currentTime.getFullYear();
    currentHour = this.currentTime.getHours();
    currentMinute = this.currentTime.getMinutes();
    currentSecond = this.currentTime.getSeconds();
    
    timeSpent = startMonth - ;
  };
}
