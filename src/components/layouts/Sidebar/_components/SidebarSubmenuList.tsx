import clsx from 'clsx';
import { MenuDataType } from '../_type/sidebar-data-type';
import SidebarMenuGroup from './SidebarMenuGroup';
import { sidebarClasses } from '../sidebar-classes';

interface SidebarSubmenuListType {
  depth: number;
  isFolding: boolean;
  menuItems?: MenuDataType[];
}

const getBackgroundColorByDepth = (depth: number) => {
  if (depth === 0) {
    return '';
  } else if (depth === 1) {
    return 'bg-blue-900';
  } else if (depth === 2) {
    return 'bg-blue-800';
  } else if (depth === 3) {
    return 'bg-blue-700';
  } else {
    return 'bg-blue-600';
  }
};

const foldStyle = 'visible max-h-[500px] opacity-100';
const closeStyle = 'invisible max-h-0 opacity-0';

const SidebarSubmenuList = (props: SidebarSubmenuListType) => {
  const { menuItems, depth, isFolding = false } = props;

  return (
    <div
      className={clsx(
        sidebarClasses.sidebarSubmenuList,
        'overflow-hidden transition-all duration-300 ease-in-out',
        isFolding ? foldStyle : closeStyle,
        isFolding ? getBackgroundColorByDepth(depth) : ''
      )}
    >
      {(menuItems || []).map((menuItem, index) => (
        <SidebarMenuGroup
          key={`sidebar-menu-group-${menuItem.id}`}
          index={index}
          depth={depth}
          menuItem={menuItem}
        />
      ))}
    </div>
  );
};

export default SidebarSubmenuList;
