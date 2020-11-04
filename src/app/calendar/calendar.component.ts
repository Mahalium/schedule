import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { spoofSchedule, spoofExceptions } from '../../data/schedules';
import { endOfMonth, startOfWeek, addDays, getDay, addHours } from 'date-fns'
import { Schedule } from '../models/schedule';

const calendarViews = {
  MONTH: 0,
  WEEK: 1,
  DAY: 2,
}

const jobColors = {
  Selector: 'Blue',
  Auditor: 'Coral'
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent implements OnInit {
  events: CalendarEvent[] = [];
  activeDate: Date = new Date();
  viewDate: Date = new Date();
  calendarView: number = calendarViews.MONTH;
  schedules: Schedule[] = spoofSchedule;
  max_date: Date = addDays(new Date(), -100);
  min_date: Date = addDays(new Date(), 100);

  constructor() { }

  ngOnInit(): void {
    this.fillSchedule(this.schedules)
  }

  zoomWeek(e) {
    this.calendarView = calendarViews.WEEK
    this.activeDate = e.day.date
    this.viewDate =  startOfWeek(e.day.date)
  }

  viewSwap(e) {
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

  setViewDate(e) {
    this.activeDate = e.value
    this.viewSwap({index: this.calendarView})
  }

  fillSchedule(schedules: Schedule[]) {
    schedules.forEach(s => {
      let dateChump: Date = addDays(new Date(s.start), -1)

      if (this.min_date > s.start) this.min_date = s.start

      if (s.end) {
        if (this.max_date < s.end) this.max_date = s.end
      } else {
        s.end = addDays((new Date()), 100)
      }

      while (dateChump <= s.end) {
        dateChump = addDays(dateChump, 1)
        let schedule_day = s.schedule_days.find(sd => sd.day == getDay(dateChump))
        if (schedule_day) {
          this.events.push(
            {
              title: schedule_day.job,
              start: addHours(new Date(dateChump), schedule_day.start),
              end: addHours(new Date(dateChump), schedule_day.end),
              color: {
                primary: jobColors[schedule_day.job],
                secondary: jobColors[schedule_day.job]
              }
            }
          )
        }

      }
    })

    this.events.push(...spoofExceptions)
  }
}
