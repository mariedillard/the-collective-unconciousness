import { Component } from '@angular/core';

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
  timeSpent;
  
  timeHere = function(currentTime, currentMonth, currentDate, currentDay, currentYear, currentHour, currentMinute, currentSecond, monthsSpent, daysSpent, yearsSpent, hoursSpent, minutesSpent, secondsSpent) {
    currentTime = new Date();
    currentMonth = this.currentTime.getMonth();
    currentDay = this.currentTime.getDay();
    currentYear = this.currentTime.getFullYear();
    currentHour = this.currentTime.getHours();
    currentMinute = this.currentTime.getMinutes();
    currentSecond = this.currentTime.getSeconds();
    
    monthsSpent = this.currentMonth - this.startMonth;
    daysSpent = this.currentDay - this.startDay;
    yearsSpent = this.currentYear - this.startYear;
    hoursSpent = this.currentHour - this.startHour;
    minutesSpent = this.currentMinute - this.startMinute;
    secondsSpent = this.currentSecond - this.startSecond;

    if(minutesSpent <= 0) {
      this.timeSpent = secondsSpent + " seconds.";
    } else if(hoursSpent <= 0) {
      this.timeSpent = minutesSpent + " minutes " + secondsSpent + " seconds.";
    } else if(daysSpent <= 0) {
      this.timeSpent = hoursSpent + " hours " + minutesSpent + " minutes " + secondsSpent + " seconds.";
    } else if (monthsSpent <= 0) {
      this.timeSpent = daysSpent + " days " +hoursSpent + " hours " + minutesSpent + " minutes " + secondsSpent + " seconds.";
    } else {

    }
  }
  $scope.useInterval = function() {
    //Show current seconds value 5 times after every 1000 ms
    $interval(updateExampleText, 1000, 5);

}