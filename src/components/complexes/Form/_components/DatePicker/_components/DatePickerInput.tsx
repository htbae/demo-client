import React, { InputHTMLAttributes } from 'react';
import Input, { InputType } from '../../Input';

const DatePickerInput = React.forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> &
    InputType & {
      className?: string;
    }
>(({ id, name, className, onChange, ...rest }, ref) => {
  return (
    <Input
      id={`${id}-custom-input`}
      name={name!}
      ref={ref}
      isReadOnly={false}
      onChange={(_, e) => onChange?.(e!)}
      {...rest}
    />
  );
});

export default DatePickerInput;
