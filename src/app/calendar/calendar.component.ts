import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { spoofSchedule } from '../../data/schedules';
import { startOfWeek } from 'date-fns'

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
  schedule: CalendarEvent[] = spoofSchedule
  viewDate: Date = spoofSchedule[0].start; 
  calendarView: number = 0
  
  constructor() { }

  ngOnInit(): void {
  }

  zoomWeek(e){
    this.calendarView = calendarViews.WEEK 
    this.viewDate =  startOfWeek(e.day.date)
  }

  viewSwap(e){
    this.calendarView = e.index
  }
}
