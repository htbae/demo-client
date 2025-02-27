import Sidebar, { SidebarType } from '@/components/layouts/Sidebar/Sidebar';

interface DashboardSidebarType extends Omit<SidebarType, 'header'> {
  title: string;
}

const DashboardSidebar = ({ title, ...rest }: DashboardSidebarType) => {
  return (
    <Sidebar
      header={
        <div className='mb-16 h-[55px] py-8 text-center font-nexon text-[2rem] font-bold uppercase'>
          {title}
        </div>
      }
      {...rest}
    />
  );
};

export type { DashboardSidebarType };
export default DashboardSidebar;
