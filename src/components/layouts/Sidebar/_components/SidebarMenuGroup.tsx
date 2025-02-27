import { useMemo, useState } from 'react';
import { MenuDataType } from '../_type/sidebar-data-type';
import clsx from 'clsx';
import { sidebarClasses as classes } from '../sidebar-classes';
import SidebarSubmenu from './SidebarSubmenu';
import SidebarMenuItem from './SidebarMenuItem';
import useSidebarContext from '../_hooks/useSidebarContext';
import { MenuItemType } from './MenuItem';

interface SidebarMenuGroupType extends MenuItemType {
  className?: string;
  depth: number;
}

const checkActivated = (
  menuItem: MenuDataType,
  activeId?: number | string
): boolean => {
  if (typeof activeId === 'undefined') {
    return false;
  }
  if (String(menuItem.id) === String(activeId)) {
    return true;
  }
  if (
    Array.isArray(menuItem.subMenuItems) &&
    menuItem.subMenuItems.length > 0
  ) {
    return menuItem.subMenuItems.some((subMenu) =>
      checkActivated(subMenu, activeId)
    );
  }

  return false;
};

const SidebarMenuGroup = (props: SidebarMenuGroupType) => {
  const { menuItem } = props;

  const { activeMenuId } = useSidebarContext();

  const isActivated = checkActivated(menuItem, activeMenuId);

  return <RenderSidebarMenuGroup {...props} isActivated={isActivated} />;
};

const RenderSidebarMenuGroup = (
  props: SidebarMenuGroupType & { isActivated: boolean }
) => {
  const { index, menuItem, depth, isActivated } = props;
  const [isFolding, toggleFolding] = useState<boolean>(isActivated);

  const isFoldEnable = useMemo(
    () =>
      typeof menuItem.subMenuItems !== 'undefined' &&
      menuItem.subMenuItems.length > 0,
    [menuItem.subMenuItems]
  );

  return (
    <div className={clsx(classes.sidebarMenuGroup)}>
      <SidebarMenuItem
        index={index}
        isFoldEnable={isFoldEnable}
        isFolding={isFolding}
        isActive={isActivated}
        toggleFolding={() => toggleFolding((prev) => !prev)}
        menuItem={menuItem}
      />
      <SidebarSubmenu
        depth={depth + 1}
        isFoldEnable={isFoldEnable}
        isFolding={isFolding}
        subMenuItems={menuItem.subMenuItems || []}
      />
    </div>
  );
};

export default SidebarMenuGroup;
