import { OptionType } from '@/types/components/component-common-type';
import { FormFamilyCommonType, FormFamilyMultiType } from '../form-family-type';

interface SelectorDefaultType {
  options?: OptionType[];
  hasAll?: boolean;
  menuPosition?: 'fixed' | 'absolute';
}

type SelectorType = SelectorDefaultType & FormFamilyCommonType;

type MultiSelectorType = SelectorDefaultType & FormFamilyMultiType;

export type { SelectorType, MultiSelectorType };
