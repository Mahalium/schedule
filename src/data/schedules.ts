import { CalendarEvent } from 'angular-calendar';

export var spoofSchedule: CalendarEvent[] = [
  {
    id: 1,
    start:  new Date('2020-01-01 07:00:00.000'),
    end:  new Date('2020-01-01 15:00:00.000'),
    title: 'Selector',
  },
  {
    id: 2,
    start:  new Date('2020-01-01 07:09:00.000'),
    end:  null,
    title: 'Punch In',
    color:  {
      primary: 'orange',
      secondary: 'orange'
    },
  },
  {
    id: 3,
    start:  new Date('2020-01-01 15:15:00.000'),
    title: 'Punch Out',
    color:  {
      primary: 'green',
      secondary: 'orange'
    },
    actions: [
      {
        id: 1,
        label: 'Unaccounted',
        onClick:e=>{console.log(e)}
      }
    ],
  },
  {
    id: 1,
    start:  new Date('2020-01-02 07:00:00.000'),
    end:  new Date('2020-01-02 15:00:00.000'),
    title: 'Selector',
  },
  {
    id: 1,
    start:  new Date('2020-01-02 07:00:00.000'),
    end:  new Date('2020-01-02 15:00:00.000'),
    color: {
      primary: 'purple',
      secondary: 'purple'
    },
    title: 'Paid Sick',
  },
  {
    id: 1,
    start:  new Date('2020-01-03 07:00:00.000'),
    end:  new Date('2020-01-03 15:00:00.000'),
    title: 'Selector',
  },
  {
    id: 1,
    start:  new Date('2020-01-03 07:00:00.000'),
    end:  new Date('2020-01-03 15:00:00.000'),
    color: {
      primary: 'red',
      secondary: 'red'
    },
    actions: [
      {
        id: 1,
        label: 'Unaccounted',
        onClick:e=>{console.log(e)}
      }
    ],
    title: 'Absence',
  },
]