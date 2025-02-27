import clsx from 'clsx';
import { spaceBetweenHeaderClasses as classes } from './space-between-header-classes';

interface SpaceBetweenHeaderType {
  startChildren?: React.ReactNode;
  endChildren?: React.ReactNode;
}

const SpaceBetweenHeader = ({
  startChildren,
  endChildren,
}: SpaceBetweenHeaderType) => {
  return (
    <header
      className={clsx(
        classes.header,
        'sticky top-0 left-0 z-[2] grid-cols-[1/3] bg-white text-center',
        'flex h-full min-h-14 w-full flex-none justify-between p-6',
        'shadow-xs'
      )}
    >
      <div className={clsx(classes.startContainer)}>{startChildren}</div>
      <div className={clsx(classes.endContainer)}>{endChildren}</div>
    </header>
  );
};

export type { SpaceBetweenHeaderType };
export default SpaceBetweenHeader;
