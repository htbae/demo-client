import { IconType } from 'react-icons';
import React, { JSX } from 'react';
import { RxDash, RxDotFilled } from 'react-icons/rx';

type ComponentIconType = IconType | (() => JSX.Element);
type DotIconType = 'dot';
type DashIconType = 'dash';
type NumberIconType = 'number';

type MenuIconType =
  | ComponentIconType
  | DotIconType
  | DashIconType
  | NumberIconType;

const MenuIcon = ({ icon, index }: { icon?: MenuIconType; index: number }) => {
  if (!icon) return null;

  return (
    <div className='mr-4 flex w-6 justify-center'>
      {typeof icon === 'function'
        ? React.createElement(icon, { className: 'w-full' })
        : null}
      {icon === 'dot' && <RxDotFilled className='w-full' />}
      {icon === 'dash' && <RxDash className='w-full' />}
      {icon === 'number' && <span className='font-semibold'>{index}.</span>}
    </div>
  );
};

export type { MenuIconType };
export default MenuIcon;
