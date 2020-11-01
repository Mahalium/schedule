import { CdkPortal } from '@angular/cdk/portal';
import { NgIf } from '@angular/common';
import { mixinColor } from '@angular/material/core';
import { CalendarEvent } from 'angular-calendar';

export var spoofSchedule: CalendarEvent[] = [
  {
    id: 1,
    start:  new Date('2020-01-01 07:00:00.000'),
    end:  new Date('2020-01-01 15:00:00.000'),
    title: 'Selector',
    color: null,
    actions: null, 
    allDay: null,
    cssClass: null,
    resizable: null,
    draggable: true,
    meta: null
  },
  {
    id: 2,
    start:  new Date('2020-01-01 07:09:00.000'),
    end:  null,
    title: 'Punch In',
    color:  {
      primary: 'red',
      secondary: 'red'
    },
    actions: null, 
    allDay: null,
    cssClass: null,
    resizable: null,
    draggable: true,
    meta: null
  },
  {
    id: 3,
    start:  new Date('2020-01-01 15:15:00.000'),
    end:  null,
    title: 'Punch Out',
    color:  {
      primary: 'green',
      secondary: 'green'
    },
    actions: null, 
    allDay: null,
    cssClass: null,
    resizable: null,
    draggable: true,
    meta: null
  },
] 