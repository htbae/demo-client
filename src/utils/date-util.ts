import { DateType } from '@/types/fetching/fetch-common-type';
import dayjs, { ConfigType } from 'dayjs';
import duration from 'dayjs/plugin/duration';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(duration);

const DateUtil = {
  now: () => dayjs().format(),
  format: (value?: DateType, format = 'YYYY-MM-DD') =>
    value ? dayjs(value).format(format) : '',
  parse: (date?: ConfigType) => dayjs(date),
  diff: (date1: DateType, date2: DateType) => {
    const diffInMilliseconds = Math.abs(
      dayjs(date2).valueOf() - dayjs(date1).valueOf()
    );
    const diffDuration = dayjs.duration(diffInMilliseconds);

    return {
      seconds: diffDuration.seconds(),
      minutes: diffDuration.minutes(),
      hours: diffDuration.hours(),
      days: diffDuration.days(),
      months: diffDuration.months(),
      years: diffDuration.years(),

      asSeconds: diffDuration.asSeconds(),
      asMinutes: diffDuration.asMinutes(),
      asHours: diffDuration.asHours(),
      asDays: diffDuration.asDays(),
      asMonths: diffDuration.asMonths(),
      asYears: diffDuration.asYears(),
    };
  },
};

export default DateUtil;
