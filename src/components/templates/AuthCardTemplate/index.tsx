import { ReactNode } from 'react';

interface AuthCardTemplateType {
  children: ReactNode;
}

const AuthCardTemplate = (props: AuthCardTemplateType) => {
  const { children } = props;

  return (
    <div className='custom-bg-auth absolute top-0 left-0 flex h-auto min-h-full w-full items-center justify-center bg-cover bg-no-repeat'>
      <div className='relative mx-auto flex w-[1600px] flex-wrap justify-center py-5'>
        {children}
      </div>
    </div>
  );
};

export default AuthCardTemplate;
