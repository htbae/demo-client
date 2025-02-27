import { ReactNode } from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';

interface FormType<T> {
  id?: string;
  name?: string;
  children?: ReactNode;
  source: UseFormReturn<T & FieldValues>;
  onSubmit?: (data: T) => void;
}

export type { FormType };
