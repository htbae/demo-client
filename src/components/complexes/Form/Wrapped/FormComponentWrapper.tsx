import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  Path,
  PathValue,
  UseFormStateReturn,
} from 'react-hook-form';
import useFormContext from '../_hooks/useFormContext';
import {
  FormFamilyCommonType,
  FormFamilyMultiType,
} from '../_components/form-family-type';

type RenderType = <T>({
  field,
  fieldState,
  formState,
}: {
  field: ControllerRenderProps<T & FieldValues, Path<T & FieldValues>>;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<FieldValues>;
}) => React.ReactElement;

interface FormComponentWrapperType<T extends FieldValues> {
  name: Path<T & FieldValues>;
  defaultValue?: PathValue<T & FieldValues, Path<T & FieldValues>>;
  render: RenderType;
}

const FormComponentWrapper = <
  T extends FormFamilyCommonType | FormFamilyMultiType,
>(
  props: FormComponentWrapperType<T>
) => {
  const { name, defaultValue, render } = props;

  const { source } = useFormContext<T>();

  return (
    <div>
      <Controller
        name={name}
        control={source.control}
        defaultValue={defaultValue}
        render={render}
      />
    </div>
  );
};

export default FormComponentWrapper;
