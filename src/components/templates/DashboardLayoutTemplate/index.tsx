import DashboardHeader from './DashboardHeader';
import DashboardFooter from './DashboardFooter';
import { useState } from 'react';
import clsx from 'clsx';
import DashboardBody, { DashboardBodyType } from './DashboardBody';
import DashboardSidebar, { DashboardSidebarType } from './DashboardSidebar';
import { WithChildrenType } from '@/types/components/component-common-type';

type TemplateSidebarType = Omit<
  DashboardSidebarType,
  'isSidebarOpen' | 'toggleSidebar'
>;

interface DashboardLayoutTemplateType extends WithChildrenType {
  body: DashboardBodyType;
  sidebar: TemplateSidebarType;
}

const DashboardLayoutTemplate = (props: DashboardLayoutTemplateType) => {
  const { body, sidebar, children } = props;

  const [isSidebarOpen, toggleSidebar] = useState<boolean>(true);

  return (
    <>
      <DashboardSidebar
        title={sidebar.title}
        isSidebarOpen={isSidebarOpen}
        menuItems={sidebar.menuItems}
        activeMenuId={sidebar.activeMenuId}
        onClickMenuItem={sidebar.onClickMenuItem}
      />
      <div
        className={clsx(
          `grid h-screen ${isSidebarOpen ? 'grid-cols-[230px_1fr]' : 'grid-cols-[0px_1fr]'}`,
          'overflow-hidden transition-all duration-300 ease-in-out'
        )}
      >
        <div className='side-area' />
        <div className='grid grid-rows-[55px_1fr_50px] overflow-auto'>
          <DashboardHeader
            onToggleSidebar={() => toggleSidebar((prev) => !prev)}
          />
          <DashboardBody
            title={body.title}
            subTitle={body.subTitle}
            icon={body.icon}
            isBackEnable={body.isBackEnable}
          >
            {children}
          </DashboardBody>
          <DashboardFooter copyright='test' />
        </div>
      </div>
    </>
  );
};

export default DashboardLayoutTemplate;
