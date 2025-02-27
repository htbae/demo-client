import { FieldValues } from 'react-hook-form';
import { FormContext } from './_contexts/form-context';
import useFormContext from './_hooks/useFormContext';
import { FormType } from './form-type';

const Form = <T extends FieldValues>(props: FormType<T>) => {
  // Extract props
  const { id, source } = props;

  return (
    <FormContext.Provider value={{ id, source }}>
      <FormRenderer {...props} />
    </FormContext.Provider>
  );
};

const FormRenderer = <T extends FieldValues>(props: FormType<T>) => {
  // Extract props
  const { onSubmit, children, ...rest } = props;

  // Extract context
  const { source } = useFormContext<T>();

  return (
    <form onSubmit={source.handleSubmit((d: T) => onSubmit?.(d))} {...rest}>
      {children}
    </form>
  );
};

export default Form;
