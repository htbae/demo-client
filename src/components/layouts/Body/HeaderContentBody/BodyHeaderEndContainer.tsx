import { WithChildrenType } from '@/types/components/component-common-type';
import clsx from 'clsx';
import { headerContentBodyClasses } from './header-content-body-classes';

const BodyHeaderEndContainer = (props: WithChildrenType) => {
  return (
    <div className={clsx(headerContentBodyClasses.headerEndContainer)}>
      {props.children}
    </div>
  );
};

export default BodyHeaderEndContainer;
