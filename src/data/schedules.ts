import { ScheduleDay } from '../app/models/schedule-day'
import { Schedule } from '../app/models/schedule'
import { CalendarEvent } from 'angular-calendar';



export var spoofSchedule: Schedule[] = [
  {
    start: new Date('2020-11-06 00:00:00'),
    end: null,
    schedule_days: [
      {
        day: 2,
        start:  15,
        end:  23,
        job: 'Auditor'
      },
      {
        day: 3,
        start:  15,
        end:  23,
        job: 'Auditor'
      },
      {
        day: 4,
        start:  15,
        end:  23,
        job: 'Auditor'
      },
      {
        day: 5,
        start:  15,
        end:  23,
        job: 'Auditor'
      },
      {
        day: 6,
        start: 15,
        end: 23,
        job: 'Auditor'
      },
    ]
  },
  {
    start: new Date('2020-01-01 00:00:00'),
    end: new Date('2020-11-05'),
    schedule_days: [
      {
        day: 1,
        start: 7,
        end: 15,
        job: 'Selector'
      },
      {
        day: 2,
        start:  7,
        end:  15,
        job: 'Selector'
      },
      {
        day: 3,
        start:  7,
        end:  15,
        job: 'Selector'
      },
      {
        day: 4,
        start:  7,
        end:  15,
        job: 'Selector'
      },
      {
        day: 5,
        start: 7,
        end: 15,
        job: 'Selector'
      },
    ]
  }
]

export var spoofExceptions: CalendarEvent[] = [
  {
    start:  new Date('2020-11-02 7:08:00.000'),
    end:  null,
    title: 'Punch In',
    color:  {
      primary: 'orange',
      secondary: 'orange'
    },
  },
  {
    start:  new Date('2020-11-02 15:08:00.000'),
    title: 'Punch Out',
    color:  {
      primary: 'green',
      secondary: 'green'
    },
  },
  {
    start:  new Date('2020-011-03 07:00:00.000'),
    end:  new Date('2020-11-03 15:00:00.000'),
    color: {
      primary: 'purple',
      secondary: 'purple'
    },
    title: 'Paid Sick',
  },
  {
    start:  new Date('2020-11-04 07:00:00.000'),
    end:  new Date('2020-11-04 15:00:00.000'),
    color: {
      primary: 'red',
      secondary: 'red'
    },
    actions: [
      {
        label: 'Unaccounted',
        onClick:e=>{console.log(e)}
      }
    ],
    title: 'Absence',
  },
]