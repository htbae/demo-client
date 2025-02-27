import clsx from 'clsx';
import {
  defaultActiveStyle,
  disabledStyle,
  readOnlyStyle,
} from '../form-family-style';
import { FormFamilyCommonType } from '../form-family-type';
import { CHAR } from '@/constants/ui-text';
import React, { JSX } from 'react';

interface InputType extends Omit<FormFamilyCommonType, 'onChange'> {
  type?: 'text' | 'password' | 'number';
  icon?: JSX.Element | string | number;
  isAutoCompleted?: boolean;
  placeholder?: string;
  onChange?: (value: string, e?: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputType>((props, ref) => {
  const {
    type = 'text',
    value,
    icon,
    isAutoCompleted = false,
    isReadOnly = false,
    isDisabled = false,
    onChange,
    ...rest
  } = props;

  const hasIcon = typeof icon !== 'undefined';

  const activeStyle =
    !isDisabled && !isReadOnly
      ? defaultActiveStyle
      : isDisabled
        ? disabledStyle
        : readOnlyStyle;

  return (
    <div className='input-container relative flex w-full items-center'>
      {hasIcon && (
        <div className='icon-wrapper absolute left-8 flex items-center text-3xl text-[#d1d1d5]'>
          {icon}
        </div>
      )}
      <input
        ref={ref}
        className={clsx(
          `input`,
          `h-[5.2rem] w-full px-3 py-0 text-[1.4rem]`,
          'rounded-[0.4rem] border border-gray-300 outline-0',
          'transition-colors duration-150 ease-in-out',
          `${activeStyle}`
        )}
        type={type}
        value={value || CHAR.EMPTY}
        autoComplete={isAutoCompleted ? 'on' : 'off'}
        onChange={(e) => onChange?.(e.target.value, e)}
        readOnly={isReadOnly}
        disabled={isDisabled}
        {...rest}
      />
    </div>
  );
});

export type { InputType };
export default Input;
