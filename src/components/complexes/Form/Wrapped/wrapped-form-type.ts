import {
  FormFamilyCommonType,
  FormFamilyMultiType,
} from '../_components/form-family-type';

type WrappedFormFamilyType<T extends FormFamilyCommonType> = Omit<
  T,
  'value' | 'onChange'
> & {
  defaultValue?: string;
  onCustomChange?: (value: string, onChange: (val: string) => void) => void;
};

type WrappedFormFamilyMultiType<T extends FormFamilyMultiType> = Omit<
  T,
  'value' | 'onChange'
> & {
  defaultValue?: string[];
  onCustomChange?: (value: string[], onChange: (val: string[]) => void) => void;
};

export type { WrappedFormFamilyType, WrappedFormFamilyMultiType };
