import clsx from 'clsx';

interface ModalHeaderButtonType {
  children: React.ReactNode;
  onClick: () => void;
}

const ModalHeaderButton = ({ children, onClick }: ModalHeaderButtonType) => {
  const classnames = clsx(
    'h-[54px] w-[54px] cursor-pointer appearance-none rounded-[3px]',
    'border-none bg-transparent p-0 align-middle text-[16px]',
    'leading-none font-normal whitespace-nowrap text-white no-underline',
    'outline-none select-none hover:bg-transparent hover:text-white'
  );
  return (
    <button className={classnames} onClick={onClick}>
      {children}
    </button>
  );
};

export default ModalHeaderButton;
