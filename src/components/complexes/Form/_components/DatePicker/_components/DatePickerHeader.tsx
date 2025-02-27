import dayjs from 'dayjs';
import { ReactDatePickerCustomHeaderProps } from 'react-datepicker';
import DatePickerButton from './DatePickerButton';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { useCallback } from 'react';

interface DatePickerHeaderType extends ReactDatePickerCustomHeaderProps {
  isYearMode: boolean;
  isMonthMode: boolean;
  onToggleYearMode: (isYearMode: boolean) => void;
}

const DatePickerHeader = (props: DatePickerHeaderType) => {
  const {
    date,
    isYearMode,
    isMonthMode,
    onToggleYearMode,
    decreaseMonth,
    increaseMonth,
    decreaseYear,
    increaseYear,
    changeYear,
  } = props;

  const dateMoment = dayjs(date);

  const handleChange = useCallback(
    (direction: 'prev' | 'next') => {
      const isPrev = direction === 'prev';
      const updateYear = (year: number) =>
        isPrev ? changeYear(year - 12) : changeYear(year + 12);

      if (isYearMode) {
        updateYear(date.getFullYear());
      } else if (isMonthMode) {
        if (isPrev) {
          decreaseYear();
        } else {
          increaseYear();
        }
      } else {
        if (isPrev) {
          decreaseMonth();
        } else {
          increaseMonth();
        }
      }
    },
    [
      date,
      isMonthMode,
      isYearMode,
      changeYear,
      decreaseMonth,
      increaseMonth,
      decreaseYear,
      increaseYear,
    ]
  );

  return (
    <div className='mb-6'>
      <div className='flex justify-between px-4 py-0'>
        <div>
          <DatePickerButton
            icon={<MdKeyboardArrowLeft />}
            onClick={() => handleChange('prev')}
          />
        </div>
        <div>
          <span
            className='cursor-pointer text-[1.8rem] select-none'
            onClick={() => onToggleYearMode(true)}
          >
            {dateMoment.format('MMMM')} {dateMoment.format('YYYY')}
          </span>
        </div>
        <div>
          <DatePickerButton
            icon={<MdKeyboardArrowRight />}
            onClick={() => handleChange('next')}
          />
        </div>
      </div>
    </div>
  );
};

export default DatePickerHeader;
