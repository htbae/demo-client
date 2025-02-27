import { ReactNode } from 'react';
import { BeatLoader } from 'react-spinners';

interface SectionLoaderType {
  isActive: boolean;
  children: ReactNode;
}

const SectionLoader = (props: SectionLoaderType) => {
  const { isActive, children } = props;

  return <>{isActive ? <BeatLoader color='#72dab4' /> : children}</>;
};

export default SectionLoader;
