import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent implements OnInit {
  viewDate: Date = new Date('1990-01-01')
  schedule: CalendarEvent[]

  constructor() { }

  ngOnInit(): void {

  }



}
