import Hamburger from '@/components/commons/Hamburger';
import { SpaceBetweenHeader } from '@/components/layouts/Header';

interface DashboardHeaderType {
  onToggleSidebar: () => void;
}

const DashboardHeader = ({ onToggleSidebar }: DashboardHeaderType) => {
  return (
    <SpaceBetweenHeader
      startChildren={<Hamburger onClick={onToggleSidebar} />}
    />
  );
};

export default DashboardHeader;
