import { Component, HostListener } from '@angular/core';
import { TimeService } from '../time.service';
import { Time } from '../time.model';

@Component({
  selector: 'app-unconciousness',
  templateUrl: './unconciousness.component.html',
  styleUrls: ['./unconciousness.component.css'],
  providers: [TimeService]
})
export class UnconciousnessComponent {
  constructor(private timeService: TimeService) { }

  collectiveStartSeconds = 0;
  collectiveSpent = "0 sec.";
  pageTime = 0;


  public collectiveTime() {
    this.pageTime ++;
    this.collectiveStartSeconds = this.pageTime + this.timeService.getTime();
    if(this.collectiveStartSeconds < 60) {
      this.collectiveSpent = this.collectiveStartSeconds + " sec.";
    } else if(this.collectiveStartSeconds%3600 === 0) {
      var hours = this.collectiveStartSeconds/60;
      this.collectiveSpent = hours + " hours 0 min 0 sec.";
    } else if(this.collectiveStartSeconds%3600 !== 0 && this.collectiveStartSeconds%60 === 0) {
      var hours = Math.floor(this.collectiveStartSeconds/3600);
      var minutes = Math.floor(this.collectiveStartSeconds/60) - hours * 60;
      var seconds = this.collectiveStartSeconds%60;
      this.collectiveSpent = hours + " hours " + minutes + " min " + seconds + " sec.";
    } else if(this.collectiveStartSeconds%3600 !== 0 && this.collectiveStartSeconds%60 !== 0) {
      var hours = Math.floor(this.collectiveStartSeconds/3600);
      var minutes = Math.floor(this.collectiveStartSeconds/60) - hours * 60;
      var seconds = this.collectiveStartSeconds%60;
      this.collectiveSpent = hours + " hours " + minutes + " min " + seconds + " sec.";
    } else if (this.collectiveStartSeconds%60 === 0) {
      var minutes = this.collectiveStartSeconds/60;
      this.collectiveSpent = minutes + "min 0 sec.";
    } else if(this.collectiveStartSeconds%60 !== 0) {
      var minutes = Math.floor(this.collectiveStartSeconds/60);
      var seconds = this.collectiveStartSeconds%60;
      this.collectiveSpent = minutes + " min " + seconds + " sec.";
    }
  }

  refreshCollectiveTime = setInterval(()=> this.collectiveTime(), 1000);

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

 @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event) {
    this.timeService.addTime(this.userStartSeconds);
  }
}
