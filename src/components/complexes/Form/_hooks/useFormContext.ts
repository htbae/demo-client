import React from 'react';
import { FormContext } from '../_contexts/form-context';
import { FormType } from '../form-type';

const useFormContext = <T>(): FormType<T> => {
  const context = React.useContext(FormContext);
  if (context === undefined) {
    throw new Error('FormContextProvider is required!');
  }
  return context;
};

export default useFormContext;
