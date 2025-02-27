import clsx from 'clsx';
import BodyMainContainer from './BodyMainContainer';
import BodyHeader from './BodyHeader';
import BodyHeaderStartContainer from './BodyHeaderStartContainer';
import BodyHeaderEndContainer from './BodyHeaderEndContainer';
import { headerContentBodyClasses as classes } from './header-content-body-classes';

interface HeaderContentBodyType {
  headerStart?: React.ReactNode;
  headerEnd?: React.ReactNode;
  children?: React.ReactNode;
}

const HeaderContentBody = (props: HeaderContentBodyType) => {
  const { headerStart, headerEnd, children } = props;

  return (
    <BodyMainContainer>
      <BodyHeader>
        <BodyHeaderStartContainer>{headerStart}</BodyHeaderStartContainer>
        <BodyHeaderEndContainer>{headerEnd}</BodyHeaderEndContainer>
      </BodyHeader>
      <div className={clsx(classes.content, 'p-8')}>{children}</div>
    </BodyMainContainer>
  );
};

export type { HeaderContentBodyType };
export default HeaderContentBody;
