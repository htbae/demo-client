import React from 'react';
import { SelectorContext } from '../_context/selector-context';

const useSelectorContext = () => {
  const context = React.useContext(SelectorContext);
  if (context === undefined) {
    throw new Error('SelectorContextProvider is required!');
  }
  return context;
};

export default useSelectorContext;
