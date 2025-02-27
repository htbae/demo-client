import React from 'react';
import { FormFamilyCommonType } from '../../form-family-type';

const SelectorContext = React.createContext<
  Pick<FormFamilyCommonType, 'isReadOnly' | 'isDisabled'> | undefined
>(undefined);

export { SelectorContext };
