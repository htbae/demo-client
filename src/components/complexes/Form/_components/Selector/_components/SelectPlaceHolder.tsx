import { PlaceholderProps, components, GroupBase } from 'react-select';

const SelectPlaceholder = <
  Option_1,
  Multi_1 extends boolean,
  Group_1 extends GroupBase<Option_1>,
>(
  props: PlaceholderProps<Option_1, Multi_1, Group_1>
) => {
  return (
    <components.Placeholder<Option_1, Multi_1, Group_1>
      {...props}
      className='text-[1.4rem]'
    />
  );
};

export default SelectPlaceholder;
