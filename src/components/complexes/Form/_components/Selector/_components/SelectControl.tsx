import { ControlProps, components, GroupBase } from 'react-select';
import useSelectorContext from '../_hooks/useSelectorContext';
import { disabledStyle, readOnlyStyle } from '../../form-family-style';
import clsx from 'clsx';

const SelectControl = <
  Option_1,
  Multi_1 extends boolean,
  Group_1 extends GroupBase<Option_1>,
>(
  props: ControlProps<Option_1, Multi_1, Group_1>
) => {
  const { isDisabled, isReadOnly } = useSelectorContext();

  return (
    <components.Control<Option_1, Multi_1, Group_1>
      {...props}
      className={clsx(
        'group focus-within:border-[#0062ff]',
        `flex min-h-[5.2rem] rounded-[0.4rem]`,
        `w-full border-[1px] border-solid border-gray-300 outline-none`,
        `transition-all duration-150 ease-in-out`,
        `${isDisabled && disabledStyle} ${isReadOnly && readOnlyStyle}`
      )}
    />
  );
};

export default SelectControl;
