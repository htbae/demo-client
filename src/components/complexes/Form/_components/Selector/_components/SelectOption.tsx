import { OptionProps, components, GroupBase } from 'react-select';

const SelectOption = <
  Option_1,
  Multi_1 extends boolean,
  Group_1 extends GroupBase<Option_1>,
>(
  props: OptionProps<Option_1, Multi_1, Group_1>
) => {
  return (
    <components.Option<Option_1, Multi_1, Group_1>
      {...props}
      className='bg-transparent'
    />
  );
};

export default SelectOption;
