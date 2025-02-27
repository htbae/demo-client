import clsx from 'clsx';
import SidebarSubmenuList from './SidebarSubmenuList';
import { sidebarClasses } from '../sidebar-classes';
import SidebarContextProvider from '../_contexts/SidebarContextProvider';
import { SidebarType } from '../Sidebar';

const SidebarContent = ({ isSidebarOpen, menuItems, ...rest }: SidebarType) => {
  return (
    <div
      className={clsx(
        sidebarClasses.sidebarContent,
        'w-full',
        !isSidebarOpen && 'transition-all duration-300 min-[100px]:opacity-0'
      )}
    >
      <SidebarContextProvider isSidebarOpen={isSidebarOpen} {...rest}>
        <SidebarSubmenuList depth={0} menuItems={menuItems} isFolding={true} />
      </SidebarContextProvider>
    </div>
  );
};

export default SidebarContent;
