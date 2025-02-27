import DatePicker, { DatePickerType } from '../_components/DatePicker';
import FormComponentWrapper from './FormComponentWrapper';
import { WrappedFormFamilyType } from './wrapped-form-type';

const FormDatePicker = (props: WrappedFormFamilyType<DatePickerType>) => {
  const { name, defaultValue, onCustomChange, ...rest } = props;
  return (
    <FormComponentWrapper<DatePickerType>
      name={name}
      defaultValue={defaultValue}
      render={({ field }) => (
        <DatePicker
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

export default FormDatePicker;
