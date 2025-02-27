import { MenuProps, components, GroupBase } from 'react-select';

const SelectMenu = <
  Option_1,
  Multi_1 extends boolean,
  Group_1 extends GroupBase<Option_1>,
>(
  props: MenuProps<Option_1, Multi_1, Group_1>
) => {
  return (
    <components.Menu<Option_1, Multi_1, Group_1>
      {...props}
      className='z-20 animate-in'
    />
  );
};

export default SelectMenu;
