import Selector from '../_components/Selector';
import { SelectorType } from '../_components/Selector/selector-type';
import FormComponentWrapper from './FormComponentWrapper';
import { WrappedFormFamilyType } from './wrapped-form-type';

const FormSelector = (props: WrappedFormFamilyType<SelectorType>) => {
  const { name, defaultValue, onCustomChange, ...rest } = props;
  return (
    <FormComponentWrapper<SelectorType>
      name={name}
      defaultValue={defaultValue}
      render={({ field }) => (
        <Selector
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

export default FormSelector;
