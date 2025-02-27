import clsx from 'clsx';
import { RiArrowDropLeftLine } from 'react-icons/ri';
import { sidebarClasses } from '../sidebar-classes';

interface FoldIconType {
  isFolding: boolean;
  isVisible: boolean;
}

const FoldIcon = ({ isFolding, isVisible }: FoldIconType) => {
  return (
    <div
      className={clsx(
        sidebarClasses.foldIcon,
        'text-4xl select-none',
        `${!isVisible && 'hidden'}`,
        'transition-all duration-300',
        `${isFolding && '-rotate-90'}`
      )}
    >
      <RiArrowDropLeftLine />
    </div>
  );
};

export default FoldIcon;
