import { VariantType } from '@/styles/style-type';
import clsx from 'clsx';

type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonType {
  id?: string;
  className?: string;
  name?: string;
  type?: 'button' | 'submit';
  size?: ButtonSize;
  variant?: VariantType;
  form?: string;
  hasOutline?: boolean;
  isDisabled?: boolean;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const baseButtonClasses = clsx(
  'inline-block text-center align-middle capitalize select-none',
  'cursor-pointer overflow-visible rounded px-6 font-normal',
  'transition duration-150 ease-in-out',
  'focus:ring-0 focus:outline-none'
);

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'min-w-[6rem] px-2 py-1 text-[1.2rem]',
  md: 'min-w-[10rem] px-3 py-2 text-[1.4rem]',
  lg: 'min-w-[10rem] px-4 py-3 text-[1.6rem]',
  xl: 'min-w-[10rem] px-4 py-3 text-[1.8rem]',
};

const outlineClasses: Record<VariantType, string> = {
  primary:
    'border-primary-100 text-primary-300 hover:border-primary-500 hover:text-primary-500',
  default:
    'border-default-100 text-default-300 hover:border-default-500 hover:text-default-500',
  success:
    'border-success-100 text-success-300 hover:border-success-500 hover:text-success-500',
  info: 'border-info-100 text-info-300 hover:border-info-500 hover:text-info-500',
  danger:
    'border-danger-100 text-danger-300 hover:border-danger-500 hover:text-danger-500',
  warning:
    'border-warning-100 text-warning-300 hover:border-warning-500 hover:text-warning-500',
  error:
    'border-error-100 text-error-300 hover:border-error-500 hover:text-error-500',
  muted:
    'border-muted-100 text-muted-300 hover:border-muted-500 hover:text-muted-500',
};

const solidClasses: Record<VariantType, string> = {
  primary:
    'bg-primary-500 border-primary-500 hover:bg-white hover:text-primary-500 hover:border-primary-500',
  default:
    'bg-default-500 border-default-500 hover:bg-white hover:text-default-500 hover:border-default-500',
  success:
    'bg-success-500 border-success-500 hover:bg-white hover:text-success-500 hover:border-success-500',
  info: 'bg-info-500 border-info-500 hover:bg-white hover:text-info-500 hover:border-info-500',
  danger:
    'bg-danger-500 border-danger-500 hover:bg-white hover:text-danger-500 hover:border-danger-500',
  warning:
    'bg-warning-500 border-warning-500 hover:bg-white hover:text-warning-500 hover:border-warning-500',
  error:
    'bg-error-500 border-error-500 hover:bg-white hover:text-error-500 hover:border-error-500',
  muted:
    'bg-muted-500 border-muted-500 hover:bg-white hover:text-muted-500 hover:border-muted-500',
};

const Button = (props: ButtonType) => {
  const {
    type = 'button',
    size = 'md',
    variant = 'default',
    hasOutline = false,
    isDisabled = false,
    children,
    className,
    ...rest
  } = props;

  return (
    <button
      className={clsx(
        baseButtonClasses,
        sizeClasses[size],
        'rounded border transition-colors',
        isDisabled
          ? 'cursor-not-allowed opacity-60'
          : hasOutline
            ? clsx('border bg-white', outlineClasses[variant])
            : clsx('border text-white', solidClasses[variant]),
        className
      )}
      type={type}
      disabled={isDisabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export type { ButtonType };
export default Button;
