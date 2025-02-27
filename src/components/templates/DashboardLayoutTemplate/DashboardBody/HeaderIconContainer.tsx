import { JSX } from 'react';
import clsx from 'clsx';
import { IconType } from 'react-icons';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { dashboardBodyClasses } from './dashboard-body-classes';

interface HeaderIconContainerType extends Partial<AwesomIconType> {
  isBackEnable?: boolean;
}

interface AwesomIconType {
  icon: (() => JSX.Element) | IconType;
}

const HeaderIconContainer = ({
  icon,
  isBackEnable = false,
}: HeaderIconContainerType) => {
  const isVisible = icon || isBackEnable;

  return (
    <>
      {isVisible && (
        <div className={dashboardBodyClasses.iconContainer}>
          {isBackEnable ? <BackIcon /> : <AwesomeIocn icon={icon!} />}
        </div>
      )}
    </>
  );
};

const iconCommonStyles = clsx(
  'items-center justify-center',
  'mr-4 flex h-[3.4rem] w-[3.4rem]',
  'rounded-[5px]'
);

const BackIcon = () => {
  const navigate = useNavigate();

  return (
    <div
      className={clsx(
        dashboardBodyClasses.iconBack,
        iconCommonStyles,
        'cursor-pointer text-[3.6rem] text-[#313435] hover:text-[#375ffd]'
      )}
    >
      <MdOutlineKeyboardBackspace onClick={() => navigate(-1)} />
    </div>
  );
};

const AwesomeIocn = ({ icon: Icon }: AwesomIconType) => {
  return (
    <div
      className={clsx(
        dashboardBodyClasses.icon,
        iconCommonStyles,
        'bg-[#04122e] text-[1.8rem] text-[#7aa3fd]'
      )}
    >
      {<Icon />}
    </div>
  );
};

export type { HeaderIconContainerType };
export default HeaderIconContainer;
