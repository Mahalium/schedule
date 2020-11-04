import { ScheduleDay } from './schedule-day'

export class Schedule {
  start: Date;
  end?: Date;
  schedule_days: ScheduleDay[]
}