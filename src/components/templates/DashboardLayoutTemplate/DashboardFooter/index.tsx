import { SpaceBetweenFooter } from '@/components/layouts/Footer';

interface DashboardFooterType {
  copyright?: string;
}

const DashboardFooter = ({ copyright }: DashboardFooterType) => {
  return (
    <SpaceBetweenFooter
      footerEnd={
        <span className='text-[1.6rem] text-[#c4c6c7]'>{copyright}</span>
      }
    />
  );
};

export default DashboardFooter;
