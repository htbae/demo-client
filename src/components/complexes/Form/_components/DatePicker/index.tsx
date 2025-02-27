import DatePickerHeader from './_components/DatePickerHeader';
import { BreakPoints, useMediaQuery } from '@/hooks/ui/useMediaQuery';
import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendar } from 'react-icons/fa';
import DatePickerInput from './_components/DatePickerInput';
import useDatePickerReducer from './_hooks/useDatePickerReducer';
import datePickerFormatter from './date-picker-fomatter';
import { FormFamilyCommonType } from '../form-family-type';

interface DatePickerType extends FormFamilyCommonType {
  minDate?: string;
  maxDate?: string;
  isDisabled?: boolean;
  isClearable?: boolean;
  hasIcon?: boolean;
}

const DatePicker = React.forwardRef<HTMLInputElement, DatePickerType>(
  (props, ref) => {
    const {
      id,
      name,
      value: originValue,
      minDate,
      maxDate,
      isDisabled = false,
      isClearable = true,
      hasIcon = true,
      onChange,
    } = props;

    const { value, isMonth, isYear, clickHandler, dispatch, action } =
      useDatePickerReducer({ value: originValue, onChange });

    const { dateToString, stringToDate } = datePickerFormatter;

    const isBreak = useMediaQuery(BreakPoints.lg);

    return (
      <div className='date-picker-container'>
        <ReactDatePicker
          autoComplete='off'
          id={id}
          dateFormat='yyyy-MM-dd'
          placeholderText='YYYY-MM-DD'
          closeOnScroll={true}
          shouldCloseOnSelect={!(isYear || isMonth)}
          selected={value}
          withPortal={isBreak}
          disabled={isDisabled}
          showYearPicker={isYear}
          showMonthYearPicker={isMonth}
          isClearable={!isDisabled && isClearable}
          todayButton='today'
          minDate={stringToDate(minDate)}
          maxDate={stringToDate(maxDate)}
          icon={<FaCalendar />}
          showIcon={hasIcon}
          customInput={<DatePickerInput name={name} ref={ref} />}
          renderCustomHeader={(props) => (
            <DatePickerHeader
              onToggleYearMode={(value) =>
                dispatch({ type: action.SET_YEAR, payload: value })
              }
              isMonthMode={isMonth}
              isYearMode={isYear}
              {...props}
            />
          )}
          onChange={(d) => {
            clickHandler({
              before: dateToString(value),
              after: dateToString(d),
            });
          }}
          onCalendarClose={() =>
            dispatch({ type: action.SET_OPEN, payload: false })
          }
          onCalendarOpen={() =>
            dispatch({ type: action.SET_OPEN, payload: true })
          }
        />
      </div>
    );
  }
);

export type { DatePickerType };
export default DatePicker;
