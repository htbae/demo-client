import HeaderTitleContainer, {
  HeaderTitleContainerType,
} from './HeaderTitleContainer';
import { WithChildrenType } from '@/types/components/component-common-type';
import HeaderIconContainer, {
  HeaderIconContainerType,
} from './HeaderIconContainer';
import HeaderContentBody from '../../../layouts/Body/HeaderContentBody';

type DashboardBodyType = HeaderTitleContainerType &
  HeaderIconContainerType &
  WithChildrenType;

const DashboardBody = (props: DashboardBodyType) => {
  const { title, subTitle, isBackEnable, icon, children } = props;

  return (
    <HeaderContentBody
      headerStart={
        <>
          <HeaderIconContainer icon={icon} isBackEnable={isBackEnable} />
          <HeaderTitleContainer title={title} subTitle={subTitle} />
        </>
      }
      headerEnd={<></>}
    >
      {children}
    </HeaderContentBody>
  );
};

export type { DashboardBodyType };
export default DashboardBody;
