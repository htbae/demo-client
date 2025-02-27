import clsx from 'clsx';
import { dashboardBodyClasses as classes } from './dashboard-body-classes';

interface HeaderTitleContainerType {
  title?: string;
  subTitle?: string;
}

const HeaderTitleContainer = (props: HeaderTitleContainerType) => {
  const { title, subTitle } = props;
  return (
    <div className={clsx(classes.titleContainer, 'text-[#313435]')}>
      <h1
        className={clsx(
          classes.title,
          'mr-6 inline-block text-[3.6rem] font-bold'
        )}
      >
        {title}
      </h1>
      <span
        className={clsx(
          classes.subTitle,
          'inline-block text-[2rem] font-medium'
        )}
      >
        {subTitle}
      </span>
    </div>
  );
};

export type { HeaderTitleContainerType };
export default HeaderTitleContainer;
