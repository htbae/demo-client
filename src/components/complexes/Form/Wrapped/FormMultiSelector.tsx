import { MultiSelector } from '../_components/Selector';
import { MultiSelectorType } from '../_components/Selector/selector-type';
import FormComponentWrapper from './FormComponentWrapper';
import { WrappedFormFamilyMultiType } from './wrapped-form-type';

const FormMultiSelector = (
  props: WrappedFormFamilyMultiType<MultiSelectorType>
) => {
  const { name, defaultValue, onCustomChange, ...rest } = props;
  return (
    <FormComponentWrapper<MultiSelectorType>
      name={name}
      defaultValue={defaultValue}
      render={({ field }) => (
        <MultiSelector
          {...field}
          onChange={(data) =>
            (onCustomChange ?? field.onChange)(data, field.onChange)
          }
          {...rest}
        />
      )}
    />
  );
};

export default FormMultiSelector;
