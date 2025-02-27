import Card, { CardType } from '@/components/commons/Card';

interface JoinTitleContainerType {
  title?: string;
  contents?: string[];
}

const JoinFormCard = (
  props: Omit<CardType, 'title' | 'subTitle'> & JoinTitleContainerType
) => {
  const { title, contents, children, ...rest } = props;
  return (
    <Card {...rest}>
      <div className='w-[420px] px-[1rem] py-[8rem]'>
        {title && <JoinTitleContainer title={title} contents={contents} />}
        {children}
      </div>
    </Card>
  );
};

const JoinTitleContainer = ({ title, contents }: JoinTitleContainerType) => {
  return (
    <div className='mb-[4.5rem] text-center'>
      <h2 className='mb-[0.9rem] font-pred text-[2.8rem] font-bold text-[#4865ac]'>
        {title}
      </h2>
      {contents &&
        contents.map((content, index) => {
          return (
            <p
              key={`join-title-${content}-${index}`}
              className='mt-1 text-[#929292]'
            >
              {content}
            </p>
          );
        })}
    </div>
  );
};

export default JoinFormCard;
