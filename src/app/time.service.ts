import { Injectable } from '@angular/core';
import { Time } from './time.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class TimeService {
  times: FirebaseListObservable<any[]>;

  constructor (private database: AngularFireDatabase) {
    this.times = database.list('times');
  }
  
  getTime() {
    let secondsSum: number;
    this.database.list("/times/").subscribe(_data => {
      secondsSum = _data.reduce((sum,item)=>sum+item.seconds,0);
    });
    return secondsSum;
  }

  addTime(newTime: number) {
    this.times.push(new Time(newTime));
  }
}