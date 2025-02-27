import { WithChildrenType } from '@/types/components/component-common-type';
import clsx from 'clsx';
import { headerContentBodyClasses as classes } from './header-content-body-classes';

const BodyHeaderStartContainer = (props: WithChildrenType) => {
  return (
    <div
      className={clsx(
        classes.headerStartContainer,
        'flex min-h-20 items-center'
      )}
    >
      {props.children}
    </div>
  );
};

export default BodyHeaderStartContainer;
