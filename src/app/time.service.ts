import { Injectable } from '@angular/core';
import { Time } from './time.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class TimeService {
  times: FirebaseListObservable<any[]>;

  constructor (private database: AngularFireDatabase) {
    this.times = database.list('times');
  }
  
  getTime(){
    //enter full time here
  }

  addTime(newTime: Time) {
    this.times.push(newTime);
  }
}