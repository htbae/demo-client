import React, { useCallback, useMemo } from 'react';
import Select, { GroupBase, SelectInstance } from 'react-select';
import makeAnimated from 'react-select/animated';

import { MultiSelectorType } from './selector-type';
import { OptionType } from '@/types/components/component-common-type';
import SelectControl from './_components/SelectControl';
import SelectMenu from './_components/SelectMenu';
import SelectPlaceholder from './_components/SelectPlaceHolder';
import { SelectorContext } from './_context/selector-context';
import SelectContainer from './_components/SelectSingleValue';
import SelectOption from './_components/SelectOption';

const animatedComponents = makeAnimated({
  Control: SelectControl,
  Menu: SelectMenu,
  Placeholder: SelectPlaceholder,
  SelectContainer: SelectContainer,
  Option: SelectOption,
});

const MultiSelector = React.forwardRef<
  SelectInstance<OptionType, false, GroupBase<OptionType>>,
  MultiSelectorType
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

  const optionValues = useMemo(
    () =>
      options
        .filter(({ value }) => typeof value !== 'undefined')
        .map(({ value }) => value!),
    [options]
  );

  const selectedValue = useMemo(() => {
    if (!value || value.length === 0) {
      return [];
    }
    return value
      .filter((v) => typeof v !== 'undefined')
      .map((v) => options.find((o) => o.value === v)!);
  }, [options, value]);

  const changeHandler = useCallback(
    (o: OptionType[]) => {
      const newValues = o.map(({ value }) => value);
      onChange?.(optionValues.filter((v) => newValues.includes(v)));
    },
    [onChange, optionValues]
  );

  return (
    <SelectorContext.Provider value={{ isDisabled, isReadOnly }}>
      <Select
        closeMenuOnSelect={false}
        inputId={id}
        options={options}
        menuPosition={menuPosition}
        components={animatedComponents}
        ref={ref}
        value={selectedValue}
        onChange={(o) => changeHandler(o as OptionType[])}
        isSearchable
        isClearable
        isMulti
        isDisabled={isDisabled}
        menuIsOpen={isReadOnly ? false : undefined}
        styles={{ control: () => ({}) }}
        {...rest}
      />
    </SelectorContext.Provider>
  );
});

export default MultiSelector;
