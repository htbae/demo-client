import Input, { InputType } from '../_components/Input';
import FormComponentWrapper from './FormComponentWrapper';
import { WrappedFormFamilyType } from './wrapped-form-type';

const FormInput = (props: WrappedFormFamilyType<InputType>) => {
  const { name, defaultValue, onCustomChange, ...rest } = props;
  return (
    <FormComponentWrapper<InputType>
      name={name}
      defaultValue={defaultValue}
      render={({ field }) => (
        <Input
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

export default FormInput;
