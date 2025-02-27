import { useCallback, useState } from 'react';
import CardHeader from './_components/CardHeader';
import CardBody from './_components/CardBody';

interface CardType {
  title?: string;
  subTitle?: string;
  isDefaultOpen?: boolean;
  isCollapsible?: boolean;
  children?: React.ReactNode;
}

const Card = (props: CardType) => {
  const {
    title,
    subTitle,
    isDefaultOpen = true,
    isCollapsible = false,
    children,
  } = props;

  const [isActive, setIsActive] = useState<boolean>(isDefaultOpen);

  const toggleHandler = useCallback(() => {
    if (isCollapsible) setIsActive((prev) => !prev);
  }, [isCollapsible]);

  return (
    <div className='relative mb-[1.8rem] min-h-[46px] rounded-lg bg-white p-[1.8rem_3rem] shadow-md last:mb-0'>
      <CardHeader
        title={title}
        subTitle={subTitle}
        isActive={isActive}
        isCollapsible={isCollapsible}
        onToggle={toggleHandler}
      />
      <CardBody isActive={isActive} isDefaultOpen={isDefaultOpen}>
        {children}
      </CardBody>
    </div>
  );
};

export type { CardType };
export default Card;
