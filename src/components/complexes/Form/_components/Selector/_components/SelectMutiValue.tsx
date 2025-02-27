import { MultiValueProps, components, GroupBase } from 'react-select';

const SelectMultiValue = <
  Option_1,
  Multi_1 extends boolean,
  Group_1 extends GroupBase<Option_1>,
>(
  props: MultiValueProps<Option_1, Multi_1, Group_1>
) => {
  return (
    <components.MultiValue<Option_1, Multi_1, Group_1>
      {...props}
      className='bg-[rgba(0, 184, 217, 0.1)] text-[rgb(0, 184, 217)]'
    />
  );
};

export default SelectMultiValue;
