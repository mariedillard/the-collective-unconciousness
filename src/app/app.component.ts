import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  startTime = new Date();

  currentMonth = this.startTime.getMonth();
  currentDay = this.startTime.getDay();
  currentYear = this.startTime.getFullYear();
  currentHour = this.startTime.getHours();
  currentMinutes = this.startTime.getMinutes();
  currentSeconds = this.startTime.getSeconds();

  function($scope, $interval) {
    $scope.clock = new Date();
    var updateClock = function() {
      $scope.clock = new Date();
    };
    $interval(updateClock, 1000);
  }
}
