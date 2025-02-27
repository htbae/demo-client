import { MenuIconType } from '../_components/MenuIcon';

interface MenuDataType {
  id: number | string;
  value: string;
  icon?: MenuIconType;
  subMenuItems?: MenuDataType[];
}

interface SidebarDataType {
  isSidebarOpen: boolean;
  activeMenuId?: number | string;
  onClickMenuItem?: (menuId: number | string) => void;
}

interface SidebarClassType {
  container?: string;
}

export type { MenuDataType, SidebarDataType, SidebarClassType, MenuIconType };
