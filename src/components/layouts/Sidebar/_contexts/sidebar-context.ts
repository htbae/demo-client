import React from 'react';
import { SidebarDataType } from '../_type/sidebar-data-type';

interface SidebarContextType extends Omit<SidebarDataType, 'onClickMenuItem'> {
  onMenuClick: (id: number | string) => void;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
const SidebarContext = React.createContext<SidebarContextType | undefined>(
  undefined
);

export type { SidebarContextType };
export { SidebarContext };
