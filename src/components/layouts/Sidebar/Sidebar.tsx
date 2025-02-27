import clsx from 'clsx';
import SidebarHeader from './_components/SidebarHeader';
import SidebarContent from './_components/SidebarContent';
import { MenuDataType } from './_type/sidebar-data-type';

interface SidebarType {
  isSidebarOpen: boolean;
  menuItems?: MenuDataType[];
  header?: React.ReactNode;
  activeMenuId?: number | string;
  onClickMenuItem?: (menuId: number | string) => void;
}

const Sidebar = ({
  header,
  menuItems,
  isSidebarOpen,
  ...rest
}: SidebarType) => {
  return (
    <aside
      className={clsx(
        'fixed top-0 left-0 h-screen flex-col bg-slate-900 text-white transition-all duration-300 ease-in-out',
        isSidebarOpen ? 'w-[230px]' : 'w-0 overflow-hidden',
        isSidebarOpen && 'z-[3] shadow-[1px_0_4px_1px_rgba(0,0,0,0.5)]'
      )}
    >
      <SidebarHeader isSidebarOpen={isSidebarOpen}>{header}</SidebarHeader>
      <SidebarContent
        isSidebarOpen={isSidebarOpen}
        menuItems={menuItems}
        {...rest}
      />
    </aside>
  );
};

export type { SidebarType };
export default Sidebar;
