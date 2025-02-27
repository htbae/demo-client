import clsx from 'clsx';
import { MenuDataType } from '../_type/sidebar-data-type';
import SidebarSubmenuList from './SidebarSubmenuList';
import { sidebarClasses } from '../sidebar-classes';

interface SidebarSubmenuType {
  depth: number;
  isFoldEnable: boolean;
  isFolding: boolean;
  subMenuItems: MenuDataType[];
}

const SidebarSubmenu = (props: SidebarSubmenuType) => {
  const { depth, isFoldEnable, isFolding, subMenuItems } = props;
  return (
    <>
      {isFoldEnable && (
        <div className={clsx(sidebarClasses.sidebarSubmenu)}>
          <SidebarSubmenuList
            isFolding={isFolding}
            depth={depth}
            menuItems={subMenuItems}
          />
        </div>
      )}
    </>
  );
};

export default SidebarSubmenu;
