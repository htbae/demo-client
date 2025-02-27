import clsx from 'clsx';
import { RxHamburgerMenu } from 'react-icons/rx';

interface HamburgerType {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
}

const Hamburger = ({ className, onClick }: HamburgerType) => {
  return (
    <span
      className={clsx(
        'hamburger-icon',
        'cursor-pointer text-[2.4rem]',
        className
      )}
      onClick={onClick}
    >
      <RxHamburgerMenu />
    </span>
  );
};

export default Hamburger;
