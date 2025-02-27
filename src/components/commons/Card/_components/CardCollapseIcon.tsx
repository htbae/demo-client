import { FaChevronDown } from 'react-icons/fa';

interface CardCollapseIconType {
  onClick: () => void;
  isActive: boolean;
}

const CardCollapseIcon = (props: CardCollapseIconType) => {
  const { isActive, onClick } = props;

  return (
    <span
      className={`absolute right-0 bottom-4 z-10 cursor-pointer text-2xl transition-transform duration-300 ${isActive ? 'rotate-0' : '-rotate-90'} text-[#475f7b]`}
      onClick={onClick}
    >
      <FaChevronDown />
    </span>
  );
};

export default CardCollapseIcon;
