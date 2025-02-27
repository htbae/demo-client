import { ContainerProps, components, GroupBase } from 'react-select';

const SelectContainer = <
  Option_1,
  Multi_1 extends boolean,
  Group_1 extends GroupBase<Option_1>,
>(
  props: ContainerProps<Option_1, Multi_1, Group_1>
) => {
  return (
    <components.SelectContainer<Option_1, Multi_1, Group_1>
      {...props}
      className='text-[1.4rem]'
    />
  );
};

export default SelectContainer;
