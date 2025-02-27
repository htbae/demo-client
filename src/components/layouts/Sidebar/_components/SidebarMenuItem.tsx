import clsx from 'clsx';
import useSidebarContext from '../_hooks/useSidebarContext';
import { sidebarClasses } from '../sidebar-classes';
import MenuItem, { MenuItemType } from './MenuItem';
import FoldIcon from './FoldIcon';
import { useCallback } from 'react';

interface SidebarMenuItemType extends MenuItemType {
  isFoldEnable: boolean;
  isFolding: boolean;
  isActive: boolean;
  toggleFolding: React.MouseEventHandler<HTMLDivElement>;
}

const SidebarMenuItem = (props: SidebarMenuItemType) => {
  const { index, menuItem, isFoldEnable, isFolding, isActive, toggleFolding } =
    props;
  const { onMenuClick } = useSidebarContext();

  const clickMenuHandler = useCallback(() => {
    onMenuClick(menuItem.id);
  }, [menuItem, onMenuClick]);

  return (
    <div
      className={clsx(
        sidebarClasses.sidebarMenuItem,
        'flex cursor-pointer items-center justify-between px-12 text-xl',
        'transition-colors duration-300 ease-in-out',
        isActive ? 'text-white' : 'text-[#929dad]'
      )}
      onClick={isFoldEnable ? toggleFolding : clickMenuHandler}
    >
      <MenuItem
        key={`sidebar-menu-item-${menuItem.id}`}
        index={index}
        menuItem={menuItem}
      />
      <FoldIcon isFolding={isFolding} isVisible={isFoldEnable} />
    </div>
  );
};

export default SidebarMenuItem;
