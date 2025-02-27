import clsx from 'clsx';
import { MenuDataType } from '../_type/sidebar-data-type';
import { sidebarClasses } from '../sidebar-classes';
import MenuIcon from './MenuIcon';

interface MenuItemType {
  index: number;
  menuItem: MenuDataType;
}

const MenuItem = (props: MenuItemType) => {
  const { index, menuItem } = props;

  return (
    <div
      className={clsx(
        sidebarClasses.menuItem,
        'flex items-center py-4 select-none'
      )}
    >
      <MenuIcon index={index} icon={menuItem.icon} /> {menuItem.value}
    </div>
  );
};

export type { MenuItemType };
export default MenuItem;
