import { WithChildrenType } from '@/types/components/component-common-type';
import clsx from 'clsx';
import { headerContentBodyClasses as classes } from './header-content-body-classes';

const BodyHeader = (props: WithChildrenType) => {
  return (
    <div
      className={clsx(
        classes.header,
        'flex justify-between border-b-[2px] border-b-[#d9e1e7] px-8 pt-[4.5rem] pb-0'
      )}
    >
      {props.children}
    </div>
  );
};

export default BodyHeader;
