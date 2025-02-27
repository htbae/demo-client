import React from 'react';
import { FormType } from '../form-type';

/* eslint-disable @typescript-eslint/no-explicit-any */
const FormContext = React.createContext<FormType<any> | undefined>(undefined);

export { FormContext };
