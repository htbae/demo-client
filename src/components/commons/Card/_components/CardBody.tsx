import { useEffect, useState } from 'react';
import AnimateHeight, { Height } from 'react-animate-height';

interface CardBodyType {
  isActive: boolean;
  isDefaultOpen: boolean;
  children: React.ReactNode;
}

const CardBody = (props: CardBodyType) => {
  const { isActive, isDefaultOpen, children } = props;
  const [height, setHeight] = useState<Height>(isDefaultOpen ? 'auto' : 0);

  useEffect(() => {
    setHeight(isActive ? 'auto' : 0);
  }, [isActive]);

  return (
    <AnimateHeight height={height} duration={350}>
      <div className='min-h-[1px] flex-1'>{children}</div>
    </AnimateHeight>
  );
};

export default CardBody;
