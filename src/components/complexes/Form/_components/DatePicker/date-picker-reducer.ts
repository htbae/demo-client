interface StateType {
  isOpen: boolean;
  isYear: boolean;
  isMonth: boolean;
}

const StateInit: StateType = {
  isOpen: false,
  isYear: false,
  isMonth: false,
};

enum DatePickerAction {
  SET = 'SET_STATE',
  SET_OPEN = 'SET_OPEN',
  SET_YEAR = 'SET_YEAR',
  SET_MONTH = 'SET_MONTH',
  RESET = 'RESET',
  RESET_MODE = 'RESET_MODE',
  TO_MONTH_MODE = 'TO_MONTH_MODE',
  TO_DAY_MODE = 'TO_DAY_MODE',
}

const reducer = (
  state: StateType,
  action: { type: DatePickerAction; payload?: Partial<StateType> | boolean }
): StateType => {
  switch (action.type) {
    case DatePickerAction.SET:
      return { ...state, ...(action.payload as StateType) };
    case DatePickerAction.SET_OPEN:
      return { ...state, isOpen: action.payload as boolean };
    case DatePickerAction.SET_YEAR:
      return { ...state, isYear: action.payload as boolean };
    case DatePickerAction.SET_MONTH:
      return { ...state, isMonth: action.payload as boolean };
    case DatePickerAction.RESET:
      return { ...state, ...StateInit };
    case DatePickerAction.RESET_MODE:
      return { ...state, isMonth: false, isYear: false };

    default:
      throw new Error();
  }
};

const datePickerReducer = {
  action: DatePickerAction,
  reducer: reducer,
  init: StateInit,
};

export default datePickerReducer;
