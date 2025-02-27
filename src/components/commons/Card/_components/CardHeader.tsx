import CardCollapseIcon from './CardCollapseIcon';

interface CollapsibleType {
  isCollapsible: boolean;
}

interface CardHeaderType extends CollapsibleType {
  title?: string;
  subTitle?: string;
  isActive: boolean;
  onToggle: () => void;
}

const CardHeader = (props: CardHeaderType) => {
  const { title, subTitle, isCollapsible, isActive, onToggle } = props;

  if (!title) {
    return <></>;
  }

  return (
    <div className='relative'>
      {isCollapsible && (
        <CardCollapseIcon
          onClick={onToggle}
          isActive={isActive}
        ></CardCollapseIcon>
      )}

      <TitleContainer
        isCollapsible={isCollapsible}
        mainTitle={title}
        subTitle={subTitle}
      />
    </div>
  );
};

const TitleContainer = (
  props: CollapsibleType & {
    mainTitle: string;
    subTitle?: string;
  }
) => {
  const { isCollapsible, mainTitle, subTitle } = props;

  return (
    <div
      className={`mb-8 flex items-start justify-between border-b-[0.1rem] border-dashed border-[#d9e1e7] py-4 transition-all duration-300 select-none ${isCollapsible && 'cursor-pointer'}`}
    >
      <MainTitle content={mainTitle} />
      {subTitle && <SubTitle content={subTitle} />}
    </div>
  );
};

const MainTitle = ({ content }: { content: string }) => {
  return (
    <h2 className='relative mb-0 uppercase transition-all duration-300'>
      {content}
    </h2>
  );
};

const SubTitle = ({ content }: { content: string }) => {
  return <h2 className='text-xl font-medium'>{content}</h2>;
};

export default CardHeader;
