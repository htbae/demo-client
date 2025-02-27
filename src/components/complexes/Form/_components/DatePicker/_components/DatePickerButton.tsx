interface DatePickerButtonType {
  icon: React.ReactNode;
  onClick: () => void;
}

const DatePickerButton = (props: DatePickerButtonType) => {
  const { icon, onClick } = props;

  return (
    <button
      className='cursor-pointer border-none bg-none text-[2rem]'
      type='button'
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default DatePickerButton;
