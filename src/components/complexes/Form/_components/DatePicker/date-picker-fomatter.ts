import DateUtil from '@/utils/date-util';

const dateToString = (date?: Date | null) => {
  if (date) {
    return DateUtil.parse(date).format();
  }
  return '';
};

const stringToDate = (date?: string) => {
  if (date) {
    return DateUtil.parse(date).toDate();
  }
  return undefined;
};

const datePickerFormatter = { dateToString, stringToDate };

export default datePickerFormatter;
