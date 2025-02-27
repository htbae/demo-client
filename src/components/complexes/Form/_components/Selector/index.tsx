import React, { useMemo } from 'react';
import Select, { GroupBase, SelectInstance } from 'react-select';
import makeAnimated from 'react-select/animated';

import { SelectorType } from './selector-type';
import { OptionType } from '@/types/components/component-common-type';
import { CHAR } from '@/constants/ui-text';
import SelectControl from './_components/SelectControl';
import SelectMenu from './_components/SelectMenu';
import SelectPlaceholder from './_components/SelectPlaceHolder';
import MultiSelector from './MultiSelector';
import SelectContainer from './_components/SelectSingleValue';
import { SelectorContext } from './_context/selector-context';
import { OPTION_ALL } from './selector-constant';
import SelectOption from './_components/SelectOption';

const animatedComponents = makeAnimated({
  Control: SelectControl,
  Menu: SelectMenu,
  Placeholder: SelectPlaceholder,
  SelectContainer: SelectContainer,
  Option: SelectOption,
});

const Selector = React.forwardRef<
  SelectInstance<OptionType, false, GroupBase<OptionType>>,
  SelectorType
>((props, ref) => {
  const {
    id,
    options = [],
    menuPosition = 'absolute',
    value,
    isDisabled = false,
    isReadOnly = false,
    hasAll,
    onChange,
    ...rest
  } = props;

  const mergedOptions = useMemo(
    () => (!hasAll ? options : [OPTION_ALL, ...options]),
    [options, hasAll]
  );

  const selectedValue = useMemo(() => {
    if (!value) {
      return mergedOptions ? mergedOptions[0] : undefined;
    }
    return mergedOptions.find((option) => option.value === value);
  }, [mergedOptions, value]);

  const changeHandler = ({ value }: OptionType) => {
    onChange?.(value || CHAR.EMPTY);
  };

  return (
    <SelectorContext.Provider value={{ isDisabled, isReadOnly }}>
      <Select
        closeMenuOnSelect={true}
        inputId={id}
        options={mergedOptions}
        menuPosition={menuPosition}
        components={animatedComponents}
        ref={ref}
        value={selectedValue}
        onChange={(o) => changeHandler(o as OptionType)}
        isSearchable
        isClearable={false}
        isMulti={false}
        isDisabled={isDisabled}
        menuIsOpen={isReadOnly ? false : undefined}
        styles={{ control: () => ({}) }}
        {...rest}
      />
    </SelectorContext.Provider>
  );
});

export { MultiSelector };
export default Selector;
