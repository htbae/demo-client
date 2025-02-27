import clsx from 'clsx';
import { spaceBetweenFooterClasses as classes } from './space-between-footer-classes';

interface SpaceBetweenFooterType {
  footerStart?: React.ReactNode;
  footerEnd?: React.ReactNode;
}

const SpaceBetweenFooter = (props: SpaceBetweenFooterType) => {
  const { footerStart, footerEnd } = props;
  return (
    <footer
      className={clsx(
        classes.footer,
        'flex h-full w-full justify-between bg-white px-4 py-[0.6rem]'
      )}
    >
      <div className={classes.startContainer}>{footerStart}</div>
      <div className={classes.endContainer}>{footerEnd}</div>
    </footer>
  );
};

export default SpaceBetweenFooter;
