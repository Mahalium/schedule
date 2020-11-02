import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { spoofSchedule } from '../../data/schedules';
import { endOfMonth, endOfWeek, startOfWeek } from 'date-fns'

const calendarViews = {
  MONTH: 0,
  WEEK: 1,
  DAY: 2,
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent implements OnInit {
  schedule: CalendarEvent[] = spoofSchedule;
  activeDate: Date = spoofSchedule[0].start;
  viewDate: Date = this.activeDate;
  calendarView: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  zoomWeek(e){
    this.calendarView = calendarViews.WEEK
    this.activeDate = e.day.date
    this.viewDate =  startOfWeek(e.day.date)
  }

  viewSwap(e){
    this.calendarView = e.index

    switch (this.calendarView) {
      case calendarViews.WEEK:
        this.viewDate = startOfWeek(this.activeDate)
        break;

      case calendarViews.MONTH:
        this.viewDate = endOfMonth(this.activeDate)
        break;
    }
  }
}
