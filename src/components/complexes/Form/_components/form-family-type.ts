interface FormFamilyCommonType {
  id?: string;
  name: string;
  value?: string;
  isReadOnly?: boolean;
  isDisabled?: boolean;
  onChange?: (data: string, e?: React.ChangeEvent<HTMLInputElement>) => void;
}

interface FormFamilyMultiType {
  id?: string;
  name: string;
  value?: string[];
  isReadOnly?: boolean;
  isDisabled?: boolean;
  onChange?: (data: string[]) => void;
}

export type { FormFamilyCommonType, FormFamilyMultiType };
