import { WithChildrenType } from '@/types/components/component-common-type';
import clsx from 'clsx';
import { SidebarType } from '../Sidebar';

const SidebarHeader = ({
  isSidebarOpen,
  children,
}: WithChildrenType & Pick<SidebarType, 'isSidebarOpen'>) => {
  return (
    <div
      className={clsx(
        'w-full overflow-hidden whitespace-nowrap',
        'xs:text-xs text-base text-ellipsis sm:text-sm',
        'scale-100 opacity-100',
        !isSidebarOpen && 'transition-all duration-300 min-[100px]:opacity-0'
      )}
    >
      {children}
    </div>
  );
};

export default SidebarHeader;
