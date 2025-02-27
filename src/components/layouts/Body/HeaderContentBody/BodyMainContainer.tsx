import { WithChildrenType } from '@/types/components/component-common-type';
import clsx from 'clsx';
import { headerContentBodyClasses as classes } from './header-content-body-classes';

const BodyMainContainer = (props: WithChildrenType) => {
  return (
    <main className={clsx(classes.container, 'h-full w-full bg-[#f3f6f9]')}>
      {props.children}
    </main>
  );
};

export default BodyMainContainer;
