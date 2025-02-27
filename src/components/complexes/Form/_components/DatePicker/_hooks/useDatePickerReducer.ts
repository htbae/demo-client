import { useReducer, useMemo, useEffect } from 'react';
import datePickerReducer from '../date-picker-reducer';
import { CHAR } from '@/constants/ui-text';
import DateUtil from '@/utils/date-util';
import { Dayjs } from 'dayjs';

const useDatePickerReducer = ({
  value,
  onChange,
}: {
  value?: string;
  onChange?: (date: string) => void;
}) => {
  const { action, init, reducer } = datePickerReducer;

  const [state, dispatch] = useReducer(reducer, init);
  const { isMonth, isOpen, isYear } = state;

  const dateValue = useMemo(() => {
    if (!value || value === CHAR.EMPTY) {
      return undefined;
    }
    const parsedDate = DateUtil.parse(value);
    return !parsedDate.isValid() ? undefined : parsedDate.toDate();
  }, [value]);

  // Reset component if opened
  useEffect(() => {
    if (!isOpen) {
      dispatch({ type: action.RESET_MODE });
    }
  }, [isOpen, action.RESET_MODE]);

  // Event handler
  const clickHandler = ({
    before,
    after,
  }: {
    before?: string;
    after?: string;
  }) => {
    if (!after) {
      onChange?.(CHAR.EMPTY);
      return;
    }

    const beforeDate = DateUtil.parse(before);
    const afterDate = DateUtil.parse(after);

    let newDate: Dayjs;

    if (isYear) {
      newDate = beforeDate.isValid()
        ? beforeDate.year(afterDate.year())
        : afterDate;
      dispatch({
        type: action.SET,
        payload: { isYear: false, isMonth: true },
      });
    } else if (isMonth) {
      newDate = beforeDate.month(afterDate.month());
      dispatch({ type: action.SET_MONTH, payload: false });
    } else {
      newDate = afterDate;
    }

    onChange?.(newDate.format());
  };

  return {
    value: dateValue,
    isOpen,
    isMonth,
    isYear,
    action,
    clickHandler,
    dispatch,
  };
};

export default useDatePickerReducer;
