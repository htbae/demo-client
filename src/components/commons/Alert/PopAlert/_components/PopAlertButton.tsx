import Button, { ButtonType } from '@/components/commons/Button';
import clsx from 'clsx';

const PopAlertButton = (props: ButtonType) => {
  const { className, children, ...rest } = props;
  return (
    <Button
      className={clsx(
        className,
        'm-[0 7px] h-[52px] min-w-[120px] p-3 text-[1.6rem] font-semibold',
        'rounded-full leading-6 shadow-md'
      )}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default PopAlertButton;
